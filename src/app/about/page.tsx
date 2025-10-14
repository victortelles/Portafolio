import AboutHero from "@/components/about/AboutHero/AboutHero"
import PersonalValues from "@/components/about/PersonalValues/PersonalValues"
import HobbiesSection from "@/components/about/HobbiesSection/HobbiesSection"
import TechStack from "@/components/about/TechStack/TechStack"
import Navbar from "@/components/common/Navbar/Navbar"
import ScrollToTopButton from "@/components/common/ScrollToTopButton/ScrollToTopButton"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--color-base-100)]">
            {/* Navbar*/}
            <Navbar />

            {/* Hero section con información personal */}
            <AboutHero />

            {/* Valores personales */}
            <PersonalValues />

            {/* Hobbies y pasatiempos */}
            <HobbiesSection />

            {/* Stack tecnológico nuevo */}
            <TechStack />

            {/* Botón flotante para volver al inicio */}
            <ScrollToTopButton />
        </main>
    )
}