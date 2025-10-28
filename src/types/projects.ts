// Interfaz para las tecnologías utilizadas en cada proyecto
export interface Technology {
    name: string;
    icon?: string;
    color?: string;
}

// Interfaz para las imágenes de la galería del proyecto
export interface ProjectImage {
    id: number;
    src: string;
    alt: string;
    title?: string;
    description?: string;
    isMain?: boolean; // Para marcar la imagen principal
}

// Interfaz para los enlaces de demostración y código
export interface ProjectLinks {
    demo?: string;
    github?: string;
    documentation?: string;
}

// Interfaz para la información básica del proyecto
export interface Project {
    id: string;
    title: string;
    subtitle?: string;
    shortDescription: string;
    longDescription: string;
    category: string;
    technologies: Technology[];
    links: ProjectLinks;
    images: ProjectImage[];
    featured: boolean;
    status: 'completed' | 'in-progress' | 'planned' | 'paused';
    startDate: string;
    endDate?: string;
    teamSize?: number;
    role?: string;
    slug: string;
}

// Interfaz para los filtros de proyectos
export interface ProjectFilter {
    id: string;
    label: string;
    value: string;
    count?: number;
}

// Interfaz para las opciones de ordenamiento
export interface SortOption {
    id: string;
    label: string;
    value: string;
}

// Interfaz para los datos completos del filtro
export interface ProjectsFilterData {
    filters: ProjectFilter[];
    sortOptions: SortOption[];
    ui: {
        labels: {
            view: string;
            filters: string;
            sortBy: string;
        };
        viewModes: {
            grid: string;
            list: string;
        };
    };
}

// Interfaz para el componente hero de proyectos
export interface ProjectsHeroData {
    title: string;
    subtitle: string;
    description: string;
    totalProjects: number;
}

// Interfaz para proyectos relacionados
export interface RelatedProject {
    id: string;
    title: string;
    shortDescription: string;
    technologies: Technology[];
    image: string;
    slug: string;
}

// Interfaz para el detalle completo de un proyecto
export interface ProjectDetail extends Project {
    context?: string;
    challenge?: string;
    solution?: string;
    impact?: string;
    challenges?: string[];
    solutions?: string[];
    learnings?: string[];
    features?: string[];
    relatedProjects?: RelatedProject[];
}

// Tipo para las categorías de filtros
export type FilterCategory = 'all' | 'web' | 'mobile' | 'desktop' | 'api' | 'other';

// Tipo para el estado de ordenamiento
export type SortType = 'newest' | 'oldest' | 'alphabetical' | 'featured';

// Interfaces para los datos JSON de los componentes

// ProjectCard Data
export interface ProjectCardData {
    statusLabels: {
        [key in Project['status']]: string;
    };
    statusColors: {
        [key in Project['status']]: string;
    };
    ui: {
        featuredBadge: {
            icon: string;
            text: string;
        };
        moreTechnologies: {
            prefix: string;
            suffix: string;
        };
    };
    animations: {
        delayMultiplier: number;
        hoverScale: {
            grid: string;
            list: string;
        };
        imageScale: string;
        transitionDuration: string;
    };
    layout: {
        imageHeight: {
            grid: string;
            list: string;
        };
        techTagsLimit: {
            grid: number;
            list: number;
        };
    };
}

// Button Data interfaces
export interface ButtonIcon {
    viewBox: string;
    path: string;
    strokeLinecap?: "round" | "butt" | "square" | "inherit";
    strokeLinejoin?: "round" | "inherit" | "miter" | "bevel";
    strokeWidth?: number;
}

export interface ButtonStyles {
    baseClasses: string;
    colors: string;
    hover: string;
    defaultPadding: string;
}

export interface ButtonAttributes {
    target: string;
    rel: string;
}

export interface ButtonData {
    text: string;
    icon: ButtonIcon;
    styles: ButtonStyles;
    attributes: ButtonAttributes;
}