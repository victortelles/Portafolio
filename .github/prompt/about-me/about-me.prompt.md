
### Ruta "/about-me"
```
/src/components/about/
├── AboutHero/
│   ├── AboutHero.tsx
│   ├── PersonalCard.tsx
│   ├── ProfileCard.tsx
│   └── aboutHeroData.json
├── PersonalValues/
│   ├── PersonalValues.tsx
│   └── valuesData.json
├── Skills/
│   ├── CardSkills.tsx
│   ├── cardSkillsData.json
│   ├── SoftSkills/
│   │   ├── SoftSkills.tsx
│   │   └── softSkillsData.json
│   ├── HardSkills/
│   │   ├── HardSkills.tsx
│   │   └── hardSkillsData.json
├── HobbiesSection/
│   ├── HobbiesSection.tsx
│   ├── HobbyCard.tsx
│   └── hobbiesData.json

(Se movera para "HardSkills", por lo tanto no existira.)
├── TechStackDetailed/
│   ├── TechStackDetailed.tsx
│   ├── TechStackCarousel.tsx
│   ├── SkillMeter.tsx
│   └── techStackData.json
```

## Contenido.
En la pagina de "Acerca de mi" se debe mostrar la siguiente información:
En esta pantalla tengo pensado mostrar Una foto de mi sin fondo, profesional, informacion mia contanto quien soy, mis gustos, habilidades blandas, duras, valores, etc etc. busca referencias sobre un portafolio de evidencias para desarrollo de software y toma ideas de ahi para saber que añadir.

La idea o estructura que tengo pensado es poner informacion, luego los hobbies, tecnologias que se usar o tengo nocion, y al final una timeline o linea de tiempo sobre mi vida y aprendizaje que he conseguido. pero si tienes algo relevante a añadir en esa pagina, adelante puedes crearlo.


## Estructura de contenido

# Fase 1. /AboutHero
En esta fase Necesito a hacer una actualizacion.
## Objetivo:
Necesito a hacer una actualizacion de contenido en base a la estructura que tengo pensado.

## Estructura
Quiero dividirlo en 4 secciones o contenedores.
1. - [✅] En un contenedor que contenga unicamente mi foto de mi en aspecto 1:1 sin fondo, solo al personaje.

2. - [✅] Al lado derecho de la imagen de mi, quiero colocar la informacion que actualmente ya la tengo puesta en "/aboutHero" la parte que sale mi nombre, ubicaicon, profesion, redes sociales y descripcion de mi.

3. [✅] Debajo de mi foto quiero colocar la parte de "Estado actual" y quitar cierta informacion no relevante, por ejemplo la ubicacion sale la 2 veces. no ocupa de ser tan ancho el contenedor. unicamente con que cierre la imagen.

4. [✅] Abajo a la derecha colocar los datos rapidos, pero tendran una estructura y diseño diferente, por ejemplo actualmente tengo lo de proyectos realizados, tecnologias dominadas etc etc. quisiera que cuando se cargue la pagina ese sea un contador con una animacion de conteo utilizando "framer-motion" y que cada que se cargue la pagina se vea esa animacion de conteo. y que tenga un icono representativo al lado del texto.
1. - [✅] En un contenedor que contenga unicamente mi foto de mi en aspecto 1:1 sin fondo, solo al personaje.
1. - [✅] (opcional) Si es posible me gustaria tener como lineas circulares al rededor de ese contenedor, que vaya animando iconos de redes sociales. como si fuera una galaxia.
1. - [✅] La ubicacion donde quiero este contenedor es del lado izquierdo de la pantalla. grande que se adapte a lo largo de los contenedores de la derecha.

2. - [✅] Al lado derecho de la imagen de mi, quiero colocar la informacion que actualmente ya la tengo puesta en "/aboutHero" la parte que sale mi nombre, ubicaicon, profesion, redes sociales y descripcion de mi.
2. - [✅] Este contenedor debe de estar a la derecha y es el que contendra cierta informacion de mi breve.
2. - [✅] Eliminar el icono chibi que tiene en esa seccion.
[ ][ ]
3. - [✅] Debajo de mi foto quiero colocar la parte de "Estado actual" y quitar cierta informacion no relevante, por ejemplo la ubicacion sale la 2 veces. no ocupa de ser tan ancho el contenedor. unicamente con que cierre la imagen.
[][  ]
4. - [✅] Abajo a la derecha colocar los datos rapidos, pero tendran una estructura y diseño diferente, por ejemplo actualmente tengo lo de proyectos realizados, tecnologias dominadas etc etc. quisiera que cuando se cargue la pagina ese sea un contador con una animacion de conteo utilizando "framer-motion" y que cada que se cargue la pagina se vea esa animacion de conteo. y que tenga un icono representativo al lado del texto.
Basicamente seria como la imagen grande y lo demas rodeando la imagen. lo que tendran como mayor espacio es la imagen y la informacion mia.

En general esta seccion quiero que tenga una animacion sin afectar tanto el rendimiento ni tampoco que se encuentre pesada, al igual.
Recuerda tambien que si se procede a realizar lo de las lineas circulares al rededor del contenedor de la imagen colocar una animacion sutil que no afecte el rendimiento y suave. puedes usar una referencia de la animacion de una orbita una linea para un lado otra para el otro y etc.

----------

# Fase 2. /PersonalValues
En esta seccion quiero que se mantenga igual, no hay cambios.

# Fase 3. /Skills
- [✅] En esta seccion quiero que exista las habilidades tanto "Blandas y Duras" y como paso inicial necesito que migres toda la informacion que se encuentra en el componente de "TechStackDetailed" a la carpeta de "HardSkills" y que se llame "HardSkills" y posteriormente vamos a hacer ajustes de estructura y contenido en esa seccion.
- [✅] Mi idea es que en la seccion de Skills este divida en 2 partes, habilidades blandas y habilidades duras. en una sola pagina.
- [✅] Tanto en las Habilidades blandas y duras quiero que las cards que vayan a contener ahi, esten Apiladas o stackeadas, es decir que se vean como si fueran cartas apiladas una encima de la otra, y que al hacer click en el titulo de la card se expulse la carta para mostrar en primer plano y se muestre la informacion de cada una de ellas. (puedes usar algun efecto de animacion para que se vea mejor). Busca referencias de cards apiladas. "Stacking Cards, "

- [✅] Recuerda para las "Stacking Cards" La idea es que tengan un titulo visible que es clickeable. donde al momento de hacer click se muestre la informacion de esa card en primer plano y las demas queden detras. y que al hacer click en otra card se muestre la informacion de esa card en primer plano y la anterior quede detras. (puedes usar algun efecto de animacion para que se vea mejor sin consumir tanto rendimiento). Busca referencias de cards apiladas. "Stacking Cards, "

# Fase 4. /HobbiesSection
En esa seccion quiero que se mantenga igual, no hay cambios.


## Reglas
Cada que termines de leer el contenido debes pasarte a leer el archivo de ( .github/prompt/rules.prompt.md ) para que puedas seguir las reglas del proyecto.
