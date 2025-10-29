import React, { useRef, useEffect } from 'react'
import { RefreshCw } from 'lucide-react'

interface CaptchaCanvasProps {
    code: string
    onRefresh: () => void
    width?: number
    height?: number
    difficulty?: 'easy' | 'medium' | 'hard'
}

const CaptchaCanvas: React.FC<CaptchaCanvasProps> = ({
    code,
    onRefresh,
    width = 200,
    height = 80,
    difficulty = 'medium'
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const drawCaptcha = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Limpiar canvas
        ctx.clearRect(0, 0, width, height)

        // Fondo con gradiente usando colores del tema
        const gradient = ctx.createLinearGradient(0, 0, width, height)
        gradient.addColorStop(0, 'oklch(20% 0.042 265.755)') // --color-base-200
        gradient.addColorStop(1, 'oklch(27% 0.041 260.031)') // --color-base-300
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)

        // Configuración según dificultad
        const distortionLevel = difficulty === 'easy' ? 0.1 : difficulty === 'medium' ? 0.3 : 0.5
        const noiseLevel = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 8 : 15
        const lineCount = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 3 : 6

        // Líneas de ruido con colores del tema
        for (let i = 0; i < lineCount; i++) {
            ctx.strokeStyle = `oklch(${40 + Math.random() * 20}% 0.1 ${200 + Math.random() * 100})`
            ctx.lineWidth = Math.random() * 1.5 + 0.5
            ctx.beginPath()
            ctx.moveTo(Math.random() * width, Math.random() * height)
            ctx.lineTo(Math.random() * width, Math.random() * height)
            ctx.stroke()
        }

        // Puntos de ruido con colores del tema
        for (let i = 0; i < noiseLevel; i++) {
            ctx.fillStyle = `oklch(${50 + Math.random() * 30}% 0.05 ${180 + Math.random() * 120})`
            ctx.fillRect(Math.random() * width, Math.random() * height, 1.5, 1.5)
        }

        // Dibujar texto con fuente monospace para mayor claridad
        const fontSize = Math.floor(height * 0.65)
        ctx.font = `bold ${fontSize}px 'Share Tech Mono', 'Courier New', monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        // Dibujar cada carácter con efectos
        const charWidth = width / code.length
        for (let i = 0; i < code.length; i++) {
            const char = code[i]
            const x = charWidth * i + charWidth / 2
            const y = height / 2

            ctx.save()

            // Aplicar transformaciones según dificultad
            if (difficulty !== 'easy') {
                // Rotación más suave
                const rotation = (Math.random() - 0.5) * distortionLevel * 0.5
                ctx.translate(x, y)
                ctx.rotate(rotation)
                ctx.translate(-x, -y)

                // Escala
                const scaleX = 1 + (Math.random() - 0.5) * distortionLevel
                const scaleY = 1 + (Math.random() - 0.5) * distortionLevel
                ctx.scale(scaleX, scaleY)
            }

            // Color del texto usando colores del tema
            const colors = [
                'oklch(96% 0.007 247.896)', // --color-base-content
                'oklch(62% 0.214 259.815)', // --color-primary
                'oklch(70% 0.213 47.604)',  // --color-secondary
                'oklch(78% 0.154 211.53)'   // --color-accent
            ]
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]

            // Dibujar carácter
            ctx.fillText(char, x, y)

            ctx.restore()
        }

        // Efectos adicionales para dificultad hard
        if (difficulty === 'hard') {
            // Líneas onduladas más sutiles
            ctx.strokeStyle = 'oklch(40% 0.05 260)'
            ctx.lineWidth = 1.5
            ctx.beginPath()
            for (let x = 0; x < width; x += 3) {
                const y = height / 2 + Math.sin(x * 0.015) * 6
                if (x === 0) ctx.moveTo(x, y)
                else ctx.lineTo(x, y)
            }
            ctx.stroke()
        }
    }

    useEffect(() => {
        drawCaptcha()
    }, [code, difficulty])

    return (
        <div className="flex items-center gap-3">
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className="border-2 border-[var(--color-base-300)] rounded-[var(--radius-field)] shadow-sm"
                style={{ maxWidth: '100%', height: 'auto' }}
            />
            <button
                type="button"
                onClick={onRefresh}
                className="cursor-pointer p-2 bg-[var(--color-base-100)] hover:bg-[var(--color-base-200)] rounded-[var(--radius-field)] border-2 border-[var(--color-base-300)] transition-colors duration-200 text-[var(--color-base-content)]"
                title="Refrescar CAPTCHA"
            >
                <RefreshCw size={16} />
            </button>
        </div>
    )
}

export default CaptchaCanvas