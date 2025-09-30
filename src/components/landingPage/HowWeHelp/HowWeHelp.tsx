import type React from "react"
import { CheckCircle } from "lucide-react"
import content from "./content.json"

const HowWeHelp: React.FC = () => {
    return (
        <section className="py-20 bg-[var(--color-base-100)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                            {content.title}
                        </h2>
                        <p className="text-lg sm:text-xl text-[var(--color-neutral-content)]">{content.subtitle}</p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {content.benefits.map((benefit, idx) => (
                            <div
                                key={`${benefit.title}-${idx}`}
                                className="flex gap-4 p-6 bg-[var(--color-base-200)] rounded-[var(--radius-box)] border border-[var(--color-base-300)] hover:border-[var(--color-primary)]/30 transition-colors"
                            >
                                <div className="flex-shrink-0">
                                    <CheckCircle size={24} className="text-[var(--color-success)] mt-1" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-[var(--color-base-content)] mb-2">{benefit.title}</h3>
                                    <p className="text-[var(--color-neutral-content)] leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWeHelp
