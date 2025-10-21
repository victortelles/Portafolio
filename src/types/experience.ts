
// Tipos para ExperienceHero
export interface StatCard {
    id: number
    label: string
    count: number
    icon: string
}

export interface EventType {
    id: string
    name: string
    color: string
    icon: string
}

export interface ExperienceHeroData {
    title: string
    description: string
    stats: StatCard[]
    eventTypes: EventType[]
}

// Tipos para texto de la interfaz de ExperienceTimeline
export interface ResultsText {
    showingAll: string
    showingFiltered: string
    of: string
    experiencesLabel: string
}

export interface NoResultsFound {
    title: string
    description: string
}

export interface CardLabels {
    technologies: string
    keyAchievements: string
    links: string
}

export interface ExperienceTimelineData {
    sectionTitle: string
    sectionTitleAccent: string
    sectionDescription: string
    resultsText: ResultsText
    noResultsFound: NoResultsFound
    cardLabels: CardLabels
    experiences: Experience[]
}

// Tipos para ExperienceTimeline
export interface Period {
    start: string
    end: string | null
}

export interface Experience {
    id: string
    title: string
    organization: string
    description: string
    eventType: string
    period: Period
    location: string
    workTime: string
    role: string
    shortDescription: string
    keyAchievements: string[]
    technologies: string[]
    links?: ExperienceLink[]
    expanded?: boolean
}

export interface ExperienceLink {
    title: string
    url: string
}

export interface ExperienceTimelineData {
    experiences: Experience[]
}

// Tipos para componentes
export interface TimelineCardProps {
    experience: Experience
    eventType: EventType
    isLast?: boolean
    cardLabels: CardLabels
}

export interface EventTypeFilterProps {
    eventTypes: EventType[]
    activeFilter: string
    onFilterChange: (filter: string) => void
}

export interface SearchFilterProps {
    searchTerm: string
    onSearchChange: (term: string) => void
    placeholder?: string
}

export interface StatsCardsProps {
    stats: StatCard[]
}