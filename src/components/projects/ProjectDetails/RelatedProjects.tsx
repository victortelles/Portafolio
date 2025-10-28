'use client';

import React from 'react';
import Link from 'next/link';
import { RelatedProject } from '@/types/projects';
import TechTag from '../ProjectsGrid/TechTag';
import relatedProjectsData from './RelatedProjects.json';

interface RelatedProjectsProps {
    projects: RelatedProject[];
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({ projects }) => {
    if (!projects || projects.length === 0) {
        return null;
    }

    const data = relatedProjectsData;

    return (
        <section className="relative py-16 bg-[var(--color-base-100)] overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-1/4 w-24 h-24 bg-[var(--color-secondary)] rounded-full blur-3xl opacity-6"></div>
                <div className="absolute bottom-16 left-1/3 w-18 h-18 bg-[var(--color-accent)] transform rotate-45 blur-2xl opacity-8"></div>
                <div className="absolute top-1/3 right-10 w-10 h-10 bg-[var(--color-primary)] rounded-full blur-xl opacity-12"></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.015]">
                    <div className="absolute inset-0 bg-[linear-gradient(var(--color-primary)_1px,_transparent_1px),_linear-gradient(90deg,_var(--color-primary)_1px,_transparent_1px)] bg-[length:60px_60px]"></div>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-mono font-bold text-[var(--color-base-content)] mb-4">
                            {data.title}
                        </h2>
                        <p className="text-[var(--color-base-content)]/60 font-sans">
                            {data.description}
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.slug}`}
                                className="group block"
                            >
                                <article className="bg-[var(--color-base-100)] border border-[var(--color-base-300)] rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:scale-[1.02]">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base-100)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-mono font-bold text-[var(--color-base-content)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-[var(--color-base-content)]/80 font-sans text-sm leading-relaxed mb-4 line-clamp-2">
                                            {project.shortDescription}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 3).map((tech, idx) => (
                                                <TechTag key={idx} technology={tech} size="sm" />
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 text-xs font-mono text-[var(--color-base-content)]/60 bg-[var(--color-base-200)]/50 rounded-full">
                                                    {data.moreLabel}{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* View All Projects Link */}
                    <div className="text-center mt-12">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-[var(--color-primary-content)] rounded-lg font-mono text-sm font-medium hover:bg-[var(--color-primary)]/90 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            {data.viewAllButton}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RelatedProjects;