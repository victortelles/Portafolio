import { ReactNode } from "react"

// Tipados para las habilidades
export interface SkillCard {
    id: number
    title: string
    description: string
    color: string
    items: string[]
    icon: string
    detailedDescription: string
    keyFeatures: string[]
}

//Datos de las habilidades
export interface SkillsData {
    headerTitle: string;
    headerTitle2: string;
    headerDescription: string;
    sectionTitle: string;
    sectionSubtitle: string;
    softSkills: SkillCard[];
    hardSkills: SkillCard[];
    softSkillsTitle: string;
    hardSkillsTitle: string;
}

// Tipado para las
export interface SkillsColorClasses {
    bg: string
    border: string
    text: string
}