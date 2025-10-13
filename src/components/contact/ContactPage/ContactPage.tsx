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
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-base-200)] to-[var(--color-base-100)] relative overflow-hidden">

            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

            {/* Bolitas decorativas difuminadas */}
            <div className="pointer-events-none select-none absolute inset-0 z-0">
                {/* Bolitas grandes */}
                <div className="absolute top-16 left-16 w-32 h-32 bg-[var(--color-primary)] opacity-20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0s' }}></div>
                <div className="absolute bottom-24 right-20 w-24 h-24 bg-[var(--color-accent)] opacity-20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-[var(--color-secondary)] opacity-20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                {/* Bolitas pequeñas */}
                <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-[var(--color-info)] opacity-15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.7s' }}></div>
                <div className="absolute bottom-1/5 left-1/5 w-8 h-8 bg-[var(--color-success)] opacity-15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                <div className="absolute top-2/3 right-1/6 w-12 h-12 bg-[var(--color-warning)] opacity-15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2.8s' }}></div>
            </div>

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
                    <div className="w-full mt-16 animate-slide-up animate-delay-300">
                        <p className="text-sm text-[var(--color-neutral-content)]/70 font-sans max-w-4xl mx-auto flex items-center justify-center gap-2 w-full text-center">
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