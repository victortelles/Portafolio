import type React from "react"
import { FaDiscord, FaXTwitter, FaGithub } from "react-icons/fa6"
import * as Separator from "@radix-ui/react-separator"
import content from "./content.json"
import type { FooterColumn } from "../../../types/content"

const Footer: React.FC = () => {
    // Function to get the appropriate social icon based on platform
    const getSocialIcon = (platform: string) => {
        switch (platform) {
            case "github":
                return FaGithub
            case "twitter":
                return FaXTwitter
            case "discord":
                return FaDiscord
            default:
                return FaGithub // Default icon
        }
    }

    return (
        <footer className="bg-[var(--color-base-200)] border-t border-[var(--color-base-300)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                                <span className="text-[var(--color-primary)]">Pal</span>
                                <span className="text-[var(--color-base-content)]">Link</span>
                            </h3>
                            <p className="text-[var(--color-neutral-content)]">{content.tagline}</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {content.socials.map((social) => {
                                // Get the appropriate icon component
                                const IconComponent = getSocialIcon(social.platform)

                                return (
                                    <a
                                        key={social.platform}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-[var(--color-base-300)] hover:bg-[var(--color-primary)] text-[var(--color-base-content)] hover:text-[var(--color-primary-content)] rounded-[var(--radius-field)] transition-colors"
                                        aria-label={social.label}
                                    >
                                        <IconComponent size={20} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Footer Columns */}
                    {content.columns.map((column: FooterColumn) => (
                        <div key={column.title}>
                            <h4 className="font-semibold text-[var(--color-base-content)] mb-4">{column.title}</h4>
                            <ul className="space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-[var(--color-neutral-content)] hover:text-[var(--color-primary)] transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator.Root className="bg-[var(--color-base-300)] h-px mb-8" />

                {/* Bottom Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[var(--color-neutral-content)] text-sm">{content.copyright}</p>

                    <div className="flex gap-6">
                        {content.legal.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-[var(--color-neutral-content)] hover:text-[var(--color-primary)] transition-colors text-sm"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
