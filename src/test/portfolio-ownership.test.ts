import { describe, expect, it } from "vitest";
import { experience, projects } from "@/data/portfolio";

describe("los proyectos son propios y personales", () => {
  it("hay proyectos listados", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("cada proyecto se presenta como proyecto personal", () => {
    for (const project of projects) {
      expect(project.ownership).toBe("Proyecto personal");
    }
  });

  it("cada proyecto indica autoría única", () => {
    for (const project of projects) {
      expect(project.role).toBe("Creador y único desarrollador");
    }
  });

  it("ninguna experiencia dice que se trabaja para clientes ajenos", () => {
    for (const job of experience) {
      expect(job.company.toLowerCase()).not.toContain("independientes");
      expect(job.role.toLowerCase()).not.toContain("freelance");
    }
  });
});
