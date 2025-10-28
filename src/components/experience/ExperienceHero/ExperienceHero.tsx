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
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "var(--color-base-100)", overflowX: "hidden" }}>
            {/* Fondo tecnológico completo con gradientes y patrones */}
            <div className="absolute inset-0 w-full h-full">
                {/* Gradiente base con colores globales */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `
                            radial-gradient(circle at 20% 30%, var(--color-primary) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, var(--color-accent) 0%, transparent 50%),
                            radial-gradient(circle at 40% 80%, var(--color-secondary) 0%, transparent 40%),
                            linear-gradient(135deg, var(--color-base-100) 0%, var(--color-base-200) 100%)
                        `,
                        opacity: 0.15
                    }}
                />

                {/* Patrón de código/circuitos SVG */}
                <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
                    <defs>
                        {/* Patrón de líneas de código */}
                        <pattern id="code-pattern" x="0" y="0" width="300" height="200" patternUnits="userSpaceOnUse">
                            {/* Líneas de código simuladas */}
                            <rect x="20" y="20" width="80" height="4" fill="var(--color-primary)" opacity="0.3" />
                            <rect x="20" y="35" width="120" height="4" fill="var(--color-accent)" opacity="0.3" />
                            <rect x="40" y="50" width="60" height="4" fill="var(--color-secondary)" opacity="0.3" />
                            <rect x="40" y="65" width="100" height="4" fill="var(--color-primary)" opacity="0.3" />
                            <rect x="20" y="80" width="140" height="4" fill="var(--color-accent)" opacity="0.3" />

                            {/* Chips y circuitos */}
                            <rect x="200" y="30" width="60" height="40" fill="none" stroke="var(--color-primary)" strokeWidth="1" opacity="0.4" />
                            <circle cx="220" cy="45" r="3" fill="var(--color-primary)" opacity="0.5" />
                            <circle cx="240" cy="45" r="3" fill="var(--color-primary)" opacity="0.5" />

                            {/* Conexiones */}
                            <path d="M180 50 L200 50" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
                            <path d="M260 50 L280 50" stroke="var(--color-accent)" strokeWidth="2" opacity="0.3" />
                        </pattern>

                        {/* Patrón de hexágonos tech */}
                        <pattern id="hex-pattern" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                            <polygon points="50,5 85,25 85,65 50,85 15,65 15,25"
                                fill="none" stroke="var(--color-primary)" strokeWidth="1" opacity="0.2" />
                            <circle cx="50" cy="45" r="8" fill="var(--color-accent)" opacity="0.1" />
                        </pattern>

                        {/* Filtros para efectos de brillo */}
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Aplicar patrones */}
                    <rect width="100%" height="100%" fill="url(#code-pattern)" opacity="0.4" />
                    <rect width="100%" height="100%" fill="url(#hex-pattern)" opacity="0.3" />

                    {/* Elementos flotantes animados */}
                    <g opacity="0.2">
                        {/* Partículas de datos */}
                        <circle cx="10%" cy="20%" r="2" fill="var(--color-primary)">
                            <animate attributeName="cy" values="20%;80%;20%" dur="15s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="30%" cy="60%" r="1.5" fill="var(--color-accent)">
                            <animate attributeName="cy" values="60%;10%;60%" dur="12s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="70%" cy="30%" r="2.5" fill="var(--color-secondary)">
                            <animate attributeName="cy" values="30%;90%;30%" dur="18s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="90%" cy="70%" r="1.8" fill="var(--color-primary)">
                            <animate attributeName="cy" values="70%;20%;70%" dur="14s" repeatCount="indefinite" />
                        </circle>

                        {/* Líneas de conexión dinámicas */}
                        <path d="M0 40% Q25% 20% 50% 40% T100% 40%"
                            stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.3">
                            <animate attributeName="d"
                                values="M0 40% Q25% 20% 50% 40% T100% 40%;M0 60% Q25% 40% 50% 60% T100% 60%;M0 40% Q25% 20% 50% 40% T100% 40%"
                                dur="20s" repeatCount="indefinite" />
                        </path>
                        <path d="M0 60% Q25% 80% 50% 60% T100% 60%"
                            stroke="var(--color-accent)" strokeWidth="1" fill="none" opacity="0.3">
                            <animate attributeName="d"
                                values="M0 60% Q25% 80% 50% 60% T100% 60%;M0 40% Q25% 60% 50% 40% T100% 40%;M0 60% Q25% 80% 50% 60% T100% 60%"
                                dur="25s" repeatCount="indefinite" />
                        </path>
                    </g>

                    {/* Grid tecnológico sutil */}
                    <defs>
                        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="var(--color-primary)" strokeWidth="0.5" opacity="0.1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Destellos de luz en los bordes */}
                <div
                    className="light-beam"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        background: `linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)`,
                        opacity: 0.6
                    }}
                />
                <div
                    className="light-beam"
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        background: `linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)`,
                        opacity: 0.6,
                        animationDelay: "3s"
                    }}
                />

                {/* Destellos laterales para eliminar espacios muertos */}
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "3px",
                        height: "100%",
                        background: `linear-gradient(180deg, transparent 0%, var(--color-primary) 30%, var(--color-accent) 70%, transparent 100%)`,
                        opacity: 0.4
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        width: "3px",
                        height: "100%",
                        background: `linear-gradient(180deg, transparent 0%, var(--color-accent) 30%, var(--color-secondary) 70%, transparent 100%)`,
                        opacity: 0.4
                    }}
                />
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
                    <p className="font-sans text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-justify" style={{ color: "var(--color-neutral-content)" }}>
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
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 group"
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