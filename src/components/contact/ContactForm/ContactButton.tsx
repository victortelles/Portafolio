"use client"

import type React from "react"
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"
import type { ContactButtonProps } from "@/types/contact"

const ContactButton: React.FC<ContactButtonProps> = ({ button, formData, type, disabled = false }) => {
    const getIcon = () => {
        switch (button.icon) {
            case "FaWhatsapp":
                return <FaWhatsapp size={18} />
            case "FaEnvelope":
                return <FaEnvelope size={18} />
            default:
                return <FaEnvelope size={18} />
        }
    }

    const handleClick = () => {
        if (disabled) return

        const { name, email, subject, message } = formData

        if (type === "whatsapp") {
            // Formatear mensaje para WhatsApp
            const whatsappMessage = `Hola! Mi nombre es ${name}.%0A%0AAsunto: ${subject}%0A%0AMensaje: ${message}%0A%0AMi email de contacto: ${email}`
            const whatsappUrl = `https://wa.me/${button.phoneNumber?.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`
            window.open(whatsappUrl, "_blank")
        } else if (type === "email") {
            // Formatear mensaje para Email
            const emailSubject = encodeURIComponent(subject)
            const emailBody = encodeURIComponent(
                `Hola!\n\nMi nombre es ${name}.\n\nMensaje:\n${message}\n\nSaludos,\n${name}\n${email}`
            )
            const emailUrl = `mailto:${button.emailAddress}?subject=${emailSubject}&body=${emailBody}`
            window.location.href = emailUrl
        }
    }

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`w-full 
                sm:w-auto 
                flex items-center 
                justify-center 
                gap-2 px-4 py-2 
                ${button.backgroundColor} ${button.hoverColor} 
                text-white 
                font-mono 
                text-sm 
                rounded-[var(--radius-field)] 
                transition-all 
                duration-300 hover:shadow-lg 
                hover:scale-105 
                cursor-pointer 
                disabled:opacity-50 
                disabled:cursor-not-allowed 
                disabled:hover:scale-100 
                disabled:hover:shadow-none`
            }
        >
            {getIcon()}
            <span>{button.text}</span>
        </button>
    )
}

export default ContactButton