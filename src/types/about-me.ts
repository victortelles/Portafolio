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

export interface AboutHeroData {
    personalInfo: PersonalInfo
    quickFacts: QuickFact[]
    socialLinks: SocialLink[]
    currentStatus: CurrentStatus
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

export interface AdditionalInfo {
    quote: string
    author: string
}

export interface PersonalValuesData {
    sectionTitle: string
    sectionDescription: string
    values: PersonalValue[]
    additionalInfo: AdditionalInfo
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
    sectionDescription: string
    hobbies: Hobby[]
}

// PersonalTimeline tipos
export interface TimelineEvent {
    id: number
    year: string
    quarter: string
    title: string
    type: string
    icon: string
    description: string
    details: string[]
    technologies: string[]
    achievements: string[]
    location: string
}

export interface TimelineStats {
    totalYears: number
    majorMilestones: number
    technologiesLearned: number
    projectsCompleted: number
    currentFocus: string
}

export interface LifePhilosophy {
    quote: string
    values: string[]
}

export interface PersonalTimelineData {
    sectionTitle: string
    sectionDescription: string
    timelineEvents: TimelineEvent[]
    stats: TimelineStats
    lifePhilosophy: LifePhilosophy
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
