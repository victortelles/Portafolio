
import ExperienceHero from "@/components/experience/ExperienceHero/ExperienceHero"
import ExperienceTimeline from "@/components/experience/ExperienceTimeline/ExperienceTimeline"
import Navbar from "@/components/common/Navbar/Navbar"
import ScrollToTopButton from "@/components/common/ScrollToTopButton/ScrollToTopButton"

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-[var(--color-base-100)]">
            {/* Navbar*/}
            <Navbar />

            {/* Hero Section */}
            <ExperienceHero />

            {/* Timeline de experiencias */}
            <ExperienceTimeline />

            {/* Botón flotante para volver al inicio */}
            <ScrollToTopButton />
        </main>
    )
}