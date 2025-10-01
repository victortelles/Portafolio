import type React from "react"
import { ArrowRight, User, Code, Database, Server } from "lucide-react"
import content from "./aboutPreviewData.json"

const AboutPreview: React.FC = () => {
    return (
        <section className="py-20 bg-[var(--color-base-100)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="lg:order-1">
                        <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--color-base-content)] mb-6">
                            {content.title}
                        </h2>

                        <p className="font-sans text-lg text-[var(--color-neutral-content)]/80 mb-8 leading-relaxed">
                            {content.description}
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {content.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></div>
                                    <span className="font-sans text-sm text-[var(--color-base-content)]">
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <a
                            href={content.cta.href}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/80 text-[var(--color-primary-content)] rounded-[var(--radius-selector)] transition-colors font-semibold group"
                        >
                            {content.cta.label}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Profile Card */}
                    <div className="lg:order-2">
                        <div className="relative">
                            {/* Main Card */}
                            <div className="bg-[var(--color-base-200)] border border-[var(--color-neutral)] rounded-[var(--radius-box)] p-8 relative overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute top-4 right-4">
                                        <Code size={24} className="text-[var(--color-primary)]" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <Database size={20} className="text-[var(--color-accent)]" />
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Server size={32} className="text-[var(--color-secondary)]" />
                                    </div>
                                </div>

                                {/* Profile Content */}
                                <div className="relative z-10 text-center">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[var(--color-primary)] bg-[var(--color-base-300)]">
                                        <img
                                            src={content.profileImage}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <User size={18} className="text-[var(--color-primary)]" />
                                        <span className="font-mono text-lg font-semibold text-[var(--color-base-content)]">
                                            Full Stack Developer
                                        </span>
                                    </div>

                                    <p className="font-sans text-sm text-[var(--color-neutral-content)]/70">
                                        Creando soluciones tecnológicas innovadoras
                                    </p>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--color-accent)] rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[var(--color-secondary)] rounded-full animate-pulse delay-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPreview