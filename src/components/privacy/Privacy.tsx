"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Shield, Lock, FileText, Eye, Code, Terminal, Cpu, Braces } from "lucide-react"
import content from "./privacyData.json"

const Privacy: React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const spotlightRef = useRef<HTMLDivElement>(null)
    const orbRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setMounted(true)
        const handleMouseMove = (e: MouseEvent) => {
            if (spotlightRef.current) {
                spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.pageX}px ${e.pageY}px, color-mix(in srgb, var(--color-primary), transparent 85%), transparent 40%)`
            }
            if (orbRef.current) {
                orbRef.current.style.transform = `translate(${e.pageX - 128}px, ${e.pageY - 128}px)`
            }
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    // Helper to format title
    const renderTitle = (title: string) => {
        const words = title.split(' ')
        const lastWord = words.pop()
        return (
            <>
                &lt;{words.join(' ')} <span className="text-[var(--color-primary)]">{lastWord}</span> /&gt;
            </>
        )
    }

    // Code snippets for background
    const codeSnippets = [
        "privacy", "secure", "data", "policy", "cookie", "protect", "user", "rights",
        "encrypt", "https", "ssl", "gdpr", "ccpa", "law", "terms", "legal",
        "0", "1", "01", "10", "true", "false", "[]", "{}", "()", "=>", "/>", "</",
        "lock", "key", "token", "auth", "guard", "safe", "trust", "verify"
    ]

    // Generate random positions for code snippets
    const getPosition = (index: number) => {
        const row = Math.floor(index / 8)
        const col = index % 8
        return {
            top: `${(row * 10) + Math.random() * 5}%`,
            left: `${(col * 12) + Math.random() * 5}%`,
            rotation: Math.random() * 20 - 10
        }
    }

    // Icons for sections
    const sectionIcons = [Shield, Lock, Eye, FileText]

    return (
        <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-base-100)] relative overflow-hidden font-sans">
            {/* Dynamic Code Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Spotlight Gradient */}
                <div
                    ref={spotlightRef}
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                        opacity: mounted ? 1 : 0,
                        background: 'radial-gradient(600px circle at 50% 50%, color-mix(in srgb, var(--color-primary), transparent 85%), transparent 40%)'
                    }}
                />

                {/* Breathing Light Effect at Cursor */}
                <div
                    ref={orbRef}
                    className="absolute w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-pulse"
                    style={{
                        left: 0,
                        top: 0,
                        animationDuration: '3s'
                    }}
                />

                {/* Code Snippets Grid */}
                <div className="absolute inset-0 opacity-20">
                    {mounted && Array.from({ length: 64 }).map((_, i) => {
                        const snippet = codeSnippets[i % codeSnippets.length]
                        const pos = getPosition(i)
                        return (
                            <div
                                key={i}
                                className="absolute font-mono text-sm font-bold text-[var(--color-primary)] transition-all duration-1000"
                                style={{
                                    top: pos.top,
                                    left: pos.left,
                                    transform: `rotate(${pos.rotation}deg)`,
                                    opacity: Math.random() * 0.5 + 0.1
                                }}
                            >
                                {snippet}
                            </div>
                        )
                    })}
                </div>

                {/* Base Grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}>
                </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-12 relative z-10">

                {/* Back Button */}
                <div className="flex justify-start">
                    <a
                        href="/"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-[var(--color-primary)] border border-[var(--color-primary)]/30 rounded-[var(--radius-field)] hover:bg-[var(--color-primary)]/10 transition-all cursor-pointer group backdrop-blur-sm bg-[var(--color-base-100)]/50"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Volver al inicio
                    </a>
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--color-base-content)] mb-4">
                        {renderTitle(content.title)}
                    </h1>
                    <p className="text-[var(--color-neutral-content)] font-mono text-sm mb-2">
                        // Última actualización: {content.lastUpdated}
                    </p>
                    <p className="text-[var(--color-base-content)]/80 font-sans max-w-2xl mx-auto leading-relaxed">
                        {content.introduction}
                    </p>
                </motion.div>

                {/* Policy Sections */}
                <div className="grid gap-8">
                    {content.sections.map((section, index) => {
                        const Icon = sectionIcons[index % sectionIcons.length]
                        return (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[var(--color-base-200)]/80 backdrop-blur-md border border-[var(--color-base-300)] hover:border-[var(--color-primary)] rounded-[var(--radius-box)] p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[var(--color-base-100)] rounded-[var(--radius-field)] text-[var(--color-primary)] border border-[var(--color-base-300)] group-hover:border-[var(--color-primary)] transition-colors">
                                        <Icon size={24} />
                                    </div>
                                    <div className="space-y-3">
                                        <h2 className="font-mono text-xl font-bold text-[var(--color-base-content)] group-hover:text-[var(--color-primary)] transition-colors">
                                            <span className="text-[var(--color-primary)] opacity-50 mr-2">#</span>
                                            {section.title}
                                        </h2>
                                        <p className="font-sans text-[var(--color-neutral-content)] leading-relaxed">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center pt-8 border-t border-[var(--color-base-300)]/30"
                >
                    <p className="font-mono text-sm text-[var(--color-neutral-content)]/60">
                        /* {content.footer} */
                    </p>
                </motion.div>

            </div>
        </main>
    )
}

export default Privacy
