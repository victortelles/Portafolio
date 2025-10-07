"use client"

import React from "react"
import Image from "next/image"
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import type { PersonalInfo, SocialLink } from "@/types/about-me"

interface PersonalCardProps {
    personalInfo: PersonalInfo
    socialLinks: SocialLink[]
}

const PersonalCard: React.FC<PersonalCardProps> = ({ personalInfo, socialLinks }) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'linkedin':
                return <FaLinkedin size={20} />
            case 'github':
                return <FaGithub size={20} />
            case 'email':
                return <FaEnvelope size={20} />
            default:
                return <FaEnvelope size={20} />
        }
    }

    return (
        <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-8 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20">
            {/* Avatar y información básica */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-6">
                {/* Avatar */}
                <div className="relative">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[var(--color-primary)] p-1">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                                src={personalInfo.avatar}
                                alt={personalInfo.name}
                                width={160}
                                height={160}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    {/* Indicador de disponibilidad */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-[var(--color-success)] rounded-full border-4 border-[var(--color-base-200)] flex items-center justify-center">
                        <div className="w-2 h-2 bg-[var(--color-success-content)] rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Información personal */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="font-mono text-2xl lg:text-3xl font-bold text-[var(--color-base-content)] mb-2">
                        {personalInfo.name}
                    </h2>
                    <p className="font-mono text-lg text-[var(--color-primary)] mb-3">
                        {personalInfo.title}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-[var(--color-neutral-content)] mb-4">
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt size={14} className="text-[var(--color-primary)]" />
                            <span className="font-sans">{personalInfo.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope size={14} className="text-[var(--color-primary)]" />
                            <span className="font-sans">{personalInfo.email}</span>
                        </div>
                    </div>
                    <p className="font-mono text-sm text-[var(--color-accent)] mb-2">
                        {personalInfo.currentRole} en {personalInfo.company}
                    </p>
                </div>
            </div>

            {/* Descripción */}
            <div className="mb-6">
                <p className="font-sans text-[var(--color-neutral-content)] leading-relaxed text-center lg:text-left">
                    {personalInfo.description}
                </p>
            </div>

            {/* Enlaces sociales */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[var(--color-base-300)] text-[var(--color-base-content)] rounded-[var(--radius-field)] font-mono text-sm hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-content)] transition-colors duration-300"
                        title={link.username}
                    >
                        {getIcon(link.icon)}
                        <span className="hidden sm:inline">{link.platform}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default PersonalCard