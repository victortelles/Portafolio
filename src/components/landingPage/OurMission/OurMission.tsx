import type React from "react"
import { Target, Users, Lightbulb, Heart } from "lucide-react"
import content from "./content.json"

const OurMission: React.FC = () => {
    // icons array
    const icons = [Target, Users, Lightbulb, Heart]

    return (
        <section className="py-20 bg-[var(--color-base-200)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-8">
                            {content.title}
                        </h2>

                        <p className="text-lg sm:text-xl text-[var(--color-neutral-content)] leading-relaxed">
                            {content.description}
                        </p>
                    </div>

                    {/* Overlay: Values Grid over Decorative Elements */}
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Decorative Elements (background) */}
                        <div className="absolute inset-0 w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-8 z-0 pointer-events-none">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="h-28 sm:h-36 bg-[var(--color-base-300)] rounded-[var(--radius-field)] opacity-50 scale-110" />
                            ))}
                        </div>
                        {/* Values Grid (foreground) */}
                        <div className="relative w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10">
                            {content.values.map((value, index) => {
                                const IconComponent = icons[index]
                                return (
                                    <div
                                        key={`${value}-${index}`}
                                        className="bg-[var(--color-base-100)] rounded-[var(--radius-box)] p-6 text-center border border-[var(--color-base-300)] hover:border-[var(--color-primary)]/30 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl"
                                    >
                                        <div className="flex items-center justify-center w-12 h-12 bg-[var(--color-primary)]/10 rounded-[var(--radius-selector)] mx-auto mb-4">
                                            <IconComponent size={24} className="text-[var(--color-primary)]" />
                                        </div>
                                        <h3 className="font-semibold text-[var(--color-base-content)]">{value}</h3>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMission
