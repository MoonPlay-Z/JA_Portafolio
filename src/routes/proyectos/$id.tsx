import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CodeTitle } from "@/components/Typewriter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { findProject, projects } from "@/data/portfolio";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/proyectos/$id")({
  loader: ({ params }) => {
    const project = findProject(params.id);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    ...pageMeta({
      title: loaderData ? `${loaderData.name} — Proyectos — Juan Arcila` : "Proyecto — Juan Arcila",
      description: loaderData
        ? `${loaderData.desc} Stack: ${loaderData.stack.join(", ")}.`
        : "Proyecto de Juan Arcila.",
      path: loaderData ? `/proyectos/${loaderData.id}` : undefined,
      type: "article",
      image: loaderData?.image,
      imageAlt: loaderData ? `Captura de ${loaderData.name}` : undefined,
    }),
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const index = projects.findIndex((p) => p.id === project.id);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const whatsappText = encodeURIComponent(
    `Hola Juan, vi tu proyecto ${project.name} en tu portafolio y quiero algo parecido.`,
  );

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "inicio", to: "/", path: "/" },
          { label: "proyectos", to: "/proyectos", path: "/proyectos" },
          { label: project.name },
        ]}
      />

      <CodeTitle fn={project.id} text={project.name} comment={`git checkout -b ${project.id}`} />

      <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
        <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
          {project.type}
        </span>
        <span className="rounded-full border border-success/40 px-3 py-1 text-success">
          {project.ownership}
        </span>
        <span>{project.year}</span>
        <span className="text-border">·</span>
        <span>{project.role}</span>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-secondary">
        <img
          src={project.image}
          alt={`Pantalla principal de ${project.name}`}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: project.name,
          applicationCategory: "BusinessApplication",
          description: project.desc,
          url: project.url,
          datePublished: project.year,
          creator: { "@type": "Person", name: "Juan Arcila" },
          keywords: project.stack.join(", "),
        }}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-12">
          <section>
            <h2 className="font-mono text-sm text-muted-foreground">{"// el problema"}</h2>
            <p className="mt-3 text-lg leading-relaxed">{project.problem}</p>
          </section>

          <section>
            <h2 className="font-mono text-sm text-muted-foreground">{"// cómo lo resolví"}</h2>
            <ul className="mt-4 space-y-4">
              {project.approach.map((step) => (
                <li key={step} className="flex gap-3 rounded-2xl border border-border bg-card p-5">
                  <Check size={18} className="mt-1 shrink-0 text-success" />
                  <span className="leading-relaxed text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-mono text-sm text-muted-foreground">{"// qué incluye"}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm"
                >
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {project.gallery.length > 1 && (
            <section>
              <h2 className="font-mono text-sm text-muted-foreground">{"// más capturas"}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.gallery.slice(1).map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.name}, captura ${i + 2}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full rounded-2xl border border-border object-cover"
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-mono text-sm text-muted-foreground">{"// resultado"}</h2>
            <dl className="mt-4 space-y-4">
              {project.outcomes.map((o) => (
                <div key={o.label}>
                  <dt className="font-mono text-xl font-bold text-primary">{o.value}</dt>
                  <dd className="text-sm text-muted-foreground">{o.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-mono text-sm text-muted-foreground">{"// stack"}</h2>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-border px-2 py-0.5 font-mono text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-center font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Ver proyecto en línea <ExternalLink size={16} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-success px-5 py-3 text-center font-semibold transition-colors hover:bg-secondary"
            >
              Quiero algo parecido
            </a>
          </div>
        </aside>
      </div>

      <nav className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        {prev && (
          <Link
            to="/proyectos/$id"
            params={{ id: prev.id }}
            className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <ArrowLeft size={14} /> anterior
            </span>
            <span className="mt-2 block font-semibold group-hover:text-primary">{prev.name}</span>
          </Link>
        )}
        {next && (
          <Link
            to="/proyectos/$id"
            params={{ id: next.id }}
            className="group rounded-2xl border border-border bg-card p-5 text-right transition-colors hover:border-primary"
          >
            <span className="flex items-center justify-end gap-2 font-mono text-xs text-muted-foreground">
              siguiente <ArrowRight size={14} />
            </span>
            <span className="mt-2 block font-semibold group-hover:text-primary">{next.name}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
