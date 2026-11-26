import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/portfolio";

const nav = [
  { to: "/", label: "inicio" },
  { to: "/stack", label: "stack" },
  { to: "/proyectos", label: "proyectos" },
  { to: "/experiencia", label: "experiencia" },
  { to: "/certificados", label: "certificados" },
  { to: "/blog", label: "blog" },
  { to: "/contacto", label: "contacto" },
] as const;

export function Shell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
          <Link
            to="/"
            className="flex min-w-0 shrink-0 items-center gap-2.5"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/images/logo-isotipo.png"
              alt="Logotipo de Juan Arcila"
              className="h-9 w-auto shrink-0 sm:h-10"
            />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-mono text-sm font-bold sm:text-base">
                {personal.name}
              </span>
              <span className="hidden text-xs text-muted-foreground sm:block">
                Ingeniero en Informática
              </span>
            </span>
          </Link>

          <nav aria-label="Principal" className="hidden font-mono text-sm xl:block">
            <div className="flex gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  activeProps={{
                    className:
                      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                  }}
                >
                  ./{n.label}
                </Link>
              ))}
            </div>
          </nav>

          <div ref={menuRef} className="relative shrink-0 xl:hidden">
            <button
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              onClick={() => setMenuOpen((open) => !open)}
              className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>

            {menuOpen && (
              <>
                <button
                  type="button"
                  aria-label="Cerrar menú"
                  onClick={() => setMenuOpen(false)}
                  className="fixed inset-0 z-40 cursor-default bg-foreground/10 backdrop-blur-[1px]"
                />
                <nav
                  id="menu-movil"
                  aria-label="Principal móvil"
                  className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-border bg-card p-3 font-mono text-sm shadow-glow"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {nav.map((n, index) => (
                      <Link
                        key={n.to}
                        to={n.to}
                        activeOptions={{ exact: n.to === "/" }}
                        onClick={() => setMenuOpen(false)}
                        className={`inline-flex min-h-12 items-center justify-center rounded-xl px-3 py-2 text-center text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${index === nav.length - 1 ? "col-span-2 border border-success/60 text-secondary-foreground" : "bg-muted/60"}`}
                        activeProps={{
                          className:
                            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                        }}
                      >
                        ./{n.label}
                      </Link>
                    ))}
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </header>

      <main
        id="contenido"
        tabIndex={-1}
        className="book mx-auto max-w-7xl px-4 py-8 outline-none sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div key={pathname} className="page-turn">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-border px-4 py-8 text-center font-mono text-sm text-muted-foreground sm:px-6">
        <p className="break-words">
          © {new Date().getFullYear()} {personal.name} ·{" "}
          <span className="text-primary">git commit -m "gracias por visitar"</span>
        </p>
        <p className="mx-auto mt-4 flex max-w-2xl flex-wrap justify-center gap-x-5 gap-y-2">
          <Link to="/proyectos" className="inline-flex min-h-8 items-center hover:text-primary">
            proyectos
          </Link>
          <Link to="/blog" className="inline-flex min-h-8 items-center hover:text-primary">
            blog
          </Link>
          <Link to="/certificados" className="inline-flex min-h-8 items-center hover:text-primary">
            certificados
          </Link>
          <Link to="/contacto" className="inline-flex min-h-8 items-center hover:text-primary">
            contacto
          </Link>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-8 items-center hover:text-primary"
          >
            github
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-8 items-center hover:text-primary"
          >
            linkedin
          </a>
        </p>
      </footer>
    </div>
  );
}
