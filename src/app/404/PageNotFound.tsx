import Link from "next/link";
import type { NotFoundContent } from "@/types/notFound";
import { FaHome, FaEnvelope, FaExclamationTriangle } from "react-icons/fa";

// definir el prop type para el contenido del componente
type PageNotFoundProps = {
    content: NotFoundContent;
};

function PageNotFound({ content }: PageNotFoundProps) {
    return (
        <main className="relative min-h-screen w-full bg-[var(--color-base-100)] overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-40 h-40 border-2 border-[var(--color-primary)] rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-[var(--color-accent)] rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-[var(--color-secondary)] rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/2 w-16 h-16 border-2 border-[var(--color-info)] rounded-full animate-pulse"></div>
            </div>

            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle, var(--color-primary) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Content */}
            <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
                <div className="w-full max-w-4xl text-center">
                    {/* 404 Error Display */}
                    <div className="mb-8">
                        <div className="relative inline-block">
                            <h1 className="font-mono text-8xl sm:text-9xl lg:text-[12rem] font-black text-[var(--color-primary)] opacity-20 select-none">
                                404
                            </h1>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <FaExclamationTriangle
                                    size={80}
                                    className="text-[var(--color-warning)] animate-bounce"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Error Info Card */}
                    <div className="bg-[var(--color-base-200)] border-2 border-[var(--color-base-300)] rounded-[var(--radius-box)] p-8 sm:p-10 lg:p-12 shadow-lg backdrop-blur-sm mx-auto max-w-2xl mb-8">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-[var(--color-error)]/10 border border-[var(--color-error)]/30 rounded-[var(--radius-field)] mb-6">
                            <span className="font-mono text-sm font-medium text-[var(--color-error)]">
                                {content.badge}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-6">
                            {content.title}
                        </h2>

                        {/* Description */}
                        <p className="font-sans text-lg sm:text-xl text-[var(--color-neutral-content)] leading-relaxed mb-8">
                            {content.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href={content.cta.href}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-info)] text-[var(--color-primary-content)] hover:text-[var(--color-info-content)] rounded-[var(--radius-selector)] transition-all duration-300 text-lg font-mono font-semibold group shadow-lg hover:shadow-[var(--color-primary)]/40 hover:scale-105"
                            >
                                <FaHome size={18} />
                                {content.cta.label}
                            </Link>

                            <Link
                                href={content.secondaryCta.href}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-base-100)] hover:bg-[var(--color-accent)] border-2 border-[var(--color-base-300)] hover:border-[var(--color-accent)] text-[var(--color-base-content)] hover:text-[var(--color-accent-content)] rounded-[var(--radius-selector)] transition-all duration-300 text-lg font-mono font-semibold group shadow-lg hover:shadow-[var(--color-accent)]/40 hover:scale-105"
                            >
                                <FaEnvelope size={18} />
                                {content.secondaryCta.label}
                            </Link>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="text-center">
                        <p className="font-sans text-sm text-[var(--color-neutral-content)]/70">
                            Si crees que esto es un error, por favor contáctanos.
                        </p>
                    </div>
                </div>
            </section>

            {/* Floating decorative elements */}
            <div className="absolute top-10 right-10 w-4 h-4 bg-[var(--color-primary)] rounded-full animate-ping"></div>
            <div className="absolute bottom-10 left-10 w-3 h-3 bg-[var(--color-accent)] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[var(--color-secondary)] rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </main>
    );
}

export default PageNotFound;