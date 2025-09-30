//Type for Call to Action
export type CTA = {
    label: string
    href: string
    variant?: "primary" | "ghost"
}

//Type for Hero Text Slide
export type HeroTextSlide = {
    id: number
    text: string
}

//Type for Hero Text Carousel
export type HeroTextCarousel = {
    slides: HeroTextSlide[]
    autoplayDelay: number
    transitionDuration: number
}

//Type for Section
export type SectionCopy = {
    title?: string
    subtitle?: string
    description?: string
    items?: Array<Record<string, any>>
}

//Type for Navigation Item
export type NavItem = {
    label: string
    href: string
}

//Type for Feature Card
export type FeatureCard = {
    title: string
    description: string
    icon?: string
}

//Type for Team Member
export type TeamMember = {
    name: string
    role: string
    bio: string
    avatar: string
    socials: {
        github?: string
        twitter?: string
        linkedin?: string
    }
}

//Type for Footer Column
export type FooterColumn = {
    title: string
    links: Array<{
        label: string
        href: string
    }>
}
