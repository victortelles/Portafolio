
import ExperienceHero from "@/components/experience/ExperienceHero/ExperienceHero"
import ExperienceTimeline from "@/components/experience/ExperienceTimeline/ExperienceTimeline"
import Navbar from "@/components/common/Navbar/Navbar"
import ScrollToTopButton from "@/components/common/ScrollToTopButton/ScrollToTopButton"

import Bg_ExpTimeline from "@/components/experience/ExperienceTimeline/Bg_ExpTimeline"

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-[var(--color-base-100)]" style={{ position: "relative", overflow: "hidden" }}>
            {/* Fondo SVG cubriendo toda la página */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: 0,
                    pointerEvents: "none",
                    overflow: "hidden",
                }}
            >
                {/* Usar una sola instancia grande del SVG para cubrir el fondo */}
                <Bg_ExpTimeline style={{ width: "100vw", height: "100vh", opacity: 0.18 }} preserveAspectRatio="none" />
            </div>
            <main style={{ position: "relative", zIndex: 1 }}>
                {/* Navbar*/}
                <Navbar />

                {/* Hero Section */}
                <ExperienceHero />

                {/* Timeline de experiencias */}
                <ExperienceTimeline />

            </main>
            {/* Botón flotante para volver al inicio */}
            <ScrollToTopButton />
        </div>
    )
}