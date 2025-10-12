import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaUser } from 'react-icons/fa';
import data from './contactInfoData.json';
import globalData from '@/data/globalData.json';
import type { GlobalData } from '@/types/global';
import type { ContactInfoData } from '@/types/contact';


const ContactInfo = () => {
    const global = globalData as GlobalData;
    const contactData = data as ContactInfoData;

    return (
        <div className="bg-[var(--color-base-200)] border border-[var(--color-base-300)] rounded-[var(--radius-box)] p-6 shadow-lg animate-fade-in">
            <h3 className="font-mono text-xl font-bold text-[var(--color-base-content)] mb-6 flex items-center gap-2">
                <FaUser size={20} className="text-[var(--color-primary)]" />
                Información de Contacto
            </h3>

            <div className="space-y-4">

                {/* Email */}
                <div className="flex items-start gap-3 p-3 bg-[var(--color-base-100)] rounded-[var(--radius-field)] border border-[var(--color-base-300)]">
                    <FaEnvelope size={20} className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                        <span className="font-mono text-sm text-[var(--color-base-content)] font-semibold block">Email:</span>
                        <a
                            href={`mailto:${contactData.personalInfo.email}`}
                            className="text-[var(--color-primary)] font-sans hover:text-[var(--color-accent)] transition-colors break-all"
                        >
                            {contactData.personalInfo.email}
                        </a>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 bg-[var(--color-base-100)] rounded-[var(--radius-field)] border border-[var(--color-base-300)]">
                    <FaMapMarkerAlt size={20} className="text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                        <span className="font-mono text-sm text-[var(--color-base-content)] font-semibold block">Ubicación:</span>
                        <span className="text-[var(--color-neutral-content)] font-sans">{contactData.personalInfo.location}</span>
                    </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3 p-3 bg-[var(--color-base-100)] rounded-[var(--radius-field)] border border-[var(--color-base-300)]">
                    <div className="flex items-center justify-center w-5 h-5 mt-1 flex-shrink-0">
                        <div
                            className={`w-3 h-3 rounded-full animate-breathe ${
                                global.availability.status === "Disponible"
                                    ? "bg-[var(--color-success)] shadow-lg shadow-[var(--color-success)]/50"
                                    : global.availability.status === "Medio Ocupado"
                                    ? "bg-[var(--color-warning)] shadow-lg shadow-[var(--color-warning)]/50"
                                    : "bg-[var(--color-error)] shadow-lg shadow-[var(--color-error)]/50"
                            }`}
                        ></div>
                    </div>

                    { /* Availability Status */ }
                    <div className="flex-1">
                        <div className="flex items-center">
                            <span className="font-mono text-sm text-[var(--color-base-content)] font-semibold mr-2">
                                Estado:
                            </span>
                            <span
                                className={`px-2 py-1 rounded-full font-mono text-xs border font-semibold
                                    ${
                                        global.availability.status === "Disponible"
                                            ? "bg-[color:var(--color-success)/.2] text-[var(--color-success)] border-[var(--color-success)]"
                                            : global.availability.status === "Medio Ocupado"
                                            ? "bg-[color:var(--color-warning)/.2] text-[var(--color-warning)] border-[var(--color-warning)]"
                                            : "bg-[color:var(--color-error)/.2] text-[var(--color-error)] border-[var(--color-error)]"
                                    }
                                `}
                            >
                                {global.availability.status}
                            </span>
                        </div>

                        { /* Availability Message */ }
                        <div className="mt-2">
                            <p className="text-xs text-[var(--color-neutral-content)] font-sans">
                                {global.availability.messages[global.availability.status]}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-3 p-3 bg-[var(--color-base-100)] rounded-[var(--radius-field)] border border-[var(--color-base-300)]">
                    <FaClock size={20} className="text-[var(--color-info)] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                        <span className="font-mono text-sm text-[var(--color-base-content)] font-semibold block">Tiempo de respuesta:</span>
                        <span className="font-mono text-[var(--color-info)] text-sm">{contactData.responseTime.message}</span>
                        <p className="text-xs text-[var(--color-neutral-content)] font-sans mt-1">
                            {contactData.responseTime.detail}
                        </p>
                    </div>
                </div>

                {/* Preferred Contact Note */}
                <div className="text-xs text-[var(--color-neutral-content)] font-sans bg-[var(--color-base-100)] p-3 rounded-[var(--radius-field)] border border-[var(--color-base-300)] flex items-start gap-2">
                    <FaUser className="text-[var(--color-primary)] mt-0.5 flex-shrink-0" size={20} />
                    <span><strong>Consejo:</strong> {contactData.preferredContact.note}</span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
