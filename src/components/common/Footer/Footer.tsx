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
        <footer className="bg-[var(--color-base-200)] border-t border-[var(--color-base-300)] relative overflow-hidden">
            {/* SVG decorativo izquierdo (gatete) */}
            <div className="hidden lg:block absolute left-0 top-0 h-full z-0 pointer-events-none select-none" style={{ opacity: 0.06 }}>
                <img src="assets/extras/gatete_izq.svg" alt="Decoración Gatete" className="h-full w-auto" style={{ filter: 'grayscale(1) brightness(0.1) contrast(2)', color: 'var(--color-primary-content)' }} />
            </div>
            {/* SVG decorativo derecho (BG_Loona_Footer) */}
            <div className="absolute right-0 top-0 h-full z-0 pointer-events-none select-none" style={{ opacity: 0.06 }}>
                <img src="assets/extras/BG_Loona_Footer_der.svg" alt="Decoración Loona" className="h-full w-auto" style={{ filter: 'grayscale(1) brightness(0.1) contrast(2)', color: 'var(--color-primary-content)' }} />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                        <p className="font-mono text-[var(--color-neutral-content)] max-w-md leading-relaxed">
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
                                className={`w-2 h-2 rounded-full animate-breathe ${global.availability.status === "Disponible"
                                    ? "bg-[var(--color-success)] shadow-lg shadow-[var(--color-success)]/50"
                                    : global.availability.status === "Medio Ocupado"
                                        ? "bg-[var(--color-warning)] shadow-lg shadow-[var(--color-warning)]/50"
                                        : "bg-[var(--color-error)] shadow-lg shadow-[var(--color-error)]/50"
                                    }`}
                            ></div>
                            <span
                                className={`font-mono text-xs px-3 py-1 rounded-full ${global.availability.status === "Disponible"
                                    ? "bg-[var(--color-success)]/20 text-[var(--color-success)]"
                                    : global.availability.status === "Medio Ocupado"
                                        ? "bg-[var(--color-warning)]/20 text-[var(--color-warning)]"
                                        : "bg-[var(--color-error)]/20 text-[var(--color-error)]"
                                    }`}
                            >
                                {global.availability.status}
                            </span>
                            <span className="font-mono text-xs text-[var(--color-neutral-content)]">
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
                                        className="relative group inline-block font-mono text-[var(--color-neutral-content)] hover:text-[var(--color-primary)] transition-colors duration-300 text-sm py-1"
                                    >
                                        {link.label}
                                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
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
                    <p className="font-mono text-[var(--color-neutral-content)] text-sm text-center sm:text-left">
                        {footerData.footer.copyright}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-2">

                        {/* FAQs */}
                        <a
                            href={footerData.footer.faqs.href}
                            className="relative group font-mono text-sm text-[var(--color-neutral-content)] hover:text-[var(--color-primary)] transition-colors duration-300"
                        >
                            {footerData.footer.faqs.label}
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        {/* Separador */}
                        <span className="hidden sm:inline-block mx-2 text-[var(--color-base-content)]">|</span>

                        {/* Creditos y Privacidad */}
                        <a
                            href={footerData.footer.credits.href}
                            className="relative group font-mono text-sm text-[var(--color-neutral-content)] hover:text-[var(--color-primary)] transition-colors duration-300"
                        >
                            {footerData.footer.credits.label}
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
                        </a>

                        {/* Separador */}
                        <span className="hidden sm:inline-block mx-2 text-[var(--color-base-content)]">|</span>

                        <a
                            href={footerData.footer.privacy.href}
                            className="relative group font-mono text-sm text-[var(--color-neutral-content)] hover:text-[var(--color-primary)] transition-colors duration-300"
                        >
                            {footerData.footer.privacy.label}
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
