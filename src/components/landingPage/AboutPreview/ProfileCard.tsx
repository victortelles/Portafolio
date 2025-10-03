import React from "react"
import { User, Github, Linkedin, Twitter } from "lucide-react"
import type { ProfileCard as ProfileCardType } from "@/types/landingPage"

interface ProfileCardProps {
    profileCard: ProfileCardType
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profileCard }) => {
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

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                    {profileCard.socialLinks.github && (
                        <a
                            href={profileCard.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[var(--color-base-300)] hover:bg-[var(--color-primary)] flex items-center justify-center transition-colors group"
                        >
                            <Github size={18} className="text-[var(--color-base-content)] group-hover:text-[var(--color-primary-content)]" />
                        </a>
                    )}
                    {profileCard.socialLinks.linkedin && (
                        <a
                            href={profileCard.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[var(--color-base-300)] hover:bg-[var(--color-info)] flex items-center justify-center transition-colors group"
                        >
                            <Linkedin size={18} className="text-[var(--color-base-content)] group-hover:text-[var(--color-info-content)]" />
                        </a>
                    )}
                    {profileCard.socialLinks.twitter && (
                        <a
                            href={profileCard.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[var(--color-base-300)] hover:bg-[var(--color-accent)] flex items-center justify-center transition-colors group"
                        >
                            <Twitter size={18} className="text-[var(--color-base-content)] group-hover:text-[var(--color-accent-content)]" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProfileCard