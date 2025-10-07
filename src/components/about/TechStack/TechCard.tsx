"use client"

import React from "react"
import {
    FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt,
    FaGitAlt, FaDocker, FaGithub, FaCode, FaFigma
} from "react-icons/fa"
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress,
    SiMongodb, SiPostgresql, SiMysql, SiVercel, SiNetlify
} from "react-icons/si"
import type { TechItem } from "@/types/about-me"

interface TechCardProps {
    tech: TechItem
}

const TechCard: React.FC<TechCardProps> = ({ tech }) => {
    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            'FaReact': <FaReact />,
            'SiNextdotjs': <SiNextdotjs />,
            'SiTypescript': <SiTypescript />,
            'SiTailwindcss': <SiTailwindcss />,
            'FaHtml5': <FaHtml5 />,
            'FaCss3Alt': <FaCss3Alt />,
            'FaNodeJs': <FaNodeJs />,
            'FaPython': <FaPython />,
            'SiExpress': <SiExpress />,
            'FaJava': <FaJava />,
            'SiMongodb': <SiMongodb />,
            'SiPostgresql': <SiPostgresql />,
            'SiMysql': <SiMysql />,
            'FaGitAlt': <FaGitAlt />,
            'FaDocker': <FaDocker />,
            'FaCode': <FaCode />,
            'FaFigma': <FaFigma />,
            'SiVercel': <SiVercel />,
            'FaGithub': <FaGithub />,
            'SiNetlify': <SiNetlify />
        }
        return icons[iconName] || <FaCode />
    }

    const getColorClass = (color: string) => {
        const colorMap: { [key: string]: string } = {
            primary: 'text-[var(--color-primary)]',
            secondary: 'text-[var(--color-secondary)]',
            accent: 'text-[var(--color-accent)]',
            info: 'text-[var(--color-info)]',
            success: 'text-[var(--color-success)]',
            warning: 'text-[var(--color-warning)]',
            error: 'text-[var(--color-error)]'
        }
        return colorMap[color] || colorMap.primary
    }

    return (
        <div className="bg-[var(--color-base-200)] border border-[var(--color-base-300)] rounded-[var(--radius-field)] p-4 hover:border-[var(--color-primary)] hover:bg-[var(--color-base-300)] transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center gap-3">
                <div className={`text-2xl ${getColorClass(tech.color)}`}>
                    {getIcon(tech.icon)}
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-mono text-sm font-bold text-[var(--color-base-content)] truncate">
                        {tech.name}
                    </h4>
                    <p className="font-sans text-xs text-[var(--color-neutral-content)] mt-1">
                        {tech.experience}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TechCard