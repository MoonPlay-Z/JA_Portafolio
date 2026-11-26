# Portafolio Juan Arcila — Documentación completa

> Mapa de la aplicación, su contenido, su arquitectura y su infraestructura.
> Última actualización: 2026-11-26 · Repositorio: `github.com/MoonPlay-Z/JA_Portafolio`

---

## 1. Ficha técnica

| Campo               | Valor                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| Nombre del proyecto | `ja-portafolio` (versión `0.0.0`, paquete privado, ESM)                                                    |
| Titular             | Juan Arcila — Ingeniero en Informática, Desarrollador Full-Stack Senior                                    |
| Propósito           | Portafolio profesional orientado a conseguir trabajo **remoto** y/o **relocalización en Europa (Estonia)** |
| Tipo                | SPA (Single Page Application) estática, sin backend propio                                                 |
| Dominios            | `https://juanarcila.dev` (principal) · `https://ja-portafolio.netlify.app` (Netlify)                       |
| Idiomas             | Español (por defecto), Inglés, Estonio                                                                     |
| Deploy              | Netlify (publish `dist/`, Node 20) + GitHub Actions (CI)                                                   |
| Repo                | `https://github.com/MoonPlay-Z/JA_Portafolio.git`                                                          |

### Stack

**Producción**

| Dependencia             | Versión       | Uso                                               |
| ----------------------- | ------------- | ------------------------------------------------- |
| React                   | ^19.2.8       | UI                                                |
| react-dom               | ^19.2.8       | Render                                            |
| react-router-dom        | ^7.18.3       | Enrutado client-side                              |
| react-icons             | ^5.7.0        | Iconografía (`react-icons/fa`, Font Awesome)      |
| @material-tailwind/html | ^3.0.0-beta.7 | Dependencia declarada (HTML de Material Tailwind) |

**Desarrollo**

| Dependencia                     | Versión | Uso                                                   |
| ------------------------------- | ------- | ----------------------------------------------------- |
| Vite                            | ^8.2.0  | Bundler / dev server                                  |
| @vitejs/plugin-react            | ^6.0.4  | Transformación JSX + Fast Refresh                     |
| Tailwind CSS                    | ^4.3.3  | Utilidades CSS (vía plugin, sin `tailwind.config.js`) |
| @tailwindcss/vite               | ^4.3.3  | Integración de Tailwind con Vite                      |
| oxlint                          | ^1.75.0 | Linter (plugins `react` + `oxc`)                      |
| @types/react / @types/react-dom | ^19.2.x | Tipados para editor (no hay TypeScript en el código)  |

**Build:** `sourcemap: false`, umbral de chunk 500 KB y `manualChunks` que separa `vendor` (React/ReactDOM) y `router` (react-router) del resto.

---

## 2. Estructura de directorios

```text
JA_Portafolio/
├── index.html                  # Entrada HTML: SEO, meta tags, JSON-LD, form oculto de Netlify
├── package.json                # Scripts y dependencias
├── vite.config.js              # Plugins React + Tailwind, optimización del build
├── netlify.toml                # Deploy, redirects, headers de seguridad y caché
├── AGENTS.md                   # Convenciones para agentes de IA / mantenimiento
├── README.md                   # Resumen rápido del proyecto
├── MARKETING.md                # Kit de búsqueda de empleo (LinkedIn, pitch, posts, checklist)
├── PORTAFOLIO.md               # Este documento
├── .oxlintrc.json              # Reglas de oxlint
├── .gitignore
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI: npm ci → lint → build → validación de dist/
│
├── src/
│   ├── main.jsx                # createRoot + StrictMode + BrowserRouter
│   ├── App.jsx                 # Layout (Header/Footer) + todas las rutas + LanguageProvider
│   ├── App.css                 # Archivo vacío / sin uso (22 bytes)
│   ├── index.css               # @import "tailwindcss" + estilos base y banner
│   │
│   ├── pages/
│   │   ├── Home.jsx            # Página de inicio (compone Banner + resumen + Proyectos)
│   │   ├── banner.jsx          # Hero/Banner (NO es ruta)
│   │   ├── Proyectos.jsx       # Wrapper de CardProyectos (NO es ruta)
│   │   ├── CV.jsx              # Currículum imprimible
│   │   ├── CV.module.css       # Reglas de impresión A4 del CV
│   │   └── Contacto.jsx        # Formulario Netlify Forms + datos de contacto
│   │
│   ├── components/
│   │   ├── Header.jsx          # Nav sticky + brand + LanguageSwitcher
│   │   ├── Footer.jsx          # Redes sociales + copyright dinámico
│   │   ├── LanguageSwitcher.jsx# Selector ES / EN / ET
│   │   ├── CardProyectos.jsx   # Grid de tarjetas de proyectos
│   │   ├── DetalleProyecto.jsx # Modal de caso completo (plexo, arquitectura, stack...)
│   │   └── ContactForm.module.css
│   │
│   ├── i18n/
│   │   ├── translations.js     # Diccionario es/en/et + LANGS + DEFAULT_LANG
│   │   ├── LanguageContext.jsx # Provider: idioma desde la URL, setLang, link()
│   │   └── locale.js           # Contexto, localeFromPath(), pathWithLocale(), useI18n()
│   │
│   ├── data/
│   │   ├── cvData.js           # CV completo en es/en/et
│   │   ├── proyectosData.js    # 5 proyectos destacados en es/en/et
│   │   ├── gestorposData.js    # Caso de estudio GestorPOS (es/en/et)
│   │   └── gestorposAppData.js # Caso de estudio GestorPOS App Móvil (es/en/et)
│   │
│   └── assets/                 # Imágenes webp/jpeg importadas por los datos
│       ├── banner.webp
│       ├── biomed-sp-1.webp, "biomed-sp 2.webp", "biomed-sp 3.webp", "biomed-sp 4.webp"
│       ├── GestorPOS.webp, "GestorPOS app.jpeg", GestorPOSapp.webp,
│       │   GestorPOSapp2.webp, GestorPOSapp3.webp
│       ├── login.webp, registro.webp
│       └── "UPTP JJM.webp", UPTP-Portada.webp
│
├── public/                     # Copiado tal cual a dist/
│   ├── favicon.svg, icons.svg
│   ├── Logo.png, Logo-white.png, Logo-white.svg
│   ├── og-image.png            # 1024x1024 para Open Graph / Twitter
│   ├── "Juan Arcila.pdf"       # CV en PDF descargable
│   ├── manifest.json           # PWA / webmanifest
│   ├── sitemap.xml             # 9 URLs (3 idiomas × 3 páginas) con hreflang
│   ├── robots.txt              # Crawlers generales + bots de IA permitidos
│   ├── llms.txt                # Resumen legible por LLMs
│   ├── ai.txt                  # Resumen para motores de búsqueda/IA
│   └── _redirects              # /* /index.html 200 (SPA fallback)
│
├── robots.txt                  # Copia duplicada del público (no se usa en el build)
└── skills/                     # 19 "agent skills" de Anthropic (no forman parte de la app)
    ├── academy-guide, algorithmic-art, brand-guidelines, canvas-design, claude-api,
    ├── discernment-nudge, doc-coauthoring, docx, frontend-design, internal-comms,
    ├── mcp-builder, pdf, pptx, skill-creator, slack-gif-creator, theme-factory,
    └── webapp-testing, web-artifacts-builder, xlsx
```

---

## 3. Sistema de rutas

Definidas en `src/App.jsx`, dentro de `<LanguageProvider>` y entre `<Header />` y `<Footer />`.

| Ruta           | Página                        | Descripción                                 |
| -------------- | ----------------------------- | ------------------------------------------- |
| `/`            | `Home`                        | Inicio en español (idioma por defecto)      |
| `/cv`          | `CV`                          | Currículum en español                       |
| `/contact`     | `Contacto`                    | Contacto en español                         |
| `/contacto`    | `Contacto`                    | Alias en español                            |
| `/en`          | `Home`                        | Inicio en inglés                            |
| `/en/cv`       | `CV`                          | CV en inglés                                |
| `/en/contact`  | `Contacto`                    | Contacto en inglés                          |
| `/en/contacto` | `Contacto`                    | Alias en inglés                             |
| `/et`          | `Home`                        | Inicio en estonio                           |
| `/et/cv`       | `CV`                          | CV en estonio                               |
| `/et/contact`  | `Contacto`                    | Contacto en estonio                         |
| `/et/contacto` | `Contacto`                    | Alias en estonio                            |
| `*`            | `<Navigate to="/" replace />` | Cualquier ruta desconocida vuelve al inicio |

