"use client"

import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FaSearch } from "react-icons/fa"
import EventTypeFilter from "./EventTypeFilter"
import SearchFilter from "./SearchFilter"
import TimelineCard from "./TimelineCard"
import timelineData from "./experienceTimelineData.json"
import heroData from "../ExperienceHero/experienceHeroData.json"
import type { Experience, EventType } from "@/types/experience"

const ExperienceTimeline: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>("all")
    const [searchTerm, setSearchTerm] = useState<string>("")

    // Obtenemos los tipos de eventos del heroData
    const eventTypes: EventType[] = heroData.eventTypes

    // Mapa para obtener fácilmente los datos del tipo de evento
    const eventTypeMap = useMemo(() => {
        const map: { [key: string]: EventType } = {}
        eventTypes.forEach(eventType => {
            map[eventType.id] = eventType
        })
        return map
    }, [eventTypes])

    // Filtramos las experiencias según el filtro activo y término de búsqueda
    const filteredExperiences = useMemo(() => {
        let filtered = timelineData.experiences

        // Filtrar por tipo de evento
        if (activeFilter !== "all") {
            filtered = filtered.filter(exp => exp.eventType === activeFilter)
        }

        // Filtrar por término de búsqueda
        if (searchTerm.trim()) {
            const searchLower = searchTerm.toLowerCase()
            filtered = filtered.filter(exp =>
                exp.title.toLowerCase().includes(searchLower) ||
                exp.organization.toLowerCase().includes(searchLower) ||
                exp.description.toLowerCase().includes(searchLower) ||
                exp.role.toLowerCase().includes(searchLower) ||
                exp.technologies.some(tech => tech.toLowerCase().includes(searchLower)) ||
                exp.keyAchievements.some(achievement => achievement.toLowerCase().includes(searchLower))
            )
        }

        return filtered
    }, [activeFilter, searchTerm])

    return (
    <section className="py-16 px-4 max-w-4xl mx-auto" style={{ overflowX: "hidden" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Título de la sección */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono" style={{ color: "var(--color-base-content)" }}>
                        Mi <span style={{ color: "var(--color-primary)" }}>Trayectoria</span>
                    </h2>
                    <p className="text-lg font-sans max-w-3xl mx-auto" style={{ color: "var(--color-neutral-content)" }}>
                        Explora mi experiencia profesional y académica a través del tiempo
                    </p>
                </div>

                {/* Controles de filtrado */}
                <div className="mb-8">
                    <EventTypeFilter
                        eventTypes={eventTypes}
                        activeFilter={activeFilter}
                        onFilterChange={setActiveFilter}
                    />

                    <SearchFilter
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        placeholder="Buscar por título, organización, tecnología..."
                    />
                </div>

                {/* Contador de resultados */}
                <div className="mb-6">
                    <p className="text-sm font-mono" style={{ color: "var(--color-neutral-content)" }}>
                        {filteredExperiences.length === timelineData.experiences.length
                            ? `Mostrando todas las experiencias (${filteredExperiences.length})`
                            : `Mostrando ${filteredExperiences.length} de ${timelineData.experiences.length} experiencias`
                        }
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative min-h-[200px]">
                    {filteredExperiences.length > 0 ? (
                        <div className="space-y-0">
                            {filteredExperiences.map((experience, index) => {
                                const eventType = eventTypeMap[experience.eventType]

                                if (!eventType) {
                                    console.warn(`EventType not found for: ${experience.eventType}`)
                                    return null
                                }

                                return (
                                    <motion.div
                                        key={experience.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            duration: 0.2,
                                            delay: index * 0.05,
                                            ease: "easeOut"
                                        }}
                                        layout="position"
                                    >
                                        <TimelineCard
                                            experience={experience}
                                            eventType={eventType}
                                            isLast={index === filteredExperiences.length - 1}
                                        />
                                    </motion.div>
                                )
                            })}
                        </div>
                    ) : (
                        <motion.div
                            className="text-center py-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-6xl mb-4">
                                <FaSearch className="mx-auto" style={{ color: "var(--color-neutral-content)" }} />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 font-sans" style={{ color: "var(--color-base-content)" }}>
                                No se encontraron experiencias
                            </h3>
                            <p className="text-lg font-sans" style={{ color: "var(--color-neutral-content)" }}>
                                Intenta ajustar los filtros o el término de búsqueda
                            </p>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </section>
    )
}

export default ExperienceTimeline