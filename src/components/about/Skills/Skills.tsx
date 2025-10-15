"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
    FaUsers, FaHandshake, FaClock, FaLightbulb, FaUserTie,
    FaCode, FaServer, FaDatabase, FaCogs, FaBug, FaSearchPlus
} from "react-icons/fa"
import { SkillCard, SkillsData, SkillsColorClasses } from "@/types/skills"
import skillsData from "./skillsData.json"

const Skills: React.FC = () => {
    const [selectedCard, setSelectedCard] = useState<SkillCard | null>(null)
    const data = skillsData as SkillsData

    // Bloquear scroll cuando modal está abierto
    useEffect(() => {
        if (selectedCard) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        // Cleanup al desmontar componente
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [selectedCard])

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            'FaUsers': <FaUsers />,
            'FaLightbulb': <FaLightbulb />,
            'FaClock': <FaClock />,
            'FaSearchPlus': <FaSearchPlus />,
            'FaUserTie': <FaUserTie />,
            'FaCode': <FaCode />,
            'FaServer': <FaServer />,
            'FaDatabase': <FaDatabase />,
            'FaCogs': <FaCogs />,
            'FaBug': <FaBug />
        }
        return icons[iconName] || <FaCode />
    }

    const getColorClasses = (color: string): SkillsColorClasses => {
        const colorMap: { [key: string]: SkillsColorClasses } = {
            primary: { bg: 'bg-[var(--color-primary)]/5', border: 'border-[var(--color-primary)]', text: 'text-[var(--color-primary)]' },
            secondary: { bg: 'bg-[var(--color-secondary)]/5', border: 'border-[var(--color-secondary)]', text: 'text-[var(--color-secondary)]' },
            accent: { bg: 'bg-[var(--color-accent)]/5', border: 'border-[var(--color-accent)]', text: 'text-[var(--color-accent)]' },
            info: { bg: 'bg-[var(--color-info)]/5', border: 'border-[var(--color-info)]', text: 'text-[var(--color-info)]' },
            success: { bg: 'bg-[var(--color-success)]/5', border: 'border-[var(--color-success)]', text: 'text-[var(--color-success)]' },
            warning: { bg: 'bg-[var(--color-warning)]/5', border: 'border-[var(--color-warning)]', text: 'text-[var(--color-warning)]' },
            error: { bg: 'bg-[var(--color-error)]/5', border: 'border-[var(--color-error)]', text: 'text-[var(--color-error)]' }
        }
        return colorMap[color] || colorMap.primary
    }

    const closeModal = () => setSelectedCard(null)

    // Estado para activar la animación de entrada
    const cardsSectionRef = useRef<HTMLDivElement>(null)
    const inView = useInView(cardsSectionRef, { margin: "-100px 0px", once: true })

    return (
        <section className="py-20 bg-[var(--color-base-100)]">
            <div className="container mx-auto px-6">
                {/* Encabezado */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-mono text-3xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        {data.headerTitle} <span className="text-[var(--color-primary)]">{data.headerTitle2}</span>
                    </h2>
                    <p className="font-sans text-lg text-[var(--color-neutral-content)] max-w-3xl mx-auto">
                        {data.headerDescription}
                    </p>
                </motion.div>

                {/* División en 2 columnas - Responsivo */}
                <div ref={cardsSectionRef} className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4">

                    {/* Habilidades Blandas */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="font-mono text-xl md:text-2xl font-bold text-[var(--color-secondary)] mb-6 md:mb-8 text-center">
                            {data.softSkillsTitle}
                        </h3>
                        <div className="relative h-[400px] sm:h-[500px] md:h-[700px] lg:h-[600px] flex justify-center">
                            <div className="relative w-[180px] sm:w-[220px] md:w-[320px] lg:w-[350px]">
                                {data.softSkills.map((skill: SkillCard, index: number) => {
                                    const colorClasses = getColorClasses(skill.color)
                                    const rotation = -12 + (index * 8) // Rotación en abanico más sutil
                                    const yOffset = index * 24 // Offset vertical aumentado para el efecto de cartas
                                    const xOffset = index * 12 // Offset horizontal aumentado

                                    return (
                                        <motion.div
                                            key={skill.id}
                                            className={`absolute cursor-pointer bg-[var(--color-base-200)] border-2 ${colorClasses.border} rounded-xl shadow-xl overflow-hidden w-[180px] h-[220px] sm:w-[220px] sm:h-[280px] md:w-[320px] md:h-[450px] lg:w-[350px] lg:h-[450px]`}
                                            style={{
                                                transformOrigin: 'bottom center',
                                                zIndex: index + 1
                                            }}
                                            onClick={() => setSelectedCard(skill)}
                                            initial={{
                                                opacity: 0,
                                                y: 100,
                                                rotate: rotation,
                                                x: xOffset,
                                                scale: 0.8
                                            }}
                                            animate={inView ? {
                                                opacity: 1,
                                                y: yOffset,
                                                rotate: rotation,
                                                x: xOffset,
                                                scale: 1
                                            } : {}}
                                            whileHover={{
                                                y: yOffset - 25,
                                                rotate: rotation + 3,
                                                scale: 1.03,
                                                zIndex: 50,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 25,
                                                    duration: 0.3
                                                }
                                            }}
                                            whileTap={{
                                                scale: 0.97,
                                                y: yOffset - 15
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.1 * index + 0.4,
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 20
                                            }}
                                        >
                                            {/* Patrón de fondo sutil */}
                                            <div className={`absolute inset-0 ${colorClasses.bg} opacity-10`} />

                                            {/* Texto lateral izquierdo vertical */}
                                            <div className="absolute left-2 top-4 transform -rotate-90 origin-left">
                                                <span className={`font-mono text-xs font-bold ${colorClasses.text} opacity-60`}>
                                                    SOFT
                                                </span>
                                            </div>

                                            {/* Texto lateral derecho vertical */}
                                            <div className="absolute right-2 bottom-4 transform rotate-90 origin-right">
                                                <span className={`font-mono text-xs font-bold ${colorClasses.text} opacity-60`}>
                                                    SKILL
                                                </span>
                                            </div>

                                            {/* Contenido principal de la carta */}
                                            <div className="h-full flex flex-col justify-center items-center p-4 md:p-6 relative z-10">
                                                {/* Icono superior */}
                                                <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${colorClasses.text} mb-1 sm:mb-2 md:mb-3 lg:mb-4`}>
                                                    {getIcon(skill.icon)}
                                                </div>

                                                {/* Título principal */}
                                                <h4 className={`font-mono text-xs sm:text-sm md:text-lg lg:text-xl font-bold ${colorClasses.text} text-center leading-tight mb-1 sm:mb-2 md:mb-3`}>
                                                    {skill.title}
                                                </h4>

                                                {/* Descripción corta */}
                                                <p className={`font-sans text-[10px] sm:text-xs md:text-sm ${colorClasses.text} opacity-80 text-center mb-1 sm:mb-2 md:mb-3 lg:mb-4`}>
                                                    {skill.description.substring(0, 180)}
                                                </p>

                                                {/* Círculo central decorativo */}
                                                <div className={`w-4 h-4 rounded-full ${colorClasses.text.replace('text-', 'bg-')} opacity-70`} />
                                            </div>

                                            {/* Decoración de esquinas */}
                                            <div className={`absolute top-8 left-2 w-2 h-2 rounded-full ${colorClasses.text.replace('text-', 'bg-')} opacity-40`} />
                                            <div className={`absolute bottom-3 right-3 w-2 h-2 rounded-full ${colorClasses.text.replace('text-', 'bg-')} opacity-40`} />
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Habilidades Técnicas */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="font-mono text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-6 md:mb-8 text-center">
                            {data.hardSkillsTitle}
                        </h3>
                        <div className="relative h-[400px] sm:h-[500px] md:h-[700px] lg:h-[600px] flex justify-center mt-0 md:mt-24">
                            <div className="relative w-[180px] sm:w-[220px] md:w-[320px] lg:w-[350px]">
                                {data.hardSkills.map((skill: SkillCard, index: number) => {
                                    const colorClasses = getColorClasses(skill.color)
                                    const rotation = -12 + (index * 8) // Rotación en abanico más sutil
                                    const yOffset = index * 24 // Offset vertical aumentado para el efecto de cartas
                                    const xOffset = index * 12 // Offset horizontal aumentado

                                    return (
                                        <motion.div
                                            key={skill.id}
                                            className={`absolute cursor-pointer bg-[var(--color-base-200)] border-2 ${colorClasses.border} rounded-xl shadow-xl overflow-hidden w-[180px] h-[220px] sm:w-[220px] sm:h-[280px] md:w-[320px] md:h-[450px] lg:w-[350px] lg:h-[450px]`}
                                            style={{
                                                transformOrigin: 'bottom center',
                                                zIndex: index + 1
                                            }}
                                            onClick={() => setSelectedCard(skill)}
                                            initial={{
                                                opacity: 0,
                                                y: 100,
                                                rotate: rotation,
                                                x: xOffset,
                                                scale: 0.8
                                            }}
                                            animate={inView ? {
                                                opacity: 1,
                                                y: yOffset,
                                                rotate: rotation,
                                                x: xOffset,
                                                scale: 1
                                            } : {}}
                                            whileHover={{
                                                y: yOffset - 25,
                                                rotate: rotation + 3,
                                                scale: 1.03,
                                                zIndex: 50,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 25,
                                                    duration: 0.3
                                                }
                                            }}
                                            whileTap={{
                                                scale: 0.97,
                                                y: yOffset - 15
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.1 * index + 0.4,
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 20
                                            }}
                                        >
                                            {/* Patrón de fondo sutil */}
                                            <div className={`absolute inset-0 ${colorClasses.bg} opacity-10`} />

                                            {/* Texto lateral izquierdo vertical */}
                                            <div className="absolute left-2 top-4 transform -rotate-90 origin-left">
                                                <span className={`font-mono text-xs font-bold ${colorClasses.text} opacity-60`}>
                                                    TECH
                                                </span>
                                            </div>

                                            {/* Texto lateral derecho vertical */}
                                            <div className="absolute right-2 bottom-4 transform rotate-90 origin-right">
                                                <span className={`font-mono text-xs font-bold ${colorClasses.text} opacity-60`}>
                                                    SKILL
                                                </span>
                                            </div>

                                            {/* Contenido principal de la carta */}
                                            <div className="h-full flex flex-col justify-center items-center p-4 md:p-6 relative z-10">
                                                {/* Icono superior */}
                                                <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${colorClasses.text} mb-1 sm:mb-2 md:mb-3 lg:mb-4`}>
                                                    {getIcon(skill.icon)}
                                                </div>

                                                {/* Título principal */}
                                                <h4 className={`font-mono text-xs sm:text-sm md:text-lg lg:text-xl font-bold ${colorClasses.text} text-center leading-tight mb-1 sm:mb-2 md:mb-3`}>
                                                    {skill.title}
                                                </h4>

                                                {/* Descripción corta */}
                                                <p className={`font-sans text-[10px] sm:text-xs md:text-sm ${colorClasses.text} opacity-80 text-center mb-1 sm:mb-2 md:mb-3 lg:mb-4`}>
                                                    {skill.description.substring(0, 180)}
                                                </p>

                                                {/* Círculo central decorativo */}
                                                <div className={`w-4 h-4 rounded-full ${colorClasses.text.replace('text-', 'bg-')} opacity-70`} />
                                            </div>

                                            {/* Decoración de esquinas */}
                                            <div className={`absolute top-8 left-2 w-2 h-2 rounded-full ${colorClasses.text.replace('text-', 'bg-')} opacity-40`} />
                                            <div className={`absolute bottom-3 right-3 w-2 h-2 rounded-full ${colorClasses.text.replace('text-', 'bg-')} opacity-40`} />
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedCard && (
                        <motion.div
                            className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        >
                            <motion.div
                                className="bg-[var(--color-base-100)] rounded-[var(--radius-field)] p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {(() => {
                                    const colorClasses = getColorClasses(selectedCard.color)
                                    return (
                                        <>
                                            {/* Header del modal */}
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className={`text-3xl ${colorClasses.text}`}>
                                                        {getIcon(selectedCard.icon)}
                                                    </div>
                                                    <div>
                                                        <div className={`inline-flex items-center gap-2 px-3 py-1 ${colorClasses.bg} border ${colorClasses.border}/20 rounded-[var(--radius-field)] mb-2`}>
                                                            <span className={`font-mono text-xs font-bold ${colorClasses.text} uppercase`}>
                                                                {selectedCard.id <= 5 ? 'Soft Skill' : 'Tech Skill'}
                                                            </span>
                                                        </div>
                                                        <h3 className={`font-mono text-2xl font-bold ${colorClasses.text}`}>
                                                            {selectedCard.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={closeModal}
                                                    className="text-[var(--color-base-content)] hover:text-[var(--color-primary)] text-2xl font-bold p-2 rounded-lg hover:bg-[var(--color-base-200)] transition-all duration-200"
                                                >
                                                    ×
                                                </button>
                                            </div>

                                            {/* Descripción detallada */}
                                            <div className="mb-8">
                                                <p className="font-sans text-lg text-[var(--color-neutral-content)] leading-relaxed">
                                                    {selectedCard.detailedDescription}
                                                </p>
                                            </div>

                                            {/* Competencias principales */}
                                            <div className="mb-8">
                                                <h4 className="font-mono text-lg font-bold text-[var(--color-base-content)] mb-4">
                                                    Competencias Principales
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {selectedCard.items.map((item, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="flex items-center gap-3 p-3 bg-[var(--color-base-200)] rounded-[var(--radius-field)] border border-[var(--color-base-300)]"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                        >
                                                            <div className={`w-2 h-2 rounded-full ${colorClasses.text.replace('text-', 'bg-')}`} />
                                                            <span className="font-sans text-[var(--color-base-content)]">
                                                                {item}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Características clave */}
                                            <div className="mb-6">
                                                <h4 className="font-mono text-lg font-bold text-[var(--color-base-content)] mb-4">
                                                    Características Clave
                                                </h4>
                                                <div className="space-y-2">
                                                    {selectedCard.keyFeatures.map((feature, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="flex items-center gap-3 font-sans text-[var(--color-neutral-content)]"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: index * 0.05 + 0.3 }}
                                                        >
                                                            <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.text.replace('text-', 'bg-')}`} />
                                                            {feature}
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })()}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Skills