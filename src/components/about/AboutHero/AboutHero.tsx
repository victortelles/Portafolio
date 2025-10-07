"use client"

import React from "react"
import { FaBullseye, FaCode, FaRocket, FaCoffee } from "react-icons/fa"
import PersonalCard from "./PersonalCard"
import aboutHeroData from "./aboutHeroData.json"
import type { AboutHeroData } from "@/types/about-me"

const AboutHero: React.FC = () => {
    const { personalInfo, quickFacts, socialLinks, currentStatus } = aboutHeroData as AboutHeroData

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'FaTarget':
            case 'FaBullseye':
                return <FaBullseye size={20} className="text-[var(--color-primary)]" />
            case 'FaCode':
                return <FaCode size={20} className="text-[var(--color-secondary)]" />
            case 'FaRocket':
                return <FaRocket size={20} className="text-[var(--color-accent)]" />
            case 'FaCoffee':
                return <FaCoffee size={20} className="text-[var(--color-warning)]" />
            default:
                return <FaCode size={20} className="text-[var(--color-primary)]" />
        }
    }

    return (
        <section className="relative py-20 lg:py-32 px-4 lg:px-8">
            {/* Background decorativo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <div className="text-center mb-16">
                    <h1 className="font-mono text-4xl lg:text-6xl font-bold text-[var(--color-base-content)] mb-4">
                        Acerca de <span className="text-[var(--color-primary)]">mí</span>
                    </h1>
                    <p className="font-sans text-lg lg:text-xl text-[var(--color-neutral-content)] max-w-3xl mx-auto">
                        Conoce más sobre mi historia, experiencia y pasión por el desarrollo de software
                    </p>
                </div>

                {/* Grid principal */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Tarjeta personal - ocupa 2 columnas en desktop */}
                    <div className="xl:col-span-2">
                        <PersonalCard
                            personalInfo={personalInfo}
                            socialLinks={socialLinks}
                        />
                    </div>

                    {/* Datos rapidos y estado actual */}
                    <div className="space-y-8">
                        {/* Datos rapidos */}
                        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-6 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20">
                            <h3 className="font-mono text-xl font-bold text-[var(--color-base-content)] mb-6">
                                Datos rápidos
                            </h3>
                            <div className="space-y-4">
                                {quickFacts.map((fact, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div>{getIcon(fact.icon)}</div>
                                        <div className="flex-1">
                                            <p className="font-sans text-sm text-[var(--color-neutral-content)]">
                                                {fact.label}
                                            </p>
                                            <p className="font-mono text-lg font-bold text-[var(--color-primary)]">
                                                {fact.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Estado actual */}
                        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-6 hover:border-[var(--color-success)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-success)]/20">
                            <h3 className="font-mono text-xl font-bold text-[var(--color-base-content)] mb-4">
                                Estado actual
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-[var(--color-success)] rounded-full animate-pulse"></div>
                                    <p className="font-mono text-sm text-[var(--color-success)]">
                                        {currentStatus.availability}
                                    </p>
                                </div>
                                <p className="font-sans text-sm text-[var(--color-neutral-content)]">
                                    📍 {currentStatus.location}
                                </p>
                                <p className="font-sans text-sm text-[var(--color-neutral-content)]">
                                    <FaBullseye className="inline mr-1" /> {currentStatus.interests}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero