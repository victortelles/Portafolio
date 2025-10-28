import { ProjectImage } from '@/types/projects';

/**
 * Genera automáticamente las imágenes de un proyecto basado en archivos disponibles
 * @param projectSlug - El slug del proyecto
 * @param imageList - Lista de nombres de archivos de imagen disponibles
 * @returns Array de objetos ProjectImage
 */
export const generateProjectImages = (
    projectSlug: string,
    imageList: string[]
): ProjectImage[] => {
    return imageList.map((imageName, index) => {
        const isMain = index === 0; // La primera imagen es la principal
        const baseName = imageName.replace(/\.(jpg|jpeg|png|webp)$/i, '');

        return {
            id: index + 1,
            src: `/assets/projects/${projectSlug}/${imageName}`,
            alt: `${projectSlug} - ${baseName}`,
            title: formatImageTitle(baseName),
            description: `Captura de pantalla ${index + 1} del proyecto ${projectSlug}`,
            isMain
        };
    });
};

/**
 * Formatea el nombre del archivo para crear un título legible
 * @param baseName - Nombre base del archivo sin extensión
 * @returns Título formateado
 */
const formatImageTitle = (baseName: string): string => {
    return baseName
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
        .trim();
};

/**
 * Lista de imágenes predefinidas para cada proyecto
 * En producción, esto podría venir de un API o ser generado dinámicamente
 */
export const PROJECT_IMAGES: Record<string, string[]> = {
    'mythbots': [
        'main-dashboard.jpg',
        'commands-list.jpg'
    ],
    'pallink': [
        'home-page.jpg',
        'user-profile.jpg'
    ]
    // Agregar más proyectos según tengas las imágenes físicas
};

/**
 * Obtiene las imágenes de un proyecto específico
 * @param projectSlug - El slug del proyecto
 * @returns Array de objetos ProjectImage o array vacío si no se encuentra
 */
export const getProjectImages = (projectSlug: string): ProjectImage[] => {
    const imageList = PROJECT_IMAGES[projectSlug];

    if (!imageList || imageList.length === 0) {
        // Imagen placeholder si no hay imágenes disponibles
        return [{
            id: 1,
            src: `/assets/projects/placeholder.jpg`,
            alt: `${projectSlug} - imagen no disponible`,
            title: 'Imagen no disponible',
            description: 'La imagen para este proyecto no está disponible actualmente',
            isMain: true
        }];
    }

    return generateProjectImages(projectSlug, imageList);
};

/**
 * Obtiene solo la imagen principal de un proyecto
 * @param projectSlug - El slug del proyecto
 * @returns Objeto ProjectImage de la imagen principal
 */
export const getMainProjectImage = (projectSlug: string): ProjectImage => {
    const images = getProjectImages(projectSlug);
    return images.find(img => img.isMain) || images[0];
};

/**
 * Verifica si un proyecto tiene imágenes disponibles
 * @param projectSlug - El slug del proyecto
 * @returns true si el proyecto tiene imágenes, false en caso contrario
 */
export const hasProjectImages = (projectSlug: string): boolean => {
    const imageList = PROJECT_IMAGES[projectSlug];
    return imageList && imageList.length > 0;
};