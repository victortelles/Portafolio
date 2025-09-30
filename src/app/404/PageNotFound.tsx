import Link from "next/link";
import type { NotFoundContent } from "@/types/notFound";

// definir el prop type para el contenido del componente
type PageNotFoundProps = {
    content: NotFoundContent;
};

function PageNotFound({ content }: PageNotFoundProps) {
    return (
        <main className="relative min-h-screen w-full overflow-hidden">
            {/* Background image */}
            <img
                src="/assets/background.webp"
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

            {/* Content */}
            <section className="relative z-10 flex min-h-screen items-center justify-center px-4">
                <div className="w-full max-w-5xl">
                    {/* Glass/blur container */}
                    <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-[var(--radius-box)] bg-[var(--color-base-100)]/50 backdrop-blur-md shadow-lg sm:grid-cols-[1fr_2fr]">
                        {/* Left image (hidden on small screens) */}
                        <div className="hidden h-full sm:flex items-center justify-end pl-4 pr-0 sm:pl-6 sm:pr-0 py-6 sm:py-8">
                            <img src="/assets/chilletPB_2.png" alt="Preview" className="block max-h-full w-auto object-contain" />
                        </div>

                        {/* Right content */}
                        <div className="pl-4 pr-6 py-6 sm:pl-2 sm:pr-10 sm:py-10 lg:pl-0 flex items-center justify-start">
                            <div className="text-left w-full">
                                <p className="mb-3 text-sm font-medium text-[var(--color-accent-content)]/80">
                                    {content.badge}
                                </p>
                                <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[var(--color-base-content)] sm:text-5xl">
                                    {content.title}
                                </h1>
                                <p className="mb-8 text-[var(--color-neutral-content)] text-base sm:text-lg">
                                    {content.description}
                                </p>

                                <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                                    {/* Buttons */}
                                    <Link
                                        href={content.cta.href}
                                        className="inline-flex items-center justify-center rounded-[var(--radius-selector)] bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-[var(--color-primary-content)] transition-colors hover:bg-[var(--color-primary-hover)]"
                                    >
                                        {content.cta.label}
                                    </Link>
                                    {/* Buttons */}
                                    {content.secondaryCta?.label && content.secondaryCta?.href && (
                                        <Link
                                            href={content.secondaryCta.href}
                                            className="inline-flex items-center justify-center rounded-[var(--radius-selector)] border border-[var(--color-base-300)] bg-[var(--color-base-100)]/60 px-5 py-3 text-sm font-medium text-[var(--color-base-content)] backdrop-blur-sm transition-colors hover:border-[var(--color-primary)]/40"
                                        >
                                            {content.secondaryCta.label}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PageNotFound;