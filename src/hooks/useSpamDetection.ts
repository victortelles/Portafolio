import { useState, useEffect } from 'react'

interface SpamDetectionConfig {
    maxSubmissionsPerHour: number
    suspiciousActivityThreshold: number
    minTimeBetweenSubmissions: number // en milisegundos
}

interface SpamDetectionState {
    submissions: number[]
    lastSubmission: number
    isSuspicious: boolean
    blockedUntil: number | null
}

export function useSpamDetection(
    config: SpamDetectionConfig = {
        maxSubmissionsPerHour: 5,
        suspiciousActivityThreshold: 10,
        minTimeBetweenSubmissions: 30000 // 30 segundos
    }
) {
    const [isBlocked, setIsBlocked] = useState(false)
    const [isSuspicious, setIsSuspicious] = useState(false)
    const [remainingTime, setRemainingTime] = useState(0)

    const storageKey = 'spamDetection_contact'

    const checkSpamStatus = (): boolean => {
        if (typeof window === 'undefined') return false

        const now = Date.now()
        const stored = localStorage.getItem(storageKey)

        if (!stored) {
            const initialState: SpamDetectionState = {
                submissions: [],
                lastSubmission: 0,
                isSuspicious: false,
                blockedUntil: null
            }
            localStorage.setItem(storageKey, JSON.stringify(initialState))
            return false
        }

        const state: SpamDetectionState = JSON.parse(stored)

        // Verificar si estamos bloqueados
        if (state.blockedUntil && now < state.blockedUntil) {
            setIsBlocked(true)
            setRemainingTime(Math.ceil((state.blockedUntil - now) / 1000))
            return true
        }

        // Si el bloqueo expiró, resetear
        if (state.blockedUntil && now >= state.blockedUntil) {
            const resetState: SpamDetectionState = {
                submissions: [],
                lastSubmission: 0,
                isSuspicious: false,
                blockedUntil: null
            }
            localStorage.setItem(storageKey, JSON.stringify(resetState))
            setIsBlocked(false)
            setIsSuspicious(false)
            return false
        }

        // Limpiar submissions viejas (más de 1 hora)
        const oneHourAgo = now - (60 * 60 * 1000)
        const recentSubmissions = state.submissions.filter(time => time > oneHourAgo)

        // Verificar actividad sospechosa
        const suspicious = recentSubmissions.length >= config.suspiciousActivityThreshold
        setIsSuspicious(suspicious)

        return false
    }

    const canSubmit = (): { allowed: boolean; reason?: string } => {
        if (typeof window === 'undefined') return { allowed: false, reason: 'Client-side only' }

        const now = Date.now()
        const stored = localStorage.getItem(storageKey)

        if (!stored) return { allowed: true }

        const state: SpamDetectionState = JSON.parse(stored)

        // Verificar bloqueo
        if (state.blockedUntil && now < state.blockedUntil) {
            return { allowed: false, reason: 'Bloqueado temporalmente' }
        }

        // Verificar tiempo mínimo entre submissions
        if (state.lastSubmission && (now - state.lastSubmission) < config.minTimeBetweenSubmissions) {
            const remainingSeconds = Math.ceil((config.minTimeBetweenSubmissions - (now - state.lastSubmission)) / 1000)
            return { allowed: false, reason: `Espera ${remainingSeconds} segundos` }
        }

        // Verificar submissions por hora
        const oneHourAgo = now - (60 * 60 * 1000)
        const recentSubmissions = state.submissions.filter(time => time > oneHourAgo)

        if (recentSubmissions.length >= config.maxSubmissionsPerHour) {
            return { allowed: false, reason: 'Límite de envíos por hora alcanzado' }
        }

        return { allowed: true }
    }

    const recordSubmission = (): { success: boolean; blocked: boolean } => {
        if (typeof window === 'undefined') return { success: false, blocked: false }

        const now = Date.now()
        const stored = localStorage.getItem(storageKey)

        const state: SpamDetectionState = stored ? JSON.parse(stored) : {
            submissions: [],
            lastSubmission: 0,
            isSuspicious: false,
            blockedUntil: null
        }

        // Limpiar submissions viejas
        const oneHourAgo = now - (60 * 60 * 1000)
        const recentSubmissions = state.submissions.filter(time => time > oneHourAgo)

        // Agregar nueva submission
        const newSubmissions = [...recentSubmissions, now]

        // Verificar si debemos bloquear
        let blockedUntil = null
        let blocked = false

        if (newSubmissions.length >= config.maxSubmissionsPerHour) {
            // Bloquear por 1 hora
            blockedUntil = now + (60 * 60 * 1000)
            blocked = true
            setIsBlocked(true)
            setRemainingTime(3600) // 1 hora en segundos
        }

        // Verificar actividad sospechosa
        const suspicious = newSubmissions.length >= config.suspiciousActivityThreshold
        setIsSuspicious(suspicious)

        // Guardar estado
        const newState: SpamDetectionState = {
            submissions: newSubmissions,
            lastSubmission: now,
            isSuspicious: suspicious,
            blockedUntil
        }
        localStorage.setItem(storageKey, JSON.stringify(newState))

        return { success: true, blocked }
    }

    const resetSpamDetection = () => {
        if (typeof window === 'undefined') return

        localStorage.removeItem(storageKey)
        setIsBlocked(false)
        setIsSuspicious(false)
        setRemainingTime(0)
    }

    // Countdown timer
    useEffect(() => {
        if (!isBlocked || remainingTime <= 0) return

        const timer = setInterval(() => {
            setRemainingTime(prev => {
                if (prev <= 1) {
                    setIsBlocked(false)
                    checkSpamStatus()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [isBlocked, remainingTime])

    // Verificar al montar
    useEffect(() => {
        checkSpamStatus()
    }, [])

    return {
        isBlocked,
        isSuspicious,
        remainingTime,
        canSubmit,
        recordSubmission,
        resetSpamDetection,
        checkSpamStatus
    }
}