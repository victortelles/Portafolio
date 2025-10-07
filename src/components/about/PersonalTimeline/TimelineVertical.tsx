"use client"

import React, { useState } from "react"
import { FaChevronDown, FaChevronUp, FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from "react-icons/fa"

interface TimelineEvent {
    id: number
    year: string
    quarter: string
    title: string
    type: string
    icon: string
    description: string
    details: string[]
    technologies: string[]
    achievements: string[]
    location: string
}

interface TimelineVerticalProps {
    events: TimelineEvent[]
}

const TimelineVertical: React.FC<TimelineVerticalProps> = ({ events }) => {
    const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

    const getTypeColor = (type: string) => {
        const colors = {
            'education': 'text-[var(--color-primary)]',
            'learning': 'text-[var(--color-secondary)]',
            'work': 'text-[var(--color-success)]',
            'project': 'text-[var(--color-accent)]',
            'future': 'text-[var(--color-warning)]'
        }
        return colors[type as keyof typeof colors] || 'text-[var(--color-primary)]'
    }

    const getTypeBorder = (type: string) => {
        const colors = {
            'education': 'border-[var(--color-primary)]',
            'learning': 'border-[var(--color-secondary)]',
            'work': 'border-[var(--color-success)]',
            'project': 'border-[var(--color-accent)]',
            'future': 'border-[var(--color-warning)]'
        }
        return colors[type as keyof typeof colors] || 'border-[var(--color-primary)]'
    }

    const getTypeBg = (type: string) => {
        const colors = {
            'education': 'bg-[var(--color-primary)]',
            'learning': 'bg-[var(--color-secondary)]',
            'work': 'bg-[var(--color-success)]',
            'project': 'bg-[var(--color-accent)]',
            'future': 'bg-[var(--color-warning)]'
        }
        return colors[type as keyof typeof colors] || 'bg-[var(--color-primary)]'
    }

    const getTypeLabel = (type: string) => {
        const labels = {
            'education': 'Educación',
            'learning': 'Aprendizaje',
            'work': 'Trabajo',
            'project': 'Proyecto',
            'future': 'Futuro'
        }
        return labels[type as keyof typeof labels] || 'Evento'
    }

    const toggleExpand = (eventId: number) => {
        setExpandedEvent(expandedEvent === eventId ? null : eventId)
    }

    return (
        <div className="relative">
            {/* Línea vertical principal */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-base-300)]"></div>

            {events.map((event, index) => (
                <div key={event.id} className="relative mb-12 last:mb-0">
                    {/* Punto de la línea de tiempo */}
                    <div className={`absolute left-4 w-4 h-4 ${getTypeBg(event.type)} rounded-full border-4 border-[var(--color-base-100)] z-10`}>
                        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current"></div>
                    </div>

                    {/* Contenido del evento */}
                    <div className="ml-16">
                        <div
                            className={`bg-[var(--color-base-200)] border-2 ${getTypeBorder(event.type)} rounded-[var(--radius-box)] p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-current/10`}
                            onClick={() => toggleExpand(event.id)}
                        >
                            {/* Header del evento */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="text-2xl">{event.icon}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`font-mono text-lg font-bold ${getTypeColor(event.type)}`}>
                                                {event.year} {event.quarter}
                                            </span>
                                            <span className={`px-2 py-1 text-xs font-mono rounded-[var(--radius-field)] ${getTypeColor(event.type)} bg-[var(--color-base-300)]`}>
                                                {getTypeLabel(event.type)}
                                            </span>
                                        </div>
                                        <h3 className="font-mono text-xl font-bold text-[var(--color-base-content)] mb-2">
                                            {event.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-[var(--color-neutral-content)] mb-3">
                                            <div className="flex items-center gap-1">
                                                <FaCalendarAlt size={12} />
                                                <span className="font-sans">{event.year}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaMapMarkerAlt size={12} />
                                                <span className="font-sans">{event.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className={`flex-shrink-0 p-2 ${getTypeColor(event.type)} hover:bg-[var(--color-base-300)] rounded-[var(--radius-field)] transition-colors duration-300`}>
                                    {expandedEvent === event.id ? (
                                        <FaChevronUp size={14} />
                                    ) : (
                                        <FaChevronDown size={14} />
                                    )}
                                </button>
                            </div>

                            {/* Descripción principal */}
                            <p className="font-sans text-[var(--color-neutral-content)] leading-relaxed mb-4">
                                {event.description}
                            </p>

                            {/* Tecnologías utilizadas */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {event.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 bg-[var(--color-base-300)] text-[var(--color-base-content)] text-xs font-mono rounded-[var(--radius-field)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Contenido expandible */}
                            {expandedEvent === event.id && (
                                <div className="border-t border-[var(--color-base-300)] pt-4 mt-4">
                                    {/* Detalles */}
                                    <div className="mb-4">
                                        <h5 className="font-mono text-sm font-bold text-[var(--color-base-content)] mb-2">
                                            Detalles del período:
                                        </h5>
                                        <ul className="space-y-1">
                                            {event.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-2 font-sans text-sm text-[var(--color-neutral-content)]">
                                                    <span className={`w-1.5 h-1.5 rounded-full ${getTypeBg(event.type)} mt-2 flex-shrink-0`}></span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Logros */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaTrophy size={14} className={getTypeColor(event.type)} />
                                            <h5 className="font-mono text-sm font-bold text-[var(--color-base-content)]">
                                                Logros principales:
                                            </h5>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {event.achievements.map((achievement, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`px-3 py-1 text-xs font-mono rounded-[var(--radius-field)] ${getTypeColor(event.type)} bg-[var(--color-base-100)] border ${getTypeBorder(event.type)}`}
                                                >
                                                    {achievement}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TimelineVertical