"use client"

import type React from "react"
import { useState } from "react"
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa"
import Image from "next/image"
import type { Project } from "@/types/landingPage"

interface ProjectCardProps {
    project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [imageError, setImageError] = useState(false)

    const toggleDescription = () => {
        setIsExpanded(!isExpanded)
    }

    const description = isExpanded ? project.fullDescription : project.shortDescription
    const shouldShowToggle = project.shortDescription.length !== project.fullDescription.length

    return (
        <div className="group bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] hover:border-[var(--color-primary)] rounded-[var(--radius-box)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20">
            {/* Imagen del proyecto */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
                {!imageError ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top-left transition-transform duration-300 group-hover:scale-105"
                        onError={() => setImageError(true)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectPosition: "top left" }}
                    />
                ) : (
                    <div className="w-full h-full bg-[var(--color-base-300)] flex items-center justify-center">
                        <div className="text-[var(--color-base-content)]/50 text-center">
                            <div className="text-4xl mb-2">📁</div>
                            <p className="text-sm font-mono">Imagen no disponible</p>
                        </div>
                    </div>
                )}
                {/* Overlay con botones */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--color-base-100)] text-[var(--color-base-content)] rounded-[var(--radius-field)] font-mono text-sm hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-content)] transition-colors duration-300"
                    >
                        <FaGithub size={16} />
                        <span>GitHub</span>
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-primary-content)] rounded-[var(--radius-field)] font-mono text-sm hover:bg-[var(--color-secondary)] hover:text-[var(--color-secondary-content)] transition-colors duration-300"
                        >
                            <FaExternalLinkAlt size={14} />
                            <span>Demo</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Contenido de la card */}
            <div className="p-6">
                {/* Título */}
                <h3 className="font-mono text-xl font-bold text-[var(--color-base-content)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {project.title}
                </h3>

                {/* Descripción */}
                <div className="mb-4">
                    <p className="font-sans text-[var(--color-neutral-content)] leading-relaxed">
                        {description}
                    </p>
                    {shouldShowToggle && (
                        <button
                            onClick={toggleDescription}
                            className="mt-2 flex items-center gap-1 text-sm font-mono text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors duration-300 cursor-pointer"
                        >
                            {isExpanded ? (
                                <>
                                    <span>Leer menos</span>
                                    <FaChevronUp size={12} />
                                </>
                            ) : (
                                <>
                                    <span>Leer más</span>
                                    <FaChevronDown size={12} />
                                </>
                            )}
                        </button>
                    )}
                </div>

                {/* Tags de tecnologías */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-[var(--color-base-300)] text-[var(--color-base-content)] text-xs font-mono rounded-[var(--radius-field)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-content)] transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard