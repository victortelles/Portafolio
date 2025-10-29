"use client"

import type React from "react"
import { useState, useEffect } from "react"
import ContactButton from "./ContactButton"
import contactCTAData from "./contactCTAData.json"
import CaptchaCanvas from '@/components/common/CaptchaCanvas/CaptchaCanvas'
import { useRateLimit } from '@/hooks/useRateLimit'
import { useSpamDetection } from '@/hooks/useSpamDetection'
import { useCaptcha } from '@/hooks/useCaptcha'
import type { FormData, FormErrors, ContactCTAData } from "@/types/landingPage"
import { motion } from "framer-motion"
import { AlertTriangle, Clock, Shield } from 'lucide-react'

const ContactCTA: React.FC = () => {
    const data: ContactCTAData = contactCTAData
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isValid, setIsValid] = useState(false)
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Hooks de seguridad para ContactCTA
    const rateLimit = useRateLimit('contact_cta_form', {
        maxAttempts: 3,
        timeWindowMs: 300000, // 5 minutos
        blockDurationMs: 900000 // 15 minutos
    })

    const spamDetection = useSpamDetection({
        maxSubmissionsPerHour: 3,
        suspiciousActivityThreshold: 5,
        minTimeBetweenSubmissions: 60000 // 1 minuto
    })

    const captcha = useCaptcha({
        difficulty: 'easy', // Más fácil en landing page
        length: 4,
        includeNumbers: true,
        includeLetters: true,
        caseSensitive: false
    })

    // Verificar si el formulario puede ser enviado
    const canSubmitForm = (): { allowed: boolean; reason?: string } => {
        // Verificar rate limiting
        if (rateLimit.isBlocked) {
            return { allowed: false, reason: `Demasiados intentos. Espera ${Math.ceil(rateLimit.remainingTime / 60)} minutos` }
        }

        // Verificar spam detection
        const spamCheck = spamDetection.canSubmit()
        if (!spamCheck.allowed) {
            return spamCheck
        }

        // Verificar CAPTCHA
        if (!captcha.isValid) {
            return { allowed: false, reason: 'Por favor, completa el CAPTCHA correctamente' }
        }

        // Verificar si CAPTCHA está bloqueado
        if (captcha.isBlocked) {
            return { allowed: false, reason: 'CAPTCHA bloqueado por demasiados intentos fallidos' }
        }

        return { allowed: true }
    }
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Validar campo individual
    const validateField = (name: keyof FormData, value: string): string | undefined => {
        const field = data.form.fields[name]

        if (field.required && (!value || value.trim().length === 0)) {
            return data.validation.messages.required
        }

        if ("minLength" in field.validation && typeof field.validation.minLength === "number" && value.length < field.validation.minLength) {
            return field.validation.errorMessage
        }

        if ("maxLength" in field.validation && typeof field.validation.maxLength === "number" && value.length > field.validation.maxLength) {
            return field.validation.errorMessage
        }

        if (name === "email" && value && !isValidEmail(value)) {
            return field.validation.errorMessage
        }

        return undefined
    }

    // Validar todo el formulario
    const validateForm = () => {
        const newErrors: FormErrors = {}

        Object.keys(formData).forEach((key) => {
            const fieldKey = key as keyof FormData
            const error = validateField(fieldKey, formData[fieldKey])
            if (error) {
                newErrors[fieldKey] = error
            }
        })

        setErrors(newErrors)
        const isFormValid = Object.keys(newErrors).length === 0 &&
            Object.values(formData).every(value => value.trim().length > 0)
        setIsValid(isFormValid)

        return isFormValid
    }

    // Manejar cambios en los campos
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        const fieldName = name as keyof FormData

        setFormData(prev => ({ ...prev, [fieldName]: value }))

        // Validar campo cuando el usuario ha interactuado con él
        if (touched[fieldName]) {
            const error = validateField(fieldName, value)
            setErrors(prev => ({ ...prev, [fieldName]: error }))
        }
    }

    // Manejar cuando el usuario sale de un campo
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target
        const fieldName = name as keyof FormData

        setTouched(prev => ({ ...prev, [fieldName]: true }))

        const error = validateField(fieldName, formData[fieldName])
        setErrors(prev => ({ ...prev, [fieldName]: error }))
    }

    // Efecto para validar formulario completo
    useEffect(() => {
        if (Object.keys(touched).length > 0) {
            validateForm()
        }
    }, [formData])

    // Manejar envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Marcar todos los campos como tocados
            const allTouched = Object.keys(formData).reduce((acc, key) => {
                acc[key] = true
                return acc
            }, {} as Record<string, boolean>)
            setTouched(allTouched)

            // Validar formulario
            if (!validateForm()) {
                setIsSubmitting(false)
                return
            }

            // Verificar medidas de seguridad
            const submitCheck = canSubmitForm()
            if (!submitCheck.allowed) {
                alert(submitCheck.reason || 'No se puede enviar el formulario')
                setIsSubmitting(false)
                return
            }

            // Registrar intento (rate limiting y spam detection)
            const rateLimitBlocked = rateLimit.recordAttempt()
            const spamResult = spamDetection.recordSubmission()

            if (rateLimitBlocked || spamResult.blocked) {
                alert('Has excedido el límite de envíos. Intenta más tarde.')
                setIsSubmitting(false)
                return
            }

            // Simular procesamiento
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Aquí iría la lógica real de envío
            alert('Formulario enviado exitosamente!')

            // Resetear formulario
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
            setTouched({})
            captcha.resetCaptcha()

        } catch (error) {
            console.error('Error al enviar formulario:', error)
            alert('Error al enviar el formulario. Intenta nuevamente.')
        } finally {
            setIsSubmitting(false)
        }
    }

    // Manejar cambio en CAPTCHA
    const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        // Solo permitir caracteres alfanuméricos y limitar longitud
        const cleanValue = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, captcha.captchaCode.length)
        captcha.setUserInput(cleanValue)

        // Solo validar cuando el input está completo
        if (cleanValue.length === captcha.captchaCode.length) {
            captcha.validateCaptcha(cleanValue)
        }
    }

    return (
        <section className="relative py-16 sm:py-20 lg:py-24 bg-[var(--color-base-100)] overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[var(--color-primary)] rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-[var(--color-secondary)] rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[var(--color-accent)] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header y Formulario animados */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                                {data.title}
                            </h2>
                            <h3 className="font-mono text-xl sm:text-2xl text-[var(--color-primary)] mb-6">
                                {data.subtitle}
                            </h3>
                            <p className="font-sans text-lg text-[var(--color-neutral-content)] max-w-2xl mx-auto leading-relaxed mb-4">
                                {data.description}
                            </p>
                            <div className="bg-[var(--color-info)]/10 border border-[var(--color-info)]/30 rounded-[var(--radius-field)] p-4 max-w-2xl mx-auto">
                                <p className="font-sans text-sm text-[var(--color-info-content)] leading-relaxed">
                                    {data.responseNote}
                                </p>
                            </div>
                        </div>

                        {/* Formulario */}
                        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-6 sm:p-8 lg:p-10 shadow-lg">

                            {/* Alertas de seguridad */}
                            {(rateLimit.isBlocked || spamDetection.isBlocked || captcha.isBlocked) && (
                                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                                    <div className="flex items-center">
                                        <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
                                        <div>
                                            <h4 className="text-red-800 font-semibold">Formulario Bloqueado</h4>
                                            <div className="text-red-700 text-sm mt-1">
                                                {rateLimit.isBlocked && (
                                                    <p>Demasiados intentos. Tiempo restante: {Math.ceil(rateLimit.remainingTime / 60)} minutos</p>
                                                )}
                                                {spamDetection.isBlocked && (
                                                    <p>Actividad sospechosa detectada. Tiempo restante: {Math.ceil(spamDetection.remainingTime / 60)} minutos</p>
                                                )}
                                                {captcha.isBlocked && (
                                                    <p>CAPTCHA bloqueado por demasiados intentos fallidos</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Información de límites */}
                            {(!rateLimit.isBlocked && !spamDetection.isBlocked && (rateLimit.attemptsLeft < 3 || spamDetection.isSuspicious)) && (
                                <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                                    <div className="flex items-center">
                                        <Clock className="h-5 w-5 text-yellow-400 mr-2" />
                                        <div>
                                            <h4 className="text-yellow-800 font-semibold">Aviso de Seguridad</h4>
                                            <div className="text-yellow-700 text-sm mt-1">
                                                {rateLimit.attemptsLeft < 3 && (
                                                    <p>Intentos restantes: {rateLimit.attemptsLeft}</p>
                                                )}
                                                {spamDetection.isSuspicious && (
                                                    <p>Actividad inusual detectada. Usa el formulario con moderación.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Grid de campos */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Nombre */}
                                    <div className="space-y-2">
                                        <label className="block font-mono text-sm font-medium text-[var(--color-base-content)]">
                                            {data.form.fields.name.label}
                                            {data.form.fields.name.required && <span className="text-[var(--color-error)] ml-1">*</span>}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            placeholder={data.form.fields.name.placeholder}
                                            className={`w-full px-4 py-3 bg-[var(--color-base-100)] border-2 ${errors.name ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
                                                } focus:border-[var(--color-primary)] rounded-[var(--radius-field)] font-sans text-[var(--color-base-content)] placeholder-[var(--color-neutral-content)]/50 transition-colors duration-300 focus:outline-none`}
                                        />
                                        {errors.name && (
                                            <p className="text-[var(--color-error)] text-sm font-mono">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="block font-mono text-sm font-medium text-[var(--color-base-content)]">
                                            {data.form.fields.email.label}
                                            {data.form.fields.email.required && <span className="text-[var(--color-error)] ml-1">*</span>}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            placeholder={data.form.fields.email.placeholder}
                                            className={`w-full px-4 py-3 bg-[var(--color-base-100)] border-2 ${errors.email ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
                                                } focus:border-[var(--color-primary)] rounded-[var(--radius-field)] font-sans text-[var(--color-base-content)] placeholder-[var(--color-neutral-content)]/50 transition-colors duration-300 focus:outline-none`}
                                        />
                                        {errors.email && (
                                            <p className="text-[var(--color-error)] text-sm font-mono">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Asunto */}
                                <div className="space-y-2">
                                    <label className="block font-mono text-sm font-medium text-[var(--color-base-content)]">
                                        {data.form.fields.subject.label}
                                        {data.form.fields.subject.required && <span className="text-[var(--color-error)] ml-1">*</span>}
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder={data.form.fields.subject.placeholder}
                                        className={`w-full px-4 py-3 bg-[var(--color-base-100)] border-2 ${errors.subject ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
                                            } focus:border-[var(--color-primary)] rounded-[var(--radius-field)] font-sans text-[var(--color-base-content)] placeholder-[var(--color-neutral-content)]/50 transition-colors duration-300 focus:outline-none`}
                                    />
                                    {errors.subject && (
                                        <p className="text-[var(--color-error)] text-sm font-mono">{errors.subject}</p>
                                    )}
                                </div>

                                {/* Mensaje */}
                                <div className="space-y-2">
                                    <label className="block font-mono text-sm font-medium text-[var(--color-base-content)]">
                                        {data.form.fields.message.label}
                                        {data.form.fields.message.required && <span className="text-[var(--color-error)] ml-1">*</span>}
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder={data.form.fields.message.placeholder}
                                        rows={6}
                                        className={`w-full px-4 py-3 bg-[var(--color-base-100)] border-2 ${errors.message ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
                                            } focus:border-[var(--color-primary)] rounded-[var(--radius-field)] font-sans text-[var(--color-base-content)] placeholder-[var(--color-neutral-content)]/50 transition-colors duration-300 focus:outline-none resize-vertical min-h-[120px]`}
                                    />
                                    {errors.message && (
                                        <p className="text-[var(--color-error)] text-sm font-mono">{errors.message}</p>
                                    )}
                                </div>

                                {/* Mensaje de estado */}
                                {Object.keys(touched).length > 0 && (
                                    <div className="text-center">
                                        {isValid ? (
                                            <p className="text-[var(--color-success)] font-mono text-sm">
                                                {data.validation.messages.success}
                                            </p>
                                        ) : (
                                            <p className="text-[var(--color-error)] font-mono text-sm">
                                                {data.validation.messages.error}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {/* CAPTCHA simplificado para landing page */}
                                <div className="space-y-4">
                                    <div className="border-t border-[var(--color-base-300)] pt-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Shield className="h-4 w-4 text-[var(--color-primary)]" />
                                            <label className="block font-mono text-sm font-medium text-[var(--color-base-content)]">
                                                Verificación de Seguridad
                                                <span className="text-[var(--color-error)] ml-1">*</span>
                                            </label>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                                            {/* CAPTCHA más pequeño para landing */}
                                            <div className="flex-shrink-0">
                                                <CaptchaCanvas
                                                    code={captcha.captchaCode}
                                                    onRefresh={captcha.generateCaptcha}
                                                    difficulty="easy"
                                                    width={180}
                                                    height={60}
                                                />
                                            </div>

                                            {/* Input más compacto */}
                                            <div className="flex-1 max-w-xs space-y-2">
                                                <input
                                                    type="text"
                                                    value={captcha.userInput}
                                                    onChange={handleCaptchaChange}
                                                    placeholder={`${captcha.captchaCode.length} caracteres`}
                                                    maxLength={captcha.captchaCode.length}
                                                    disabled={captcha.isBlocked}
                                                    className={`w-full px-3 py-2 bg-[var(--color-base-100)] border-2 ${captcha.isBlocked
                                                            ? "border-[var(--color-error)] bg-[var(--color-error)]/10"
                                                            : captcha.isValid
                                                                ? "border-[var(--color-success)]"
                                                                : captcha.userInput.length === captcha.captchaCode.length && !captcha.isValid
                                                                    ? "border-[var(--color-error)]"
                                                                    : "border-[var(--color-base-300)]"
                                                        } focus:border-[var(--color-primary)] rounded-[var(--radius-field)] font-mono text-center text-[var(--color-base-content)] placeholder-[var(--color-neutral-content)]/50 transition-colors duration-300 focus:outline-none tracking-wider uppercase`}
                                                />

                                                <div className="text-center text-xs text-[var(--color-neutral-content)]">
                                                    {captcha.isBlocked ? (
                                                        <span className="text-[var(--color-error)]">⚠ Bloqueado</span>
                                                    ) : captcha.isValid ? (
                                                        <span className="text-[var(--color-success)]">✓ Verificado</span>
                                                    ) : captcha.userInput.length === captcha.captchaCode.length && !captcha.isValid ? (
                                                        <span className="text-[var(--color-error)]">✗ Incorrecto</span>
                                                    ) : (
                                                        <span>{captcha.userInput.length}/{captcha.captchaCode.length}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Botones de envío */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                    <ContactButton
                                        button={data.form.submitButtons.whatsapp}
                                        formData={formData}
                                        type="whatsapp"
                                        disabled={!isValid || !captcha.isValid || isSubmitting || rateLimit.isBlocked || spamDetection.isBlocked}
                                    />
                                    <ContactButton
                                        button={data.form.submitButtons.email}
                                        formData={formData}
                                        type="email"
                                        disabled={!isValid || !captcha.isValid || isSubmitting || rateLimit.isBlocked || spamDetection.isBlocked}
                                    />
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactCTA