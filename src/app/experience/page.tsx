
import PersonalTimeline from "@/components/experience/PersonalTimeline/PersonalTimeline"
import Navbar from "@/components/common/Navbar/Navbar"
import ScrollToTopButton from "@/components/common/ScrollToTopButton/ScrollToTopButton"

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-[var(--color-base-100)]">
            {/* Navbar*/}
            <Navbar />

            {/* Timeline personal */}
            <PersonalTimeline />

            {/* Botón flotante para volver al inicio */}
            <ScrollToTopButton />
        </main>
    )
}