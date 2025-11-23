"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaCog } from "react-icons/fa"
import Image from "next/image"
import type { Project } from "@/types/landingPage"

interface ProjectCardProps {
    project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [imageError, setImageError] = useState(false)
    const [visibleTags, setVisibleTags] = useState<number>(project.tags.length)
    const [showAllTags, setShowAllTags] = useState(false)
    const tagsContainerRef = useRef<HTMLDivElement>(null)
    const tagsRef = useRef<HTMLDivElement>(null)

    // Calcular tags visibles basado en el ancho disponible
    useEffect(() => {
        const calculateVisibleTags = () => {
            if (tagsContainerRef.current && tagsRef.current && !showAllTags) {
                const containerWidth = tagsContainerRef.current.offsetWidth
                const children = Array.from(tagsRef.current.children) as HTMLElement[]
                let totalWidth = 0
                let visible = 0

                for (let i = 0; i < children.length; i++) {
                    const tagWidth = children[i].offsetWidth + 8 // 8px for gap
                    const plusButtonWidth = 60 // Estimado para el botón "+X"

                    if (totalWidth + tagWidth + (i < children.length - 1 ? plusButtonWidth : 0) <= containerWidth) {
                        totalWidth += tagWidth
                        visible++
                    } else {
                        break
                    }
                }

                setVisibleTags(visible > 0 ? visible : 1) // Al menos mostrar 1 tag
            }
        }

        calculateVisibleTags()
        window.addEventListener('resize', calculateVisibleTags)

        return () => window.removeEventListener('resize', calculateVisibleTags)
    }, [showAllTags])

    const toggleDescription = () => {
        setIsExpanded(!isExpanded)
    }

    const toggleTags = () => {
        setShowAllTags(!showAllTags)
        if (!showAllTags) {
            setVisibleTags(project.tags.length)
        }
    }

    const description = isExpanded ? project.fullDescription : project.shortDescription
    const shouldShowToggle = project.shortDescription.length !== project.fullDescription.length
    const hiddenTagsCount = project.tags.length - visibleTags

    return (
        <div className="group bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] hover:border-[var(--color-primary)] rounded-[var(--radius-box)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 flex flex-col h-full">
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
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-base-100)] text-[var(--color-base-content)] rounded-[var(--radius-field)] font-mono text-sm hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-content)] transition-colors duration-300"
                        >
                            <FaGithub size={16} />
                            <span>GitHub</span>
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-primary-content)] rounded-[var(--radius-field)] font-mono text-sm hover:bg-[var(--color-info)] hover:text-[var(--color-info-content)] transition-colors duration-300"
                        >
                            <FaExternalLinkAlt size={14} />
                            <span>Demo</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Contenido de la card */}
            <div className="p-6 flex flex-col flex-1">
                {/* Título con icono */}
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-mono text-xl font-bold text-[var(--color-base-content)] group-hover:text-[var(--color-primary)] transition-colors duration-300 flex-1 min-w-0">
                        {project.title}
                    </h3>
                    {/* Icono del proyecto */}
                    <div className="ml-4 flex-shrink-0">
                        {project.icon ? (
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <Image
                                    src={project.icon}
                                    alt={`${project.title} icon`}
                                    width={32}
                                    height={32}
                                    className="object-contain transition-all duration-300 group-hover:scale-110"
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            </div>
                        ) : (
                            <div className="w-8 h-8 flex items-center justify-center">
                                <FaCog size={20} className="text-[var(--color-base-content)]/60 group-hover:text-[var(--color-primary)]" />
                            </div>
                        )}
                    </div>
                </div>

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
                <div ref={tagsContainerRef} className="w-full mt-auto">
                    <div ref={tagsRef} className="flex flex-wrap gap-2">
                        {(showAllTags ? project.tags : project.tags.slice(0, visibleTags)).map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-[var(--color-base-300)] text-[var(--color-base-content)] text-xs font-mono rounded-[var(--radius-field)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-content)] transition-colors duration-300 whitespace-nowrap"
                            >
                                {tag}
                            </span>
                        ))}
                        {!showAllTags && hiddenTagsCount > 0 && (
                            <button
                                onClick={toggleTags}
                                className="px-3 py-1 bg-[var(--color-primary)]/20 text-[var(--color-primary)] text-xs font-mono rounded-[var(--radius-field)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-content)] transition-colors duration-300 whitespace-nowrap border border-[var(--color-primary)]/30"
                            >
                                +{hiddenTagsCount}
                            </button>
                        )}
                        {showAllTags && project.tags.length > 3 && (
                            <button
                                onClick={toggleTags}
                                className="px-3 py-1 bg-[var(--color-neutral)]/20 text-[var(--color-neutral-content)] text-xs font-mono rounded-[var(--radius-field)] hover:bg-[var(--color-neutral)] hover:text-[var(--color-neutral-content)] transition-colors duration-300 whitespace-nowrap border border-[var(--color-neutral)]/30"
                            >
                                Mostrar menos
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard