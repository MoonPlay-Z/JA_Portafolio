import { createFileRoute } from "@tanstack/react-router";
import { CodeTitle } from "@/components/Typewriter";
import { TechIcon } from "@/components/TechIcon";
import { stackGroups } from "@/data/portfolio";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — Juan Arcila" },
      {
        name: "description",
        content: "Tecnologías y versiones que usa Juan Arcila en sus proyectos.",
      },
      { property: "og:title", content: "Stack — Juan Arcila" },
      { property: "og:description", content: "Tecnologías y versiones que usa Juan Arcila." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Stack,
});

function Stack() {
  return (
    <div>
      <CodeTitle fn="stack" text="Mis herramientas" comment="package.json" />
      <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {stackGroups.map((g) => (
          <section
            key={g.group}
            className="min-w-0 rounded-2xl border border-border bg-card p-4 sm:p-6"
          >
            <h2 className="mb-4 break-words font-mono text-base font-semibold sm:text-lg">
              <span className="text-code-keyword">"{g.group}"</span>: {"{"}
            </h2>
            <ul className="space-y-2">
              {g.items.map((i) => (
                <li
                  key={i.name}
                  className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5 rounded-xl border border-border bg-muted/50 px-3 py-2.5 transition-colors hover:border-primary/40 hover:bg-accent sm:gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-card text-primary shadow-sm">
                    <TechIcon name={i.icon} size={20} />
                  </span>
                  <div className="min-w-0">
                    <p
                      className="truncate font-mono text-xs font-semibold sm:text-sm"
                      title={i.name}
                    >
                      {i.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground" title={i.use}>
                      {i.use}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] text-primary sm:text-xs">
                    {i.version}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 font-mono">{"}"}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
