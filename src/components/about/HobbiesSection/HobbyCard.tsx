"use client"

import React, { useState } from "react"
import { FaGamepad, FaBook, FaCamera, FaDumbbell, FaUtensils, FaMusic } from "react-icons/fa"
import type { Hobby } from "@/types/about-me"

interface HobbyCardProps {
    hobby: Hobby
}

const HobbyCard: React.FC<HobbyCardProps> = ({ hobby }) => {
    const [visibleTags, setVisibleTags] = useState(4)
    const [showAllTags, setShowAllTags] = useState(false)

    const getIcon = (iconName: string) => {
        const iconMap = {
            'FaGamepad': <FaGamepad size={20} />,
            'FaBook': <FaBook size={20} />,
            'FaCamera': <FaCamera size={20} />,
            'FaDumbbell': <FaDumbbell size={20} />,
            'FaUtensils': <FaUtensils size={20} />,
            'FaMusic': <FaMusic size={20} />
        }
        return iconMap[iconName as keyof typeof iconMap] || <FaGamepad size={20} />
    }

    const getCategoryColor = (category: string) => {
        const colors = {
            'Entretenimiento': 'text-[var(--color-primary)]',
            'Educación': 'text-[var(--color-secondary)]',
            'Arte': 'text-[var(--color-accent)]',
            'Salud': 'text-[var(--color-success)]',
            'Creatividad': 'text-[var(--color-warning)]'
        }
        return colors[category as keyof typeof colors] || 'text-[var(--color-primary)]'
    }

    const getCategoryBorder = (category: string) => {
        const colors = {
            'Entretenimiento': 'hover:border-[var(--color-primary)] hover:shadow-[var(--color-primary)]/20',
            'Educación': 'hover:border-[var(--color-secondary)] hover:shadow-[var(--color-secondary)]/20',
            'Arte': 'hover:border-[var(--color-accent)] hover:shadow-[var(--color-accent)]/20',
            'Salud': 'hover:border-[var(--color-success)] hover:shadow-[var(--color-success)]/20',
            'Creatividad': 'hover:border-[var(--color-warning)] hover:shadow-[var(--color-warning)]/20'
        }
        return colors[category as keyof typeof colors] || 'hover:border-[var(--color-primary)] hover:shadow-[var(--color-primary)]/20'
    }

    const toggleTags = () => {
        setShowAllTags(!showAllTags)
    }

    const displayedTags = showAllTags ? hobby.tags : hobby.tags.slice(0, visibleTags)
    const hiddenTagsCount = hobby.tags.length - visibleTags

    return (
        <div className={`bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-6 transition-all duration-300 hover:shadow-lg ${getCategoryBorder(hobby.category)}`}>
            {/* Header de la card */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-[var(--radius-field)] bg-[var(--color-base-300)] ${getCategoryColor(hobby.category)}`}>
                        {getIcon(hobby.icon)}
                    </div>
                    <h3 className="font-mono text-xl font-bold text-[var(--color-base-content)]">
                        {hobby.title}
                    </h3>
                </div>
                <span className={`font-mono text-xs px-3 py-1 rounded-full bg-[var(--color-base-300)] ${getCategoryColor(hobby.category)}`}>
                    {hobby.category}
                </span>
            </div>

            {/* Descripción */}
            <p className="font-sans text-[var(--color-neutral-content)] leading-relaxed mb-4">
                {hobby.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {displayedTags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-[var(--color-base-100)] border border-[var(--color-base-300)] text-[var(--color-base-content)] text-xs font-sans rounded-[var(--radius-field)] hover:border-[var(--color-primary)] transition-colors duration-300"
                    >
                        {tag}
                    </span>
                ))}
                {!showAllTags && hiddenTagsCount > 0 && (
                    <button
                        onClick={toggleTags}
                        className={`px-3 py-1 text-xs font-mono rounded-[var(--radius-field)] border transition-colors duration-300 ${getCategoryColor(hobby.category)} bg-[var(--color-base-100)] border-current hover:bg-current hover:text-[var(--color-base-100)]`}
                    >
                        +{hiddenTagsCount}
                    </button>
                )}
                {showAllTags && hobby.tags.length > visibleTags && (
                    <button
                        onClick={toggleTags}
                        className="px-3 py-1 bg-[var(--color-base-300)] text-[var(--color-base-content)] text-xs font-mono rounded-[var(--radius-field)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-content)] transition-colors duration-300"
                    >
                        Mostrar menos
                    </button>
                )}
            </div>
        </div>
    )
}

export default HobbyCard