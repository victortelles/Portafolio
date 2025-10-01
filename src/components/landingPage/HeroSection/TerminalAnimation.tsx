"use client"

import React, { useState, useEffect } from "react"
import { FaCircle } from "react-icons/fa"
import type { TerminalData } from "@/types/landingPage"

interface TerminalAnimationProps {
    data: TerminalData
}

const TerminalAnimation: React.FC<TerminalAnimationProps> = ({ data }) => {
    const [currentMethodIndex, setCurrentMethodIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        const currentMethod = data.methods[currentMethodIndex]

        if (!isDeleting && !isPaused) {
            // Escribiendo
            if (currentText.length < currentMethod.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentMethod.slice(0, currentText.length + 1))
                }, data.typingSpeed)
                return () => clearTimeout(timeout)
            } else {
                // Pausa antes de borrar
                const timeout = setTimeout(() => {
                    setIsPaused(true)
                }, data.pauseTime)
                return () => clearTimeout(timeout)
            }
        }

        if (isPaused) {
            // Termina la pausa y comienza a borrar
            const timeout = setTimeout(() => {
                setIsPaused(false)
                setIsDeleting(true)
            }, data.pauseTime)
            return () => clearTimeout(timeout)
        }

        if (isDeleting) {
            // Borrando
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, -1))
                }, data.deleteSpeed)
                return () => clearTimeout(timeout)
            } else {
                // Cambiar al siguiente método
                setIsDeleting(false)
                setCurrentMethodIndex((prev) => (prev + 1) % data.methods.length)
            }
        }
    }, [currentText, isDeleting, isPaused, currentMethodIndex, data])

    return (
        <div className="max-w-3xl mx-auto mb-8">
            {/* Terminal Window */}
            <div className="bg-[var(--color-base-300)] rounded-lg border border-[var(--color-neutral)] overflow-hidden shadow-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-base-200)] border-b border-[var(--color-neutral)]">
                    <div className="flex items-center gap-2">
                        <FaCircle className="text-[var(--color-error)] text-xs" />
                        <FaCircle className="text-[var(--color-warning)] text-xs" />
                        <FaCircle className="text-[var(--color-success)] text-xs" />
                    </div>
                    <div className="font-mono text-sm text-[var(--color-base-content)]">
                        {data.title}
                    </div>
                    <div className="w-16"></div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-sm md:text-base space-y-2">
                    {/* Developer Object Declaration */}
                    <div className="text-[var(--color-base-content)]">
                        <span className="text-[var(--color-info)]">const</span>{" "}
                        <span className="text-[var(--color-accent)]">developer</span>{" "}
                        <span className="text-[var(--color-base-content)]">=</span>{" "}
                        <span className="text-[var(--color-info)]">new</span>{" "}
                        <span className="text-[var(--color-secondary)]">SoftwareEngineer</span>
                        <span className="text-[var(--color-base-content)]">(</span>
                        <span className="text-[var(--color-success)]">"{data.developerName}"</span>
                        <span className="text-[var(--color-base-content)]">);</span>
                    </div>

                    {/* Animated Method Line */}
                    <div className="flex items-center min-h-[1.5rem]">
                        <span className="text-[var(--color-accent)]">developer.</span>
                        <span className="text-[var(--color-primary)]">{currentText}</span>
                        <span className="inline-block w-2 h-5 bg-[var(--color-primary)] ml-1 animate-pulse"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TerminalAnimation