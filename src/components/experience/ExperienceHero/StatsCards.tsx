"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaCertificate, FaProjectDiagram, FaCode, FaCalendarAlt } from "react-icons/fa"
import type { StatsCardsProps } from "@/types/experience"

const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
    const getIcon = (iconName: string) => {
        const iconMap: { [key: string]: React.ComponentType<any> } = {
            FaCertificate,
            FaProjectDiagram,
            FaCode,
            FaCalendarAlt
        }
        return iconMap[iconName] || FaCode
    }

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
                const IconComponent = getIcon(stat.icon)
                return (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border"
                        style={{
                            backgroundColor: "var(--color-base-200)",
                            borderColor: "var(--color-base-300)"
                        }}
                    >
                        {/* Número e ícono en línea horizontal */}
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="text-3xl font-mono font-bold" style={{ color: "var(--color-base-content)" }}>
                                {stat.count}
                            </div>
                            <div className="text-2xl group-hover:scale-110 transition-transform duration-300" style={{ color: "var(--color-primary)" }}>
                                <IconComponent />
                            </div>
                        </div>
                        
                        {/* Texto centrado abajo */}
                        <div className="text-center">
                            <div className="text-sm font-sans" style={{ color: "var(--color-neutral-content)" }}>
                                {stat.label}
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default StatsCards