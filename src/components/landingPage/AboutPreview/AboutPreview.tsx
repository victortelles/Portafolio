import React from "react"
import { ArrowRight, Monitor, Server, Database, GitBranch } from "lucide-react"
import ProfileCard from "./ProfileCard"
import FloatingTech from "./FloatingTech"
import content from "./aboutPreviewData.json"
import type { AboutPreviewData } from "@/types/landingPage"

const iconMap: Record<string, React.ComponentType<any>> = {
    monitor: Monitor,
    server: Server,
    database: Database,
    "git-branch": GitBranch,
}

const AboutPreview: React.FC = () => {
    const data = content as AboutPreviewData

    return (
        <section className="py-20 bg-[var(--color-base-100)] relative overflow-hidden">
            {/* Floating Tech Icons */}
            {data.floatingTech.map((tech, index) => (
                <FloatingTech key={index} tech={tech} />
            ))}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--color-base-content)] mb-6">
                        {data.title}
                    </h2>
                    <p className="font-sans text-lg text-[var(--color-neutral-content)]/80 max-w-2xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Role Cards Grid */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {data.roleCards.map((card, index) => {
                                const IconComponent = iconMap[card.icon]
                                return (
                                    <div
                                        key={index}
                                        className="bg-[var(--color-base-200)] border border-[var(--color-neutral)] rounded-[var(--radius-box)] p-6 hover:border-[var(--color-primary)] transition-colors group"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/20 flex items-center justify-center">
                                                <IconComponent
                                                    size={20}
                                                    className="text-[var(--color-primary)]"
                                                />
                                            </div>
                                            <h3 className="font-mono text-lg font-semibold text-[var(--color-base-content)]">
                                                {card.title}
                                            </h3>
                                        </div>
                                        <p className="font-sans text-sm text-[var(--color-neutral-content)]/80 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center sm:text-left">
                            <a
                                href={data.cta.href}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/80 text-[var(--color-primary-content)] rounded-[var(--radius-selector)] transition-colors text-lg font-semibold group"
                            >
                                {data.cta.label}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Profile Card */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-md">
                            <ProfileCard profileCard={data.profileCard} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPreview