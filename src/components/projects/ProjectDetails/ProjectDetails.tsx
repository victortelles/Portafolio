'use client';

import React from 'react';
import { ProjectDetail } from '@/types/projects';
import projectDetailsData from './ProjectDetails.json';

interface ProjectDetailsProps {
    project: ProjectDetail;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
    // Datos
    const data = projectDetailsData;
    return (
        <section className="relative py-16 bg-[var(--color-base-200)]/50 overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-32 left-1/4 w-28 h-28 bg-[var(--color-primary)] rounded-full blur-3xl opacity-4"></div>
                <div className="absolute bottom-24 right-1/4 w-20 h-20 bg-[var(--color-secondary)] transform rotate-45 blur-2xl opacity-6"></div>
                <div className="absolute top-2/3 left-16 w-14 h-14 bg-[var(--color-accent)] rounded-full blur-xl opacity-8"></div>
                <div className="absolute top-16 right-16 w-10 h-10 bg-[var(--color-info)] transform rotate-12 blur-lg opacity-10"></div>

                {/* Subtle radial pattern */}
                <div className="absolute inset-0 opacity-[0.015]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_var(--color-primary)_1px,_transparent_1px)] bg-[length:80px_80px]"></div>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Section Grid */}
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Context */}
                        {project.context && (
                            <div className="bg-[var(--color-base-100)] rounded-2xl p-8 shadow-lg border border-[var(--color-base-300)]">
                                <h3 className="text-2xl font-mono font-bold text-[var(--color-base-content)] mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[var(--color-info)]/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-[var(--color-info)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    {data.sections.context.title}
                                </h3>
                                <p className="text-[var(--color-base-content)]/80 font-sans leading-relaxed text-justify">
                                    {project.context}
                                </p>
                            </div>
                        )}

                        {/* Challenge */}
                        {project.challenge && (
                            <div className="bg-[var(--color-base-100)] rounded-2xl p-8 shadow-lg border border-[var(--color-base-300)]">
                                <h3 className="text-2xl font-mono font-bold text-[var(--color-base-content)] mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[var(--color-warning)]/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-[var(--color-warning)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    {data.sections.challenge.title}
                                </h3>
                                <p className="text-[var(--color-base-content)]/80 font-sans leading-relaxed text-justify">
                                    {project.challenge}
                                </p>
                            </div>
                        )}

                        {/* Solution */}
                        {project.solution && (
                            <div className="bg-[var(--color-base-100)] rounded-2xl p-8 shadow-lg border border-[var(--color-base-300)]">
                                <h3 className="text-2xl font-mono font-bold text-[var(--color-base-content)] mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[var(--color-success)]/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-[var(--color-success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    {data.sections.solution.title}
                                </h3>
                                <p className="text-[var(--color-base-content)]/80 font-sans leading-relaxed text-justify">
                                    {project.solution}
                                </p>
                            </div>
                        )}

                        {/* Impact */}
                        {project.impact && (
                            <div className="bg-[var(--color-base-100)] rounded-2xl p-8 shadow-lg border border-[var(--color-base-300)]">
                                <h3 className="text-2xl font-mono font-bold text-[var(--color-base-content)] mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[var(--color-accent)]/20 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    {data.sections.impact.title}
                                </h3>
                                <p className="text-[var(--color-base-content)]/80 font-sans leading-relaxed text-justify">
                                    {project.impact}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;