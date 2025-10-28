'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectsHeroData } from '@/types/projects';
import projectsHeroData from './projectsHeroData.json';

const ProjectsHero: React.FC = () => {
    const data: ProjectsHeroData = projectsHeroData;

    return (
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[var(--color-base-100)] to-[var(--color-base-200)] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--color-primary)_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large floating circles */}
                <motion.div
                    className="absolute top-10 left-20 w-32 h-32 bg-[var(--color-primary)] rounded-full blur-3xl opacity-10"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-32 right-16 w-24 h-24 bg-[var(--color-secondary)] rounded-full blur-2xl opacity-15"
                    animate={{
                        x: [0, -25, 0],
                        y: [0, 15, 0],
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-1/4 w-20 h-20 bg-[var(--color-accent)] rounded-full blur-2xl opacity-12"
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Medium squares */}
                <motion.div
                    className="absolute top-1/4 left-3/4 w-16 h-16 bg-[var(--color-info)] blur-xl opacity-8 transform rotate-45"
                    animate={{
                        rotate: [45, 75, 45],
                        x: [0, -15, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-[var(--color-warning)] blur-xl opacity-10 transform rotate-12"
                    animate={{
                        rotate: [12, 42, 12],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                    }}
                />

                {/* Small elements */}
                <div className="absolute top-16 left-1/2 w-8 h-8 bg-[var(--color-success)] rounded-full blur-lg opacity-20"></div>
                <div className="absolute bottom-16 left-16 w-6 h-6 bg-[var(--color-error)] transform rotate-45 blur-lg opacity-15"></div>
                <div className="absolute top-2/3 right-20 w-4 h-4 bg-[var(--color-neutral)] rounded-full blur-md opacity-25"></div>

                {/* Static decorative elements */}
                <div className="absolute top-40 left-10 w-2 h-2 bg-[var(--color-primary)] rounded-full opacity-40"></div>
                <div className="absolute bottom-40 right-10 w-1 h-1 bg-[var(--color-secondary)] rounded-full opacity-50"></div>
                <div className="absolute top-1/2 left-4 w-3 h-3 bg-[var(--color-accent)] transform rotate-45 opacity-30"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full text-[var(--color-primary)] text-sm font-mono mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse"></span>
                        {data.totalProjects} proyectos completados
                    </motion.div>

                    {/* Main Title - Centrado */}
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-[var(--color-base-content)] mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {data.title}
                    </motion.h1>

                    {/* Subtitle - Centrado */}
                    <motion.h2
                        className="text-xl sm:text-2xl lg:text-3xl text-[var(--color-primary)] font-mono mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {data.subtitle}
                    </motion.h2>

                    {/* Description - Justificado y Centrado */}
                    <motion.p
                        className="text-lg sm:text-xl text-[var(--color-base-content)]/80 font-sans leading-relaxed max-w-3xl mx-auto mb-8 text-justify"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {data.description}
                    </motion.p>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="flex flex-col items-center gap-2 mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <span className="text-sm text-[var(--color-base-content)]/60 font-mono">
                            Desliza para explorar
                        </span>
                        <div className="w-6 h-10 border-2 border-[var(--color-base-content)]/30 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-[var(--color-primary)] rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsHero;