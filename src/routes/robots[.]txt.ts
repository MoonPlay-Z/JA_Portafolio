import { createFileRoute } from "@tanstack/react-router";

// robots servido desde el servidor para poder escribir la URL del sitemap
// con el origen real, en vez de dejar un dominio fijo en un archivo estático.
export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = [
          "User-agent: *",
          "Allow: /",
          "",
          // Buscadores con IA permitidos explícitamente (GEO).
          ...[
            "GPTBot",
            "OAI-SearchBot",
            "ChatGPT-User",
            "PerplexityBot",
            "ClaudeBot",
            "Google-Extended",
            "Applebot-Extended",
            "Bingbot",
            "LinkedInBot",
          ].flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
          `# Resumen para IA: ${origin}/llms.txt`,
          "",
          `Sitemap: ${origin}/sitemap.xml`,
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
