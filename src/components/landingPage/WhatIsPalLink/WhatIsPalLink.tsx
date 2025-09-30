"use client";

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import content from "./content.json"

const WhatIsPalLink: React.FC = () => {
    const cards = content.cards || []
    const [current, setCurrent] = useState(0)
    const card = cards[current] || {}

    // Navigation handlers with limits
    const prev = () => {
        if (current > 0) setCurrent((prev) => prev - 1)
    }
    const next = () => {
        if (current < cards.length - 1) setCurrent((prev) => prev + 1)
    }

    return (
    // Section: About - What is PalLink
        <section className="relative w-full py-10 sm:py-12 lg:py-16 bg-[var(--color-base-200)]">
            {/* Main content container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header: Title and short description */}
                <div className="rounded-[var(--radius-box)] bg-[var(--color-base-100)] p-6 sm:p-8 border border-[var(--color-base-300)]">
                    <div className="max-w-3xl">
                        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--color-base-content)] mb-3">
                            What is PalLink
                        </h2>
                        <p className="font-sans text-base sm:text-lg text-[var(--color-neutral-content)]">
                            {content.whatDescription ?? content.subtitle}
                        </p>
                    </div>
                </div>

                {/* Card: Image (left) and text (right) */}
                <div className="relative mt-6 sm:mt-8 rounded-[var(--radius-box)] bg-[var(--color-base-100)] border border-[var(--color-base-300)] p-4 sm:p-6 lg:p-8 lg:h-[420px] flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.5fr] gap-8 lg:gap-10 w-full h-full">
                        {/* Image - container */}
                        <div className="flex items-center justify-center h-full">
                            <div className="relative w-full max-w-xs h-2/3 md:h-3/4">
                                <img
                                    src={card.panelImage || "/src/assets/placeholder-image.svg"}
                                    alt={card.panelImageAlt || "Feature preview"}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Text - container */}
                        <div className="flex flex-col justify-center h-full w-full">
                            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
                                <h3 className="font-mono text-2xl sm:text-3xl font-semibold text-[var(--color-base-content)] mb-4">
                                    {card.panelTitle || "An amazing service"}
                                </h3>
                                <p className="font-sans text-base sm:text-lg text-[var(--color-neutral-content)] max-w-prose">
                                    {card.panelDescription || content.description}
                                </p>
                                {/* Mobile controls: below text, centered */}
                                <div className="md:hidden flex items-center justify-center gap-3 mt-6 w-full">
                                    <button
                                        type="button"
                                        aria-label="Previous"
                                        onClick={prev}
                                        disabled={current === 0}
                                        className={`h-11 w-11 rounded-full border border-[var(--color-base-300)] text-[var(--color-base-content)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors bg-[var(--color-base-100)]/60 backdrop-blur ${current === 0 ? 'opacity-30 cursor-default pointer-events-none' : ''}`}
                                    >
                                        <ChevronLeft className="mx-auto" size={20} />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Next"
                                        onClick={next}
                                        disabled={current === cards.length - 1}
                                        className={`h-11 w-11 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-content)] hover:bg-[var(--color-primary-hover)] transition-colors ${current === cards.length - 1 ? 'opacity-30 cursor-default pointer-events-none' : ''}`}
                                    >
                                        <ChevronRight className="mx-auto" size={20} />
                                    </button>
                                </div>
                            </div>
                            {/* Controls: centered horizontally on tablet/desktop (md+) */}
                            <div className="hidden md:flex flex-row gap-3 justify-center items-center w-full mt-6">
                                <button
                                    type="button"
                                    aria-label="Previous"
                                    onClick={prev}
                                    disabled={current === 0}
                                    className={`h-11 w-11 rounded-full border border-[var(--color-base-300)] text-[var(--color-base-content)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors bg-[var(--color-base-100)]/60 backdrop-blur ${current === 0 ? 'opacity-30 cursor-default pointer-events-none' : ''}`}
                                >
                                    <ChevronLeft className="mx-auto" size={20} />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Next"
                                    onClick={next}
                                    disabled={current === cards.length - 1}
                                    className={`h-11 w-11 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-content)] hover:bg-[var(--color-primary-hover)] transition-colors ${current === cards.length - 1 ? 'opacity-30 cursor-default pointer-events-none' : ''}`}
                                >
                                    <ChevronRight className="mx-auto" size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatIsPalLink
