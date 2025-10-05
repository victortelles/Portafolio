### Ruta "/" (Landing Page)
```
Hace referencia a landingpage en ruta "/"
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

### Mas detalles
Ruta "/"
Archivo: /app/page.tsx
Secciones (7):

- ✅ <Navbar /> - Header con navegación y branding (Ya esta hecho)

- ✅ <HeroSection /> - Crear una seccion de una Terminal que esta animado con texto de introducción de portafolio y Tecnologias que se (Developer Frontend, Backend, Database, DevOps, etc...) pero que se vea una animacion de que se esta escribiendo el texto en la terminal
- <SkillsCarousel /> - Carrusel de tecnologías principales
- <FeaturedProjects /> - 3-4 proyectos destacados con CTA hacia /projects
- <ExperiencePreview /> - Timeline resumido con CTA hacia /experience
- <ContactCTA /> - Call to action para contacto

- ✅ <Footer /> - Footer con información de contacto y redes sociales (Ya esta hecho)

### ✅ HeroSection
**Contenido:**
- En esta seccion tengo pensado hacer una terminal que este animada con un texto de introduccion y tecnologias que se especializa el portafolio (Developer Frontend, Backend, Database, DevOps, etc...) pero que se vea una animacion de que se esta escribiendo el texto en la terminal

**Requisitos**
- Animación de escritura en la terminal
- Estilo de la terminal debe de similar a la terminal pero respetando los colores de ( .github\prompt\color.prompt.md )
- Los datos del texto deben de ser obtenidos desde un archivo JSON ( heroData.json ) que contenga:
-  - Multiples titulos = Ya que se puede ir cambiando el titulo cada cierto tiempo y se vera como si lo escribiera.
-  - Subtítulo o descripción = Fuera de la Terminal

### ✅ AboutPreview
**Contenido:**
- En esta sección tengo pensado la siguiente estructura que tenga
- - Un título que diga "Acerca de mi"
- - Un breve resumen corto sobre mí de quien soy, que soy, que rol tengo etc...,
- - Una tarjeta de perfil (ProfileCard) que incluya una imagen, nombre, rol y enlaces a redes sociales (GitHub, LinkedIn, etc...)
- - 4 listas 2 filas 2 columnas que contengan textos cortos sobre mi rol y mis enfoques, pasiones, etc...
- - Dejar como al aire en esta seccion algunos iconos de lenguaje de programacion y tecnologias por ejemplo (JS, TS, React, Node.js, Python, etc...) que esten flotando o haciendo una animacion de respiracion lentamente o talvez como si estuvieran en el aire y que al pasar el mouse por encima tenga una leve animacion de zoom in y un tooltip que diga el nombre de la tecnologia.
- - Un boton de llamada a la acción (CTA) que dirigirá a los usuarios a la página /about-me. para invitar a los usuarios a conocer más sobre mí.

### ✅SkillsCarousel
En esta seccion tengo pensado 2 opciones:
Opcion 1:
- Un titulo que diga "Habilidades Técnicas"
- Una mini descripcion que diga, Habilidades tecnologicas que tengo nocion y experiencia en ellas.
- Un carrusel que muestre las principales tecnologías y herramientas que manejo, con un diseño atractivo y fácil de usar y que se utilices los colores globales del proyecto ( .github\prompt\color.prompt.md )
- - La estructura del carrusel que tengo pensado es la siguiente 1:1 el contenedor chico, ya que ira con iconos de las tecnologias que provienen de react-icons

- - - Titulo: Ej: "Frontend"
- - - imagen 1:1 del logotipo de la tecnologia: {React, Next.js, TailwindCSS, Sass, HTML5, CSS3, JavaScript, TypeScript, etc...}

- - - Titulo: Ej: "Backend"
- - - imagen 1:1 del logotipo de la tecnologia: {Node.js, Express.js, NestJS, Django, Flask, etc...}

- - - Titulo: Ej: "Database"
- - - imagen 1:1 del logotipo de la tecnologia: {PostgreSQL, MySQL, MongoDB, etc...}

- - En todos los carruseles tiene que tener una animacion suave de desplazamiento de izquierda a derecha en bucle infinito
Opcion 2:
Lo mismo que la opcion 1 pero en vez de carrusel sean cards de tecnologias (Frontend, Backend, Database, DevOps, etc...) y dentro de cada card esten las tecnologias que tengo conocimiento y tengan el tamaño 1:1 del logito de la tecnologia y al pasar el mouse tenga una leven zoom y un tooltip que diga el nombre de la tecnologia. y con un bordeado neon de algun color que resalte ( .github\prompt\color.prompt.md )

Basicamente alguna de esas opciones, me gustaria iniciar con la opcion 1, pero si veo que no queda bien, o que para otros dispositivos tarda mucho en cargar, optaria por la opcion 2

### ✅FeaturedProjects
EN esta seccion tengo pensado poner entre 2 a 4 proyectos en pantallas de laptops y pc grandes y si es tableta 2 y si es mobile 1 que sean cards donde se visualice una imagen como banner, Titulo, descripcion, Tags (tecnologias), Botones de github y demo (Si hay)
Estructura de los datos en JSON ( featuredProjectsData.json )
- Imagen/banner (cubriendo la parte superior de la card)
- Titulo (tipografia de  mono: ['Share Tech Mono', 'ui-monospace', 'SFMono-Regular'],)
- breve descripcion ( Limite de caracteres 150-200 y como opcion opcional que puedas expandir la descripcion si quieres leer mas y con tipografia sans: ['Inter', 'ui-sans-serif', 'system-ui'])
- Tags (tecnologias) mono: ['Share Tech Mono', 'ui-monospace', 'SFMono-Regular']
- Boton GitHub (url) (Icono de GitHub) (recuerda que con react-icons)
- Boton Demo (url) (Si hay) (Icono de Demo) (recuerda que con react-icons)

Al final de esa seccion lo ideal seria colocar un boton CTA que diga "Ver todos los proyectos" que redirija a /projects

- El fondo de esta seccion tiene que ser si o si lo que esta en ( .github\prompt\color.prompt.md ) y mas aparte el fondo sea diferente al de AboutPreview y skillsCarousel.

### ✅ContactCTA
**Contenido:**
- Un titulo que diga "Contacto"
- Un breve resumen invitando a los usuarios a ponerse en contacto conmigo.
- Un formulario de contacto que incluya campos para nombre, correo electrónico y mensaje.
- Un boton de enviar que permita a los usuarios enviar el formulario.
- Debe de ser responsivo y adaptarse a pantallas de mobile, tablet y desktop
- El formulario debe de tener buenas practicas de colocar los inputs.
- Debe de tener botones par poder enviar el formulario (whatsApp, Email) y todo lo que el usuario coloque en los inputs deberan de reflejarse al enviarlo con el mismo contenido.
- - Por ejemplo si yo coloco algo en el mensaje al darle enviar contactar por whats o email, al darle click el mensaje que coloque debera de reflejarse en el mensaje que se envia.

## Reglas
Cada que termines de leer el contenido debes pasarte a leer el archivo de ( .github/prompt/rules.prompt.md ) para que puedas seguir las reglas del proyecto.
