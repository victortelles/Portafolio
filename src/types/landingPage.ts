// Types for Landing Page components

// HeroSection.tsx - data structure
export interface TerminalData {
    title: string
    developerName: string
    methods: string[]
    typingSpeed: number
    deleteSpeed: number
    pauseTime: number
}

export interface Badge {
    title: string
    icon: string
    color: string
}

export interface Title {
    prefix: string
    main: string
}

// HeroSection.tsx - HeroSection data structure
export interface HeroSectionData {
    title: Title
    subtitle: string
    badges: Badge[]
    primaryCTA: {
        label: string
        href: string
        variant: string
    }
    secondaryCTA: {
        label: string
        href: string
        variant: string
    }
    backgroundImage: string
    terminal: TerminalData
}

// AboutPreview.tsx - data structure
export interface ProfileCard {
    name: string
    role: string
    description: string
    image: string
    socialLinks: {
        github?: string
        linkedin?: string
    }
}

export interface RoleCard {
    title: string
    description: string
    icon: string
}

export interface FloatingTech {
    name: string
    icon: string
    color: string
    position: {
        top: string
        left: string
    }
}

export interface AboutPreviewData {
    title: string
    description: string
    profileCard: ProfileCard
    roleCards: RoleCard[]
    floatingTech: FloatingTech[]
    cta: {
        label: string
        href: string
    }
}