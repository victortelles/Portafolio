'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { Project, FilterCategory, SortType } from '@/types/projects';
import ProjectCard from './ProjectCard';
import projectsData from './projectsData.json';

interface ProjectsGridProps {
    activeFilter: string;
    activeSort: SortType;
    activeView: 'grid' | 'list';
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
    activeFilter,
    activeSort,
    activeView
}) => {
    const [mounted, setMounted] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsGridRef = useRef<HTMLDivElement>(null);
    const projectsTitleRef = useRef<HTMLHeadingElement>(null);
    const { projects } = projectsData;
    const PROJECTS_PER_PAGE = 9;

    useEffect(() => {
        setMounted(true);
    }, []);

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [activeFilter, activeSort]);

    // Función para hacer scroll hacia el título "Todos los proyectos" suavemente
    const scrollToProjectsTitle = () => {
        if (projectsTitleRef.current) {
            // Calcular la posición del título menos un offset para mejor UX
            const titleTop = projectsTitleRef.current.getBoundingClientRect().top + window.pageYOffset;
            const offset = 120; // 120px de espacio desde arriba para mejor visualización

            window.scrollTo({
                top: titleTop - offset,
                behavior: 'smooth'
            });
        }
    };

    // Función para cambiar página con scroll automático al título
    const handlePageChange = (newPage: number) => {
        // Solo actualizar y hacer scroll si realmente cambia la página
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
            scrollToProjectsTitle();
        }
    };

    // Filter and sort projects
    const filteredAndSortedProjects = useMemo(() => {
        let filtered = projects as Project[];

        // Apply filter
        if (activeFilter !== 'all') {
            filtered = filtered.filter(project => {
                // Check if project category matches filter
                if (project.category === activeFilter) {
                    return true;
                }
                // Check if any technology matches filter value for specific mappings
                if (activeFilter === 'mobile' && project.technologies.some(tech =>
                    ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'].includes(tech.name)
                )) {
                    return true;
                }
                if (activeFilter === 'desktop' && project.technologies.some(tech =>
                    ['Electron', 'WPF', 'Qt', 'JavaFX', 'C++', 'C#'].includes(tech.name)
                )) {
                    return true;
                }
                if (activeFilter === 'api' && project.technologies.some(tech =>
                    ['Express', 'FastAPI', 'Django', 'Spring Boot', 'ASP.NET'].includes(tech.name)
                )) {
                    return true;
                }
                if (activeFilter === 'fullstack' && project.technologies.some(tech =>
                    ['React', 'Vue', 'Angular', 'Next.js', 'Node.js'].includes(tech.name)
                )) {
                    return true;
                }
                return false;
            });
        }

        // Apply sort
        const sorted = [...filtered].sort((a, b) => {
            switch (activeSort) {
                case 'newest':
                    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
                case 'oldest':
                    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
                case 'alphabetical':
                    return a.title.localeCompare(b.title);
                case 'featured':
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
                default:
                    return 0;
            }
        });

        return sorted;
    }, [projects, activeFilter, activeSort]);

    // Pagination logic
    const totalProjects = filteredAndSortedProjects.length;
    const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    const currentProjects = filteredAndSortedProjects.slice(startIndex, endIndex);

    // Generate pagination numbers
    const generatePaginationNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pages;
    };

    if (!mounted) {
        return (
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="bg-[var(--color-base-200)] rounded-2xl h-96"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 ref={projectsTitleRef} className="text-2xl font-mono font-bold text-[var(--color-base-content)]">
                            {activeFilter === 'all' ? 'Todos los proyectos' : `Proyectos de ${activeFilter}`}
                        </h2>
                        <p className="text-[var(--color-base-content)]/60 font-mono text-sm mt-1">
                            {totalProjects} proyecto{totalProjects !== 1 ? 's' : ''} encontrado{totalProjects !== 1 ? 's' : ''}
                            {totalPages > 1 && (
                                <span className="ml-2 text-[var(--color-primary)]">
                                    • Página {currentPage} de {totalPages}
                                </span>
                            )}
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                {currentProjects.length > 0 ? (
                    <motion.div
                        ref={projectsGridRef}
                        className={`
              ${activeView === 'grid'
                                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                                : 'space-y-6'
                            }
            `}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {currentProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.6,
                                            ease: "easeOut"
                                        }
                                    }
                                }}
                            >
                                <ProjectCard
                                    project={project}
                                    index={index}
                                    viewMode={activeView}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    /* Empty State */
                    <div className="text-center py-16">
                        <div className="max-w-md mx-auto">
                            <div className="w-24 h-24 mx-auto mb-6 bg-[var(--color-base-200)] rounded-full flex items-center justify-center">
                                <svg className="w-12 h-12 text-[var(--color-base-content)]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.137 0-4.146.832-5.636 2.172M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-mono font-bold text-[var(--color-base-content)] mb-2">
                                No se encontraron proyectos
                            </h3>
                            <p className="text-[var(--color-base-content)]/60 font-sans">
                                No hay proyectos que coincidan con los filtros seleccionados. Prueba con diferentes criterios de búsqueda.
                            </p>
                        </div>
                    </div>
                )}

                {/* Modern Pagination - Solo números */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-16">
                        <div className="flex items-center bg-[var(--color-base-200)]/50 backdrop-blur-sm rounded-2xl p-3 border border-[var(--color-base-300)]/30">
                            {/* Page Numbers */}
                            <div className="flex items-center">
                                {generatePaginationNumbers().map((page, index) => (
                                    <React.Fragment key={index}>
                                        {page === '...' ? (
                                            <div className="flex items-center justify-center w-10 h-10 mx-1">
                                                <HiEllipsisHorizontal className="w-5 h-5 text-[var(--color-base-content)]/40" />
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => handlePageChange(page as number)}
                                                className={`
                                                    flex items-center justify-center w-10 h-10 mx-1 rounded-xl font-mono font-bold text-sm
                                                    transition-all duration-300 cursor-pointer relative overflow-hidden
                                                    ${currentPage === page
                                                        ? 'bg-[var(--color-primary)] text-[var(--color-primary-content)] shadow-lg shadow-[var(--color-primary)]/25 scale-105'
                                                        : 'text-[var(--color-base-content)] hover:bg-[var(--color-base-300)]/50 hover:text-[var(--color-primary)] hover:scale-105'
                                                    }
                                                `}
                                                aria-label={`Ir a página ${page}`}
                                            >
                                                <span className="relative z-10">{page}</span>
                                                {currentPage === page && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-info)] opacity-90 rounded-xl"></div>
                                                )}
                                            </button>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsGrid;