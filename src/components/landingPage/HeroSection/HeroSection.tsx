import type React from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import { FaChevronDown } from "react-icons/fa"
import TerminalAnimation from "./TerminalAnimation"
import BadgeComponent from "./BadgeComponent"
import content from "./heroSectionData.json"
import terminalData from "./terminalData.json"
import type { HeroSectionData, TerminalData } from "@/types/landingPage"

const HeroSection: React.FC = () => {
    const heroData = content as Omit<HeroSectionData, 'terminal'>
    const terminal = terminalData as TerminalData

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

            {/* Static Background */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-[var(--color-base-200)] to-[var(--color-base-100)]"
                style={{
                    backgroundImage: `url('${heroData.backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-5xl mx-auto">

                    {/* Terminal Animation */}
                    <TerminalAnimation data={terminal} />

                    {/* Main Title */}
                    <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="text-[var(--color-base-content)]">{heroData.title.prefix}</span>{" "}
                        <span className="text-[var(--color-primary)]">{heroData.title.main}</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="font-sans text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--color-neutral-content)] mb-12 leading-relaxed max-w-3xl mx-auto">
                        {heroData.subtitle}
                    </p>

                    {/* Badges Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                        {heroData.badges.map((badge, index) => (
                            <BadgeComponent key={index} badge={badge} />
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a
                            href={heroData.primaryCTA.href}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-info)] text-[var(--color-primary-content)] hover:text-[var(--color-info-content)] rounded-[var(--radius-selector)] transition-all duration-300 text-lg font-mono font-semibold group shadow-lg hover:shadow-[var(--color-primary)]/40"
                        >
                            {heroData.primaryCTA.label}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={heroData.secondaryCTA.href}
                            className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--color-base-300)] hover:border-[var(--color-primary)] text-[var(--color-base-content)] hover:text-[var(--color-primary)] rounded-[var(--radius-selector)] transition-colors text-lg font-semibold"
                        >
                            <MessageCircle size={20} />
                            {heroData.secondaryCTA.label}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection