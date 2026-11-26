import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
const router = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });

const pages = [
  "/",
  "/stack",
  "/proyectos",
  "/proyectos/gestorpos",
  "/experiencia",
  "/certificados",
  "/blog",
  "/blog/pos-sin-internet",
  "/contacto",
];

describe("App routing", () => {
  it.each(pages)("matches a page for %s instead of falling back to not found", (path) => {
    const matches = router().matchRoutes(path);
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
