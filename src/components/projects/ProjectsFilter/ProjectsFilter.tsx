'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiAdjustmentsHorizontal, HiChevronDown, HiViewColumns, HiListBullet } from 'react-icons/hi2';
import { ProjectFilter, SortType, ProjectsFilterData } from '@/types/projects';
import filtersData from './filtersData.json';
import projectsData from '../ProjectsGrid/projectsData.json';

interface ProjectsFilterProps {
    onFilterChange: (filter: string) => void;
    onSortChange: (sort: SortType) => void;
    onViewChange: (view: 'grid' | 'list') => void;
    activeFilter: string;
    activeSort: SortType;
    activeView: 'grid' | 'list';
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({
    onFilterChange,
    onSortChange,
    onViewChange,
    activeFilter,
    activeSort,
    activeView,
}) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const { filters: staticFilters, sortOptions, ui } = filtersData as ProjectsFilterData;
    const { projects } = projectsData;

    // Calculate dynamic filter counts
    const filters = useMemo(() => {
        return staticFilters.map(filter => {
            if (filter.value === 'all') {
                return {
                    ...filter,
                    count: projects.length
                };
            }

            const count = projects.filter(project => {
                // Check if project category matches filter
                if (project.category === filter.value) {
                    return true;
                }
                // Check if any technology matches filter value for specific mappings
                if (filter.value === 'mobile' && project.technologies.some(tech =>
                    ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'].includes(tech.name)
                )) {
                    return true;
                }
                if (filter.value === 'desktop' && project.technologies.some(tech =>
                    ['Electron', 'WPF', 'Qt', 'JavaFX', 'C++', 'C#'].includes(tech.name)
                )) {
                    return true;
                }
                if (filter.value === 'api' && project.technologies.some(tech =>
                    ['Express', 'FastAPI', 'Django', 'Spring Boot', 'ASP.NET'].includes(tech.name)
                )) {
                    return true;
                }
                if (filter.value === 'fullstack' && project.technologies.some(tech =>
                    ['React', 'Vue', 'Angular', 'Next.js', 'Node.js'].includes(tech.name)
                )) {
                    return true;
                }
                return false;
            }).length;

            return {
                ...filter,
                count
            };
        });
    }, [projects, staticFilters]);

    return (
        <section className="py-8 border-b border-[var(--color-base-300)]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                    {/* Filter Buttons - Desktop */}
                    <div className="hidden lg:flex items-center gap-3">
                        <span className="text-sm font-mono text-[var(--color-base-content)]/60 mr-4">
                            Filtrar por:
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {filters.map((filter: ProjectFilter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => onFilterChange(filter.value)}
                                    className={`
                    px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 cursor-pointer
                    ${activeFilter === filter.value
                                            ? 'bg-[var(--color-primary)] text-[var(--color-primary-content)] shadow-lg scale-105'
                                            : 'bg-[var(--color-base-200)] text-[var(--color-base-content)] hover:bg-[var(--color-primary)]/20 hover:text-[var(--color-primary)]'
                                        }
                  `}
                                >
                                    {filter.label}
                                    <span className="ml-2 text-xs opacity-70">
                                        ({filter.count})
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Filter Dropdown */}
                    <div className="lg:hidden relative">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-[var(--color-base-200)] text-[var(--color-base-content)] rounded-lg font-mono text-sm cursor-pointer hover:bg-[var(--color-base-300)] transition-colors"
                        >
                            <span>
                                Filtrar: {filters.find(f => f.value === activeFilter)?.label}
                            </span>
                            <motion.div
                                animate={{ rotate: isFilterOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex"
                            >
                                <HiChevronDown className="w-4 h-4" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {isFilterOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-[var(--color-base-100)] border border-[var(--color-base-300)] rounded-lg shadow-lg z-10 overflow-hidden"
                                >
                                    {filters.map((filter: ProjectFilter, index) => (
                                        <motion.button
                                            key={filter.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.2 }}
                                            onClick={() => {
                                                onFilterChange(filter.value);
                                                setIsFilterOpen(false);
                                            }}
                                            className={`
                          w-full text-left px-4 py-3 text-sm font-mono transition-all duration-200 cursor-pointer
                          ${activeFilter === filter.value
                                                    ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-r-2 border-[var(--color-primary)]'
                                                    : 'text-[var(--color-base-content)] hover:bg-[var(--color-base-200)] hover:translate-x-1'
                                                }
                          first:rounded-t-lg last:rounded-b-lg
                        `}
                                        >
                                            {filter.label} ({filter.count})
                                        </motion.button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Section: View Toggle + Sort */}
                    <div className="flex items-center gap-4">

                        {/* View Toggle */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-mono text-[var(--color-base-content)]/60">
                                {ui.labels.view}
                            </span>
                            <div className="flex bg-[var(--color-base-200)] rounded-lg p-1">
                                <button
                                    onClick={() => onViewChange('grid')}
                                    className={`
                    px-3 py-2 rounded-md transition-all duration-200 cursor-pointer
                    ${activeView === 'grid'
                                            ? 'bg-[var(--color-primary)] text-[var(--color-primary-content)] shadow-sm'
                                            : 'text-[var(--color-base-content)] hover:bg-[var(--color-base-300)]'
                                        }
                  `}
                                >
                                    <HiViewColumns className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => onViewChange('list')}
                                    className={`
                    px-3 py-2 rounded-md transition-all duration-200 cursor-pointer
                    ${activeView === 'list'
                                            ? 'bg-[var(--color-primary)] text-[var(--color-primary-content)] shadow-sm'
                                            : 'text-[var(--color-base-content)] hover:bg-[var(--color-base-300)]'
                                        }
                  `}
                                >
                                    <HiListBullet className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsSortOpen(!isSortOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-[var(--color-base-200)] text-[var(--color-base-content)] rounded-lg font-mono text-sm hover:bg-[var(--color-base-300)] transition-all duration-200 cursor-pointer group"
                            >
                                <HiAdjustmentsHorizontal className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span className="text-[var(--color-base-content)]">
                                    {sortOptions.find(s => s.value === activeSort)?.label}
                                </span>
                                <motion.div
                                    animate={{ rotate: isSortOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex"
                                >
                                    <HiChevronDown className="w-4 h-4" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {isSortOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full right-0 mt-2 bg-[var(--color-base-100)] border border-[var(--color-base-300)] rounded-lg shadow-lg z-10 min-w-[200px] overflow-hidden"
                                    >
                                        {sortOptions.map((option, index) => (
                                            <motion.button
                                                key={option.id}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05, duration: 0.2 }}
                                                onClick={() => {
                                                    onSortChange(option.value as SortType);
                                                    setIsSortOpen(false);
                                                }}
                                                className={`
                        w-full text-left px-4 py-3 text-sm font-mono transition-all duration-200 cursor-pointer
                        ${activeSort === option.value
                                                        ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-l-2 border-[var(--color-primary)]'
                                                        : 'text-[var(--color-base-content)] hover:bg-[var(--color-base-200)] hover:translate-x-1'
                                                    }
                        first:rounded-t-lg last:rounded-b-lg
                      `}
                                            >
                                                {option.label}
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsFilter;