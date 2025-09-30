# Contexto del Proyecto: Portafolio Full Stack Developer

Este proyecto es un portafolio personal desarrollado con el objetivo de mostrar habilidades y experiencia como desarrollador Full Stack. Está construido utilizando tecnologías modernas y las mejores prácticas para sitios escalables, modulares y fácilmente mantenibles.

## Tecnologías principales

- **Next.js 14+ (App Router)** — Framework React para aplicaciones web, soporta SSR/SSG, rutas automáticas, layouts anidados y optimización avanzada.
- **TypeScript** — Tipado estático para mayor robustez y mantenibilidad.
- **TailwindCSS** — Utilidades CSS para estilos rápidos, customizables y soporte nativo a dark mode.
- **pnpm** — Gestor de paquetes rápido y eficiente.
- **Radix UI** — Componentes accesibles y personalizables para React.
- **React Icons** — Set de iconos para interfaces modernas.
- **Embla Carousel** — Carrusel ligero y flexible para mostrar tecnologías o proyectos destacados.
- **next-i18next** (o `react-i18next`) — Internacionalización con soporte para múltiples idiomas (ES/EN).

## Arquitectura y organización

- **Data Driven:**
Todos los datos (proyectos, experiencia, skills, textos de secciones) se almacenan en archivos `.json` por componente o sección, facilitando la actualización y el mantenimiento sin modificar el código fuente.
Es decir toda la informacion va a estar en un archivo `.json` dentro de la misma carpeta del componente o pagina y el nombre del archivo debe de ser igual al del componente o pagina. (Navbar.tsx tendra un Navbar.json). para que el contenido del archivo .json se pueda usar en el componente o pagina.
- **Internacionalización (i18n)(se deja al final):**
Estructura preparada para múltiples idiomas con archivos JSON centralizados en `/locales`. que permite cambiar entre español e inglés. (ES/EN) pero lo dejaremos al final del proyecto.
- **Componentización:**
Cada componente reutilizable comun como por ejemplo (Navbar, Footer, etc.) está modularizado dentro de `/components/common`.
Cada componente o seccion no comun como por ejemplo (HeroSections, AboutMe, etc.) está modularizado dentro de `/components`, con una carpeta haciendo referencia dentro de `/app` o de la pagina (Simulando a que se va a utilizar para esa pagina) y denetro de esa carpeta ubicada en `/components` tendra sus archivos `HeroSections.tsx` con su lógica y estilos propios. y el archivo `HeroSections.json` con la informacion que se va a mostrar en el componente.
- **Estilos globales:**
Colores, fuentes y temas definidos en `tailwind.config.js` y archivos CSS globales. y respetando los colores del archivo (.github\prompt\color.prompt.md)

## Estructura de carpetas (resumida)
Actualmente la internacionalización (i18n) se deja al final del proyecto, por lo que la estructura de carpetas relacionadas con i18n se añadirá al final pero es la idea tener una estructura similar a esta:

```plaintext
├── public
│   └── assets/
│   │   ├── otros_archivos....
├── src
│   ├── app
│   │   ├── page.tsx                   # /
│   │   ├── about/page.tsx             # /about
│   │   ├── projects/page.tsx          # /projects
│   │   ├── experience/page.tsx        # /experience
│   │   ├── contact/page.tsx           # /contact
│   │   ├── not-found.tsx              # /404
│   ├── components
│   │   ├── common/
│   │   │   ├── Navbar/                # Componente Navbar
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── navbarData.json        # Datos para Navbar
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── footerData.json
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.tsx
│   │   │   └── heroData.json
│   │   ├── AboutSection/
│   │   │   ├── AboutSection.tsx
│   │   │   └── aboutData.json
│   │   ├── Projects/
│   │   │   ├── ProjectsList.tsx
│   │   │   └── projectsData.json
│   │   ├── Experience/
│   │   │   ├── ExperienceTimeline.tsx
│   │   │   └── experienceData.json
│   │   └── Contact/
│   │       ├── ContactForm.tsx
│   │       └── contactData.json
│   ├── locales
│   │   ├── es/
│   │   │   ├── common.json
│   │   │   ├── footer.json
│   │   │   └── navbar.json
│   │   └── en/
│   │       ├── common.json
│   │       ├── footer.json
│   │       └── navbar.json
│   ├── hooks/
│   │   ├── useI18n.ts
│   ├── layouts/
│   ├── services/
│   ├── styles/
│   │   ├── tailwind.css
│   │   └── theme.css
│   ├── types/
│   └── utils/
├── .env.local
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

# Reglas para el proyecto
En cada archivo se debe de respetar las siguientes reglas que se encontraran en el archivo de reglas (.github\prompt\rules.prompt.md)