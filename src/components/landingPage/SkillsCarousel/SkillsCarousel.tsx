"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import SkillBadge from "./SkillBadge"
import content from "./skillsData.json"
import type { SkillsCarouselData, SkillCategory } from "@/types/landingPage"

const SkillsCarousel: React.FC = () => {
    const skillsData = content as unknown as SkillsCarouselData
    const [expandedCategories, setExpandedCategories] = useState<string[]>([])

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        )
    }

    const isExpanded = (categoryId: string) => expandedCategories.includes(categoryId)

    // Variable para expandir o contraer la lista de tecnologías
    const shouldShowExpandButton = (category: SkillCategory) => {
        return category.skills.length > 4
    }

    return (
        <section className="py-20 bg-[var(--color-base-100)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado de la sección */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-12"
                >
                    {/* Título */}
                    <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        &lt;{skillsData.title.split(' ').slice(0, -1).join(' ')} <span className="text-[var(--color-primary)]">{skillsData.title.split(' ').slice(-1)}</span> /&gt;
                    </h2>
                    {/* Descripción */}
                    <p className="font-sans text-lg text-[var(--color-neutral-content)]/80 max-w-3xl mx-auto leading-relaxed text-justify px-6 py-4">
                        {skillsData.description}
                    </p>
                </motion.div>

                {/* Grid de categorías*/}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 items-start"
                >
                    {skillsData.categories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className="group"
                        >
                            {/* Card de categoría */}
                            <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] hover:border-[var(--color-primary)] rounded-[var(--radius-box)] p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 flex flex-col">
                                {/* Título de la categoría */}
                                <div className="text-center mb-6">
                                    <h3 className="font-mono text-xl font-bold text-[var(--color-primary)] mb-2">
                                        {category.name}
                                    </h3>
                                    <div className="h-1 w-12 bg-[var(--color-primary)] mx-auto rounded-full"></div>
                                </div>

                                {/* Grid de tecnologías */}
                                <div className="grid grid-cols-4 gap-3 mb-4">
                                    {/* Siempre mostrar los primeros 4 */}
                                    {category.skills.slice(0, 4).map((skill, index) => (
                                        <div key={`${skill.name}-initial-${index}`}>
                                            <SkillBadge skill={skill} />
                                        </div>
                                    ))}
                                </div>

                                {/* Contenedor expandible para el resto */}
                                <AnimatePresence>
                                    {isExpanded(category.id) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid grid-cols-4 gap-3 mb-4">
                                                {category.skills.slice(4).map((skill, index) => (
                                                    <div key={`${skill.name}-expanded-${index}`}>
                                                        <SkillBadge skill={skill} />
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Botón de expansión */}
                                {shouldShowExpandButton(category) && (
                                    <div className="flex justify-center mt-auto pt-2">
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
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default SkillsCarousel