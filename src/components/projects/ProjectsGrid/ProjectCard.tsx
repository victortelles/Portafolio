'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Project, ProjectCardData } from '@/types/projects';
import TechTag from './TechTag';
import LiveDemoButton from './LiveDemoButton';
import GitHubButton from './GitHubButton';
import projectCardData from './ProjectCardData.json';

interface ProjectCardProps {
    project: Project;
    index: number;
    viewMode?: 'grid' | 'list';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, viewMode = 'grid' }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const mainImage = project.images.find(img => img.isMain) || project.images[0];

    // Datos desde JSON
    const data = projectCardData as ProjectCardData;

    // Grid View Layout
    if (viewMode === 'grid') {
        return (
            <div
                className="group relative"
                style={{
                    animationDelay: `${index * data.animations.delayMultiplier}ms`
                }}
            >
                <article
                    className={`
                        relative bg-[var(--color-base-100)] rounded-2xl border border-[var(--color-base-300)]
                        overflow-hidden
                        transform transition-all duration-500 ease-out
                        hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--color-primary)]/10
                        hover:-translate-y-1 hover:border-[var(--color-primary)]/30
                        ${isHovered ? 'z-10' : ''}
                    `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Tags Container - Área superior con fondo sólido */}
                    <div className="relative bg-[var(--color-base-200)]/80 backdrop-blur-sm p-4 border-b border-[var(--color-base-300)]/30">
                        <div className="flex items-center justify-between min-h-[32px]">
                            {/* Featured Badge */}
                            {project.featured && (
                                <span className="px-3 py-1 bg-[var(--color-primary)] text-[var(--color-primary-content)] rounded-full text-xs font-mono font-bold">
                                    {data.ui.featuredBadge.icon} {data.ui.featuredBadge.text}
                                </span>
                            )}

                            {/* Spacer cuando no hay featured badge */}
                            {!project.featured && <div></div>}

                            {/* Status Badge */}
                            <span className={`
                                px-3 py-1 rounded-full text-xs font-mono font-bold border
                                ${data.statusColors[project.status]}
                            `}>
                                {data.statusLabels[project.status]}
                            </span>
                        </div>
                    </div>

                    {/* Área clickeable para navegación - Sin botones */}
                    <Link href={`/projects/${project.slug}`}>
                        <div className="cursor-pointer">
                            {/* Image Container */}
                            <div className="relative h-44 sm:h-48 overflow-hidden">
                                <div className={`
                absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20
                transform transition-transform duration-700
                ${isHovered ? 'scale-110' : 'scale-100'}
              `} />

                                {mainImage && (
                                    <>
                                        <img
                                            src={mainImage.src}
                                            alt={mainImage.alt}
                                            className={`
                      w-full h-full object-cover
                      transform transition-all duration-700
                      ${isHovered ? 'scale-110' : 'scale-100'}
                      ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                    `}
                                            onLoad={() => setImageLoaded(true)}
                                            loading="lazy"
                                        />

                                        {/* Image Overlay */}
                                        <div className={`
                    absolute inset-0 bg-gradient-to-t from-[var(--color-base-100)]/80 via-transparent to-transparent
                    transform transition-opacity duration-500
                    ${isHovered ? 'opacity-90' : 'opacity-60'}
                  `} />
                                    </>
                                )}

                                {/* Animated Border Effect */}
                                <div className={`
                absolute inset-0 border-2 border-[var(--color-primary)]/0
                transform transition-all duration-500
                ${isHovered ? 'border-[var(--color-primary)]/30 scale-95' : 'scale-100'}
              `} />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title and Subtitle */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-mono font-bold text-[var(--color-base-content)] mb-1 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    {project.subtitle && (
                                        <p className="text-sm text-[var(--color-base-content)]/70 font-mono">
                                            {project.subtitle}
                                        </p>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-[var(--color-base-content)]/80 font-sans text-sm leading-relaxed mb-4 line-clamp-3">
                                    {project.shortDescription}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, idx) => (
                                        <TechTag key={idx} technology={tech} size="sm" />
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 text-xs font-mono text-[var(--color-base-content)]/60 bg-[var(--color-base-200)]/50 rounded-full">
                                            +{project.technologies.length - 3} más
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Action Buttons - Fuera del Link para evitar anidamiento */}
                    <div className="p-6 pt-0">
                        <div className={`
                            flex flex-col sm:flex-row gap-3
                            transform transition-all duration-500
                            ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}
                        `}>
                            {project.links.demo && (
                                <LiveDemoButton
                                    url={project.links.demo}
                                    className="flex-1 justify-center"
                                />
                            )}
                            {project.links.github && (
                                <GitHubButton
                                    url={project.links.github}
                                    className="flex-1 justify-center"
                                />
                            )}
                        </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className={`
                        absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5
                        transform transition-all duration-500 pointer-events-none
                        ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `} />
                </article>
            </div>
        );
    }

    // List View Layout
    return (
        <div
            className="group relative"
            style={{
                animationDelay: `${index * data.animations.delayMultiplier}ms`
            }}
        >
            <article
                className={`
                    relative bg-[var(--color-base-100)] rounded-2xl border border-[var(--color-base-300)]
                    overflow-hidden
                    transform transition-all duration-500 ease-out
                    hover:scale-[1.01] hover:shadow-xl hover:shadow-[var(--color-primary)]/10
                    hover:border-[var(--color-primary)]/30
                    ${isHovered ? 'z-10' : ''}
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex flex-col md:flex-row">
                    {/* Tags Container - Para vista lista en la parte superior */}
                    <div className="md:hidden bg-[var(--color-base-200)]/80 backdrop-blur-sm p-4 border-b border-[var(--color-base-300)]/30">
                        <div className="flex items-center justify-between min-h-[32px]">
                            {/* Featured Badge */}
                            {project.featured && (
                                <span className="px-3 py-1 bg-[var(--color-primary)] text-[var(--color-primary-content)] rounded-full text-xs font-mono font-bold">
                                    {data.ui.featuredBadge.icon} {data.ui.featuredBadge.text}
                                </span>
                            )}

                            {/* Spacer cuando no hay featured badge */}
                            {!project.featured && <div></div>}

                            {/* Status Badge */}
                            <span className={`
                                px-3 py-1 rounded-full text-xs font-mono font-bold border
                                ${data.statusColors[project.status]}
                            `}>
                                {data.statusLabels[project.status]}
                            </span>
                        </div>
                    </div>                    {/* Área clickeable para navegación */}
                    <Link href={`/projects/${project.slug}`}>
                        <div className="flex flex-col md:flex-row cursor-pointer">
                            {/* Image Container - Smaller in list view */}
                            <div className="relative md:w-64 h-40 md:h-auto overflow-hidden flex-shrink-0">
                                <div className={`
                                    absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20
                                    transform transition-transform duration-700
                                    ${isHovered ? 'scale-110' : 'scale-100'}
                                `} />

                                {mainImage && (
                                    <>
                                        <img
                                            src={mainImage.src}
                                            alt={mainImage.alt}
                                            className={`
                                                w-full h-full object-cover
                                                transform transition-all duration-700
                                                ${isHovered ? 'scale-110' : 'scale-100'}
                                                ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                                            `}
                                            onLoad={() => setImageLoaded(true)}
                                            loading="lazy"
                                        />

                                        {/* Image Overlay */}
                                        <div className={`
                                            absolute inset-0 bg-gradient-to-t from-[var(--color-base-100)]/80 via-transparent to-transparent
                                            transform transition-opacity duration-500
                                            ${isHovered ? 'opacity-90' : 'opacity-60'}
                                        `} />
                                    </>
                                )}

                                {/* Badges on image - Solo en desktop para vista lista */}
                                {project.featured && (
                                    <div className="hidden md:block absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-[var(--color-primary)] text-[var(--color-primary-content)] rounded-full text-xs font-mono font-bold">
                                            {data.ui.featuredBadge.icon} {data.ui.featuredBadge.text}
                                        </span>
                                    </div>
                                )}

                                <div className="hidden md:block absolute top-4 right-4 z-20">
                                    <span className={`
                                        px-3 py-1 rounded-full text-xs font-mono font-bold border
                                        ${data.statusColors[project.status]}
                                    `}>
                                        {data.statusLabels[project.status]}
                                    </span>
                                </div>
                            </div>

                            {/* Content - More horizontal space in list view */}
                            <div className="flex-1 p-6 flex flex-col justify-between min-h-[200px]">
                                <div className="flex-1">
                                    {/* Title and Subtitle */}
                                    <div className="mb-3">
                                        <h3 className="text-xl md:text-2xl font-mono font-bold text-[var(--color-base-content)] mb-1 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        {project.subtitle && (
                                            <p className="text-sm text-[var(--color-base-content)]/70 font-mono">
                                                {project.subtitle}
                                            </p>
                                        )}
                                    </div>

                                    {/* Description - More lines in list view */}
                                    <p className="text-[var(--color-base-content)]/80 font-sans text-sm leading-relaxed mb-4 line-clamp-4 md:line-clamp-3">
                                        {project.shortDescription}
                                    </p>

                                    {/* Technologies - Show more in list view */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, data.layout.techTagsLimit.list).map((tech, idx) => (
                                            <TechTag key={idx} technology={tech} size="sm" />
                                        ))}
                                        {project.technologies.length > data.layout.techTagsLimit.list && (
                                            <span className="px-2 py-1 text-xs font-mono text-[var(--color-base-content)]/60 bg-[var(--color-base-200)]/50 rounded-full">
                                                {data.ui.moreTechnologies.prefix}{project.technologies.length - data.layout.techTagsLimit.list}{data.ui.moreTechnologies.suffix}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Action Buttons - Posicionados a la derecha en vista lista */}
                    <div className="hidden md:flex absolute top-6 right-6 flex-col gap-2 z-30">
                        <div className={`
                            flex flex-col gap-2
                            transform transition-all duration-500
                            ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-70'}
                        `}>
                            {project.links.demo && (
                                <LiveDemoButton
                                    url={project.links.demo}
                                    className="px-3 py-2 text-xs shadow-lg hover:shadow-xl"
                                />
                            )}
                            {project.links.github && (
                                <GitHubButton
                                    url={project.links.github}
                                    className="px-3 py-2 text-xs shadow-lg hover:shadow-xl"
                                />
                            )}
                        </div>
                    </div>

                    {/* Action Buttons Mobile - Debajo del contenido en móvil */}
                    <div className="md:hidden p-6 pt-0">
                        <div className={`
                            flex flex-row gap-3 justify-center
                            transform transition-all duration-500
                            ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-80'}
                        `}>
                            {project.links.demo && (
                                <LiveDemoButton
                                    url={project.links.demo}
                                    className="px-4 py-2 flex-1"
                                />
                            )}
                            {project.links.github && (
                                <GitHubButton
                                    url={project.links.github}
                                    className="px-4 py-2 flex-1"
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`
                    absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5
                    transform transition-all duration-500 pointer-events-none
                    ${isHovered ? 'opacity-100' : 'opacity-0'}
                `} />
            </article>
        </div>
    );
};

export default ProjectCard;