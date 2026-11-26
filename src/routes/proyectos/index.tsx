import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeTitle } from "@/components/Typewriter";
import { pageMeta } from "@/lib/seo";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/proyectos/")({
  head: () => ({
    ...pageMeta({
      title: "Proyectos — Juan Arcila",
      description:
        "Proyectos de Juan Arcila: POS e inventario offline-first, app Android con escáner, plataformas web y sistemas académicos.",
      path: "/proyectos",
    }),
  }),
  component: Proyectos,
});

function Proyectos() {
  return (
    <div>
      <CodeTitle fn="proyectos" text="Lo que he construido" comment="git log --oneline" />
      <p className="max-w-3xl text-muted-foreground">
        Cada proyecto es propio: lo diseñé, lo programé y lo desplegué yo, desde el modelo de datos
        hasta la publicación.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <article
            key={p.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow"
          >
            <Link
              to="/proyectos/$id"
              params={{ id: p.id }}
              className="block aspect-video overflow-hidden bg-muted"
            >
              <img
                src={p.image}
                alt={`Pantalla de ${p.name}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2 font-mono text-xs">
                <span className="text-muted-foreground">0{idx + 1}</span>
                <span className="flex flex-wrap items-center justify-end gap-1.5">
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">
                    {p.type}
                  </span>
                  <span className="rounded-full border border-success/40 px-2 py-0.5 text-success">
                    {p.ownership}
                  </span>
                </span>
              </div>
              <h2 className="mt-4 text-xl font-bold">{p.name}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 5).map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border px-2 py-0.5 font-mono text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/proyectos/$id"
                  params={{ id: p.id }}
                  className="inline-flex min-h-10 items-center font-mono text-sm font-semibold text-primary"
                >
                  ver_detalle() →
                </Link>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center font-mono text-sm font-semibold text-success"
                >
                  sitio ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
