import { useState, useEffect } from 'react'

interface RateLimitConfig {
    maxAttempts: number
    timeWindowMs: number
    blockDurationMs: number
}

interface RateLimitState {
    attempts: number
    lastAttempt: number
    blockedUntil: number | null
}

export function useRateLimit(
    key: string,
    config: RateLimitConfig = {
        maxAttempts: 3,
        timeWindowMs: 60000, // 1 minuto
        blockDurationMs: 300000 // 5 minutos
    }
) {
    const [isBlocked, setIsBlocked] = useState(false)
    const [remainingTime, setRemainingTime] = useState(0)
    const [attemptsLeft, setAttemptsLeft] = useState(config.maxAttempts)

    const storageKey = `rateLimit_${key}`

    const checkRateLimit = (): boolean => {
        if (typeof window === 'undefined') return false

        const now = Date.now()
        const stored = localStorage.getItem(storageKey)

        if (!stored) {
            const initialState: RateLimitState = {
                attempts: 0,
                lastAttempt: 0,
                blockedUntil: null
            }
            localStorage.setItem(storageKey, JSON.stringify(initialState))
            setAttemptsLeft(config.maxAttempts)
            return false
        }

        const state: RateLimitState = JSON.parse(stored)

        // Verificar si estamos bloqueados
        if (state.blockedUntil && now < state.blockedUntil) {
            setIsBlocked(true)
            setRemainingTime(Math.ceil((state.blockedUntil - now) / 1000))
            return true
        }

        // Si el bloqueo expiró, resetear
        if (state.blockedUntil && now >= state.blockedUntil) {
            const resetState: RateLimitState = {
                attempts: 0,
                lastAttempt: 0,
                blockedUntil: null
            }
            localStorage.setItem(storageKey, JSON.stringify(resetState))
            setIsBlocked(false)
            setAttemptsLeft(config.maxAttempts)
            return false
        }

        // Verificar si estamos dentro de la ventana de tiempo
        const timeWindow = now - state.lastAttempt
        if (timeWindow > config.timeWindowMs) {
            // Resetear contador si pasó la ventana de tiempo
            const resetState: RateLimitState = {
                attempts: 0,
                lastAttempt: 0,
                blockedUntil: null
            }
            localStorage.setItem(storageKey, JSON.stringify(resetState))
            setAttemptsLeft(config.maxAttempts)
            setIsBlocked(false)
            return false
        }

        // Actualizar intentos restantes
        setAttemptsLeft(Math.max(0, config.maxAttempts - state.attempts))
        setIsBlocked(false)
        return false
    }

    const recordAttempt = (): boolean => {
        if (typeof window === 'undefined') return false

        const now = Date.now()
        const stored = localStorage.getItem(storageKey)

        if (!stored) return false

        const state: RateLimitState = JSON.parse(stored)
        const newAttempts = state.attempts + 1

        // Si excedemos el límite, bloquear
        if (newAttempts >= config.maxAttempts) {
            const blockedState: RateLimitState = {
                attempts: newAttempts,
                lastAttempt: now,
                blockedUntil: now + config.blockDurationMs
            }
            localStorage.setItem(storageKey, JSON.stringify(blockedState))
            setIsBlocked(true)
            setRemainingTime(Math.ceil(config.blockDurationMs / 1000))
            setAttemptsLeft(0)
            return true
        }

        // Actualizar estado
        const newState: RateLimitState = {
            attempts: newAttempts,
            lastAttempt: now,
            blockedUntil: null
        }
        localStorage.setItem(storageKey, JSON.stringify(newState))
        setAttemptsLeft(config.maxAttempts - newAttempts)
        return false
    }

    const resetRateLimit = () => {
        if (typeof window === 'undefined') return

        localStorage.removeItem(storageKey)
        setIsBlocked(false)
        setRemainingTime(0)
        setAttemptsLeft(config.maxAttempts)
    }

    // Countdown timer
    useEffect(() => {
        if (!isBlocked || remainingTime <= 0) return

        const timer = setInterval(() => {
            setRemainingTime(prev => {
                if (prev <= 1) {
                    setIsBlocked(false)
                    checkRateLimit() // Re-verificar estado
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [isBlocked, remainingTime])

    // Verificar al montar
    useEffect(() => {
        checkRateLimit()
    }, [])

    return {
        isBlocked,
        remainingTime,
        attemptsLeft,
        recordAttempt,
        resetRateLimit,
        checkRateLimit
    }
}