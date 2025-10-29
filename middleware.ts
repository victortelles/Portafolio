import { NextRequest, NextResponse } from 'next/server'

// Mapa para trackear IPs
const ipRequestCounts = new Map<string, { count: number; firstRequest: number; blockedUntil?: number }>()

// Configuración
const RATE_LIMIT = {
    MAX_REQUESTS: 5, // máximo 5 requests
    WINDOW_MS: 60000, // en 1 minuto
    BLOCK_DURATION_MS: 300000, // bloquear por 5 minutos
}

function getClientIP(request: NextRequest): string {
    // Intenta obtener la IP real del cliente
    const forwarded = request.headers.get('x-forwarded-for')
    const realIP = request.headers.get('x-real-ip')
    const cfConnectingIP = request.headers.get('cf-connecting-ip')

    if (forwarded) {
        return forwarded.split(',')[0].trim()
    }

    if (realIP) {
        return realIP
    }

    if (cfConnectingIP) {
        return cfConnectingIP
    }

    // Como fallback, usar un valor por defecto
    return 'unknown'
}

function cleanupOldEntries() {
    const now = Date.now()
    for (const [ip, data] of ipRequestCounts.entries()) {
        // Remover entradas viejas (más de 1 hora)
        if (now - data.firstRequest > 3600000) {
            ipRequestCounts.delete(ip)
        }
    }
}

export function middleware(request: NextRequest) {
    // Solo aplicar rate limiting a rutas específicas
    const { pathname } = request.nextUrl

    // Lista de rutas protegidas
    const protectedRoutes = [
        '/api/contact',
        '/contact',
        '/api/form-submission'
    ]

    const shouldApplyRateLimit = protectedRoutes.some(route => pathname.startsWith(route))

    if (!shouldApplyRateLimit) {
        return NextResponse.next()
    }

    const ip = getClientIP(request)
    const now = Date.now()

    // Limpiar entradas antiguas periódicamente
    if (Math.random() < 0.1) { // 10% de probabilidad
        cleanupOldEntries()
    }

    const requestData = ipRequestCounts.get(ip)

    if (!requestData) {
        // Primera request de esta IP
        ipRequestCounts.set(ip, {
            count: 1,
            firstRequest: now
        })
        return NextResponse.next()
    }

    // Verificar si está bloqueado
    if (requestData.blockedUntil && now < requestData.blockedUntil) {
        const remainingTime = Math.ceil((requestData.blockedUntil - now) / 1000)

        return new NextResponse(
            JSON.stringify({
                error: 'Too Many Requests',
                message: `IP bloqueada. Intenta nuevamente en ${remainingTime} segundos.`,
                retryAfter: remainingTime
            }),
            {
                status: 429,
                headers: {
                    'Content-Type': 'application/json',
                    'Retry-After': String(remainingTime),
                    'X-RateLimit-Limit': String(RATE_LIMIT.MAX_REQUESTS),
                    'X-RateLimit-Remaining': '0',
                    'X-RateLimit-Reset': String(requestData.blockedUntil)
                }
            }
        )
    }

    // Verificar ventana de tiempo
    const timeElapsed = now - requestData.firstRequest

    if (timeElapsed > RATE_LIMIT.WINDOW_MS) {
        // Resetear contador si pasó la ventana de tiempo
        ipRequestCounts.set(ip, {
            count: 1,
            firstRequest: now
        })
        return NextResponse.next()
    }

    // Incrementar contador
    requestData.count++

    if (requestData.count > RATE_LIMIT.MAX_REQUESTS) {
        // Bloquear IP
        requestData.blockedUntil = now + RATE_LIMIT.BLOCK_DURATION_MS

        const remainingTime = Math.ceil(RATE_LIMIT.BLOCK_DURATION_MS / 1000)

        return new NextResponse(
            JSON.stringify({
                error: 'Too Many Requests',
                message: `Demasiadas peticiones. IP bloqueada por ${remainingTime} segundos.`,
                retryAfter: remainingTime
            }),
            {
                status: 429,
                headers: {
                    'Content-Type': 'application/json',
                    'Retry-After': String(remainingTime),
                    'X-RateLimit-Limit': String(RATE_LIMIT.MAX_REQUESTS),
                    'X-RateLimit-Remaining': '0',
                    'X-RateLimit-Reset': String(requestData.blockedUntil)
                }
            }
        )
    }

    // Agregar headers informativos
    const response = NextResponse.next()
    response.headers.set('X-RateLimit-Limit', String(RATE_LIMIT.MAX_REQUESTS))
    response.headers.set('X-RateLimit-Remaining', String(RATE_LIMIT.MAX_REQUESTS - requestData.count))
    response.headers.set('X-RateLimit-Reset', String(requestData.firstRequest + RATE_LIMIT.WINDOW_MS))

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (public folder)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}