**Páginas NO ruteadas** (se integran dentro de `Home.jsx`): `src/pages/banner.jsx` y `src/pages/Proyectos.jsx`. No añadir rutas para ellas esperando enlaces: no los hay.

### Flujo de render

```text
index.html (#root + form oculto Netlify)
   └─ src/main.jsx → StrictMode → BrowserRouter
        └─ App.jsx → LanguageProvider
             ├─ Header (nav + selector de idioma)
             ├─ Routes → Home / CV / Contacto
             └─ Footer
```

---

## 4. Internacionalización (i18n)

El idioma **no** se guarda en un estado aislado: se **deriva de la URL**.

| Archivo                        | Responsabilidad                                                                                                                                |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/i18n/translations.js`     | Diccionario completo `es`/`en`/`et`; exporta `LANGS = ['es','en','et']` y `DEFAULT_LANG = 'es'`                                                |
| `src/i18n/locale.js`           | `LanguageContext`, `localeFromPath()` (ej. `/en/cv` → `en`), `pathWithLocale()` (ej. `/cv`,`en` → `/en/cv`) y `useI18n()`                      |
| `src/i18n/LanguageContext.jsx` | Provider: lee la ruta con `useLocation`, sincroniza `document.documentElement.lang`, expone `lang`, `setLang`, `t`, `isDefault` y `link(path)` |

Bloques del diccionario: `meta`, `nav`, `header`, `banner`, `home`, `projects`, `contact`, `footer`, `detail` (textos del modal), `common`.

Reglas:

- El prefijo `es` es implícito: las rutas en español no llevan `/es/`.
- `link('/cv')` devuelve `/cv`, `/en/cv` o `/et/cv` según el idioma activo.
- Cambiar de idioma navega preservando la ruta actual (`setLang`).
- Los textos de proyectos y del CV tienen su propio diccionario en `src/data/`.

---

## 5. Páginas y componentes

### 5.1 `Banner.jsx` (hero de la home)

- Imagen de fondo `src/assets/banner.webp` con overlay degradado oscuro.
- Nombre "Juan Arcila" + título y stack desde `t.banner`.
- Bloque de mensaje para reclutadores con indicador de disponibilidad animado (punto verde `animate-ping`).
- Botones: **Ver Currículum / CV** → `link('/cv')` y **Contactar** → `link('/contact')`.
- Iconos sociales: LinkedIn (`jadeveloper`), GitHub (`MoonPlay-Z`), Email, WhatsApp (`+58 412-7723148`).

### 5.2 `Home.jsx`

1. `<Banner />`.
2. **Resumen técnico y disponibilidad** (grid 2 columnas):
   - Título y dos párrafos desde `t.home`.
   - Badges: `React.js, Next.js, NestJS, Node.js, PostgreSQL, TypeScript, MongoDB, SCRUM / XP`.
   - Tarjeta de "Estatus Profesional": disponibilidad inmediata, remoto/híbrido/presencial, relocalización en Europa y aviso de **requiere patrocinio de visa**. Botones a CV y contacto.
3. **Proyectos Destacados**: título + subtítulo y `<Proyectos />`.

### 5.3 `Proyectos.jsx` → `CardProyectos.jsx`

- Grid responsivo `1 / 2 / 3 / 4` columnas.
- Cada tarjeta: imagen (`aspect-video`, lazy loading, zoom al hover), badge de tipo, título, descripción, chips de tecnologías, botón **Ver Proyecto** (enlace externo) y botón opcional **Ver Caso Completo**.
- El botón de caso abre `<DetalleProyecto>` con `lang` y los datos ya resueltos en el idioma activo.

### 5.4 `DetalleProyecto.jsx` (modal)

Modal accesible (`role="dialog"`, `aria-modal`, cierre con `Escape` y clic fuera) que bloquea el scroll del body compensando el ancho de la scrollbar. Secciones:

1. Cabecera: estilo `app` (gradiente + mockup de teléfono) o estilo web (imagen de portada).
2. **Resumen del proyecto** — 3 tarjetas: Problema / Solución / Alcance (`d.resumen`).
3. **El sistema en una voz** — monólogo en primera persona (`d.monologo`) + capturas.
4. **Capturas de la app** — mockups de teléfono con `t.detail.captureNames`.
5. **Arquitectura** — bloques con icono según `Clientes / Frontend / Backend / Datos / Servicios externos`.
6. **Flujo de una venta** — lista numerada (`d.flujoVenta`).
7. **Ciclo de vida de la actualización de la APK** — estados (`d.actualizacion`).
8. **Tecnologías por capa** — tabla Tecnología / Versión / Para qué (`d.stack`).
9. **Roles del sistema** — tabla Rol / Alcance / Puede (`d.roles`).
10. CTA: enlaces (GitHub / demo) y botón Cerrar.

### 5.5 `CV.jsx`

- Lee `cvData[lang]` según la URL (`/cv`, `/en/cv`, `/et/cv`).
- Barra de control (no imprimible): volver al inicio, idioma actual y botón **Descargar CV (PDF)** que llama a `window.print()`.
- Encabezado con nombre, título, email, teléfono, LinkedIn y ubicación.
- Cuerpo en 2 columnas: izquierda = Perfil, Competencias (con %), Idiomas; derecha = Experiencia (timeline), Educación, Cursos y Certificaciones.
- `CV.module.css` define `#cv-print-area`, oculta la barra de control y ajusta el diseño para A4 al imprimir.

### 5.6 `Contacto.jsx`

- Panel izquierdo: título "¡Hablemos!", email `juanaac2003@gmail.com`, WhatsApp `+58 412-7723148` (con mensaje prellenado) y LinkedIn.
- Panel derecho: formulario con `nombre`, `email`, `asunto`, `mensaje` + honeypot `bot-field`.
- **Netlify Forms**: `name="contacto-portafolio"`, `method="POST"`, `action="/contact"`, `data-netlify="true"`. El envío real es un `fetch` codificado como `application/x-www-form-urlencoded` a `/contact` (ruta registrada, aunque la página también responda en `/contacto`).
- Estados: `idle → submitting → success | error` con reset automático (8 s / 6 s). Sin backend propio: los mensajes llegan al dashboard de Netlify y por email.
- `index.html` contiene un **formulario oculto idéntico** para que Netlify detecte el endpoint en el momento del build.

### 5.7 `Header.jsx` / `Footer.jsx` / `LanguageSwitcher.jsx`

- **Header**: `sticky top-0 z-50`, fondo negro/90, marca "Portafolio", nav Inicio / CV / Contactar y selector de idioma. Oculto al imprimir (`print:hidden`).
- **Footer**: marca, tagline, iconos de GitHub / LinkedIn / Instagram (`j_u_a_n__a_l_f_o_n_s_o`) y copyright con año dinámico. Oculto al imprimir.
- **LanguageSwitcher**: botones `ES | EN | ET`; el activo usa fondo azul; variante `dark` para el header.

---

## 6. Contenido (fuentes de datos)

Toda la información editable vive en `src/data/`. **No hace falta tocar el JSX para cambiar textos del CV o de proyectos.**

### 6.1 `cvData.js` — estructura por idioma

```text
personal: { name, title, email, phone, linkedin, linkedinUrl, location, github }
profile:  { title, description }
education:{ title, items[{ degree, institution, location, period }] }
experience:{ title, items[{ role, company, period, responsibilities[] }] }
skills:   { title, categories[{ name, level }] }
languages:{ title, items[{ name, level, highlight }] }
courses:  { title, items[{ name, institution, date, details[] }] }
contact:  { title, downloadButton, sendMailButton, whatsappButton }
```

**Experiencia laboral (5 entradas):**

1. **Creador y Lead Developer — GestorPOS** (Jun 2026 – presente). SaaS multiempresa de POS e inventario; React 18 + Vite + Node/Express/Prisma/PostgreSQL; operaciones idempotentes, bloqueo de filas, decimal.js, conversión BCV; POS offline-first, app Android con Capacitor/ML Kit y autoactualización de APK; roles + API B2B con API key y refresh tokens; 22 tests unitarios, Playwright en 3 navegadores, k6.
2. **Desarrollador de Sistemas de Gestión Académica — UPTP Juan de Jesús Montilla** (Ago 2022 – Jun 2025). PHP + MVC + PostgreSQL + Bootstrap; reportes, actas y títulos; SCRUM/XP.
3. **Desarrollador Web Full-Stack — MPPP (Ministerio del Poder Popular de Planificación)** (Mar 2020 – Jun 2022). Plataforma de gestión de citas ciudadanas; Node.js + PostgreSQL.
4. **Desarrollador Web Freelance — Proyectos Independientes** (Jun 2022 – presente). Next.js con SSR/ISR, APIs NestJS + TypeScript, PostgreSQL/MongoDB, Tailwind CSS, mobile-first.
5. **Técnico de Soporte e Infraestructura IT (medio tiempo) — Compu-Ofertas** (Ene 2020 – presente). Mantenimiento de infraestructura y sistema interno de inventario; Node.js + Express + PostgreSQL.

