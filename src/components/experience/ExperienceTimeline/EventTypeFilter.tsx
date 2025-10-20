"use client"

import React from "react"
import { FaGraduationCap, FaCertificate, FaProjectDiagram, FaBriefcase } from "react-icons/fa"
import type { EventTypeFilterProps } from "@/types/experience"

const EventTypeFilter: React.FC<EventTypeFilterProps> = ({
    eventTypes,
    activeFilter,
    onFilterChange
}) => {
    const getIcon = (iconName: string) => {
        const iconMap: { [key: string]: React.ComponentType<any> } = {
            FaGraduationCap,
            FaCertificate,
            FaProjectDiagram,
            FaBriefcase
        }
        return iconMap[iconName] || FaBriefcase
    }

    return (
    <div className="flex flex-wrap gap-2 mb-4">
            {/* Botón "Todos" */}
            <button
                onClick={() => onFilterChange("all")}
                className="flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm font-medium transition-all duration-300"
                style={{
                    backgroundColor: activeFilter === "all" ? "var(--color-primary)" : "var(--color-base-200)",
                    color: activeFilter === "all" ? "var(--color-primary-content)" : "var(--color-base-content)",
                    boxShadow: activeFilter === "all" ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
                    cursor: "pointer"
                }}
            >
                Todos
            </button>

            {/* Botones de tipos de eventos */}
            {eventTypes.map((eventType) => {
                const IconComponent = getIcon(eventType.icon)
                const isActive = activeFilter === eventType.id

                return (
                    <button
                        key={eventType.id}
                        onClick={() => onFilterChange(eventType.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm font-medium transition-all duration-300 hover:scale-105 ${isActive
                            ? "shadow-lg transform scale-105"
                            : "hover:shadow-md"
                            }`}
                        style={{
                            backgroundColor: isActive
                                ? eventType.color
                                : `${eventType.color}15`,
                            color: isActive
                                ? "#ffffff"
                                : eventType.color,
                            borderColor: eventType.color,
                            border: `2px solid ${eventType.color}`,
                            cursor: "pointer"
                        }}
                    >
                        <IconComponent className="text-sm" />
                        {eventType.name}
                    </button>
                )
            })}
        </div>
    )
}

export default EventTypeFilter