"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Monitor, Server, Database, GitBranch } from "lucide-react"
import ProfileCard from "./ProfileCard"
import FloatingTech from "./FloatingTech"
import content from "./aboutPreviewData.json"
import type { AboutPreviewData } from "@/types/landingPage"

const iconMap: Record<string, React.ComponentType<any>> = {
    monitor: Monitor,
    server: Server,
    database: Database,
    "git-branch": GitBranch,
}

const AboutPreview: React.FC = () => {
    const data = content as AboutPreviewData

    return (
        <section className="py-20 bg-[var(--color-base-100)] relative overflow-hidden">
            {/* Floating Tech Icons */}
            {data.floatingTech.map((tech, index) => (
                <FloatingTech key={index} tech={tech} />
            ))}

            {/* Titulo - Descripcion*/}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header animado (de abajo hacia arriba) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-16"
                >
                    {/* Titulo */}
                    <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--color-base-content)] mb-6">
                        {data.title}
                    </h2>

                    {/* Descripcion */}
                    <div className="relative flex justify-center">
                        {/* Fondo difuminado con gradiente radial para bordes suaves */}
                        <div
                            className="absolute inset-0 max-w-3xl mx-auto z-0 pointer-events-none"
                            aria-hidden="true"
                            style={{
                                borderRadius: '1rem',
                                background: `radial-gradient(ellipse at center, rgba(var(--color-base-100-rgb),0.85) 70%, rgba(var(--color-base-100-rgb),0.0) 100%)`,
                                backdropFilter: 'blur(6px)',
                                WebkitBackdropFilter: 'blur(6px)'
                            }}
                        ></div>
                        {/* Descripcion */}
                        <p className="font-sans text-lg text-[var(--color-neutral-content)]/80 max-w-3xl mx-auto leading-relaxed text-justify relative z-10 px-6 py-4">
                            {data.description}
                        </p>
                    </div>
                </motion.div>

                {/* Role Cards - Boton CTA */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Role Cards Grid y CTA animados (de izquierda a derecha) */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {data.roleCards.map((card, index) => {
                                const IconComponent = iconMap[card.icon]
                                return (
                                    <div
                                        key={index}
                                        className="bg-[var(--color-base-200)] border border-[var(--color-neutral)] rounded-[var(--radius-box)] p-6 hover:border-[var(--color-primary)] transition-colors group"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center">
                                                <IconComponent
                                                    size={20}
                                                    className="text-[var(--color-primary)]"
                                                />
                                            </div>
                                            <h3 className="font-mono text-lg font-semibold text-[var(--color-base-content)]">
                                                {card.title}
                                            </h3>
                                        </div>
                                        <p className="font-sans text-sm text-[var(--color-neutral-content)]/80 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center sm:text-left">
                            <a
                                href={data.cta.href}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-info)] text-[var(--color-primary-content)] hover:text-[var(--color-info-content)] rounded-[var(--radius-selector)] transition-all duration-300 text-lg font-mono font-semibold group shadow-lg hover:shadow-[var(--color-primary)]/40"
                            >
                                {data.cta.label}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side - Profile Card animada (de derecha a izquierda) */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="w-full max-w-md">
                            <ProfileCard profileCard={data.profileCard} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutPreview