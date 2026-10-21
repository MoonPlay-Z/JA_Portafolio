# Bienvenidos a mi Portafolio

Ingeniero de software con +5 años de experiencia construyendo aplicaciones web escalables y de alto rendimiento. Especializado en arquitectura frontend con React.js/Next.js y backend con NestJS/Node.js y PostgreSQL. 
Disponible para oportunidades de contratación directa, freelance o consultoría técnica en equipos de desarrollo ágiles (SCRUM/XP).

🔗 **Demo:** https://juanarcila.dev · https://ja-portafolio.netlify.app

![Stack](https://img.shields.io/badge/React_19-61DAFB?logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite_8-646CFF?logo=vite&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind_v4-38B2AC?logo=tailwind-css&logoColor=white)

## Stack
React.js · Next.js · NestJS · Node.js · PostgreSQL · TypeScript

## CV
https://ja-portafolio.netlify.app/cv · https://juanarcila.dev/cv

## Idiomas
Sitio multiidioma con routing por prefijo: español (`/`), inglés (`/en`), estonio (`/et`).

## Desarrollo

```bash
npm ci          # instalar dependencias
npm run dev     # servidor de desarrollo
npm run lint    # oxlint
npm run build   # build de producción → dist/
npm run preview # previsualizar build
```

## Estructura

- `src/pages/` — rutas (`/`, `/cv`, `/contact` + variantes `/en/*`, `/et/*`)
- `src/components/` — Header, Footer, CardProyectos, DetalleProyecto, LanguageSwitcher
- `src/i18n/` — `translations.js` (diccionario es/en/et), `LanguageContext.jsx` (provider), `locale.js` (hook `useI18n`)
- `src/data/` — `cvData.js` (CV en es/en/et), `proyectosData.js`, `gestorposData.js`, `gestorposAppData.js`
- `src/pages/CV.module.css` — reglas de impresión A4 del CV
- `src/components/ContactForm.module.css` — estilos del formulario de contacto
- `public/` — assets estáticos (CV PDF, logos, og-image, manifest, sitemap, robots, llms.txt, ai.txt)
- `netlify.toml` — deploy en Netlify (SPA redirect, headers, caché)

Deploy automático en Netlify; CI en GitHub Actions (lint → build → validación).
