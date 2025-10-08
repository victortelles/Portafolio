import type React from "react"
import Navbar from "@/components/common/Navbar/Navbar"
import HeroSection from "@/components/landingPage/HeroSection/HeroSection"
import SkillsCarousel from "@/components/landingPage/SkillsCarousel/SkillsCarousel"
import FeaturedProjects from "@/components/landingPage/FeaturedProjects/FeaturedProjects"
import AboutPreview from "@/components/landingPage/AboutPreview/AboutPreview"
import ContactCTA from "@/components/landingPage/ContactCTA/ContactCTA"
import Footer from "@/components/common/Footer/Footer"
import ScrollToTopButton from "@/components/common/ScrollToTopButton/ScrollToTopButton"

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[var(--color-base-100)]">
            <Navbar />
            <main>
                <HeroSection />
                <AboutPreview />
                <SkillsCarousel />
                <FeaturedProjects />
                <ContactCTA />
                <ScrollToTopButton />
            </main>
            <Footer />
        </div>

    )
}

export default LandingPage
