"use client"

import React from "react"
import HobbyCard from "./HobbyCard"
import hobbiesData from "./hobbiesData.json"
import type { HobbiesSectionData } from "@/types/about-me"

const HobbiesSection: React.FC = () => {
    const { sectionTitle, sectionDescription, hobbies } = hobbiesData as HobbiesSectionData

    return (
        <section className="relative py-20 lg:py-32 px-4 lg:px-8 bg-[var(--color-base-100)]">
            {/* Background decorativo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-48 w-80 h-80 bg-[var(--color-secondary)]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <div className="text-center mb-16">
                    { /* Titulo */}
                    <h2 className="font-mono text-3xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        {sectionTitle}
                    </h2>

                    { /* Descripción */}
                    <p className="font-sans text-lg text-[var(--color-neutral-content)] max-w-3xl mx-auto">
                        {sectionDescription}
                    </p>
                </div>

                {/* Grid de hobbies */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {hobbies.map((hobby) => (
                        <HobbyCard key={hobby.id} hobby={hobby} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HobbiesSection