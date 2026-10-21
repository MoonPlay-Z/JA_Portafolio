# AGENTS.md

Personal portfolio SPA (Juan Arcila). Vite 8 + React 19 + Tailwind CSS v4 (via `@tailwindcss/vite` plugin, no `tailwind.config.js`), react-router-dom v7, oxlint. No tests, no TypeScript, no formatter configured.

## Commands

- `npm run dev` — Vite dev server
- `npm run lint` — oxlint (config: `.oxlintrc.json`, plugins react+oxc)
- `npm run build` — production build to `dist/` (sourcemaps off, manualChunks splits `vendor`/`router`)
- `npm run preview` — preview built bundle
- CI (`.github/workflows/deploy.yml`) runs `npm ci` → `npm run lint` → `npm run build`; a second job verifies `dist/index.html`, `sitemap.xml`, `robots.txt` exist on push to main/master.

## Architecture notes

- Entry: `index.html` → `src/main.jsx` (BrowserRouter) → `src/App.jsx` (Header/Footer + Routes).
- Routes are only `/`, `/cv`, `/contact`, `/contacto`. `src/pages/Proyectos.jsx` and `src/pages/banner.jsx` are NOT routed — they are embedded inside `src/pages/Home.jsx`. Don't add routes for them expecting them to be linked.
- CV content lives in `src/data/cvData.js` keyed by language (`es`, `en`, `et`); `src/pages/CV.jsx` toggles `lang` state and prints via `window.print()`. Update data, not JSX, for CV changes.
- Assets imported from `src/assets/` (webp images); public static files (PDF CV, logos, og-image) are in `public/` and copied verbatim to `dist/`. Note duplicate SPA redirect config: both `netlify.toml` `[[redirects]]` and `public/_redirects` exist.
- Tailwind v4: styles are plain `@import "tailwindcss"` in `src/index.css`; theme customization goes through CSS `@theme`, not a JS config.

## Conventions / gotchas

- JSX files, no TS — don't introduce TypeScript without asking.
- Lint is oxlint, not ESLint; no Prettier. Match existing style (no semicolons in some files, semicolons in others — follow the file you're editing).
- Site is Spanish-first; nav/labels in Spanish, routes use `/contacto` (with `/contact` alias).
- Deploy target is Netlify (`netlify.toml`: publish `dist`, Node 20, SPA fallback, security headers/CSP, cache headers for hashed assets).
- CSP in netlify.toml allows Supabase domains but no Supabase client is installed — env vars for it are commented out in CI.
