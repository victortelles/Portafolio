import type React from "react"
import content from "./content.json"
import "./sponsor-marquee.css"
import SponsorCard from "./SponsorCard"

const Sponsor: React.FC = () => {
    return (
        <section className="py-20 bg-[var(--color-base-200)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */
                }
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-base-content)] mb-4">
                        {content.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-[var(--color-neutral-content)] max-w-2xl mx-auto">
                        {content.description}
                    </p>
                </div>

                    {/* Desktop (md+): infinite marquee row (no scroll), keeps overlay */}
                <div className="hidden md:block">
                    <div className="sponsor-marquee">
                        <div className="sponsor-marquee__inner">
                                {/* Group A */}
                            <div className="sponsor-marquee__group">
                                {content.sponsors.map((sponsor, idx) => (
                                    <SponsorCard
                                        key={`md-a-${idx}`}
                                        sponsor={sponsor}
                                        widthClass="w-72"
                                        heightClass="h-48"
                                        imageHeightClass="h-32"
                                    />
                                ))}
                            </div>
                                {/* Group B (clone) */}
                            <div className="sponsor-marquee__group" aria-hidden="true">
                                {content.sponsors.map((sponsor, idx) => (
                                    <SponsorCard
                                        key={`md-b-${idx}`}
                                        sponsor={sponsor}
                                        widthClass="w-72"
                                        heightClass="h-48"
                                        imageHeightClass="h-32"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                    {/* Medium screens (>=425px and <768px): 2 cards visible, infinite marquee */}
                <div className="hidden min-[425px]:block md:hidden">
                    <div className="sponsor-marquee">
                        <div className="sponsor-marquee__inner">
                            <div className="sponsor-marquee__group">
                                {content.sponsors.map((sponsor, idx) => (
                                    <SponsorCard
                                        key={`mdown-a-${idx}`}
                                        sponsor={sponsor}
                                        widthClass="w-[46vw] max-w-[420px]"
                                        heightClass="h-[220px]"
                                        imageHeightClass="h-28"
                                    />
                                ))}
                            </div>
                                {/* Group B (clone) */}
                            <div className="sponsor-marquee__group" aria-hidden="true">
                                {content.sponsors.map((sponsor, idx) => (
                                    <SponsorCard
                                        key={`mdown-b-${idx}`}
                                        sponsor={sponsor}
                                        widthClass="w-[46vw] max-w-[420px]"
                                        heightClass="h-[220px]"
                                        imageHeightClass="h-28"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                    {/* Small screens (<=425px): 1 card per view, infinite marquee */}
                <div className="min-[425px]:hidden md:hidden">
                    <div className="sponsor-marquee">
                        <div className="sponsor-marquee__inner">
                            <div className="sponsor-marquee__group">
                                {content.sponsors.map((sponsor, idx) => (
                                    <SponsorCard
                                        key={`sm-a-${idx}`}
                                        sponsor={sponsor}
                                        widthClass="w-[88vw]"
                                        heightClass="h-[180px]"
                                        imageHeightClass="h-28"
                                    />
                                ))}
                            </div>
                                {/* Group B (clone) */}
                            <div className="sponsor-marquee__group" aria-hidden="true">
                                {content.sponsors.map((sponsor, idx) => (
                                    <SponsorCard
                                        key={`sm-b-${idx}`}
                                        sponsor={sponsor}
                                        widthClass="w-[88vw]"
                                        heightClass="h-[220px]"
                                        imageHeightClass="h-28"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsor
