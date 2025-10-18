"use client"

import React, { useState } from "react"
import {
    FaLightbulb, FaHeart, FaUsers, FaHandshake,
    FaPalette, FaRocket, FaGraduationCap, FaBalanceScale,
} from "react-icons/fa"
import valuesData from "./valuesData.json"
import type { PersonalValuesData } from "@/types/about-me"

const PersonalValues: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<number | null>(null)
    const { sectionTitle, sectionTitle2, sectionDescription, values } = valuesData as PersonalValuesData

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            'FaLightbulb': <FaLightbulb />,
            'FaHeart': <FaHeart />,
            'FaUsers': <FaUsers />,
            'FaBalanceScale': <FaBalanceScale/>,
            'FaHandshake': <FaHandshake />,
            'FaPalette': <FaPalette />,
            'FaRocket': <FaRocket />,
            'FaGraduationCap': <FaGraduationCap />
        }
        return icons[iconName] || <FaLightbulb />
    }

    const getColorClasses = (color: string, isSelected: boolean = false) => {
        const colorMap = {
            primary: isSelected ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'hover:border-[var(--color-primary)]',
            secondary: isSelected ? 'border-[var(--color-secondary)] bg-[var(--color-secondary)]/10' : 'hover:border-[var(--color-secondary)]',
            accent: isSelected ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10' : 'hover:border-[var(--color-accent)]',
            info: isSelected ? 'border-[var(--color-info)] bg-[var(--color-info)]/10' : 'hover:border-[var(--color-info)]',
            success: isSelected ? 'border-[var(--color-success)] bg-[var(--color-success)]/10' : 'hover:border-[var(--color-success)]',
            warning: isSelected ? 'border-[var(--color-warning)] bg-[var(--color-warning)]/10' : 'hover:border-[var(--color-warning)]'
        }
        return colorMap[color as keyof typeof colorMap] || colorMap.primary
    }

    const getTextColorClass = (color: string) => {
        const colorMap = {
            primary: 'text-[var(--color-primary)]',
            secondary: 'text-[var(--color-secondary)]',
            accent: 'text-[var(--color-accent)]',
            info: 'text-[var(--color-info)]',
            success: 'text-[var(--color-success)]',
            warning: 'text-[var(--color-warning)]'
        }
        return colorMap[color as keyof typeof colorMap] || colorMap.primary
    }

    return (
        <section className="py-20 lg:py-32 px-4 lg:px-8 bg-[var(--color-base-200)]">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <div className="text-center mb-16">
                    <h2 className="font-mono text-3xl lg:text-5xl font-bold mb-4">
                        <span className="text-[var(--color-base-content)]">{sectionTitle} </span>
                        <span className="text-[var(--color-primary)]">{sectionTitle2}</span>
                    </h2>
                    <p className="font-sans text-lg text-[var(--color-neutral-content)] max-w-3xl mx-auto">
                        {sectionDescription}
                    </p>
                </div>

                {/* Grid de valores */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {values.map((value) => (
                        <div
                            key={value.id}
                            className={`bg-[var(--color-base-100)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${getColorClasses(value.color, selectedValue === value.id)}`}
                            onClick={() => setSelectedValue(selectedValue === value.id ? null : value.id)}
                        >
                            {/* Icono y título */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-3xl flex-shrink-0 text-[var(--color-primary)]">{getIcon(value.icon)}</div>
                                <div className="flex-1">
                                    <h3 className={`font-mono text-lg font-bold mb-2 ${getTextColorClass(value.color)}`}>
                                        {value.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Descripción */}
                            <p className="font-sans text-sm text-[var(--color-neutral-content)] leading-relaxed mb-4">
                                {value.description}
                            </p>

                            {/* Keywords mejorados */}
                            <div className="flex flex-wrap gap-2">
                                {value.keywords.map((keyword: string, index: number) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 text-xs font-mono rounded-full border transition-all duration-300 hover:scale-105 ${selectedValue === value.id
                                                ? `${getTextColorClass(value.color)} bg-current/10 border-current`
                                                : 'text-[var(--color-base-content)] bg-[var(--color-base-300)] border-[var(--color-base-300)] hover:border-[var(--color-primary)]'
                                            }`}
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PersonalValues