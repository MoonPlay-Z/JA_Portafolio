import { createFileRoute, Link } from "@tanstack/react-router";
import { CodeTitle } from "@/components/Typewriter";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/format";
import { posts } from "@/data/blog";
import { Clock, Tags } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...pageMeta({
      title: "Blog — Juan Arcila",
      description:
        "Notas técnicas de Juan Arcila: POS sin internet, escáner en Android, pruebas de carga y mantenimiento de sistemas en producción.",
      path: "/blog",
    }),
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div>
      <CodeTitle fn="blog" text="Notas de trabajo" comment="cómo resolví cada cosa" />
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-glow sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {post.readingMinutes} min
              </span>
              <span className="flex items-center gap-1">
                <Tags size={12} /> {post.tags.join(", ")}
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-snug">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="transition-colors group-hover:text-primary"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">{post.excerpt}</p>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="mt-5 inline-block font-mono text-sm font-semibold text-primary"
            >
              leer_entrada() →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
