import type React from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { FaChevronDown } from "react-icons/fa"
import content from "./content.json"

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Static Background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-[var(--color-base-200)] to-[var(--color-base-100)]"
                style={{
                    backgroundImage: `url('${content.backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-base-content)] mb-6 leading-tight">
                        {content.title}
                    </h1>

                    <p className="font-sans text-xl sm:text-2xl text-[var(--color-neutral-content)] mb-8 leading-relaxed">
                        {content.subtitle}
                    </p>

                    <p className="font-sans text-lg text-[var(--color-neutral-content)]/80 mb-12 max-w-2xl mx-auto">
                        {content.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href={content.primaryCTA.href}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-primary-content)] rounded-[var(--radius-selector)] transition-colors text-lg font-semibold group"
                        >
                            {content.primaryCTA.label}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href={content.secondaryCTA.href}
                            className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--color-base-300)] hover:border-[var(--color-primary)] text-[var(--color-base-content)] hover:text-[var(--color-primary)] rounded-[var(--radius-selector)] transition-colors text-lg font-semibold"
                        >
                            <MessageCircle size={20} />
                            {content.secondaryCTA.label}
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator: arrow animated */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
                <FaChevronDown size={32} className="text-[var(--color-base-content)]/70" />
            </div>
        </section>
    )
}

export default HeroSection
