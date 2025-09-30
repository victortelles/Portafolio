import type React from "react"
import { Book, Code, Download } from "lucide-react"
import * as Separator from "@radix-ui/react-separator"
import content from "./content.json"

const iconMap = {
    book: Book,
    code: Code,
    download: Download,
}

const WhatWeOffer: React.FC = () => {
    return (
        <section className="py-20 bg-[var(--color-base-100)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        {content.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-[var(--color-neutral-content)] max-w-2xl mx-auto">{content.subtitle}</p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {content.features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon as keyof typeof iconMap]

                        return (
                            <div key={feature.title} className="relative">
                                <div className="bg-[var(--color-base-200)] rounded-[var(--radius-box)] p-8 h-full border border-[var(--color-base-300)] hover:border-[var(--color-primary)]/30 transition-colors hover:shadow-[0_0_24px_0_var(--color-primary)]">
                                    <div className="flex items-center justify-center w-16 h-16 bg-[var(--color-primary)]/10 rounded-[var(--radius-selector)] mb-6">
                                        <IconComponent size={32} className="text-[var(--color-primary)]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-[var(--color-base-content)] mb-4">{feature.title}</h3>

                                    <p className="text-[var(--color-neutral-content)] leading-relaxed">{feature.description}</p>
                                </div>

                                {/* Separator for large screens */}
                                {index < content.features.length - 1 && (
                                    <Separator.Root
                                        className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[var(--color-base-300)]"
                                        orientation="horizontal"
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Banner */}
                <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-[var(--radius-box)] p-8 sm:p-12 text-center">
                    <div
                        className="h-32 sm:h-48 bg-[var(--color-base-300)] rounded-[var(--radius-field)] mb-8 flex items-center justify-center"
                        style={{
                            backgroundImage: `url('/placeholder.svg?height=200&width=800')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="text-[var(--color-neutral-content)]/50 text-sm">Banner Placeholder</div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-base-content)] mb-4">
                        {content.banner.title}
                    </h3>

                    <p className="text-lg text-[var(--color-neutral-content)]">{content.banner.description}</p>
                </div>
            </div>
        </section>
    )
}

export default WhatWeOffer
