import { useState, useEffect } from 'react'

interface CaptchaConfig {
    difficulty: 'easy' | 'medium' | 'hard'
    length: number
    includeNumbers: boolean
    includeLetters: boolean
    caseSensitive: boolean
}

export function useCaptcha(
    config: CaptchaConfig = {
        difficulty: 'medium',
        length: 5,
        includeNumbers: true,
        includeLetters: true,
        caseSensitive: false
    }
) {
    const [captchaCode, setCaptchaCode] = useState('')
    const [userInput, setUserInput] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [attempts, setAttempts] = useState(0)
    const [isBlocked, setIsBlocked] = useState(false)

    const generateCaptcha = () => {
        let chars = ''

        if (config.includeNumbers) {
            chars += '0123456789'
        }

        if (config.includeLetters) {
            chars += config.caseSensitive
                ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
                : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }

        // Excluir caracteres confusos en dificultad fácil
        if (config.difficulty === 'easy') {
            chars = chars.replace(/[0O1lI]/g, '')
        }

        let result = ''
        for (let i = 0; i < config.length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }

        setCaptchaCode(result)
        setUserInput('')
        setIsValid(false)
    }

    const validateCaptcha = (input: string): boolean => {
        // Solo validar si el input tiene la longitud completa
        if (input.length !== config.length) {
            setIsValid(false)
            return false
        }

        const code = config.caseSensitive ? captchaCode : captchaCode.toUpperCase()
        const userCode = config.caseSensitive ? input : input.toUpperCase()

        const valid = code === userCode
        setIsValid(valid)

        if (!valid && input.length === config.length) {
            setAttempts(prev => {
                const newAttempts = prev + 1
                if (newAttempts >= 3) {
                    setIsBlocked(true)
                    // Bloquear por 2 minutos
                    setTimeout(() => {
                        setIsBlocked(false)
                        setAttempts(0)
                        generateCaptcha()
                    }, 120000)
                }
                return newAttempts
            })

            // Regenerar CAPTCHA después de fallo solo si está completo
            setTimeout(() => {
                if (!isBlocked) {
                    generateCaptcha()
                }
            }, 1500)
        }

        return valid
    }

    const resetCaptcha = () => {
        setAttempts(0)
        setIsBlocked(false)
        generateCaptcha()
    }

    // Generar CAPTCHA inicial
    useEffect(() => {
        generateCaptcha()
    }, [])

    return {
        captchaCode,
        userInput,
        setUserInput,
        isValid,
        attempts,
        isBlocked,
        maxAttempts: 3,
        validateCaptcha,
        generateCaptcha,
        resetCaptcha
    }
}