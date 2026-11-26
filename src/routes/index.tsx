import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeTitle } from "@/components/Typewriter";
import { Typewriter } from "@/components/Typewriter";
import { JsonLd } from "@/components/JsonLd";
import { TechIcon } from "@/components/TechIcon";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/format";
import { personal, projects, skills } from "@/data/portfolio";
import { posts } from "@/data/blog";
import { Download } from "lucide-react";
import banner from "@/assets/hero-juan-arcila.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: "Juan Arcila — Desarrollador Full-Stack Senior",
      description:
        "Portafolio de Juan Arcila: sistemas POS e inventario offline-first, apps Android y plataformas web con React, Node y PostgreSQL. Disponible para trabajo remoto y relocalización en Europa.",
      path: "/",
    }),
  }),
  component: Index,
});

function Index() {
  const latest = posts.slice(0, 2);

  return (
    <div className="space-y-14">
      <section className="space-y-10">
        <div className="relative isolate overflow-hidden rounded-3xl border border-border bg-secondary shadow-glow">
          <img
            src={banner.url}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-right-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-transparent to-background/80" />
          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl p-6 sm:p-12">
            <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-background/80 px-3 py-1 font-mono text-[11px] text-secondary-foreground backdrop-blur-sm sm:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              disponible · remoto / Europa
            </p>
            <h1 className="mt-6 break-words text-4xl font-bold leading-[1.12] sm:text-6xl sm:leading-tight">
              Hola, soy <span className="text-gradient">{personal.name}</span>
            </h1>
            <p className="mt-5 font-mono text-lg sm:text-xl">
              <span className="text-code-keyword">&gt; </span>
              <Typewriter text="npm run build --futuro" className="text-primary" />
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ingeniero en Informática y {personal.title}. Construyo sistemas POS, plataformas web y
              apps móviles con React, Node y PostgreSQL. Todos los proyectos que muestro son
              propios: los diseñé, los programé y los despliego yo. Abierto a relocalización en
              Europa (Estonia), requiere patrocinio de visa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/proyectos"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Ver proyectos
              </Link>
              <Link
                to="/contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-success bg-background/85 px-6 py-3 font-semibold text-secondary-foreground backdrop-blur-sm transition-colors hover:bg-background"
              >
                Contactar
              </Link>
              <a
                href="/downloads/cv-juan-arcila-ats.pdf"
                download="CV-Juan-Arcila-ATS.pdf"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-background/85 px-6 py-3 font-semibold text-primary backdrop-blur-sm transition-colors hover:bg-background"
              >
                <Download size={18} aria-hidden="true" /> Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-mono text-sm text-muted-foreground">{"// habilidades"}</h2>
        <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="flex min-w-0 items-center gap-3 rounded-2xl border border-border bg-card p-3 transition-transform hover:-translate-y-0.5 sm:p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <TechIcon name={s.icon} size={22} />
              </span>
              <span className="font-mono text-sm font-semibold leading-snug">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="font-mono text-sm text-muted-foreground">{"// proyectos destacados"}</h2>
          <Link to="/proyectos" className="font-mono text-sm font-semibold text-primary">
            ver todos →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link
              key={p.id}
              to="/proyectos/$id"
              params={{ id: p.id }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={`Pantalla de ${p.name}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-xs text-muted-foreground">{p.type}</p>
                <h3 className="mt-1 font-bold group-hover:text-primary">{p.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="font-mono text-sm text-muted-foreground">{"// últimas notas"}</h2>
          <Link to="/blog" className="font-mono text-sm font-semibold text-primary">
            ver blog →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {latest.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary"
            >
              <p className="font-mono text-xs text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes}{" "}
                min
              </p>
              <h3 className="mt-2 text-lg font-bold leading-snug">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: personal.name,
          jobTitle: personal.title,
          email: `mailto:${personal.email}`,
          telephone: personal.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Acarigua-Araure",
            addressRegion: "Portuguesa",
            addressCountry: "VE",
          },
          sameAs: [personal.linkedin, personal.github, personal.whatsapp],
          knowsAbout: ["React", "Node.js", "PostgreSQL", "Android", "Sistemas POS", "TypeScript"],
          knowsLanguage: ["es", "en"],
          worksFor: { "@type": "Organization", name: "GestorPOS" },
        }}
      />
    </div>
  );
}