**Formación:** Ingeniería en Informática, Universidad UPTP Juan de Jesús Montilla (2020 – Jun 2025).

**Competencias:** React/Next.js 90 · NestJS/Node.js 85 · JS/TS 90 · PostgreSQL 85 · MongoDB 80 · Scrum/XP 90 · Arquitectura e infraestructura 80.

**Idiomas:** Español nativo · Inglés conversacional.

**Cursos:** Curso de React y PHP en Udemy — "Desarrollo y Consumo de APIs", Desarrollo Constante, Ago 2025.

### 6.2 `proyectosData.js` — proyectos destacados

| #   | ID                  | Nombre (ES)                     | Tipo          | Stack principal                                                         | Enlace                 |
| --- | ------------------- | ------------------------------- | ------------- | ----------------------------------------------------------------------- | ---------------------- |
| 1   | `gestorpos`         | Gestor de Inventario & POS      | Desktop + Web | React 18, Vite, Node, Express, Prisma, PostgreSQL, JWT, Electron, SCRUM | gestor-pos.netlify.app |
| 2   | `gestorpos-app`     | GestorPOS App Móvil             | Android       | Capacitor, Android, Java, ML Kit, DownloadManager                       | gestor-pos.netlify.app |
| 3   | `biomed`            | Proyecto Taller Electromidicina | Web           | React, Tailwind, Node, Express, MongoDB                                 | biomed-sp.netlify.app  |
| 4   | `uptp`              | Sistema UPTP JJM                | Desktop + Web | PHP, MVC, PostgreSQL, Bootstrap, Routes                                 | uptpjjmontilla.com     |
| 5   | `plataforma-medica` | Plataforma Médica               | Web           | React, Tailwind, Node, Express, MongoDB                                 | biomed-sp.vercel.app   |

Los proyectos 1 y 2 incluyen `detalle` → casos de estudio completos. Los otros tres solo muestran la tarjeta.

### 6.3 Casos de estudio

**`gestorposData.js`** — SaaS POS multi-tenant:

- **Problema:** vender, cobrar y controlar inventario en Venezuela sin depender de internet ni de una tasa de cambio diaria.
- **Solución:** POS offline-first, cobranza en USD y VES, caja con desglose por moneda y app Android autoactualizable.
- **Alcance:** 30 rutas, 18 routers REST, Prisma + PostgreSQL, app Android con Capacitor y puente Java.
- **Arquitectura:** Clientes (React SPA / WebView+Java / API B2B), Frontend (React 18, Vite 5, RR6, Tailwind+CSS Modules, ML Kit), Backend (Express 4, JWT+bcrypt, Prisma 5, decimal.js, serialport), Datos (Neon prod / SQLite dev), Externos (BCV, impresora fiscal, Netlify, GitHub).
- **Flujo de venta:** escaneo y precio → validación del payload (422) → transacción atómica (`SELECT … FOR UPDATE`) → cuenta por cobrar 1:1 en el mismo commit → registro de pago con tolerancia ≤ 0,005 USD → cierre de turno con desglose.
- **Actualización APK:** inactivo → consultando → aviso → descargando → verificando (SHA-256, package, versión, firma) → instalando.
- **Roles:** SUPER_ADMIN, EMPRESA, CAJA, INVENTARIO, VISOR, B2B.

**`gestorposAppData.js`** — app Android:

- **WebView Capacitor 6.2** con pantalla completa; **puente nativo** de 3 clases Java (`MainActivity`, `ActualizadorApk`, `VerificadorApk`); **escáner ML Kit** 1920×1080 sin teclado ni foco; **DownloadManager + FileProvider**; **manifiesto** `version.json` servido sin caché por Netlify.
- Mismo ciclo de autoactualización verificado y mismos controles de calidad (22 tests de dominio, Playwright, k6).
- `headerEstilo: "app"` cambia la cabecera del modal a gradiente + mockup de teléfono.

