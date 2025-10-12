import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaShare } from 'react-icons/fa';
import data from '../ContactInfo/contactInfoData.json';
import type { ContactInfoData } from '@/types/contact';

const icons: Record<string, React.ReactNode> = {
    FaGithub: <FaGithub size={20} />,
    FaLinkedin: <FaLinkedin size={20} />,
    FaGlobe: <FaGlobe size={20} />,
};

const SocialLinksCard = () => {
    const contactData = data as ContactInfoData;
    return (
        <div className="bg-[var(--color-base-200)] border border-[var(--color-base-300)] rounded-[var(--radius-box)] p-6 shadow-lg animate-fade-in">

            {/* Social Links - title */}
            <h3 className="font-mono text-xl font-bold text-[var(--color-base-content)] mb-6 flex items-center gap-2">
                <FaShare size={20} className="text-[var(--color-accent)]" />
                Redes Sociales
            </h3>

            { /* Social Links Grid */ }
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {contactData.socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-[var(--color-base-100)] hover:bg-[var(--color-primary)] text-[var(--color-base-content)] hover:text-[var(--color-primary-content)] rounded-[var(--radius-field)] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 border border-[var(--color-base-300)] group"
                        aria-label={link.name}
                    >
                        { /* Icon */ }
                        <span className="flex-shrink-0">
                            {icons[link.icon]}
                        </span>

                        { /* Link Info */ }
                        <div className="flex-1">
                            <span className="font-mono text-sm font-semibold block">{link.name}</span>
                            <span className="text-xs font-sans opacity-80">{link.description}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialLinksCard;