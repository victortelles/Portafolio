# Portafolio Full Stack Developer - Contexto del Proyecto
## Contexto
Puedes leer el contexto del proyecto en ( .github\prompt\context.prompt.md )

## Información del Usuario
- **GitHub:** AHTyler
- **Especialidad:** Full Stack Developer (Backend, Frontend, DevOps)
- **Enfoque:** Desarrollo modular, data-driven, arquitectura escalable

## Tecnologías del Proyecto usadas
- **Framework:** Next.js 14+ (App Router)
- **Styling:** TailwindCSS + Radix UI
- **Tipografías:** Share Tech Mono (títulos) + Inter (cuerpo)
- **Iconos:** React Icons
- **Carruseles:** Embla Carousel
- **Internacionalización:** next-i18next (ES/EN)
- **Gestión de paquetes:** pnpm
- **TypeScript:** Para tipado estático

## Estructura de Rutas
```
/               # Landing page con resumen general
/about-me       # Información personal detallada
/projects       # Portfolio de proyectos + páginas dinámicas [slug]
/experience     # Timeline profesional y logros
/contact        # Formulario de contacto
/credits        # Créditos y tecnologías utilizadas
```

## Jerarquía de Carpetas por Ruta

### Ruta "/" (Landing Page)
```
Hace referencia a landingpage en ruta "/"
Puedes revisar el contenido en ( .github/prompt/landingPage/landingPage.prompt.md )
/src/app/page.tsx

/src/components/landingPage/
├── HeroSection/
│   ├── HeroSection.tsx
│   ├── TerminalAnimation.tsx
│   └── heroData.json
├── AboutPreview/
│   ├── AboutPreview.tsx
│   ├── ProfileCard.tsx
│   └── aboutPreviewData.json
├── SkillsCarousel/
│   ├── SkillsCarousel.tsx
│   ├── SkillBadge.tsx
│   └── skillsData.json
├── FeaturedProjects/
│   ├── FeaturedProjects.tsx
│   ├── ProjectCard.tsx
│   └── featuredProjectsData.json
├── ExperiencePreview/
│   ├── ExperiencePreview.tsx
│   ├── TimelineNode.tsx
│   └── experiencePreviewData.json
├── ContactCTA/
│   ├── ContactCTA.tsx
│   ├── ContactButton.tsx
│   └── contactCTAData.json
└── TechCredits/
    ├── TechCredits.tsx
    └── techCreditsData.json
```

### Ruta "/about-me"
```
Puedes revisar el contenido de ( .github/prompt/about-me/about-me.prompt.md ) para mas detalles

/src/components/about/
├── AboutHero/
│   ├── AboutHero.tsx
│   ├── PersonalCard.tsx
│   └── aboutHeroData.json
├── PersonalValues/
│   ├── PersonalValues.tsx
│   └── valuesData.json
├── HobbiesSection/
│   ├── HobbiesSection.tsx
│   ├── HobbyCard.tsx
│   └── hobbiesData.json
├── TechStackDetailed/
│   ├── TechStackDetailed.tsx
│   ├── TechStackCarousel.tsx
│   ├── SkillMeter.tsx
│   └── techStackData.json
└── PersonalTimeline/
    ├── PersonalTimeline.tsx
    ├── TimelineVertical.tsx
    └── personalTimelineData.json
```

### Ruta "/projects"
```
Puedes revisar el contenido de ( .github/prompt/projects/projects.prompt.md ) para mas detalles

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

### Ruta "/experience"
```
Puedes revisar el contenido de ( .github/prompt/experience/experience.prompt.md ) para mas detalles

/src/components/experience/
├── ExperienceHero/
│   ├── ExperienceHero.tsx
│   └── experienceHeroData.json
├── ProfessionalTimeline/
│   ├── ProfessionalTimeline.tsx
│   ├── ExperienceCard.tsx
│   ├── TimelineNode.tsx
│   └── professionalData.json
├── AchievementsSection/
│   ├── AchievementsSection.tsx
│   ├── AchievementBadge.tsx
│   └── achievementsData.json
└── CertificationsSection/
    ├── CertificationsSection.tsx
    ├── CertificationCard.tsx
    └── certificationsData.json
```

### Ruta "/contact"

Puedes revisar el contenido de ( .github/prompt/contact/contact.prompt.md ) para mas detalles

```
/src/components/contact/
├── ContactHero/
│   ├── ContactHero.tsx
│   └── contactHeroData.json
├── ContactForm/
│   ├── ContactForm.tsx
│   ├── FormField.tsx
│   └── formData.json
└── ContactInfo/
    ├── ContactInfo.tsx
    ├── SocialLinks.tsx
    ├── AvailabilityStatus.tsx
    └── contactInfoData.json
```

### Ruta "/credits"
```
Puedes revisar el contenido de ( .github/prompt/credits/credits.prompt.md ) para mas detalles
/src/components/credits/
├── CreditsHero/
│   ├── CreditsHero.tsx
│   └── creditsHeroData.json
├── TechnologiesUsed/
│   ├── TechnologiesUsed.tsx
│   ├── TechCredit.tsx
│   └── technologiesData.json
├── DesignInspiration/
│   ├── DesignInspiration.tsx
│   ├── InspirationCard.tsx
│   └── inspirationData.json
└── OpenSourceContributions/
    ├── OpenSourceContributions.tsx
    ├── LicenseInfo.tsx
    └── openSourceData.json
```

## Componentes Globales
```
/src/components/common/
├── Navbar/
├── Footer/
├── ThemeSwitcher/
├── LanguageSwitcher/
```

## Principios de Desarrollo
- **SOLID, DRY, KISS, YAGNI**
- **Arquitectura limpia y modular**
- **Accesibilidad y responsive design**