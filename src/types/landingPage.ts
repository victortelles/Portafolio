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
        website?: string
        [key: string]: string | undefined // Permite agregar más redes sociales dinámicamente
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

// SkillsCarousel.tsx - data structure
export interface Skill {
    name: string
    icon: string
    color: string
}

export interface SkillCategory {
    id: string
    name: string
    skills: Skill[]
}

export interface SkillsCarouselData {
    title: string
    description: string
    categories: SkillCategory[]
}

// FeaturedProjects.tsx - data structure
export interface Project {
    id: string
    title: string
    shortDescription: string
    fullDescription: string
    image: string
    tags: string[]
    github: string
    demo: string | null
    featured: boolean
}

export interface FeaturedProjectsData {
    title: string
    description: string
    cta: {
        label: string
        href: string
    }
    projects: Project[]
}

// ContactCTA.tsx - data structure
export interface FormField {
    label: string
    placeholder: string
    required: boolean
    validation: {
        minLength?: number
        maxLength?: number
        pattern?: string
        errorMessage: string
    }
}

export interface SubmitButton {
    text: string
    icon: string
    phoneNumber?: string
    emailAddress?: string
    backgroundColor: string
    hoverColor: string
}

export interface ContactForm {
    fields: {
        name: FormField
        email: FormField
        subject: FormField
        message: FormField
    }
    submitButtons: {
        whatsapp: SubmitButton
        email: SubmitButton
    }
}

export interface ValidationMessages {
    required: string
    email: string
    minLength: string
    maxLength: string
    success: string
    error: string
}

export interface ContactCTAData {
    title: string
    subtitle: string
    description: string
    responseNote: string
    form: ContactForm
    validation: {
        messages: ValidationMessages
    }
}

export interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

export interface FormErrors {
    name?: string
    email?: string
    subject?: string
    message?: string
}