---

## 7. Información personal y canales

| Canal                                      | Valor                                                                                                         |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Email principal (UI, CV, FORM)             | `juanaac2003@gmail.com`                                                                                       |
| Email en JSON-LD (`index.html`) y `ai.txt` | `arcila.juan10@gmail.com` ⚠️ ver §11                                                                          |
| WhatsApp                                   | `+58 412-7723148`                                                                                             |
| LinkedIn                                   | `https://linkedin.com/in/jadeveloper`                                                                         |
| GitHub                                     | `https://github.com/MoonPlay-Z`                                                                               |
| Instagram                                  | `https://www.instagram.com/j_u_a_n__a_l_f_o_n_s_o`                                                            |
| Twitter (meta)                             | `@jadeveloper`                                                                                                |
| Ubicación                                  | Acarigua-Araure, Portuguesa, Venezuela (`VE-J`, 9.5597, -69.2149)                                             |
| Disponibilidad                             | Remoto / híbrido / presencial; abierto a relocalización en Europa y Estonia (**requiere patrocinio de visa**) |

---

## 8. SEO, metadatos y descubrimiento

### `index.html`

- `lang="es"`, viewport, `theme-color #0a0f1e`, favicons y manifest.
- Título: _Juan Arcila | Desarrollador Full-Stack Senior | React, Next.js, NestJS, PostgreSQL_.
- Meta description, author, robots (`index, follow, max-snippet:-1...`) y canonical `https://juanarcila.dev/`.
- Open Graph (`website`, imagen 1024×1024, locale `es_VE` con alternativas `en_US`/`et_EE`) y Twitter Card `summary_large_image`.
- Geo-targeting: `VE-J`, Acarigua, ICBM `9.5597, -69.2149`.
- `hreflang` es / en / et + `x-default`.
- **JSON-LD `ProfilePage`** con entidad `Person`: nombre, título, email, dirección, `areaServed`, `sameAs` (LinkedIn/GitHub), `knowsAbout`, `knowsLanguage`, `alumniOf` (UPTP) y `hasOccupation` (Estonia/Europa).

### Archivos públicos de descubrimiento

| Archivo                | Contenido                                                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `public/sitemap.xml`   | 9 URLs: `/`, `/en`, `/et`, `/cv`, `/en/cv`, `/et/cv`, `/contact`, `/en/contact`, `/et/contact`. `lastmod 2026-10-21`, prioridad 1.0 / 0.9 / 0.7 y alternativas `hreflang` por URL.                |
| `public/robots.txt`    | Permite explícitamente GPTBot, ClaudeBot, Google-Extended, PerplexityBot, OAI-SearchBot y ChatGPT-User; `Disallow: /assets/`; `Allow: /llms.txt` y `/ai.txt`; Sitemap apuntando a juanarcila.dev. |
| `public/llms.txt`      | Resumen para LLMs: perfil bilingüe, servicios, stack, disponibilidad, contacto, idiomas del sitio y 5 proyectos destacados.                                                                       |
| `public/ai.txt`        | Resumen breve para motores de IA: temas centrales, contacto e intención de contratación.                                                                                                          |
| `public/manifest.json` | PWA: `standalone`, colores `#0a0f1e`, iconos `any` y `maskable` 192/512 (ver ⚠️ en §11).                                                                                                          |
| `public/og-image.png`  | Imagen social 1024×1024.                                                                                                                                                                          |

---

## 9. Deploy e infraestructura

### Netlify (`netlify.toml`)

- **Build:** `publish = "dist"`, `command = "npm run build"`, `NODE_VERSION = 20`.
- **Redirect SPA:** `/* → /index.html` con status 200 (también en `public/_redirects`).
- **Headers de seguridad** para `/*`: `X-Frame-Options DENY`, `X-Content-Type-Options nosniff`, `Referrer-Policy strict-origin-when-cross-origin`, `Permissions-Policy camera/microphone/geolocation/payment=()`, **CSP** (`default-src 'self'`, inline styles permitidos, Google Fonts, `connect-src` con `*.supabase.co` y `netlify.app`, `form-action 'self'`), **HSTS** 1 año y `X-XSS-Protection`.
- **Caché:** `/assets/*` inmutable 1 año; `*.html` sin caché; `*.svg` y `*.pdf` 24 h (PDF con `Content-Disposition: inline`).

