import { Link } from "@tanstack/react-router";
import { personal } from "@/data/portfolio";
import { SITE_URL } from "@/data/site";
import { JsonLd } from "./JsonLd";

export type Crumb = { label: string; to?: string; path?: string };

// Migas de pan + BreadcrumbList, para que el buscador muestre la ruta del sitio.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const base = SITE_URL || "";

  return (
    <>
      <nav
        aria-label="Ruta"
        className="mb-6 flex flex-wrap items-center gap-1 font-mono text-xs text-muted-foreground"
      >
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center gap-1">
            {i > 0 && <span className="text-border">/</span>}
            {item.to && item.path ? (
              <Link to={item.to} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: item.path ? `${base}${item.path}` : base || personal.linkedin,
          })),
        }}
      />
    </>
  );
}
