import { NextRequest, NextResponse } from 'next/server'

// Validación básica de datos
function validateContactData(data: any) {
    const errors: string[] = []

    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
        errors.push('Nombre debe tener al menos 2 caracteres')
    }

    if (!data.email || typeof data.email !== 'string') {
        errors.push('Email es requerido')
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(data.email)) {
            errors.push('Email no es válido')
        }
    }

    if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length < 3) {
        errors.push('Asunto debe tener al menos 3 caracteres')
    }

    if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
        errors.push('Mensaje debe tener al menos 10 caracteres')
    }

    // Detectar contenido spam
    const spamKeywords = ['click here', 'buy now', 'free money', 'viagra', 'casino', 'lottery']
    const content = `${data.subject} ${data.message}`.toLowerCase()

    if (spamKeywords.some(keyword => content.includes(keyword))) {
        errors.push('Contenido detectado como spam')
    }

    return errors
}

// Sanitizar datos
function sanitizeInput(input: string): string {
    return input
        .trim()
        .replace(/<[^>]*>/g, '') // Remover tags HTML
        .replace(/[<>]/g, '') // Remover < y >
        .substring(0, 1000) // Limitar longitud
}

export async function POST(request: NextRequest) {
    try {
        // Verificar Content-Type
        const contentType = request.headers.get('content-type')
        if (!contentType?.includes('application/json')) {
            return NextResponse.json(
                { error: 'Content-Type debe ser application/json' },
                { status: 400 }
            )
        }

        // Verificar tamaño del payload
        const contentLength = request.headers.get('content-length')
        if (contentLength && parseInt(contentLength) > 10000) { // 10KB max
            return NextResponse.json(
                { error: 'Payload demasiado grande' },
                { status: 413 }
            )
        }

        const data = await request.json()

        // Validar datos
        const validationErrors = validateContactData(data)
        if (validationErrors.length > 0) {
            return NextResponse.json(
                { error: 'Datos inválidos', details: validationErrors },
                { status: 400 }
            )
        }

        // Sanitizar datos
        const sanitizedData = {
            name: sanitizeInput(data.name),
            email: sanitizeInput(data.email),
            subject: sanitizeInput(data.subject),
            message: sanitizeInput(data.message),
            timestamp: new Date().toISOString(),
            ip: request.headers.get('x-forwarded-for') || 'unknown'
        }

        // Aquí irían las integraciones reales:
        // - Enviar email
        // - Guardar en base de datos
        // - Enviar a servicio de terceros

        console.log('Formulario recibido:', sanitizedData)

        // Simular procesamiento
        await new Promise(resolve => setTimeout(resolve, 1000))

        return NextResponse.json(
            {
                success: true,
                message: 'Formulario enviado exitosamente',
                id: `msg_${Date.now()}`
            },
            { status: 200 }
        )

    } catch (error) {
        console.error('Error procesando formulario:', error)

        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        )
    }
}

// Manejar otros métodos HTTP
export async function GET() {
    return NextResponse.json(
        { error: 'Método no permitido' },
        { status: 405 }
    )
}

export async function PUT() {
    return NextResponse.json(
        { error: 'Método no permitido' },
        { status: 405 }
    )
}

export async function DELETE() {
    return NextResponse.json(
        { error: 'Método no permitido' },
        { status: 405 }
    )
}