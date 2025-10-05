"use client"

import type React from "react"
import { useState, useEffect } from "react"
import ContactButton from "./ContactButton"
import contactCTAData from "./contactCTAData.json"
import type { FormData, FormErrors, ContactCTAData } from "@/types/landingPage"

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

    // Validación de email
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

        if (field.validation.minLength && value.length < field.validation.minLength) {
            return field.validation.errorMessage
        }

        if (field.validation.maxLength && value.length > field.validation.maxLength) {
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
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        // Marcar todos los campos como tocados
        const allTouched = Object.keys(formData).reduce((acc, key) => {
            acc[key] = true
            return acc
        }, {} as Record<string, boolean>)
        setTouched(allTouched)
        
        validateForm()
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
                                        className={`w-full px-4 py-3 bg-[var(--color-base-100)] border-2 ${
                                            errors.name ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
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
                                        className={`w-full px-4 py-3 bg-[var(--color-base-100)] border-2 ${
                                            errors.email ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
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
                                    className={`w-full px-4 py-3 bg-[var(--color-base-100)] border-2 ${
                                        errors.subject ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
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
                                    className={`w-full px-4 py-3 bg-[var(--color-base-100)] border-2 ${
                                        errors.message ? "border-[var(--color-error)]" : "border-[var(--color-base-300)]"
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

                            {/* Botones de envío */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <ContactButton
                                    button={data.form.submitButtons.whatsapp}
                                    formData={formData}
                                    type="whatsapp"
                                    disabled={!isValid}
                                />
                                <ContactButton
                                    button={data.form.submitButtons.email}
                                    formData={formData}
                                    type="email"
                                    disabled={!isValid}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactCTA