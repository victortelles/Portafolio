### Ruta "/experience"
```
/src/components/experience/
├── ExperienceHero/
│   ├── ExperienceHero.tsx
│   ├── StatsCards.tsx
│   └── experienceHeroData.json
├── ExperienceTimeline/
│   ├── ExperienceTimeline.tsx
│   ├── TimelineCard.tsx
│   ├── EventTypeFilter.tsx
│   ├── SearchFilter.tsx
│   └── experienceTimelineData.json

```

Todo lo relacionado a la experiencia colocar los tipados en:
```
/src/types/experience.ts

```

## Estructura de Componentes

### 1. ExperienceHero
**Propósito**: Introducción a la sección de experiencia con información general y métricas clave.

**Contenido**:
- Título principal de la sección
- Descripción explicativa de la sección
- Mini cards con contadores de:
  - Certificaciones obtenidas
  - Proyectos completados
  - Tecnologías conocidas
  - Años de experiencia
- Tags de tipos de eventos disponibles con colores distintivos:
  - **Educación** (color: azul)
  - **Certificaciones** (color: verde)
  - **Proyectos** (color: naranja)
  - **Trabajos** (color: morado)

**Archivos**:
- `ExperienceHero.tsx`: Componente principal del hero
- `StatsCards.tsx`: Componente para las mini cards con estadísticas
- `experienceHeroData.json`: Datos del hero (título, descripción, estadísticas, tipos de eventos)

### 2. ExperienceTimeline
**Propósito**: Línea de tiempo interactiva y filtrable con experiencias detalladas.

**Contenido**:
- **Filtros** (ubicados en la parte superior del componente):
  - Filtro por tipo de evento (Educación, Certificaciones, Proyectos, Trabajos)
  - Buscador en tiempo real por tecnología o palabras clave y tipo de evento
- **Línea de tiempo vertical** con:
  - Punto indicador del tipo de evento (con color correspondiente)
  - Cards expandibles a la derecha

**Estados de las cards**:

**Estado Comprimido**:
- Título (fuente grande) + Tag del tipo de evento (fuente pequeña) - alineados a la izquierda
- Período (Mes - Año) y Ubicación/Remoto
- Flecha hacia abajo indicando expansión posible
- Rol (Desarrollador Front/Backend/Full stack, etc.)
- Descripción breve
- Efecto hover: respiración con color principal

**Estado Expandido** (al hacer click):
- Mantiene información del estado comprimido
- Línea divisora
- **Sección "Logros Clave"**:
  - Título en fuente grande
  - Lista de logros donde la primera palabra es destacada en color principal
- Línea divisora
- **Sección "Tecnologías"**:
  - Título en fuente grande
  - Tags de tecnologías utilizadas en esa experiencia

**Archivos**:
- `ExperienceTimeline.tsx`: Componente principal del timeline
- `TimelineCard.tsx`: Componente individual de cada card
- `EventTypeFilter.tsx`: Componente para filtrar por tipo de evento
- `SearchFilter.tsx`: Componente para búsqueda en tiempo real
- `experienceTimelineData.json`: Datos de todas las experiencias

## Estructura de Datos JSON

### experienceHeroData.json
```json
{
  "title": "Mi Trayectoria Profesional",
  "description": "Un recorrido por mi experiencia, proyectos y aprendizajes que han moldeado mi carrera como desarrollador",
  "stats": [
    {
      "id": 1,
      "label": "Certificaciones",
      "count": 12,
      "icon": "FaCertificate"
    },
    {
      "id": 2,
      "label": "Proyectos",
      "count": 25,
      "icon": "FaProjectDiagram"
    },
    {
      "id": 3,
      "label": "Tecnologías",
      "count": 30,
      "icon": "FaCode"
    },
    {
      "id": 4,
      "label": "Años de Experiencia",
      "count": 3,
      "icon": "FaCalendarAlt"
    }
  ],
  "eventTypes": [
    {
      "id": "education",
      "name": "Educación",
      "color": "#3B82F6",
      "icon": "FaGraduationCap"
    },
    {
      "id": "certification",
      "name": "Certificaciones",
      "color": "#10B981",
      "icon": "FaCertificate"
    },
    {
      "id": "project",
      "name": "Proyectos",
      "color": "#F59E0B",
      "icon": "FaProjectDiagram"
    },
    {
      "id": "work",
      "name": "Trabajos",
      "color": "#8B5CF6",
      "icon": "FaBriefcase"
    }
  ]
}
```
- Observacion: Los colores deben de ser globales en el archivo de (/src/styles/globals.css )

### experienceTimelineData.json
```json
{
  "experiences": [
    {
      "id": "exp-001",
      "title": "Desarrollador Full Stack",
      "eventType": "work",
      "period": {
        "start": "2023-01",
        "end": "2024-06"
      },
      "location": "Remoto",
      "role": "Desarrollador Full Stack",
      "shortDescription": "Desarrollo de aplicaciones web completas utilizando tecnologías modernas",
      "keyAchievements": [
        "Optimización del rendimiento de la aplicación en un 40%",
        "Implementación de arquitectura microservicios",
        "Liderazgo de equipo de 3 desarrolladores junior"
      ],
      "technologies": ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      "expanded": false
    }
  ]
}
```

En la variable de keyAchievements, la primera palabra de cada logro debe ser destacada en color principal.
Ejemplo: ""Implementación(color principal)" de arquitectura microservicios (color de texto)"
Recuerda que al hacer click y se expande la card debe de tener una animación suave. al abrirse y cerrarse.

## Recomendación sobre ubicación del filtrado

**Respuesta**: El filtrado debe colocarse en el componente **ExperienceTimeline**, específicamente en la parte superior del timeline, por las siguientes razones:

1. **Proximidad funcional**: Los filtros están directamente relacionados con el contenido que van a filtrar (las cards del timeline)
2. **Mejor UX**: El usuario puede ver inmediatamente los resultados del filtrado sin tener que desplazarse
3. **Separación de responsabilidades**: 
   - Hero se enfoca en información general e introducción
   - Timeline se enfoca en la funcionalidad interactiva y el contenido detallado
4. **Flujo visual lógico**: Introducción (Hero) → Filtros → Contenido filtrado (Timeline)

## Reglas
Cada que termines de leer el contenido debes pasarte a leer el archivo de ( .github/prompt/rules.prompt.md ) para que puedas seguir las reglas del proyecto.
