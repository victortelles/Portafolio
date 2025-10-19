"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaGraduationCap, FaCertificate, FaProjectDiagram, FaBriefcase } from "react-icons/fa"
import StatsCards from "./StatsCards"
import heroData from "./experienceHeroData.json"
import type { ExperienceHeroData } from "@/types/experience"

const ExperienceHero: React.FC = () => {
    const data = heroData as ExperienceHeroData

    const getIcon = (iconName: string) => {
        const iconMap: { [key: string]: React.ComponentType<any> } = {
            FaGraduationCap,
            FaCertificate,
            FaProjectDiagram,
            FaBriefcase
        }
        return iconMap[iconName] || FaBriefcase
    }

    return (
        <section className="py-16 relative overflow-hidden w-screen left-1/2 right-1/2 -translate-x-1/2" style={{ backgroundColor: "var(--color-base-100)" }}>
            {/* Fondo SVG tecnológico */}
            <div className="absolute inset-0 opacity-10 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 1200 800" className="w-full h-full">
                {/* Líneas de circuito */}
                <defs>
                <pattern id="circuit-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                    <path d="M0 100h50v-50h100v50h50" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
                    <path d="M100 0v50h50v100h-50v50" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
                    <circle cx="50" cy="50" r="8" fill="var(--color-primary)" />
                    <circle cx="150" cy="150" r="8" fill="var(--color-primary)" />
                    <rect x="90" y="90" width="20" height="20" fill="var(--color-primary)" />
                </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-pattern)" />

                {/* Elementos adicionales flotantes */}
                <g opacity="0.5">
                <circle cx="200" cy="150" r="40" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
                <circle cx="800" cy="250" r="60" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
                <circle cx="1000" cy="400" r="30" fill="none" stroke="var(--color-primary)" strokeWidth="1" />

                {/* Hexágonos tech */}
                <polygon points="300,200 320,210 320,230 300,240 280,230 280,210" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
                <polygon points="700,350 720,360 720,380 700,390 680,380 680,360" fill="none" stroke="var(--color-primary)" strokeWidth="1" />

                {/* Líneas de datos */}
                <path d="M0 300 Q200 280 400 300 T800 300" stroke="var(--color-primary)" strokeWidth="1" fill="none" />
                <path d="M0 500 Q300 480 600 500 T1200 500" stroke="var(--color-primary)" strokeWidth="1" fill="none" />
                </g>
            </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Título y Descripción */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h1 className="font-mono text-4xl lg:text-6xl font-bold mb-6" style={{ color: "var(--color-base-content)" }}>
                {data.title.split(' ').slice(0, -1).join(' ')} <span style={{ color: "var(--color-primary)" }}>{data.title.split(' ').slice(-1)}</span>
                </h1>
                <p className="font-sans text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: "var(--color-neutral-content)" }}>
                {data.description}
                </p>
            </motion.div>

            {/* Estadísticas */}
            <StatsCards stats={data.stats} />

            {/* Tags de Tipos de Eventos */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
            >
                <h3 className="font-mono text-2xl font-semibold mb-6" style={{ color: "var(--color-base-content)" }}>
                Tipos de Experiencias
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                {data.eventTypes.map((eventType, index) => {
                    const IconComponent = getIcon(eventType.icon)
                    return (
                    <motion.div
                        key={eventType.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 cursor-pointer group"
                        style={{
                        borderColor: eventType.color,
                        backgroundColor: `${eventType.color}15`
                        }}
                    >
                        <div
                        className="text-lg group-hover:scale-110 transition-transform duration-300"
                        style={{ color: eventType.color }}
                        >
                        <IconComponent />
                        </div>
                        <span
                        className="font-mono text-base font-semibold"
                        style={{ color: eventType.color }}
                        >
                        {eventType.name}
                        </span>
                    </motion.div>
                    )
                })}
                </div>
            </motion.div>
            </div>
        </section>
    )
}

export default ExperienceHero