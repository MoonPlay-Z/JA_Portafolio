import { createFileRoute } from "@tanstack/react-router";
import { personal, projects } from "@/data/portfolio";
import { posts } from "@/data/blog";

// llms.txt: resumen legible para buscadores con IA (ChatGPT, Perplexity, Gemini, Claude).
export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const o = new URL(request.url).origin;
        const body = [
          `# ${personal.name} — ${personal.title}`,
          "",
          `> Portafolio de ${personal.name}, desarrollador full-stack en ${personal.location}. Crea sistemas POS e inventario offline-first, apps Android y plataformas web con React, Node.js, NestJS, TypeScript y PostgreSQL. Disponible para trabajo remoto y relocalización en Europa.`,
          "",
          "## Contacto",
          `- Email: ${personal.email}`,
          `- WhatsApp: ${personal.whatsapp}`,
          `- LinkedIn: ${personal.linkedin}`,
          `- GitHub: ${personal.github}`,
          `- CV (PDF): ${o}/downloads/cv-juan-arcila-ats.pdf`,
          "",
          "## Páginas",
          `- [Inicio](${o}/)`,
          `- [Stack](${o}/stack)`,
          `- [Proyectos](${o}/proyectos)`,
          `- [Experiencia](${o}/experiencia)`,
          `- [Certificados](${o}/certificados)`,
          `- [Blog](${o}/blog)`,
          `- [Contacto](${o}/contacto)`,
          "",
          "## Proyectos propios",
          ...projects.map(
            (p) => `- [${p.name}](${o}/proyectos/${p.id}): ${p.desc} Stack: ${p.stack.join(", ")}.`,
          ),
          "",
          "## Blog",
          ...posts.map((p) => `- [${p.title}](${o}/blog/${p.slug})`),
          "",
        ].join("\n");
        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
