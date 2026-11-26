import { SITE_URL, SITE_NAME } from "@/data/site";

type PageMetaOptions = {
  title: string;
  description: string;
  path?: string | undefined;
  type?: "website" | "article";
  image?: string | undefined;
  imageAlt?: string | undefined;
};

export const DEFAULT_SHARE_IMAGE = "/og-image.jpg";

// Absolute when SITE_URL is known (LinkedIn/WhatsApp need it); relative otherwise.
const abs = (p: string) => (/^https?:\/\//.test(p) ? p : `${SITE_URL}${p}`);

// Un solo punto para el head de todas las pantallas: Google, Brave, LinkedIn, WhatsApp y X.
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_SHARE_IMAGE,
  imageAlt = "Juan Arcila — Desarrollador Full-Stack Senior",
}: PageMetaOptions) {
  const img = abs(image);
  const isDefault = image === DEFAULT_SHARE_IMAGE;
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "author", content: "Juan Arcila" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:locale", content: "es_VE" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: img },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: img },
    { name: "twitter:image:alt", content: imageAlt },
  ];
  if (isDefault) {
    meta.push({ property: "og:image:width", content: "1200" });
    meta.push({ property: "og:image:height", content: "630" });
    meta.push({ property: "og:image:type", content: "image/jpeg" });
  }

  const links: Array<{ rel: string; href: string }> = [];
  if (path) {
    const url = abs(path);
    links.push({ rel: "canonical", href: url });
    meta.push({ property: "og:url", content: url });
  }

  return { meta, links };
}
