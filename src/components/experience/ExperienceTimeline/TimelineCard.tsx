"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    FaGraduationCap,
    FaCertificate,
    FaProjectDiagram,
    FaBriefcase,
    FaChevronDown,
    FaChevronUp,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaClock,
    FaTools,
    FaTrophy,
    FaExternalLinkAlt
} from "react-icons/fa"
import type { TimelineCardProps, EventType } from "@/types/experience"

const TimelineCard: React.FC<TimelineCardProps> = ({
    experience,
    eventType,
    isLast = false,
    cardLabels
}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const getIcon = (iconName: string) => {
        const iconMap: { [key: string]: React.ComponentType<any> } = {
            FaGraduationCap,
            FaCertificate,
            FaProjectDiagram,
            FaBriefcase
        }
        return iconMap[iconName] || FaBriefcase
    }

    const formatDate = (dateString: string | null) => {
        if (!dateString) return "Presente"

        const months = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ]

        const [year, month] = dateString.split('-')
        const monthIndex = parseInt(month) - 1

        return `${months[monthIndex]} ${year}`
    }

    const IconComponent = getIcon(eventType.icon)

    const formatKeyAchievement = (achievement: string) => {
        const words = achievement.split(' ')
        if (words.length === 0) return achievement

        const firstWord = words[0]
        const restOfText = words.slice(1).join(' ')

        return (
            <>
                <span className="font-bold" style={{ color: "var(--color-primary)" }}>{firstWord}</span>
                {restOfText && <span> {restOfText}</span>}
            </>
        )
    }

    return (
        <div className="relative flex items-start group w-full justify-center">
            <div className="relative flex items-start w-full max-w-8xl">
                {/* Línea vertical conectora */}
                {!isLast && (
                    <div
                        className="absolute left-4 sm:left-6 top-12 w-1 h-full z-0 rounded-full transition-all duration-300 group-hover:w-1.5"
                        style={{
                            background: `linear-gradient(to bottom, ${eventType.color}80, ${eventType.color}40, ${eventType.color}20)`
                        }}
                    />
                )}

                {/* Punto del timeline */}
                <div
                    className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 sm:border-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl flex-shrink-0"
                    style={{
                        backgroundColor: "var(--color-base-100)",
                        borderColor: eventType.color,
                        boxShadow: `0 0 20px ${eventType.color}30`
                    }}
                >
                    <IconComponent
                        className="text-sm sm:text-base md:text-lg transition-all duration-300 group-hover:scale-110"
                        style={{ color: eventType.color }}
                    />

                    {/* Anillo de pulso para el punto activo */}
                    <div
                        className="absolute inset-0 rounded-full border-2 animate-pulse opacity-30"
                        style={{ borderColor: eventType.color }}
                    />
                </div>

                {/* Contenido de la tarjeta */}
                <motion.div
                    className="flex-1 ml-2 sm:ml-4 md:ml-6 mb-8 w-full"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div
                        className="rounded-lg p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-l-2 sm:border-l-4 group-hover:shadow-2xl w-full max-w-none"
                        style={{
                            backgroundColor: "var(--color-base-200)",
                            borderLeftColor: eventType.color
                        }}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-3 sm:gap-0">
                            <div className="flex-1 w-full">
                                <h3 className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-mono" style={{ color: "var(--color-base-content)" }}>
                                    {experience.title}
                                </h3>
                                <p className="font-mono text-sm sm:text-base mb-3 sm:mb-4 font-medium" style={{ color: "var(--color-primary)" }}>
                                    {experience.organization}
                                </p>

                                {/* Información de período, ubicación y tipo de tiempo */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: "var(--color-neutral-content)" }}>
                                        <FaCalendarAlt className="text-xs sm:text-sm flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                                        <span className="font-mono text-xs sm:text-sm">
                                            {formatDate(experience.period.start)} - {formatDate(experience.period.end)}
                                        </span>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                        <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: "var(--color-neutral-content)" }}>
                                            <FaMapMarkerAlt className="text-xs sm:text-sm flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                                            <span className="font-mono text-xs sm:text-sm">{experience.location}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: "var(--color-neutral-content)" }}>
                                            <FaClock className="text-xs sm:text-sm flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                                            <span className="font-mono text-xs sm:text-sm">{experience.workTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0 mt-2 sm:mt-0">
                                <span
                                    className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium font-mono whitespace-nowrap"
                                    style={{
                                        backgroundColor: `${eventType.color}20`,
                                        color: eventType.color
                                    }}
                                >
                                    {eventType.name}
                                </span>
                                {isExpanded ? (
                                    <FaChevronUp className="text-sm sm:text-base flex-shrink-0" style={{ color: "var(--color-neutral-content)" }} />
                                ) : (
                                    <FaChevronDown className="text-sm sm:text-base flex-shrink-0" style={{ color: "var(--color-neutral-content)" }} />
                                )}
                            </div>
                        </div>

                        {/* Descripción breve */}
                        <p className="mb-4 font-sans text-sm sm:text-base" style={{ color: "var(--color-neutral-content)" }}>
                            {experience.description}
                        </p>

                        {/* Contenido expandible */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    {/* Contenido en dos columnas para pantallas grandes */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        {/* Columna izquierda - Logros clave */}
                                        {experience.keyAchievements && experience.keyAchievements.length > 0 && (
                                            <div className="mb-4">
                                                <h4 className="text-lg font-semibold mb-3 font-sans flex items-center gap-2" style={{ color: "var(--color-base-content)" }}>
                                                    <FaTrophy style={{ color: "var(--color-primary)" }} />
                                                    {cardLabels.keyAchievements}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {experience.keyAchievements.map((achievement, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start gap-2 text-sm font-sans"
                                                            style={{ color: "var(--color-neutral-content)" }}
                                                        >
                                                            <span className="mt-1" style={{ color: "var(--color-primary)" }}>•</span>
                                                            <span>{formatKeyAchievement(achievement)}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Columna derecha - Tecnologías */}
                                        {experience.technologies && experience.technologies.length > 0 && (
                                            <div className="mb-4">
                                                <h4 className="text-lg font-semibold mb-3 font-sans flex items-center gap-2" style={{ color: "var(--color-base-content)" }}>
                                                    <FaTools style={{ color: "var(--color-primary)" }} />
                                                    {cardLabels.technologies}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {experience.technologies.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1.5 text-xs font-mono font-medium transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg border"
                                                            style={{
                                                                backgroundColor: `${eventType.color}15`,
                                                                borderColor: `${eventType.color}40`,
                                                                color: eventType.color,
                                                                borderRadius: "var(--radius-selector)",
                                                                boxShadow: `0 2px 8px ${eventType.color}20`
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.backgroundColor = `${eventType.color}25`
                                                                e.currentTarget.style.borderColor = `${eventType.color}60`
                                                                e.currentTarget.style.boxShadow = `0 4px 12px ${eventType.color}30`
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.backgroundColor = `${eventType.color}15`
                                                                e.currentTarget.style.borderColor = `${eventType.color}40`
                                                                e.currentTarget.style.boxShadow = `0 2px 8px ${eventType.color}20`
                                                            }}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Enlaces - Ancho completo */}
                                    {experience.links && experience.links.length > 0 && (
                                        <div className="lg:col-span-2">
                                            <h4 className="text-lg font-semibold mb-3 font-sans flex items-center gap-2" style={{ color: "var(--color-base-content)" }}>
                                                <FaExternalLinkAlt style={{ color: "var(--color-primary)" }} />
                                                {cardLabels.links}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {experience.links.map((link, index) => (
                                                    <a
                                                        key={index}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium font-mono transition-colors hover:opacity-80 text-[var(--color-primary-content)] hover:text-[var(--color-base-content)]"
                                                        style={{
                                                            backgroundColor: "var(--color-primary)",
                                                            //color: "var(--color-primary-content)"
                                                        }}
                                                    >
                                                        {link.title}
                                                        <FaExternalLinkAlt className="text-xs" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default TimelineCard