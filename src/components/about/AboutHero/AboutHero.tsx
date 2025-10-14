"use client"

import React from "react"
import { motion } from "framer-motion"
import ProfileImageCard from "./ProfileImageCard"
import PersonalCard from "./PersonalCard"
import CurrentStatusCard from "./CurrentStatusCard"
import QuickStatsCard from "./QuickStatsCard"
import data from "./aboutHeroData.json"

const AboutHero: React.FC = () => {
    const { sectionTexts } = data

    return (
        <section className="relative py-20 lg:py-32 px-4 lg:px-8">
            {/* Background decorativo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Encabezado de la sección */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="font-mono text-4xl lg:text-6xl font-bold text-[var(--color-base-content)] mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {sectionTexts.title} <span className="text-[var(--color-primary)]">{sectionTexts.titleAccent}</span>
                    </motion.h1>
                    <motion.p
                        className="font-sans text-lg lg:text-xl text-[var(--color-neutral-content)] max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {sectionTexts.subtitle}
                    </motion.p>
                </motion.div>

                <div className="space-y-8 max-w-6xl mx-auto">
                    {/* Fila superior - Imagen e Información Personal */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Imagen de perfil con animaciones orbitales */}
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <ProfileImageCard />
                        </motion.div>

                        {/* Información personal */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <PersonalCard />
                        </motion.div>
                    </div>

                    {/* Fila inferior - Estado actual y Datos rápidos */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Estado actual */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <CurrentStatusCard />
                        </motion.div>

                        {/* Datos rápidos */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <QuickStatsCard />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHero