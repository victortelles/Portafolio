import AboutHero from "@/components/about/AboutHero/AboutHero"
import PersonalValues from "@/components/about/PersonalValues/PersonalValues"
import HobbiesSection from "@/components/about/HobbiesSection/HobbiesSection"
import TechStack from "@/components/about/TechStack/TechStack"
import Navbar from "@/components/common/Navbar/Navbar"
import ScrollToTopButton from "@/components/common/ScrollToTopButton/ScrollToTopButton"
import Skills from "@/components/about/Skills/Skills"
import Footer from "@/components/common/Footer/Footer"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--color-base-100)]">
            {/* Navbar*/}
            <Navbar />

            {/* Hero section con información personal */}
            <AboutHero />

            {/* Valores personales */}
            <PersonalValues />

            {/* Sección de habilidades */}
            <Skills />

            {/* Hobbies y pasatiempos */}
            <HobbiesSection />

            {/* Stack tecnológico nuevo */}
            {/*<TechStack />*/}

            {/* Footer */}
            <Footer />

            {/* Botón flotante para volver al inicio */}
            <ScrollToTopButton />
        </main>
    )
}