### GitHub Actions (`.github/workflows/deploy.yml`)

- Disparadores: `push` y `pull_request` a `main`/`master`.
- **Job 1 `build`:** checkout → setup Node 20 con caché npm → `npm ci` → `npm run lint` → `npm run build` (variables Supabase commented) → upload artifact `dist-<sha>` (7 días).
- **Job 2 `validate`** (solo en push a main/master): descarga el artifact y verifica que existan `dist/index.html`, `dist/sitemap.xml` y `dist/robots.txt`; imprime tamaño del bundle y de los assets JS/CSS.

### Netlify Forms

El formulario de contacto no necesita servidor: Netlify detecta el `<form data-netlify="true">` del build (el oculto en `index.html`) y crea el endpoint `/contact`.

---

## 10. Comandos

```bash
npm ci          # instalar dependencias (CI)
npm run dev     # servidor de desarrollo (Vite)
npm run lint    # oxlint
npm run build   # build de producción → dist/
npm run preview # previsualizar el build
```

---

## 11. Convenciones, particularidades y deuda técnica

**Convenciones**

- JSX, sin TypeScript; no añadir TS sin preguntar.
- Linter es **oxlint**, no ESLint; no hay Prettier. Mezcla de semicolons entre archivos: seguir el estilo del archivo que se edita.
- Sitio **español primero**; navegación en español y ruta `/contacto` con alias `/contact`.
- Tailwind v4 con `@import "tailwindcss"` en `src/index.css`; personalización vía `@theme`, sin `tailwind.config.js`.
- Los CV se editan en `src/data/cvData.js`, no en el JSX.
- La carpeta `skills/` contiene _agent skills_ de Anthropic; **no** son parte del sitio ni se empaquetan.

**Puntos a revisar**

1. **Dos emails distintos:** `juanaac2003@gmail.com` (UI, CV, formularios, `llms.txt`, `MARKETING.md`) vs `arcila.juan10@gmail.com` (JSON-LD de `index.html` y `ai.txt`). Conviene unificarlos para SEO y coherencia.
2. **Iconos PWA ausentes:** `index.html` y `manifest.json` referencian `/icons/icon-192.png`, `/icons/icon-512.png` e `icon-maskable-*.png`, pero en `public/` solo existen `icons.svg`, `favicon.svg` y logos. Los iconos PNG no están en el repo.
3. **Redirect duplicado:** SPA fallback configurado tanto en `netlify.toml` como en `public/_redirects`.
4. **`robots.txt` duplicado:** hay una copia en la raíz y otra en `public/`; solo la de `public/` llega al build.
5. **`src/App.css` vacío** (22 bytes) y sin importarse: se puede eliminar.
6. **CSP con Supabase:** se permiten dominios `*.supabase.co` pero no hay cliente de Supabase instalado; las variables en CI están comentadas.
7. **`hreflang` sin implementar en la SPA:** `index.html` y `sitemap.xml` declaran `/en` y `/et`, y esas rutas sí existen, pero el HTML es el mismo para todos los idiomas (los textos se inyectan por React); el `lang` del `<html>` se sincroniza en `LanguageContext`.
8. **Assets sin uso aparente:** `"biomed-sp 2.webp"`, `"biomed-sp 3.webp"`, `"biomed-sp 4.webp"` y `"UPTP JJM.webp"` no aparecen referenciados en `src/data/`.
9. **Fechas del CV:** la entrada de GestorPOS empieza en `Jun 2026`, posterior a la fecha de `lastmod` del sitemap (`2026-10-21`); revisar coherencia temporal.

---

## 12. Resumen en una línea

> SPA React 19 + Vite 8 + Tailwind 4 con 3 idiomas por prefijo de URL, 3 páginas reales (`/`, `/cv`, `/contact`), 5 proyectos destacados (2 con caso de estudio completo), CV imprimible, formulario vía Netlify Forms, SEO/schema.org y archivos `llms.txt`/`ai.txt` para descubrimiento por IA, desplegada en Netlify con CI de GitHub Actions.
