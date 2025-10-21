"use client"

import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FaSearch } from "react-icons/fa"
import EventTypeFilter from "./EventTypeFilter"
import SearchFilter from "./SearchFilter"
import TimelineCard from "./TimelineCard"
import timelineData from "./experienceTimelineData.json"
import heroData from "../ExperienceHero/experienceHeroData.json"
import type { Experience, EventType, ExperienceTimelineData } from "@/types/experience"

const ExperienceTimeline: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>("all")
    const [searchTerm, setSearchTerm] = useState<string>("")

    // Obtenemos los datos del timeline
    const data = timelineData as ExperienceTimelineData
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
        let filtered = data.experiences

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
        <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 w-full" style={{ overflowX: "hidden" }}>
            <div className="max-w-none w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Título de la sección */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono" style={{ color: "var(--color-base-content)" }}>
                            {data.sectionTitle} <span style={{ color: "var(--color-primary)" }}>{data.sectionTitleAccent}</span>
                        </h2>
                        <p className="text-lg font-sans max-w-3xl mx-auto" style={{ color: "var(--color-neutral-content)" }}>
                            {data.sectionDescription}
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
                        {filteredExperiences.length === data.experiences.length
                            ? `${data.resultsText.showingAll} (${filteredExperiences.length})`
                            : `${data.resultsText.showingFiltered} ${filteredExperiences.length} ${data.resultsText.of} ${data.experiences.length} ${data.resultsText.experiencesLabel}`
                        }
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative min-h-[200px] w-full max-w-none flex justify-center">
                    {filteredExperiences.length > 0 ? (
                        <div className="space-y-0 w-full">
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
                                            cardLabels={data.cardLabels}
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
                                {data.noResultsFound.title}
                            </h3>
                            <p className="text-lg font-sans" style={{ color: "var(--color-neutral-content)" }}>
                                {data.noResultsFound.description}
                            </p>
                        </motion.div>
                    )}
                </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ExperienceTimeline