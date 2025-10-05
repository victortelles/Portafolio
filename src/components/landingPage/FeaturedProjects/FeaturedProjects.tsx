import type React from "react"
import { FaArrowRight } from "react-icons/fa"
import ProjectCard from "./ProjectCard"
import content from "./featuredProjectsData.json"
import type { FeaturedProjectsData } from "@/types/landingPage"

const FeaturedProjects: React.FC = () => {
    const projectsData = content as FeaturedProjectsData

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-base-200)]">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <div className="text-center mb-12">
                    <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        {projectsData.title}
                    </h2>
                    <p className="font-sans text-lg sm:text-xl text-[var(--color-neutral-content)] max-w-3xl mx-auto">
                        {projectsData.description}
                    </p>
                </div>

                {/* Grid de proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
                    {projectsData.projects
                        .filter(project => project.featured)
                        .map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a
                        href={projectsData.cta.href}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-info)] text-[var(--color-primary-content)] hover:text-[var(--color-info-content)] rounded-[var(--radius-selector)] transition-all duration-300 text-lg font-mono font-semibold group shadow-lg hover:shadow-[var(--color-primary)]/40"
                    >
                        {projectsData.cta.label}
                        <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects