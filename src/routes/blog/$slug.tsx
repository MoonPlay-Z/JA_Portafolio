import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CodeTitle } from "@/components/Typewriter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { formatDate } from "@/lib/format";
import { findPost, posts } from "@/data/blog";
import { findProject } from "@/data/portfolio";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    ...pageMeta({
      title: loaderData ? `${loaderData.title} — Blog — Juan Arcila` : "Blog — Juan Arcila",
      description: loaderData ? loaderData.excerpt : "Notas técnicas de Juan Arcila.",
      path: loaderData ? `/blog/${loaderData.slug}` : undefined,
      type: "article",
    }),
  }),
  component: PostDetail,
});

function PostDetail() {
  const post = Route.useLoaderData();
  const index = posts.findIndex((p) => p.slug === post.slug);
  const prev = index > 0 ? posts[index - 1] : undefined;
  const next = index < posts.length - 1 ? posts[index + 1] : undefined;
  const project = post.project ? findProject(post.project) : undefined;

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs
        items={[
          { label: "inicio", to: "/", path: "/" },
          { label: "blog", to: "/blog", path: "/blog" },
          { label: post.title },
        ]}
      />

      <CodeTitle fn="blog" text={post.title} comment={`git commit -m "${post.slug}"`} />

      <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {post.readingMinutes} min de lectura
        </span>
        <span>{post.tags.map((t) => `#${t}`).join(" ")}</span>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.date,
          inLanguage: "es",
          author: { "@type": "Person", name: "Juan Arcila" },
          description: post.excerpt,
          keywords: post.tags.join(", "),
        }}
      />

      <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

      <div className="mt-10 space-y-12">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-mono text-sm text-code-keyword">{"## " + section.heading}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {project && (
        <div className="mt-12 rounded-2xl border border-border bg-card p-6">
          <p className="font-mono text-xs text-muted-foreground">{"// proyecto relacionado"}</p>
          <Link
            to="/proyectos/$id"
            params={{ id: project.id }}
            className="mt-2 block text-lg font-bold transition-colors hover:text-primary"
          >
            {project.name} →
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
        </div>
      )}

      <nav className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            to="/blog/$slug"
            params={{ slug: prev.slug }}
            className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <ArrowLeft size={14} /> más nuevo
            </span>
            <span className="mt-2 block font-semibold group-hover:text-primary">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/blog/$slug"
            params={{ slug: next.slug }}
            className="group rounded-2xl border border-border bg-card p-5 text-right transition-colors hover:border-primary"
          >
            <span className="flex items-center justify-end gap-2 font-mono text-xs text-muted-foreground">
              más antiguo <ArrowRight size={14} />
            </span>
            <span className="mt-2 block font-semibold group-hover:text-primary">{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
