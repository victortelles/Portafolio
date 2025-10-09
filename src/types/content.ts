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

//Type for Footer Brand
export type FooterBrand = {
    name: string
    tagline: string
    avatar: string
}

//Type for Footer Social Link  
export type FooterSocial = {
    platform: string
    href: string
    label: string
}

//Type for Footer Quick Link
export type FooterQuickLink = {
    label: string
    href: string
}

//Type for Footer Content
export type FooterContent = {
    brand: FooterBrand
    socials: FooterSocial[]
    quickLinks: FooterQuickLink[]
    footer: {
        copyright: string
        privacy: {
            label: string
            href: string
        }
        credits: {
            label: string
            href: string
        }
        availability: {
            status: "Disponible" | "Medio Ocupado" | "Ocupado"
            messages: {
                Disponible: string
                "Medio Ocupado": string
                Ocupado: string
            }
        }
    }
}
