"use client"

import React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, ExternalLink, Box, Code, Terminal, Cpu, Braces } from "lucide-react"
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si"
import content from "./resources.json"

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
    SiNextdotjs: SiNextdotjs,
    SiTailwindcss: SiTailwindcss,
    SiFramer: SiFramer,
    LucideIcon: Box
}

const Resources: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
    const [mounted, setMounted] = useState(false)
    const spotlightRef = React.useRef<HTMLDivElement>(null)
    const orbRef = React.useRef<HTMLDivElement>(null)

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

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

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
        "const", "return", "if", "else", "import", "export", "from", "async", "await",
        "function", "class", "interface", "type", "var", "let", "void", "null",
        "0", "1", "01", "10", "true", "false", "[]", "{}", "()", "=>", "/>", "</",
        "npm", "yarn", "pnpm", "git", "push", "pull", "commit", "merge", "branch"
    ]

    // Generate random positions for code snippets (deterministic based on index)
    const getPosition = (index: number) => {
        const row = Math.floor(index / 8)
        const col = index % 8
        return {
            top: `${(row * 10) + Math.random() * 5}%`,
            left: `${(col * 12) + Math.random() * 5}%`,
            rotation: Math.random() * 20 - 10
        }
    }

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

            <div className="max-w-4xl mx-auto space-y-16 relative z-10">

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

                {/* FAQs Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--color-base-content)] mb-4">
                            {renderTitle(content.faqs.title)}
                        </h1>
                        <p className="text-[var(--color-neutral-content)] font-mono text-sm">
                            // Respuestas a preguntas comunes sobre mi trabajo
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {content.faqs.items.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[var(--color-base-200)]/80 backdrop-blur-md border border-[var(--color-base-300)] hover:border-[var(--color-primary)] rounded-[var(--radius-box)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-base-300)]/50 transition-colors cursor-pointer group"
                                >
                                    <span className="font-mono text-lg font-semibold text-[var(--color-base-content)] group-hover:text-[var(--color-primary)] transition-colors">
                                        <span className="text-[var(--color-primary)] mr-2 opacity-50">#</span>
                                        {faq.question}
                                    </span>
                                    {openFaqIndex === index ? (
                                        <ChevronUp className="text-[var(--color-primary)]" />
                                    ) : (
                                        <ChevronDown className="text-[var(--color-neutral-content)] group-hover:text-[var(--color-primary)]" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-6 pt-0 border-t border-[var(--color-base-300)]/50">
                                                <div className="mt-4 p-4 bg-[var(--color-base-100)]/50 rounded-[var(--radius-field)] border-l-2 border-[var(--color-primary)]">
                                                    <p className="font-sans text-[var(--color-neutral-content)] leading-relaxed whitespace-pre-line">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Credits Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--color-base-content)] mb-4">
                            {renderTitle(content.credits.title)}
                        </h2>
                        <p className="text-[var(--color-neutral-content)] font-mono text-sm">
                            // Herramientas y tecnologías utilizadas
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {content.credits.items.map((item, index) => {
                            const Icon = iconMap[item.icon] || Box
                            return (
                                <motion.a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group flex items-start gap-4 p-6 bg-[var(--color-base-200)]/80 backdrop-blur-md border border-[var(--color-base-300)] hover:border-[var(--color-primary)] rounded-[var(--radius-box)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/10 cursor-pointer relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Icon size={64} />
                                    </div>

                                    <div className="p-3 bg-[var(--color-base-100)] rounded-[var(--radius-field)] text-[var(--color-primary)] group-hover:scale-110 transition-transform relative z-10 border border-[var(--color-base-300)] group-hover:border-[var(--color-primary)]">
                                        <Icon size={24} />
                                    </div>
                                    <div className="flex-1 relative z-10">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-mono text-lg font-bold text-[var(--color-base-content)] group-hover:text-[var(--color-primary)] transition-colors">
                                                {item.name}
                                            </h3>
                                            <ExternalLink size={16} className="text-[var(--color-neutral-content)] group-hover:text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-all" />
                                        </div>
                                        <p className="font-sans text-sm text-[var(--color-neutral-content)]">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.a>
                            )
                        })}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Resources
