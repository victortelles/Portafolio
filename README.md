# 🚀 Portafolio Personal | Victor Telles

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-FF0066?style=for-the-badge&logo=framer&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Portafolio web moderno y responsive para mostrar proyectos, experiencia y habilidades profesionales**

[🌐 Ver Demo](https://victortelles.dev) • [📧 Contacto](https://victortelles.dev/contact) • [👨‍💻 Sobre Mí](https://victortelles.dev/about)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Características](#-características)
- [🛠️ Tecnologías](#️-tecnologías)
- [📦 Instalación desde Cero](#-instalación-desde-cero)
- [🚀 Uso y Desarrollo](#-uso-y-desarrollo)
- [🎨 Personalización](#-personalización)
- [🔒 Seguridad](#-seguridad)
- [📱 Páginas y Rutas](#-páginas-y-rutas)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🌟 Características Avanzadas](#-características-avanzadas)
- [📄 Licencia](#-licencia)

---

## 🎯 Características

✅ **Diseño Moderno**: Interfaz elegante con temática tech/terminal  
✅ **Totalmente Responsive**: Optimizado para móviles, tablets y desktop  
✅ **Data Driven**: Contenido manejado mediante archivos JSON  
✅ **Animaciones Fluidas**: Transiciones suaves con Framer Motion  
✅ **Formularios Seguros**: Múltiples capas de protección anti-spam
✅ **Performance**: Carga rápida con Next.js App Router  
✅ **Accesibilidad**: Componentes accesibles con Radix UI  
✅ **TypeScript**: Código tipado y mantenible  

---

## 🛠️ Tecnologías

### **Core Framework**
- **[Next.js 15.5.4](https://nextjs.org/)** - React framework con App Router
- **[React 19.1.0](https://react.dev/)** - Biblioteca de UI 
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Tipado estático

### **Estilado y UI**
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes accesibles
- **[Lucide React](https://lucide.dev/)** - Iconos modernos
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de iconos

### **Animaciones y Carousels**
- **[Framer Motion](https://www.framer.com/motion/)** - Animaciones avanzadas
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carrusel responsive

### **Seguridad**
- **Rate Limiting** - Protección contra spam múltiple
- **CAPTCHA Visual** - Verificación humana  
- **Validación de Datos** - Sanitización y validación
- **Headers de Seguridad** - Protección XSS, CSRF

### **Tipografías**
- **[Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono)** - Títulos y elementos destacados
- **[Inter](https://fonts.google.com/specimen/Inter)** - Texto general y párrafos

---

## 📦 Instalación desde Cero

### **Prerrequisitos**

1. **Instalar Node.js**
   ```bash
   # Descargar desde: https://nodejs.org/ (versión LTS recomendada)
   # Verificar instalación:
   node --version  # debe mostrar v18+ o superior
   ```

2. **Instalar pnpm (recomendado)**
   ```bash
   # Instalar pnpm globalmente:
   npm install -g pnpm
   
   # O usando Volta (recomendado):
   curl https://get.volta.sh | bash
   volta install pnpm
   
   # Verificar instalación:
   pnpm --version
   ```

### **Instalación del Proyecto**

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/victortelles/Portafolio.git
   cd Portafolio
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   pnpm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

---

## 🚀 Uso y Desarrollo

### **Scripts Disponibles**

```bash
# Desarrollo con Turbopack (más rápido)
pnpm run dev

# Build para producción
pnpm run build  

# Iniciar servidor de producción
pnpm run start
```

### **Estructura de Comandos**
- **`dev`**: Servidor de desarrollo con hot reload
- **`build`**: Compilación optimizada para producción  
- **`start`**: Servidor de producción (puerto 3001)

---

## 🎨 Personalización

### **📄 Contenido Data-Driven**

Todo el contenido se maneja mediante archivos JSON ubicados junto a cada componente:

```bash
src/components/
├── common/Navbar/navbarData.json          # Navegación
├── landingPage/HeroSection/heroData.json  # Página principal
├── about/AboutHero/aboutData.json         # Acerca de mí
├── projects/ProjectsHero/projectsData.json # Proyectos
├── contact/ContactHero/contactData.json    # Contacto
└── [componente]/[componente]Data.json      # Patrón general
```

**Ejemplo de personalización:**
```json
// src/components/common/Navbar/navbarData.json
{
    "brandLogo": "/assets/tu-logo.png",
    "navigation": [
        {
            "label": "Inicio",
            "href": "/"
        },
        {
            "label": "Proyectos", 
            "href": "/projects"
        }
    ]
}
```

### **🎨 Colores Globales**

**Método 1: Generador DaisyUI (Recomendado)**

1. Visita: **[https://daisyui.com/theme-generator/](https://daisyui.com/theme-generator/)**
2. Personaliza tu paleta de colores
3. Copia el código CSS generado
4. Pega en `src/app/globals.css` reemplazando las variables `--color-*`

**Método 2: Manual**

Edita las variables CSS en `src/app/globals.css`:

```css
:root {
  /* Colores base */
  --color-base-100: oklch(12% 0.042 264.695);  /* Fondo principal */
  --color-base-200: oklch(20% 0.042 265.755);  /* Fondo secundario */
  --color-base-300: oklch(27% 0.041 260.031);  /* Bordes */
  --color-base-content: oklch(96% 0.007 247.896); /* Texto principal */
  
  /* Colores de marca */
  --color-primary: oklch(62% 0.214 259.815);    /* Color principal */
  --color-secondary: oklch(70% 0.213 47.604);   /* Color secundario */
  --color-accent: oklch(78% 0.154 211.53);      /* Color de acento */
  
  /* Estados */
  --color-success: oklch(59% 0.145 163.225);    /* Verde */
  --color-warning: oklch(68% 0.162 75.834);     /* Amarillo */
  --color-error: oklch(58% 0.253 17.585);       /* Rojo */
  --color-info: oklch(54% 0.245 262.881);       /* Azul */
}
```

### **🖼️ Assets y Recursos**

```bash
public/assets/
├── about/           # Imágenes de "Acerca de mí"
├── contact/         # Iconos de contacto
├── landingPage/     # Recursos página principal
├── projects/        # Screenshots de proyectos
│   ├── mythbots/
│   ├── pallink/
│   ├── portafolio/
│   └── reviewAnalysis/
└── AHTyler_Logo_der.PNG  # Logo principal
```

---

## 🔒 Seguridad

### **Medidas Implementadas**

| Característica | Descripción | Configuración |
|----------------|-------------|---------------|
| **Rate Limiting Frontend** | Límite de intentos por formulario | 3 intentos / 5 min |
| **Rate Limiting Servidor** | Límite de requests por IP | 5 requests / min |
| **CAPTCHA Visual** | Verificación humana | 3 intentos máx |
| **Detección de Spam** | Patrones sospechosos | 3 envíos / hora |
| **Validación de Datos** | Sanitización de inputs | HTML/XSS bloqueado |
| **Headers de Seguridad** | Protección navegador | XSS, CSRF, Clickjacking |

### **Archivos de Seguridad**
```bash
src/hooks/
├── useRateLimit.ts      # Rate limiting frontend
├── useSpamDetection.ts  # Detección de spam  
└── useCaptcha.ts        # Lógica de CAPTCHA

middleware.ts            # Rate limiting servidor
src/app/api/contact/     # Validación backend
```

---

## 📱 Páginas y Rutas

| Página | URL | Descripción |
|--------|-----|-------------|
| **🏠 Inicio** | [victortelles.dev](https://victortelles.dev) | Landing page con hero, proyectos destacados |
| **👨‍💻 Acerca de mí** | [victortelles.dev/about](https://victortelles.dev/about) | Información personal, skills, hobbies |
| **💼 Proyectos** | [victortelles.dev/projects](https://victortelles.dev/projects) | Portfolio de proyectos |
| **📊 Experiencia** | [victortelles.dev/experience](https://victortelles.dev/experience) | Timeline profesional |
| **📧 Contacto** | [victortelles.dev/contact](https://victortelles.dev/contact) | Formulario y datos de contacto |
| **🔍 Proyecto Detalle** | [victortelles.dev/projects/[slug]](https://victortelles.dev/projects/mythbots) | Vista detallada de proyecto |

### **API Endpoints**
```bash
/api/contact    # Envío de formularios (POST)
```

---

## 📁 Estructura del Proyecto

```bash
Portafolio/
├── 📂 public/
│   └── 📂 assets/              # Imágenes y recursos estáticos
├── 📂 src/
│   ├── 📂 app/                 # Next.js App Router
│   │   ├── 📄 layout.tsx       # Layout principal
│   │   ├── 📄 page.tsx         # Página de inicio
│   │   ├── 📂 about/           # Página "Acerca de mí"
│   │   ├── 📂 projects/        # Páginas de proyectos
│   │   ├── 📂 experience/      # Página de experiencia
│   │   ├── 📂 contact/         # Página de contacto
│   │   └── 📂 api/             # API Routes
│   ├── 📂 components/          # Componentes React
│   │   ├── 📂 common/          # Componentes reutilizables
│   │   ├── 📂 landingPage/     # Componentes de inicio
│   │   ├── 📂 about/           # Componentes de "acerca de"
│   │   ├── 📂 projects/        # Componentes de proyectos
│   │   ├── 📂 experience/      # Componentes de experiencia
│   │   └── 📂 contact/         # Componentes de contacto
│   ├── 📂 hooks/               # Custom React Hooks
│   ├── 📂 types/               # Definiciones TypeScript
│   ├── 📂 data/                # Datos globales JSON
│   └── 📂 utils/               # Utilidades y helpers
├── 📄 middleware.ts            # Middleware de Next.js
├── 📄 tailwind.config.js       # Configuración Tailwind
├── 📄 next.config.ts           # Configuración Next.js
├── 📄 package.json             # Dependencias y scripts
└── 📄 SECURITY.md              # Documentación de seguridad
```

---

## 🌟 Características Avanzadas

### **🎭 Animaciones**
- **Framer Motion**: Transiciones suaves y animaciones complejas
- **Scroll Animations**: Elementos que aparecen al hacer scroll
- **Hover Effects**: Interacciones responsive al hover
- **Loading States**: Feedback visual durante cargas

### **📱 Responsive Design**
- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`
- **Touch Friendly**: Botones y elementos táctiles optimizados

### **⚡ Performance**
- **Next.js App Router**: Routing optimizado
- **Image Optimization**: Imágenes optimizadas automáticamente
- **Code Splitting**: Carga de código bajo demanda
- **Turbopack**: Bundler ultra rápido para desarrollo

---

### **Otros Proveedores**
```bash
# Build para producción
pnpm run build

# Los archivos estáticos estarán en .next/
```

---

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto esta pensado para ser usado por desarrolladores que buscan exponer sus habilidades y proyectos de manera profesional. Puedes utilizarlo como base para tu propio portafolio personal, adaptándolo a tus necesidades y estilo.

Unicamente para uso personal y profesional, no para redistribución comercial.

Restricciones:
1. No comercialización o venta del código fuente.
2. No redistribución en plataformas de terceros.
3. No uso en proyectos comerciales sin permiso.
4. Si encuentras informacion sensible, porfavor contactarme.
5. siempre dar creditos tanto para mi como para las librerias que se utilizaron.

---

## 🔗 Links Útiles

- **[Next.js Documentation](https://nextjs.org/docs)** - Documentación oficial
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Guía de utilidades CSS
- **[DaisyUI Theme Generator](https://daisyui.com/theme-generator/)** - Generador de colores
- **[Framer Motion](https://www.framer.com/motion/)** - Documentación de animaciones
- **[TypeScript](https://www.typescriptlang.org/docs/)** - Guía de TypeScript

---

<div align="center">

**Desarrollado con ❤️ por [Victor Telles](https://github.com/victortelles)**

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

</div>
