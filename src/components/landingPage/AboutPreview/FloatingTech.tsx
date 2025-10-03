import React from "react"
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiNextdotjs
} from "react-icons/si"
import type { FloatingTech as FloatingTechType } from "@/types/landingPage"

interface FloatingTechProps {
    tech: FloatingTechType
}

const iconMap: Record<string, React.ComponentType<any>> = {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiNextdotjs,
}

const FloatingTech: React.FC<FloatingTechProps> = ({ tech }) => {
    const IconComponent = iconMap[tech.icon]

    return (
        <div
            className="absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group animate-pulse"
            style={{
                top: tech.position.top,
                left: tech.position.left,
                backgroundColor: `${tech.color}20`,
                border: `2px solid ${tech.color}30`,
            }}
            title={tech.name}
        >
            <IconComponent
                size={24}
                style={{ color: tech.color }}
                className="transition-all duration-300 group-hover:scale-110"
            />

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[var(--color-base-200)] text-[var(--color-base-content)] px-2 py-1 rounded text-xs font-mono whitespace-nowrap z-10">
                {tech.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[var(--color-base-200)]"></div>
            </div>
        </div>
    )
}

export default FloatingTech