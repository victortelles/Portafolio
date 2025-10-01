import type React from "react"
import Navbar from "@/components/common/Navbar/Navbar"
import HeroSection from "@/components/landingPage/HeroSection/HeroSection"
import AboutPreview from "@/components/landingPage/AboutPreview/AboutPreview"
import WhatIsPalLink from "@/components/landingPage/WhatIsPalLink/WhatIsPalLink"
import WhatWeOffer from "@/components/landingPage/WhatWeOffer/WhatWeOffer"
import OurMission from "@/components/landingPage/OurMission/OurMission"
import HowWeHelp from "@/components/landingPage/HowWeHelp/HowWeHelp"
import Sponsor from "@/components/landingPage/Sponsor/Sponsor"
import OurTeam from "@/components/landingPage/OurTeam/OurTeam"
import Footer from "@/components/common/Footer/Footer"
import FloatingSocialSidebar from "@/components/FloatingSocialSidebar/FloatingSocialSidebar"

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[var(--color-base-100)]">
            <Navbar />
            <main>
                <HeroSection />
                <AboutPreview />
                <WhatIsPalLink />
                <Sponsor />
                <WhatWeOffer />
                <OurMission />
                <HowWeHelp />
                <OurTeam />
            </main>
            <Footer />
            {/* <FloatingSocialSidebar /> */}
        </div>
    )
}

export default LandingPage
