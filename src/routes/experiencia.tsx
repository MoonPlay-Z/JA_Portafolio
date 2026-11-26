import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeTitle } from "@/components/Typewriter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";
import { education, experience } from "@/data/portfolio";
import { GraduationCap, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    ...pageMeta({
      title: "Experiencia — Juan Arcila",
      description:
        "Trayectoria de Juan Arcila: GestorPOS, sistemas académicos en una universidad, plataforma de citas ciudadanas y soporte de infraestructura IT.",
      path: "/experiencia",
    }),
  }),
  component: Experiencia,
});

function Experiencia() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "inicio", to: "/", path: "/" }, { label: "experiencia" }]} />

      <CodeTitle
        fn="experiencia"
        text="Mi historial de commits"
        comment="while (aprendiendo) { crecer(); }"
      />

      <ol className="relative space-y-8 border-l-2 border-primary/40 pl-6 sm:pl-8">
        {experience.map((e) => (
          <li key={e.role + e.company} className="relative">
            <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary sm:-left-[41px]" />
            <p className="font-mono text-xs text-primary">{e.period}</p>
            <h2 className="mt-1 text-xl font-bold">
              {e.role} <span className="text-muted-foreground">@ {e.company}</span>
            </h2>
            <p className="mt-2 max-w-3xl text-muted-foreground">{e.text}</p>
          </li>
        ))}
        <li className="relative">
          <span className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-code-fn sm:-left-[41px]" />
          <p className="font-mono text-xs text-code-fn">{education.period}</p>
          <h2 className="mt-1 text-xl font-bold">
            {education.degree} <span className="text-muted-foreground">@ {education.place}</span>
          </h2>
          <p className="mt-2 text-muted-foreground">{education.languages}</p>
        </li>
      </ol>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 font-mono text-sm font-semibold">
            <ShieldCheck size={16} className="text-success" /> certificaciones
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Credenciales con enlace de verificación pública y constancia descargable.
          </p>
          <Link
            to="/certificados"
            className="mt-4 inline-block font-mono text-sm font-semibold text-primary"
          >
            ver certificados →
          </Link>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="flex items-center gap-2 font-mono text-sm font-semibold">
            <GraduationCap size={16} className="text-primary" /> formación
          </h2>
          <p className="mt-3 font-mono text-sm font-semibold">{education.degree}</p>
          <p className="text-sm text-muted-foreground">
            {education.place} · {education.period}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{education.languages}</p>
        </div>
      </div>
    </div>
  );
}
