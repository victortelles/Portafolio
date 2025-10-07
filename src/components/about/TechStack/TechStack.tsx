"use client"

import React, { useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import TechCard from "./TechCard"
import techStackData from "./techStackData.json"
import type { TechStackData } from "@/types/about-me"

const TechStack: React.FC = () => {
    const { sectionTitle, sectionDescription, categories } = techStackData as TechStackData

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps"
        },
        [
            Autoplay({
                delay: 8000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                playOnInit: true
            })
        ]
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const getCategoryColorClasses = (color: string) => {
        const colorMap: { [key: string]: { text: string, border: string, bg: string } } = {
            primary: {
                text: 'text-[var(--color-primary)]',
                border: 'border-[var(--color-primary)]',
                bg: 'bg-[var(--color-primary)]/10'
            },
            secondary: {
                text: 'text-[var(--color-secondary)]',
                border: 'border-[var(--color-secondary)]',
                bg: 'bg-[var(--color-secondary)]/10'
            },
            accent: {
                text: 'text-[var(--color-accent)]',
                border: 'border-[var(--color-accent)]',
                bg: 'bg-[var(--color-accent)]/10'
            },
            warning: {
                text: 'text-[var(--color-warning)]',
                border: 'border-[var(--color-warning)]',
                bg: 'bg-[var(--color-warning)]/10'
            },
            success: {
                text: 'text-[var(--color-success)]',
                border: 'border-[var(--color-success)]',
                bg: 'bg-[var(--color-success)]/10'
            }
        }
        return colorMap[color] || colorMap.primary
    }

    return (
        <section className="relative py-20 lg:py-32 px-4 lg:px-8 bg-[var(--color-base-200)]">
            {/* Background decorativo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 -right-48 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <div className="text-center mb-16">
                    <h2 className="font-mono text-3xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        {sectionTitle}
                    </h2>
                    <p className="font-sans text-lg text-[var(--color-neutral-content)] max-w-3xl mx-auto">
                        {sectionDescription}
                    </p>
                </div>

                {/* Carousel container */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {categories.map((category) => {
                            const colorClasses = getCategoryColorClasses(category.color)
                            return (
                                <div key={category.id} className="flex-none w-full px-4">
                                    {/* Card grande de categoría */}
                                    <div className={`bg-[var(--color-base-100)] border-2 ${colorClasses.border} rounded-[var(--radius-box)] p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
                                        {/* Header de la categoría */}
                                        <div className="text-center mb-8">
                                            <h3 className={`font-mono text-2xl lg:text-3xl font-bold ${colorClasses.text} mb-3`}>
                                                {category.name}
                                            </h3>
                                            <p className="font-sans text-[var(--color-neutral-content)] max-w-md mx-auto">
                                                {category.description}
                                            </p>
                                        </div>

                                        {/* Grid de tecnologías (mini cards) */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {category.technologies.map((tech) => (
                                                <TechCard key={tech.id} tech={tech} />
                                            ))}
                                        </div>

                                        {/* Footer con contador */}
                                        <div className="mt-8 text-center">
                                            <div className={`inline-flex items-center gap-2 px-4 py-2 ${colorClasses.bg} border ${colorClasses.border}/20 rounded-[var(--radius-field)]`}>
                                                <span className={`font-mono text-sm font-bold ${colorClasses.text}`}>
                                                    {category.technologies.length} tecnologías
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Indicadores y controles */}
                <div className="flex items-center justify-center gap-6 mt-8">
                    {/* Botón anterior */}
                    <button
                        onClick={scrollPrev}
                        className="p-3 bg-[var(--color-base-100)] border border-[var(--color-base-300)] rounded-[var(--radius-field)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all duration-300"
                        aria-label="Categoría anterior"
                    >
                        <svg
                            className="w-5 h-5 text-[var(--color-base-content)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Indicadores de categorías */}
                    <div className="flex gap-2">
                        {categories.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-[var(--color-base-300)] opacity-50"
                            />
                        ))}
                    </div>

                    {/* Botón siguiente */}
                    <button
                        onClick={scrollNext}
                        className="p-3 bg-[var(--color-base-100)] border border-[var(--color-base-300)] rounded-[var(--radius-field)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all duration-300"
                        aria-label="Siguiente categoría"
                    >
                        <svg
                            className="w-5 h-5 text-[var(--color-base-content)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TechStack