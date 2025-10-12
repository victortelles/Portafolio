import React from 'react';
import { FaComments } from 'react-icons/fa';
import data from './contactHeroData.json';

const ContactHero = () => {
    return (
        <section className="relative w-full text-center mb-8 py-12">
            {/* Background gradient similar to HeroSection */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-base-200)] to-[var(--color-base-100)] rounded-[var(--radius-box)]">
                <div className="absolute inset-0 bg-black/20 rounded-[var(--radius-box)]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto px-4">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] shadow-lg animate-bounce-in">
                        <FaComments size={24} />
                    </div>
                </div>

                {/* Main Title with reduced size */}
                <h1 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    <span className="text-[var(--color-base-content)]">{data.title.prefix}</span>{" "}
                    <span className="text-[var(--color-primary)]">{data.title.main}</span>
                </h1>

                {/* Subtitle with reduced size */}
                <p className="font-sans text-base sm:text-lg lg:text-xl font-medium text-[var(--color-neutral-content)] mb-6 leading-relaxed max-w-2xl mx-auto">{data.subtitle}
                </p>

                {/* Description with reduced size */}
                <p className="font-sans text-sm sm:text-base text-[var(--color-neutral-content)]/80 max-w-xl mx-auto leading-relaxed text-justify">
                    {data.description}
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
