"use client"

import type React from "react"
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { FaLock } from 'react-icons/fa';
import data from "./contactPageData.json"
import type { ContactPageData } from '@/types/contact'
import ContactHero from '@/components/contact/ContactHero/ContactHero';
import ContactForm from '@/components/contact/ContactForm/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo/ContactInfo';
import SocialLinksCard from '@/components/contact/SocialLinksCard/SocialLinksCard';
import '@/styles/contact.css';

const ContactPage: React.FC = () => {
    const pageData = data as ContactPageData;
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-base-200)] to-[var(--color-base-100)]">

            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                    {/* Back button */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-field)] bg-[var(--color-base-200)] border border-[var(--color-base-300)] text-[var(--color-base-content)] hover:bg-[var(--color-primary)] hover:text-[var(--color-primary-content)] font-mono font-semibold transition-all duration-300 hover:scale-105 shadow-lg animate-slide-up"
                        >
                            <ArrowLeft size={18} />
                            {pageData.backButton.label}
                        </Link>
                    </div>

                    {/* Hero Section */}
                    <div className="animate-slide-up animate-delay-100">
                        <ContactHero />
                    </div>

                    {/* Decorative separator */}
                    <div className="flex justify-center mb-12">
                        <div className="w-64 h-1 rounded-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] opacity-80 animate-slide-up animate-delay-200"></div>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="contact-bento-layout">

                        {/* Contact Form */}
                        <div className="contact-form-area animate-slide-up animate-delay-200 bento-card">
                            <ContactForm />
                        </div>

                        {/* Contact Information - Expandido */}
                        <div className="contact-info-area animate-slide-up animate-delay-300 bento-card">
                            <ContactInfo />
                        </div>

                        {/* Social Links Card - Abajo en desktop */}
                        <div className="social-links-area animate-slide-up animate-delay-400 bento-card">
                            <SocialLinksCard />
                        </div>

                    </div>

                    {/* Footer note */}
                    <div className="text-center mt-16 animate-slide-up animate-delay-300">
                        <p className="text-sm text-[var(--color-neutral-content)]/70 font-sans max-w-2xl mx-auto flex items-center justify-center gap-2">
                            <FaLock className="text-lg text-[var(--color-primary)]" aria-label="lock icon" />
                            {pageData.footerNote.note}
                        </p>
                    </div>

                </main>
            </div>
        </div>
    );
}

export default ContactPage