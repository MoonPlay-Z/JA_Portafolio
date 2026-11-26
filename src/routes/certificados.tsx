import { createFileRoute } from "@tanstack/react-router";
import { CodeTitle } from "@/components/Typewriter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { certifications, education } from "@/data/portfolio";
import {
  BadgeCheck,
  CalendarDays,
  Download,
  ExternalLink,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/certificados")({
  head: () => ({
    ...pageMeta({
      title: "Certificaciones y formación — Juan Arcila",
      description:
        "Certificaciones verificables y formación de Juan Arcila: ValenValley Hackathon 2026 con código de verificación e Ingeniería en Informática.",
      path: "/certificados",
    }),
  }),
  component: Certificados,
});

function Certificados() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "inicio", to: "/", path: "/" }, { label: "certificados" }]} />

      <CodeTitle
        fn="certificaciones"
        text="Títulos que se pueden verificar"
        comment="git tag -a v1.0"
      />

      <p className="max-w-3xl text-muted-foreground">
        Cada credencial de esta página tiene un enlace de verificación pública. Puedes comprobarla
        sin creerte mi palabra.
      </p>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Juan Arcila",
          jobTitle: "Desarrollador Full-Stack Senior",
          knowsAbout: ["React", "Node.js", "PostgreSQL", "Android", "Sistemas POS"],
          hasCredential: certifications.map((c) => ({
            "@type": "EducationalOccupationalCredential",
            name: c.title,
            credentialCategory: c.kind,
            recognizedBy: { "@type": "Organization", name: c.issuer },
          })),
          alumniOf: { "@type": "CollegeOrUniversity", name: education.place },
        }}
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {certifications.map((c) => (
          <article
            key={c.id}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-glow"
          >
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-linear-to-br from-primary/25 to-success/25 blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary to-success text-primary-foreground">
                  <Trophy size={22} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-primary">{c.kind}</p>
                  <h2 className="break-words text-lg font-bold leading-snug">{c.title}</h2>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{c.summary}</p>

              <dl className="mt-4 space-y-2 font-mono text-xs">
                <div className="flex items-start gap-2">
                  <Users size={14} className="mt-0.5 shrink-0 text-success" />
                  <dd>{c.team}</dd>
                </div>
                <div className="flex items-start gap-2">
                  <CalendarDays size={14} className="mt-0.5 shrink-0 text-success" />
                  <dd>{c.dates}</dd>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-success" />
                  <dd>{c.place}</dd>
                </div>
                <div className="flex items-start gap-2">
                  <BadgeCheck size={14} className="mt-0.5 shrink-0 text-success" />
                  <dd>{c.issuer}</dd>
                </div>
              </dl>

              <p className="mt-4 break-all rounded-lg bg-muted px-3 py-2 font-mono text-xs">
                code: <span className="text-primary">{c.code}</span>
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Verificar autenticidad <ExternalLink size={14} />
                </a>
                <a
                  href={c.pdfUrl}
                  download
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-success bg-card px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
                >
                  Descargar constancia <Download size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}

        <article className="rounded-3xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <GraduationCap size={22} />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-xs text-primary">Formación</p>
              <h2 className="break-words text-lg font-bold leading-snug">{education.degree}</h2>
            </div>
          </div>
          <dl className="mt-4 space-y-2 font-mono text-xs">
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-success" />
              <dd>{education.place}</dd>
            </div>
            <div className="flex items-start gap-2">
              <CalendarDays size={14} className="mt-0.5 shrink-0 text-success" />
              <dd>{education.period}</dd>
            </div>
            <div className="flex items-start gap-2">
              <BadgeCheck size={14} className="mt-0.5 shrink-0 text-success" />
              <dd>{education.languages}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">
            La constancia de notas se muestra a quien la pida: escríbeme por WhatsApp y la envío.
          </p>
        </article>
      </div>

      <section className="mt-12 rounded-2xl border border-border bg-secondary p-6">
        <h2 className="flex items-center gap-2 font-mono text-sm font-semibold text-secondary-foreground">
          <ShieldCheck size={16} className="text-success" /> cómo verificar
        </h2>
        <p className="mt-3 text-sm text-secondary-foreground">
          El enlace de verificación abre el registro público del organizador con el código de esta
          credencial. Si el código no aparece en esa página, la credencial no es válida.
        </p>
      </section>
    </div>
  );
}
