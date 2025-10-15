"use client"

import React, { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    // Mostrar/ocultar el botón basado en el scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    // Función para hacer scroll al top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-[var(--color-primary)] text-[var(--color-primary-content)] rounded-full shadow-lg hover:bg-[var(--color-primary)]/90 hover:shadow-xl transition-all duration-300 animate-bounce-in cursor-pointer"
                    aria-label="Volver al inicio"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </>
    )
}

export default ScrollToTopButton