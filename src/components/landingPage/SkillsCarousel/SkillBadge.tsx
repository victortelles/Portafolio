"use client"

import type React from "react"
import { useState } from "react"
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"
import type { Skill } from "@/types/landingPage"

interface SkillBadgeProps {
    skill: Skill
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false)

    // Función para obtener el icono dinámicamente
    const getIcon = (iconName: string) => {
        // Busca en FontAwesome primero
        const FaIcon = (FaIcons as any)[iconName]
        if (FaIcon) return FaIcon

        // Busca en Simple Icons después
        const SiIcon = (SiIcons as any)[iconName]
        if (SiIcon) return SiIcon

        // Icono por defecto si no se encuentra
        return FaIcons.FaCode
    }

    const IconComponent = getIcon(skill.icon)

    return (
        <div
            className="relative flex items-center justify-center p-3 rounded-[var(--radius-box)] transition-all duration-300 cursor-pointer"
            style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Efecto de fondo neon */}
            <div
                className="absolute inset-0 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded-[var(--radius-box)] transition-all duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    boxShadow: isHovered ? `0 10px 25px var(--color-primary)/40` : 'none'
                }}
            ></div>

            {/* Icono */}
            <div className="relative z-10">
                <IconComponent
                    size={28}
                    className="transition-all duration-300"
                    style={{
                        color: isHovered ? 'var(--color-primary)' : 'var(--color-base-content)',
                        filter: isHovered ? `drop-shadow(0 0 8px ${skill.color})` : "drop-shadow(0 0 0px transparent)",
                        transition: "all 0.3s ease"
                    }}
                />
            </div>

            {/* Tooltip mejorado */}
            <div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[var(--color-base-100)] text-[var(--color-base-content)] px-3 py-2 rounded-[var(--radius-field)] text-xs font-mono transition-all duration-300 pointer-events-none whitespace-nowrap border border-[var(--color-primary)] z-20 shadow-lg"
                style={{
                    opacity: isHovered ? 1 : 0
                }}
            >
                {skill.name}
                {/* Flecha del tooltip con glow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[var(--color-primary)]"></div>
            </div>
        </div>
    )
}

export default SkillBadge