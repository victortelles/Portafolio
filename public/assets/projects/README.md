# 📁 Guía de Imágenes para Proyectos

## Estructura de Carpetas

Las imágenes de los proyectos deben organizarse de la siguiente manera:

```
/public/assets/projects/
├── mythbots/
│   ├── main-dashboard.jpg
│   ├── commands-list.jpg
│   ├── economy-system.jpg
│   ├── moderation-panel.jpg
│   └── settings-config.jpg
├── pallink/
│   ├── home-page.jpg
│   ├── user-profile.jpg
│   ├── matchmaking.jpg
│   ├── chat-system.jpg
│   └── tournaments.jpg
├── analisis-resenas/
│   ├── dashboard-overview.jpg
│   ├── sentiment-analysis.jpg
│   ├── reports-charts.jpg
│   └── data-upload.jpg
└── portafolio/
    ├── home-landing.jpg
    ├── projects-section.jpg
    ├── about-page.jpg
    └── contact-form.jpg
```

## Agregar un Nuevo Proyecto

### 1. Crear las carpetas e imágenes

1. Crear una nueva carpeta en `/public/assets/projects/` con el slug del proyecto
2. Agregar las imágenes del proyecto (formatos soportados: jpg, jpeg, png, webp)
3. Nombrar las imágenes de forma descriptiva (ej: `main-dashboard.jpg`, `user-profile.jpg`)

### 2. Actualizar el archivo de utilidades

Editar `/src/utils/projectImages.ts` y agregar el nuevo proyecto al objeto `PROJECT_IMAGES`:

```typescript
export const PROJECT_IMAGES: Record<string, string[]> = {
  // ... proyectos existentes
  'nuevo-proyecto': [
    'imagen-principal.jpg',
    'segunda-imagen.jpg',
    'tercera-imagen.jpg'
  ]
};
```

### 3. Crear el archivo de datos del proyecto

Crear un nuevo archivo JSON en `/src/app/projects/[slug]/nuevo-proyecto.json` con la estructura completa del proyecto:

```json
{
  "id": "nuevo-proyecto",
  "title": "Mi Nuevo Proyecto",
  "subtitle": "Descripción corta",
  "shortDescription": "Descripción breve para la card",
  "longDescription": "Descripción completa para la página de detalle",
  "category": "web", // web, mobile, desktop, api
  "technologies": [
    { "name": "React", "color": "#61dafb" },
    { "name": "Node.js", "color": "#68a063" }
  ],
  "links": {
    "demo": "https://ejemplo.com",
    "github": "https://github.com/usuario/proyecto"
  },
  "images": [
    {
      "id": 1,
      "src": "/assets/projects/nuevo-proyecto/imagen-principal.jpg",
      "alt": "Descripción de la imagen",
      "title": "Título de la imagen",
      "description": "Descripción detallada opcional",
      "isMain": true
    }
    // ... más imágenes
  ],
  "featured": false,
  "status": "completed", // completed, in-progress, planned
  "startDate": "2024-01",
  "endDate": "2024-06",
  "teamSize": 1,
  "role": "Full Stack Developer",
  "slug": "nuevo-proyecto",
  "features": [
    "Característica 1",
    "Característica 2"
  ],
  "challenges": [
    "Desafío 1",
    "Desafío 2"
  ],
  "solutions": [
    "Solución 1",
    "Solución 2"
  ],
  "learnings": [
    "Aprendizaje 1",
    "Aprendizaje 2"
  ]
}
```

### 4. Actualizar la lista principal de proyectos

Agregar el nuevo proyecto a `/src/components/projects/ProjectsGrid/projectsData.json`:

```json
{
  "projects": [
    // ... proyectos existentes
    {
      "id": "nuevo-proyecto",
      "title": "Mi Nuevo Proyecto",
      // ... resto de datos básicos para la card
    }
  ]
}
```

### 5. Actualizar el componente de página dinámica

Importar y agregar el nuevo proyecto en `/src/app/projects/[slug]/page.tsx`:

```typescript
import nuevoProyectoData from './nuevo-proyecto.json';

const getProjectData = (slug: string): ProjectDetail | null => {
  const projectsMap: Record<string, ProjectDetail> = {
    // ... proyectos existentes
    'nuevo-proyecto': nuevoProyectoData as ProjectDetail,
  };

  return projectsMap[slug] || null;
};
```

## Recomendaciones para Imágenes

### Formato y Calidad
- **Formato**: JPG para fotografías, PNG para capturas con transparencia
- **Resolución**: Mínimo 1920x1080px para la imagen principal
- **Tamaño**: Optimizar para web (< 500KB por imagen)

### Nomenclatura
- Usar nombres descriptivos en inglés
- Separar palabras con guiones: `main-dashboard.jpg`
- La primera imagen en el array será la imagen principal

### Contenido
- Captura de pantalla clara y bien iluminada
- Mostrar características importantes del proyecto
- Evitar información sensible o personal
- Incluir diferentes vistas/secciones del proyecto

## Automatización Futura

El sistema está preparado para automatización futura donde:
- Las imágenes se detecten automáticamente desde las carpetas
- Los datos se almacenen en una base de datos
- Se genere automáticamente metadata de las imágenes

Por ahora, el proceso es manual pero estructurado para facilitar la migración futura.