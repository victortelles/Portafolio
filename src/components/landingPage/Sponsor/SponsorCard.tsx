import React from "react"
import { ArrowRight } from "lucide-react"

interface SponsorCardProps {
    sponsor: {
        name: string
        logo: string
        banner: string
        alt?: string
        link?: string
        description?: string
    }
    widthClass: string
    heightClass: string
    imageHeightClass: string
    className?: string
}

const SponsorCard: React.FC<SponsorCardProps> = ({
    sponsor,
    widthClass,
    heightClass,
    imageHeightClass,
    className = "",
}) => {
    const imgSrc = sponsor.banner || sponsor.logo
    const alt = sponsor.alt || `${sponsor.name} logo`
    return (
        <div
            className={`relative flex-shrink-0 bg-[var(--color-base-100)] rounded-[var(--radius-box)] border border-[var(--color-base-300)] group transition-colors hover:border-[var(--color-primary)]/30 p-5 flex items-center justify-center ${widthClass} ${heightClass} ${className}`}
        >
                {/* Image */}
            <img
                src={imgSrc}
                alt={alt}
                className={`w-full object-contain transition duration-300 ease-out group-hover:brightness-50 group-hover:scale-[1.02] group-hover:blur-sm ${imageHeightClass}`}
                draggable={false}
            />
                {/* Overlay on hover */}
            <div className="absolute inset-0 opacity-0 translate-y-2 bg-black/0 transition duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-black/70">
                {/* Header */}
                <div className="absolute top-0 inset-x-0 flex items-center justify-between gap-3 px-4 py-3">
                    <span className="text-[var(--color-base-content)] text-base font-semibold truncate max-w-[75%]">
                        {sponsor.name}
                    </span>
                    {sponsor.link && (
                        <a
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-content)] hover:bg-[var(--color-primary-hover)] transition-colors"
                            aria-label={`Visit ${sponsor.name}`}
                        >
                            <ArrowRight size={16} />
                        </a>
                    )}
                </div>
                {/* Body */}
                {sponsor.description && (
                    <div className="absolute bottom-0 inset-x-0 px-4 pb-4">
                        <p className="text-sm text-[var(--color-neutral-content)] leading-snug max-h-20 overflow-hidden text-left">
                            {sponsor.description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SponsorCard
