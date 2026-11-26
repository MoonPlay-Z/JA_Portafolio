import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { posts } from "@/data/blog";

// Sitemap generado desde el origen real de la petición: funciona igual en
// preview, en el dominio de producción y en un dominio propio futuro.
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const base = `${origin}/`;

        const entries: Array<{ loc: string; lastmod?: string }> = [
          { loc: base },
          { loc: `${base}stack` },
          { loc: `${base}proyectos` },
          { loc: `${base}experiencia` },
          { loc: `${base}certificados` },
          { loc: `${base}blog` },
          { loc: `${base}contacto` },
          ...projects.map((p) => ({ loc: `${base}proyectos/${p.id}` })),
          ...posts.map((p) => ({ loc: `${base}blog/${p.slug}`, lastmod: p.date })),
        ];

        const urls = entries
          .map(
            (e) =>
              `  <url><loc>${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ""}</url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
            "X-Robots-Tag": "noindex",
          },
        });
      },
    },
  },
});
