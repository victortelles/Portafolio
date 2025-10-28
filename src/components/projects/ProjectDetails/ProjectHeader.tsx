'use client';

import React from 'react';
import { HiUsers, HiUser, HiCalendar, HiArrowRight, HiArrowLeft, HiPlay, HiStop } from 'react-icons/hi2';
import { ProjectDetail, ProjectCardData } from '@/types/projects';
import TechTag from '../ProjectsGrid/TechTag';
import LiveDemoButton from '../ProjectsGrid/LiveDemoButton';
import GitHubButton from '../ProjectsGrid/GitHubButton';
import projectCardData from '../ProjectsGrid/ProjectCardData.json';

interface ProjectHeaderProps {
    project: ProjectDetail;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
    // Datos desde JSON para consistencia
    const data = projectCardData as ProjectCardData;

    const formatDate = (dateString: string) => {
        // Maneja el formato YYYY-MM correctamente
        const [year, month] = dateString.split('-');
        // Restamos 1 al mes porque JavaScript cuenta desde 0 (enero = 0)
        const date = new Date(parseInt(year), parseInt(month) - 1, 1);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long'
        });
    };
    
    return (
        <header className="relative py-16 lg:py-24 bg-gradient-to-br from-[var(--color-base-100)] via-[var(--color-base-200)]/30 to-[var(--color-primary)]/5 overflow-hidden">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--color-primary)_1px,_transparent_1px)] bg-[length:80px_80px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_var(--color-secondary)_1px,_transparent_1px)] bg-[length:60px_60px]"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-gradient-to-br from-[var(--color-secondary)]/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Back Arrow and Breadcrumb */}
                    <div className="flex items-center gap-4 mb-8">
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center justify-center w-10 h-10 bg-[var(--color-base-200)] hover:bg-[var(--color-base-300)] rounded-full transition-all duration-200 cursor-pointer group"
                        >
                            <HiArrowLeft className="w-5 h-5 text-[var(--color-base-content)] group-hover:text-[var(--color-primary)]" />
                        </button>
                        <nav className="flex items-center gap-2 text-sm font-mono text-[var(--color-base-content)]/60">
                            <a href="/projects" className="hover:text-[var(--color-primary)] transition-colors cursor-pointer">
                                Proyectos
                            </a>
                            <span>/</span>
                            <span className="text-[var(--color-base-content)]">{project.title}</span>
                        </nav>
                    </div>

                    {/* Content Container - Centrado */}
                    <div className="text-center">
                        {/* Title and Subtitle - Centrados */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-[var(--color-base-content)] mb-4">
                            {project.title}
                        </h1>

                        {project.subtitle && (
                            <h2 className="text-xl sm:text-2xl lg:text-3xl text-[var(--color-primary)] font-mono mb-6">
                                {project.subtitle}
                            </h2>
                        )}

                        {/* Description - Justificado y Centrado */}
                        <div className="max-w-4xl mx-auto mb-8">
                            <p className="text-lg sm:text-xl text-[var(--color-base-content)]/80 font-sans leading-relaxed text-justify">
                                {project.longDescription}
                            </p>
                        </div>
                    </div>

                    {/* Segundo contenedor para páginas dinámicas */}
                    <div className="text-center">
                        {/* Status Badge - Centrado */}
                        <div className="flex justify-center mb-8">
                            <span className={`
                                px-4 py-2 rounded-full text-sm font-mono font-bold border
                                ${data.statusColors[project.status]}
                            `}>
                                {data.statusLabels[project.status]}
                            </span>
                        </div>

                        {/* Fechas - Centrado */}
                        <div className="flex flex-wrap justify-center gap-8 mb-8">
                            {/* Date Range with Icons */}
                            <div className="group relative flex items-center gap-4 bg-[var(--color-base-200)]/50 rounded-xl px-6 py-4 transition-all duration-300 hover:bg-[var(--color-base-200)]/70 hover:shadow-lg hover:shadow-[var(--color-accent)]/10">
                                {/* Animated border on hover */}
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[var(--color-accent)]/30 transition-all duration-500 group-hover:animate-pulse"></div>

                                <div className="flex items-center gap-3 relative z-10">
                                    <HiPlay className="w-5 h-5 text-[var(--color-success)]" />
                                    <div className="text-center">
                                        <div className="text-lg font-mono font-bold text-[var(--color-primary)] mb-1">
                                            {formatDate(project.startDate)}
                                        </div>
                                        <div className="text-xs text-[var(--color-base-content)]/60 font-mono">
                                            Inicio
                                        </div>
                                    </div>
                                </div>

                                <div className="w-8 h-px bg-[var(--color-primary)]/30 relative z-10">
                                    <HiArrowRight className="absolute -right-1 -top-2 w-4 h-4 text-[var(--color-primary)]" />
                                </div>

                                {project.endDate ? (
                                    <div className="flex items-center gap-3 relative z-10">
                                        <HiStop className="w-5 h-5 text-[var(--color-error)]" />
                                        <div className="text-center">
                                            <div className="text-lg font-mono font-bold text-[var(--color-primary)] mb-1">
                                                {formatDate(project.endDate)}
                                            </div>
                                            <div className="text-xs text-[var(--color-base-content)]/60 font-mono">
                                                Fin
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3 relative z-10">
                                        <HiCalendar className="w-5 h-5 text-[var(--color-warning)]" />
                                        <div className="text-center">
                                            <div className="text-lg font-mono font-bold text-[var(--color-warning)] mb-1">
                                                En curso
                                            </div>
                                            <div className="text-xs text-[var(--color-base-content)]/60 font-mono">
                                                Estado
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {project.teamSize && (
                                <div className="group relative flex items-center gap-2 bg-[var(--color-base-200)]/50 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-[var(--color-base-200)]/70 hover:shadow-lg hover:shadow-[var(--color-primary)]/10">
                                    {/* Animated border on hover */}
                                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[var(--color-primary)]/30 transition-all duration-500 group-hover:animate-pulse"></div>
                                    <HiUsers className="w-5 h-5 text-[var(--color-primary)] relative z-10" />
                                    <div className="text-center relative z-10">
                                        <div className="text-lg font-mono font-bold text-[var(--color-base-content)] mb-1">
                                            {project.teamSize}
                                        </div>
                                        <div className="text-xs text-[var(--color-base-content)]/60 font-mono">
                                            Equipo
                                        </div>
                                    </div>
                                </div>
                            )}

                            {project.role && (
                                <div className="group relative flex items-center gap-2 bg-[var(--color-base-200)]/50 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-[var(--color-base-200)]/70 hover:shadow-lg hover:shadow-[var(--color-secondary)]/10">
                                    {/* Animated border on hover */}
                                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[var(--color-secondary)]/30 transition-all duration-500 group-hover:animate-pulse"></div>
                                    <HiUser className="w-5 h-5 text-[var(--color-primary)] relative z-10" />
                                    <div className="text-center relative z-10">
                                        <div className="text-sm font-mono font-bold text-[var(--color-base-content)] mb-1">
                                            {project.role}
                                        </div>
                                        <div className="text-xs text-[var(--color-base-content)]/60 font-mono">
                                            Rol
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Technologies - Centrado */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {project.technologies.map((tech, index) => (
                                <TechTag key={index} technology={tech} size="md" />
                            ))}
                        </div>

                        {/* Action Buttons - Centrado */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            {project.links.demo && (
                                <LiveDemoButton
                                    url={project.links.demo}
                                    className="px-8 py-3 cursor-pointer"
                                />
                            )}
                            {project.links.github && (
                                <GitHubButton
                                    url={project.links.github}
                                    className="px-8 py-3 cursor-pointer"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border border-[var(--color-primary)]/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-[var(--color-secondary)]/20 rounded-full"></div>
        </header>
    );
};

export default ProjectHeader;