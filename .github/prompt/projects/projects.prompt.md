/projects       # Portfolio de proyectos + páginas dinámicas [slug]


### Ruta "/projects"
Esta es una estructura de carpetas y archivos sugerida, pero no es obligatoria, si tienes una mejor practica o mejor forma de implementar actualiza este archivo. para que tenga su respectiva informacion como las imagenes.
```
/src/components/projects/
├── ProjectsHero/
│   ├── ProjectsHero.tsx
│   └── projectsHeroData.json
├── ProjectsFilter/
│   ├── ProjectsFilter.tsx
│   └── filtersData.json
├── ProjectsGrid/
│   ├── ProjectsGrid.tsx
│   ├── ProjectCard.tsx
│   ├── TechTag.tsx
│   ├── LiveDemoButton.tsx
│   ├── GitHubButton.tsx
│   └── projectsData.json
├── ProjectDetails/
│   ├── ProjectHeader.tsx
│   ├── ProjectGallery.tsx
│   ├── ProjectDetails.tsx
│   └── RelatedProjects.tsx
└── [slug]/
    └── projectDetailData.json
```

## Tipados
Si vas a usar tipados crea un archivo y colocalo en la carpeta de /types y exportalo para que puedas usarlo en los componentes. por ejemplo 'projects.ts' y ahi colocas todo lo concentrado a los proyectos.

## Contexto unicamente de esta seccion
En esta seccion esta enfocada en mostrar una ventana para los proyectos. la idea esta en que debe de haber una card inicial. con una captura y cierta informacion del proyecto incluyendo tecnologias una breve descripcion y botones etc. y al hacer click especificamente en esa card o alguna card que este disponible. se debe de abrir una nueva pagina dinamica con la informacion detallada del proyecto. al igual con colocar capturas al estilo de demostrar mi proyecto o mi producto. y para eso se debe de tener una galeria de imagenes. con una id para saber cual se debe de mostrar primero y en que orden. las imagenes solo van a servir para demostrar el proyecto. la informacion solo va a ser dinamica base dependiendo del proyecto que se seleccione el usuario.
y me gustaria que tuviera la animacion del proyecto que esta en la carpeta de ( /Animacion de cards ) ya sea que lo repliques o una manera similar que no consuma mucho recurso, que sea rapida y fluida.


## Contexto informativo del proyecto
El contexto informativo inicial del proyecto es hacer un portafolio de evidencias para demostrar los proyectos que he realizado durante a lo largo de mi carrera y tenerlo como un historial.
puedes ver mas detalles en ( .github\prompt\context.prompt.md ) al igual ver que colores globales son los que se estan utilizando. (.github\prompt\color.prompt.md )

## Fase 1: Sugerencia de estructura de archivos y carpetas

## Fase 2: Implementar componente por componente 

## Fase 3: Implementar pagina dinamica por proyecto

## Reglas
Cada que termines de leer el contenido debes pasarte a leer el archivo de ( .github/prompt/rules.prompt.md ) para que puedas seguir las reglas del proyecto.
