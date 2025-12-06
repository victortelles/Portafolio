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
 * Lista de conceptos, metodologías y términos generales que NO son tecnologías específicas
 * Estos se excluyen del conteo de tecnologías en las estadísticas
 */
const NON_TECHNOLOGY_TERMS = [
    'UX/UI',
    'Agile',
    'Patrones de Diseño',
    'Modelos Predictivos',
    'Estructuras de Datos',
    'Algoritmos',
    'Programación Orientada a Objetos',
    'Diagramas ER',
    'Base de datos',
    'Matemáticas Discretas',
    'Redes',
    'Software',
    'WordCloud',
    'Herramientas de limpieza',
    'Herramientas de limpieza de hardware',
    'Instaladores de drivers',
    'Instalacion de software',
    'Redes LAN/WAN',
    'PyCharm Edu',
    'Redes',
    "Cisco Packet Tracer",
    'Impresoras',
    'Eclipse',
    'Figma',
    'Trello',
    'Ripes',
    'RISC-V',
    'Lenguaje Ensamblador',
    ''
]

/**
 * Obtiene todas las tecnologías utilizadas (lenguajes, frameworks, herramientas específicas)
 * Excluye conceptos metodológicos y términos genéricos
 * @returns Array único de todas las tecnologías reales (sin duplicados)
 */
export const getAllTechnologies = (): string[] => {
    const allTechnologies = timelineData.experiences
        .flatMap(exp => exp.technologies)
        .filter(tech => tech && tech.trim()) // Filtrar valores vacíos y strings solo con espacios
        .map(tech => tech.trim()) // Normalizar eliminando espacios al inicio y final
        .filter(tech => !NON_TECHNOLOGY_TERMS.includes(tech)) // Excluir conceptos y metodologías

    // Eliminar duplicados usando Set (compara valores exactos después de normalización)
    // y ordenar alfabéticamente de forma case-insensitive
    return [...new Set(allTechnologies)].sort((a, b) => 
        a.toLowerCase().localeCompare(b.toLowerCase())
    )
}