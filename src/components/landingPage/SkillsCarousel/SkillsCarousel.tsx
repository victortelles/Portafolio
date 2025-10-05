"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import SkillBadge from "./SkillBadge"
import content from "./skillsData.json"
import type { SkillsCarouselData, SkillCategory } from "@/types/landingPage"

const SkillsCarousel: React.FC = () => {
    const skillsData = content as SkillsCarouselData
    const [expandedCategories, setExpandedCategories] = useState<string[]>([])

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        )
    }

    const isExpanded = (categoryId: string) => expandedCategories.includes(categoryId)

    const getVisibleSkills = (category: SkillCategory) => {
        const maxVisible = 4 // 1 fila x 4 columnas
        const isCurrentlyExpanded = isExpanded(category.id)

        if (category.skills.length <= maxVisible || isCurrentlyExpanded) {
            return category.skills
        }

        return category.skills.slice(0, maxVisible)
    }

    // Variable para expandir o contraer la lista de tecnologías
    const shouldShowExpandButton = (category: SkillCategory) => {
        return category.skills.length > 4
    }

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-base-100)]">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <div className="text-center mb-12">
                    <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        {skillsData.title}
                    </h2>
                    <p className="font-sans text-lg sm:text-xl text-[var(--color-neutral-content)] max-w-3xl mx-auto">
                        {skillsData.description}
                    </p>
                </div>

                {/* Grid de categorías */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
                    {skillsData.categories.map((category) => (
                        <div key={category.id} className="group">
                            {/* Card de categoría */}
                            <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] hover:border-[var(--color-primary)] rounded-[var(--radius-box)] p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20">
                                {/* Título de la categoría */}
                                <div className="text-center mb-6">
                                    <h3 className="font-mono text-xl font-bold text-[var(--color-primary)] mb-2">
                                        {category.name}
                                    </h3>
                                    <div className="h-1 w-12 bg-[var(--color-primary)] mx-auto rounded-full"></div>
                                </div>

                                {/* Grid de tecnologías */}
                                <div className="grid grid-cols-4 gap-3 mb-4">
                                    {getVisibleSkills(category).map((skill, index) => (
                                        <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
                                    ))}
                                </div>

                                {/* Botón de expansión */}
                                {shouldShowExpandButton(category) && (
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => toggleCategory(category.id)}
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-[var(--color-primary)] hover:text-[var(--color-primary-content)] hover:bg-[var(--color-primary)] border border-[var(--color-primary)] rounded-[var(--radius-field)] transition-all duration-300 cursor-pointer"
                                        >
                                            {isExpanded(category.id) ? (
                                                <>
                                                    <span>Contraer</span>
                                                    <ChevronUp size={16} />
                                                </>
                                            ) : (
                                                <>
                                                    <span>Ver más ({category.skills.length - 4})</span>
                                                    <ChevronDown size={16} />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsCarousel