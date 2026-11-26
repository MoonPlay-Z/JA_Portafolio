import { createFileRoute } from "@tanstack/react-router";
import { CodeTitle } from "@/components/Typewriter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppForm } from "@/components/WhatsAppForm";
import { pageMeta } from "@/lib/seo";
import { personal } from "@/data/portfolio";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    ...pageMeta({
      title: "Contacto — Juan Arcila",
      description:
        "Cuéntame tu proyecto por WhatsApp: rellena el formulario y se abre el chat con el mensaje listo para enviar.",
      path: "/contacto",
    }),
  }),
  component: Contacto,
});

const channels = [
  {
    label: "whatsapp",
    value: personal.phone,
    href: personal.whatsapp,
    icon: MessageCircle,
  },
  { label: "email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "linkedin", value: "in/jadeveloper", href: personal.linkedin, icon: Linkedin },
  { label: "github", value: "MoonPlay-Z", href: personal.github, icon: Github },
  {
    label: "teléfono",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\D/g, "")}`,
    icon: Phone,
  },
];

function Contacto() {
  return (
    <div className="space-y-14">
      <div>
        <Breadcrumbs items={[{ label: "inicio", to: "/", path: "/" }, { label: "contacto" }]} />
        <CodeTitle
          fn="contacto"
          text="Hablemos de tu proyecto"
          comment="el formulario abre WhatsApp con tu mensaje listo"
        />
        <p className="max-w-3xl text-muted-foreground">
          Rellena el formulario y se abre WhatsApp con el mensaje ya escrito: solo le das a enviar.
          No hay correo de por medio y me llega todo ordenado.
        </p>
      </div>

      <WhatsAppForm />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 font-mono transition-all hover:-translate-y-1 hover:border-primary hover:shadow-glow"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <c.icon size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-code-keyword">{c.label}:</span>
              <span className="mt-1 block break-all text-sm font-semibold text-primary">
                "{c.value}"
              </span>
            </span>
          </a>
        ))}
      </div>

      <p className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
        <MapPin size={14} className="text-success" /> {personal.location} · disponible para trabajo
        remoto y relocalización en Europa
      </p>

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
            addressCountry: "VE",
          },
          sameAs: [personal.linkedin, personal.github],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            availableLanguage: ["es", "en"],
          },
        }}
      />
    </div>
  );
}
