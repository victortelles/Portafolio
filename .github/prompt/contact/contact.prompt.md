# Objetivo
En este prompt el objetivo es crear la seccion de contactame de la pagina web del portafolio "/contact", esta seccion debe de contar con un heroe, un formulario de contacto y una seccion con la informacion de contacto.
Al igual que se busca que tenga un diseño moderno, limpio y profesional, utilizando Tailwind CSS para los estilos y react icons para los iconos y framework Next.js con Typescript para aniamciones en los componentes. 
Por lo que puedes utilizar como referencia la carpeta de ( src\components\landingPage ) para seguir la misma tematica de colores y estilos y tipografia.
Es importante que no pese tanto la pagina, por lo que se recomienda optimizar ciertas cosas.


Una idea de informacion que te puedo entregar es la siguiente:

## Formulario de contacto directo

- Nombre completo
- Correo electrónico
- Asunto o motivo del mensaje
- Mensaje o consulta
- Botón de envío (con feedback visual)
## Correo electrónico profesional
- Dirección de email visible y clickeable

## Redes sociales profesionales

- GitHub, LinkedIn, Twitter/X, portafolio web, etc.
- Iconos visuales y accesibles

## Estado de disponibilidad

- Mensaje breve: “Disponible para nuevos proyectos”, “No disponible”, “Respondo en 24-48h”, etc.

## Ubicación Corta Pais/Ciudad
- Ciudad y país (útil para colaboraciones o entrevistas presenciales/remotas)

## Botones de contacto rápido
- WhatsApp, Email directo

## Mensaje de bienvenida o invitación
- Frase motivadora o invitación a conectar (“¿Tienes una idea? ¡Hablemos!”)

## Política de privacidad o aviso de uso de datos (opcional)
- Breve nota sobre el uso de la información enviada

### Ruta "/contact"
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


## Reglas
Cada que termines de leer el contenido debes pasarte a leer el archivo de ( .github/prompt/rules.prompt.md ) para que puedas seguir las reglas del proyecto.
