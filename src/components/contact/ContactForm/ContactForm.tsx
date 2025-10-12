"use client"

import React, { useState, useCallback } from 'react'
import ContactButton from "./ContactButton"
import formData from "./formData.json"
import type { ContactFormState, ContactFormErrors } from '@/types/contact'

const ContactForm: React.FC = () => {
    const data = formData
    const [formState, setFormState] = useState<ContactFormState>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [errors, setErrors] = useState<ContactFormErrors>({})
    const [isValid, setIsValid] = useState(false)
    const [touched, setTouched] = useState<Record<string, boolean>>({})

    // Validación de email
    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Validar campo individual
    const validateField = (name: keyof ContactFormState, value: string): string | undefined => {
        const field = data.form.fields[name as keyof typeof data.form.fields]

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
    const validateForm = useCallback(() => {
        const newErrors: ContactFormErrors = {}

        Object.keys(formState).forEach((key) => {
            const fieldKey = key as keyof ContactFormState
            const error = validateField(fieldKey, formState[fieldKey])
            if (error) {
                newErrors[fieldKey] = error
            }
        })

        setErrors(newErrors)
        const isFormValid = Object.keys(newErrors).length === 0 &&
            Object.values(formState).every(value => value.trim().length > 0)
        setIsValid(isFormValid)

        return isFormValid
    }, [formState])

    // Manejar cambios en los campos
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        const fieldName = name as keyof ContactFormState

        setFormState(prev => ({ ...prev, [fieldName]: value }))

        // Solo validar el campo específico si ya ha sido tocado
        if (touched[fieldName]) {
            const error = validateField(fieldName, value)
            setErrors(prev => ({ ...prev, [fieldName]: error }))
        }
    }, [touched])

    // Manejar cuando el usuario sale de un campo
    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target
        const fieldName = name as keyof ContactFormState

        setTouched(prev => ({ ...prev, [fieldName]: true }))

        const error = validateField(fieldName, formState[fieldName])
        setErrors(prev => ({ ...prev, [fieldName]: error }))

        // Validar todo el formulario para actualizar estado
        validateForm()
    }, [formState, validateForm])

    // Manejar envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Marcar todos los campos como tocados
        const allTouched = Object.keys(formState).reduce((acc, key) => {
            acc[key] = true
            return acc
        }, {} as Record<string, boolean>)
        setTouched(allTouched)

        validateForm()
    }

    return (
        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-6 shadow-lg animate-fade-in">
            <div className="text-center mb-6">
                <h3 className="font-mono text-xl font-semibold text-[var(--color-base-content)] mb-2">
                    {data.title}
                </h3>
                <p className="font-sans text-sm text-[var(--color-neutral-content)]">
                    {data.description}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Grid de campos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Nombre */}
                    <div className="space-y-2">
                        <label className="block font-mono text-sm font-medium text-[var(--color-base-content)]">
                            {data.form.fields.name.label}
                            {data.form.fields.name.required && <span className="text-[var(--color-error)] ml-1">*</span>}
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder={data.form.fields.name.placeholder}
                            className={`w-full px-3 py-2 bg-[var(--color-base-100)] border-2 ${errors.name ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
                                } focus:border-[var(--color-primary)] rounded-[var(--radius-field)] font-sans text-sm text-[var(--color-base-content)] placeholder-[var(--color-neutral-content)]/50 transition-colors duration-300 focus:outline-none`}
                        />
                        {errors.name && (
                            <p className="text-[var(--color-error)] text-xs font-mono">{errors.name}</p>
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
                            value={formState.email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder={data.form.fields.email.placeholder}
                            className={`w-full px-3 py-2 bg-[var(--color-base-100)] border-2 ${errors.email ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
                                } focus:border-[var(--color-primary)] rounded-[var(--radius-field)] font-sans text-sm text-[var(--color-base-content)] placeholder-[var(--color-neutral-content)]/50 transition-colors duration-300 focus:outline-none`}
                        />
                        {errors.email && (
                            <p className="text-[var(--color-error)] text-xs font-mono">{errors.email}</p>
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
                        value={formState.subject}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder={data.form.fields.subject.placeholder}
                        className={`w-full px-3 py-2 bg-[var(--color-base-100)] border-2 ${errors.subject ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
                            } focus:border-[var(--color-primary)] rounded-[var(--radius-field)] font-sans text-sm text-[var(--color-base-content)] placeholder-[var(--color-neutral-content)]/50 transition-colors duration-300 focus:outline-none`}
                    />
                    {errors.subject && (
                        <p className="text-[var(--color-error)] text-xs font-mono">{errors.subject}</p>
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
                        value={formState.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder={data.form.fields.message.placeholder}
                        rows={4}
                        className={`w-full px-3 py-2 bg-[var(--color-base-100)] border-2 ${errors.message ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
                            } focus:border-[var(--color-primary)] rounded-[var(--radius-field)] font-sans text-sm text-[var(--color-base-content)] placeholder-[var(--color-neutral-content)]/50 transition-colors duration-300 focus:outline-none resize-vertical min-h-[100px]`}
                    />
                    {errors.message && (
                        <p className="text-[var(--color-error)] text-xs font-mono">{errors.message}</p>
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

                {/* Botones de envío */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                    <ContactButton
                        button={data.form.submitButtons.whatsapp}
                        formData={formState}
                        type="whatsapp"
                        disabled={!isValid}
                    />
                    <ContactButton
                        button={data.form.submitButtons.email}
                        formData={formState}
                        type="email"
                        disabled={!isValid}
                    />
                </div>
            </form>
        </div>
    )
}

export default ContactForm
