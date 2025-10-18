// Tipos para la página About Me

// AboutHero tipos
export interface PersonalInfo {
    name: string
    title: string
    location: string
    email: string
    description: string
    avatar: string
    yearsOfExperience: number
    projectsCompleted: number
    technologiesUsed: number
    currentRole: string
    company: string
}

export interface QuickFact {
    icon: string
    label: string
    value: string
}

export interface SocialLink {
    platform: string
    url: string
    icon: string
    username: string
}

export interface CurrentStatus {
    availability: string
    location: string
    interests: string
}

export interface Language {
    name: string
    level: string
    levelType: "native" | "intermediate" | "advanced" | "basic"
}

export interface LanguageData {
    title: string
    languages: Language[]
}

export interface AboutHeroData {
    personalInfo: PersonalInfo
    quickFacts: QuickFact[]
    socialLinks: SocialLink[]
    currentStatus: CurrentStatus
    languageData: LanguageData
}

// PersonalValues tipos
export interface PersonalValue {
    id: number
    title: string
    description: string
    icon: string
    color: string
    keywords: string[]
}

export interface PersonalValuesData {
    sectionTitle: string
    sectionTitle2: string
    sectionDescription: string
    values: PersonalValue[]
}

// HobbiesSection tipos
export interface Hobby {
    id: number
    title: string
    description: string
    icon: string
    category: string
    tags: string[]
}

export interface HobbiesSectionData {
    sectionTitle: string
    sectionTitle2: string
    sectionDescription: string
    hobbies: Hobby[]
}


// TechStack nuevos tipos
export interface TechItem {
    id: number
    name: string
    icon: string
    experience: string
    color: string
}

export interface TechCategory {
    id: number
    name: string
    description: string
    color: string
    borderColor: string
    technologies: TechItem[]
}

export interface TechStackData {
    sectionTitle: string
    sectionDescription: string
    categories: TechCategory[]
}
