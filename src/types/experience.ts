
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

// Estadisticas del timeline
export interface TimelineStats {
    totalYears: number
    majorMilestones: number
    technologiesLearned: number
    projectsCompleted: number
    currentFocus: string
}

// Filosofia de vida
export interface LifePhilosophy {
    quote: string
    values: string[]
}

// Datos completos del timeline
export interface PersonalTimelineData {
    sectionTitle: string
    sectionDescription: string
    timelineEvents: TimelineEvent[]
    stats: TimelineStats
    lifePhilosophy: LifePhilosophy
}