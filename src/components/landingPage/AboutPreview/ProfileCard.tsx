"use client"

import React from "react"
import { User, Github, Linkedin, Globe } from "lucide-react"
import type { ProfileCard as ProfileCardType } from "@/types/landingPage"

interface ProfileCardProps {
    profileCard: ProfileCardType
}

// Mapeo de iconos y colores para cada red social
const socialConfig = {
    github: {
        icon: Github,
        hoverColor: "var(--color-primary)",
        hoverTextColor: "var(--color-primary-content)"
    },
    linkedin: {
        icon: Linkedin,
        hoverColor: "var(--color-info)",
        hoverTextColor: "var(--color-info-content)"
    },
    website: {
        icon: Globe,
        hoverColor: "var(--color-secondary)",
        hoverTextColor: "var(--color-secondary-content)"
    }
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profileCard }) => {
    // Obtener las redes sociales disponibles y limitarlas a 4
    const availableSocials = Object.entries(profileCard.socialLinks)
        .filter(([_, url]) => url) // Solo incluir las que tienen URL
        .slice(0, 4) // Limitar a máximo 4
    return (
        <div className="bg-[var(--color-base-200)] border border-[var(--color-neutral)] rounded-[var(--radius-box)] p-8 relative overflow-hidden">
            {/* Profile Content */}
            <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[var(--color-primary)] bg-[var(--color-base-300)]">
                    <img
                        src={profileCard.image}
                        alt={`${profileCard.name} Profile`}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex items-center justify-center gap-2 mb-2">
                    <User size={18} className="text-[var(--color-primary)]" />
                    <span className="font-mono text-lg font-semibold text-[var(--color-base-content)]">
                        {profileCard.name}
                    </span>
                </div>

                <p className="font-mono text-sm text-[var(--color-accent)] mb-4">
                    {profileCard.role}
                </p>

                <p className="font-sans text-sm text-[var(--color-neutral-content)]/70 mb-6">
                    {profileCard.description}
                </p>

                {/* Social Links - Dynamic */}
                {availableSocials.length > 0 && (
                    <div className="flex justify-center gap-4">
                        {availableSocials.map(([platform, url]) => {
                            const config = socialConfig[platform as keyof typeof socialConfig]
                            if (!config) return null

                            const IconComponent = config.icon

                            return (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-[var(--color-base-300)] flex items-center justify-center transition-colors group"
                                    style={{
                                        '--hover-bg': config.hoverColor,
                                        '--hover-text': config.hoverTextColor
                                    } as React.CSSProperties}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = config.hoverColor
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--color-base-300)'
                                    }}
                                >
                                    <IconComponent 
                                        size={18} 
                                        className="text-[var(--color-base-content)] transition-colors" 
                                        style={{
                                            color: 'var(--color-base-content)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = config.hoverTextColor
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--color-base-content)'
                                        }}
                                    />
                                </a>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfileCard