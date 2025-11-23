"use client"

import type React from "react"
import { FaArrowRight } from "react-icons/fa"
import ProjectCard from "./ProjectCard"
import content from "./featuredProjectsData.json"
import type { FeaturedProjectsData } from "@/types/landingPage"
import { motion } from "framer-motion"

const FeaturedProjects: React.FC = () => {
    const projectsData = content as FeaturedProjectsData

    return (
        <section id="proyectos" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-base-200)]">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-12"
                >
                    {/* Título */}
                    <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        &lt;{projectsData.title.split(' ').slice(0, -1).join(' ')} <span className="text-[var(--color-primary)]">{projectsData.title.split(' ').slice(-1)}</span> /&gt;
                    </h2>

                    {/* Descripción */}
                    <p className="font-sans text-lg text-[var(--color-neutral-content)]/80 max-w-3xl mx-auto leading-relaxed text-justify px-6 py-4">
                        {projectsData.description}
                    </p>
                </motion.div>

                {/* Grid de proyectos */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.18
                            }
                        }
                    }}
                >
                    {projectsData.projects
                        .filter(project => project.featured)
                        .map((project) => (
                            <motion.div
                                key={project.id}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                                }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                </motion.div>

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