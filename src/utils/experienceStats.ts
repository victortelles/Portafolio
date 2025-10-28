import timelineData from '@/components/experience/ExperienceTimeline/experienceTimelineData.json'
import type { Experience } from '@/types/experience'

/**
 * Cuenta el número de experiencias por tipo de evento
 * @returns Objeto con el conteo de cada tipo de experiencia
 */
export const getExperienceCount = () => {
    const experiences: Experience[] = timelineData.experiences

    const count = {
        certifications: 0,
        projects: 0,
        education: 0,
        work: 0,
        total: experiences.length
    }

    experiences.forEach((experience) => {
        switch (experience.eventType) {
            case 'certification':
                count.certifications++
                break
            case 'project':
                count.projects++
                break
            case 'education':
                count.education++
                break
            case 'work':
                count.work++
                break
        }
    })

    return count
}

/**
 * Calcula los años de experiencia desde el inicio de la carrera universitaria (2021)
 * @returns Número de años de experiencia
 */
export const getYearsOfExperience = (): number => {
    const startYear = 2021 // Año de inicio de la carrera universitaria
    const currentYear = new Date().getFullYear()
    return currentYear - startYear
}

/**
 * Obtiene certificaciones específicas
 * @returns Array de experiencias de tipo certificación
 */
export const getCertifications = (): Experience[] => {
    return timelineData.experiences.filter(exp => exp.eventType === 'certification')
}

/**
 * Obtiene proyectos específicos
 * @returns Array de experiencias de tipo proyecto
 */
export const getProjects = (): Experience[] => {
    return timelineData.experiences.filter(exp => exp.eventType === 'project')
}

/**
 * Obtiene todas las tecnologías utilizadas
 * @returns Array único de todas las tecnologías
 */
export const getAllTechnologies = (): string[] => {
    const allTechnologies = timelineData.experiences
        .flatMap(exp => exp.technologies)
        .filter(tech => tech) // Filtrar valores vacíos

    // Eliminar duplicados y ordenar alfabéticamente
    return [...new Set(allTechnologies)].sort()
}