"use client"

import React from "react"
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"
import data from "./aboutHeroData.json"

const PersonalCard: React.FC = () => {
    const { personalInfo } = data


    return (
        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-8 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20">
            {/* Información personal */}
            <div className="mb-6">
                <h2 className="font-mono text-2xl lg:text-3xl font-bold text-[var(--color-base-content)] mb-2">
                    {personalInfo.name}
                </h2>
                <p className="font-mono text-lg text-[var(--color-primary)] mb-3">
                    {personalInfo.title}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-[var(--color-neutral-content)] mb-4">
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt size={14} className="text-[var(--color-primary)]" />
                        <span className="font-sans">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope size={14} className="text-[var(--color-primary)]" />
                        <span className="font-sans">{personalInfo.email}</span>
                    </div>
                </div>
                <p className="font-mono text-sm text-[var(--color-accent)] mb-4">
                    {personalInfo.currentRole} {personalInfo.company}
                </p>
            </div>

            {/* Descripción */}
            <div className="mb-6">
                <p className="font-sans text-[var(--color-neutral-content)] leading-relaxed text-left">
                    {personalInfo.description}
                </p>
            </div>
        </div>
    )
}

export default PersonalCard