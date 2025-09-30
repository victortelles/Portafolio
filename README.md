This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# Portafolio

Portafolio es una aplicación web moderna desarrollada para mostrar proyectos, experiencia profesional y datos de contacto de manera visual, profesional y personalizable. El objetivo es servir como carta de presentación digital para desarrolladores, diseñadores o cualquier profesional que desee destacar su trabajo y habilidades.

## Descripción del Proyecto

Este portafolio está diseñado para ser rápido, responsivo y fácil de mantener. Incluye secciones como:
- Acerca de mí
- Proyectos
- Experiencia
- Línea de tiempo
- Contacto

El diseño está inspirado en una estética tech/terminal, con tipografías modernas y colores personalizables.

## Tecnologías Utilizadas

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS** (con configuración personalizada de colores y fuentes)
- **Radix UI** (para menús accesibles)
- **Lucide React** (iconos)
- **Google Fonts**: Share Tech Mono (títulos), Inter (cuerpo)

## Características
- Navegación responsiva y accesible
- Tematización y personalización de colores y fuentes
- Componentes reutilizables
- Código limpio y modular
- Internacionalización (futuro)

## Instalación y uso

1. Clona el repositorio:
	```bash
	git clone https://github.com/victortelles/Portafolio.git
	cd Portafolio
	```
2. Instala las dependencias:
	```bash
	pnpm install
	```
3. Inicia el servidor de desarrollo:
	```bash
	pnpm run dev
	```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Personalización
- Cambia los datos de navegación y branding en los archivos JSON de `src/components/common/Navbar/`.
- Modifica los colores y fuentes en `tailwind.config.js` y `globals.css`.
- Agrega tus proyectos y experiencia en las secciones correspondientes.

## Licencia
Este proyecto está bajo la licencia MIT.

---

¡Personaliza y haz crecer tu portafolio a tu gusto!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
