import type React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"
import Image from "next/image"
import content from "./footerData.json"
import globalData from "@/data/globalData.json"
import type { FooterContent } from "@/types/footer"
import type { GlobalData } from "@/types/global"

const Footer: React.FC = () => {
    const footerData = content as FooterContent
    const global = globalData as GlobalData

    // función para obtener el icono social apropiado según la plataforma
    const getSocialIcon = (platform: string) => {
        switch (platform) {
            case "github":
                return FaGithub
            case "linkedin":
                return FaLinkedin
            case "twitter":
                return FaTwitter
            case "email":
                return FaEnvelope
            default:
                return FaGithub // Default icon
        }
    }

    return (
        <footer className="bg-[var(--color-base-200)] border-t border-[var(--color-base-300)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Brand Section */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-4">
                            {/* Avatar */}
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src={footerData.brand.avatar}
                                    alt="AHTyler Avatar"
                                    fill
                                    className="object-cover"
                                    sizes="48px"
                                />
                            </div>

                            {/* Brand Name */}
                            <h3 className="font-mono text-2xl font-bold">
                                <span className="text-[var(--color-base-content)]">AH</span>
                                <span className="text-[var(--color-primary)]">Tyler</span>
                            </h3>
                        </div>

                        {/* Tagline */}
                        <p className="font-sans text-[var(--color-neutral-content)] max-w-md leading-relaxed">
                            {footerData.brand.tagline}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {footerData.socials.map((social) => {
                                const IconComponent = getSocialIcon(social.platform)
                                return (
                                    <a
                                        key={social.platform}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-[var(--color-base-300)] hover:bg-[var(--color-primary)] text-[var(--color-base-content)] hover:text-[var(--color-primary-content)] rounded-[var(--radius-field)] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
                                        aria-label={social.label}
                                    >
                                        <IconComponent size={20} />
                                    </a>
                                )
                            })}
                        </div>

                        {/* Disponibilidad */}
                        <div className="flex items-center gap-2 mt-2">
                            <div
                                className={`w-2 h-2 rounded-full animate-breathe ${
                                    global.availability.status === "Disponible"
                                        ? "bg-[var(--color-success)] shadow-lg shadow-[var(--color-success)]/50"
                                        : global.availability.status === "Medio Ocupado"
                                            ? "bg-[var(--color-warning)] shadow-lg shadow-[var(--color-warning)]/50"
                                            : "bg-[var(--color-error)] shadow-lg shadow-[var(--color-error)]/50"
                                }`}
                            ></div>
                            <span
                                className={`font-mono text-xs px-3 py-1 rounded-full ${
                                    global.availability.status === "Disponible"
                                        ? "bg-[var(--color-success)]/20 text-[var(--color-success)]"
                                        : global.availability.status === "Medio Ocupado"
                                            ? "bg-[var(--color-warning)]/20 text-[var(--color-warning)]"
                                            : "bg-[var(--color-error)]/20 text-[var(--color-error)]"
                                }`}
                            >
                                {global.availability.status}
                            </span>
                            <span className="font-sans text-xs text-[var(--color-neutral-content)]">
                                {global.availability.messages[global.availability.status]}
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-mono text-lg font-semibold text-[var(--color-base-content)]">
                            Enlaces Rápidos
                        </h4>
                        <ul className="space-y-3">
                            {footerData.quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="font-sans text-[var(--color-neutral-content)] hover:text-[var(--color-primary)] transition-colors duration-300 text-sm block py-1"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[var(--color-base-300)] mb-6"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="font-sans text-[var(--color-neutral-content)] text-sm text-center sm:text-left">
                        {footerData.footer.copyright}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                        {/* Creditos y Privacidad */}
                        <a
                            href={footerData.footer.credits.href}
                            className="font-mono text-sm text-[var(--color-neutral-content)] hover:text-[var(--color-primary)] transition-colors duration-300 underline-offset-4 hover:underline"
                        >
                            {footerData.footer.credits.label}
                        </a>

                        {/* Separador */}
                        <span className="hidden sm:inline-block mx-2 text-[var(--color-base-content)]">|</span>

                        <a
                            href={footerData.footer.privacy.href}
                            className="font-mono text-sm text-[var(--color-neutral-content)] hover:text-[var(--color-primary)] transition-colors duration-300 underline-offset-4 hover:underline"
                        >
                            {footerData.footer.privacy.label}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
