import { describe, expect, it } from "vitest";
import { coreModules, fonctionnalites, findFonctionnalite } from "@/lib/fonctionnalites";

describe("Crisis feature integration", () => {
  it("places crisis management between payment and compliance in the partner collection", () => {
    const slugs = fonctionnalites.filter((f) => f.group === "partenaire").map((f) => f.slug);
    const index = slugs.indexOf("agir-en-cas-de-crise");
    expect(index).toBeGreaterThan(0);
    expect(slugs[index - 1]).toBe("etre-paye-sans-effort");
    expect(slugs[index + 1]).toBe("conformite-et-securite");
  });

  it("resolves the new page through the shared feature collection", () => {
    expect(findFonctionnalite("agir-en-cas-de-crise")?.group).toBe("partenaire");
  });
});

describe("Introducer-only feature pages", () => {
  it("keeps exactly the five introducer tools as detail pages", () => {
    expect(fonctionnalites.map((f) => f.slug)).toEqual([
      "attirer-vos-clients", "suivre-vos-prospects", "etre-paye-sans-effort",
      "agir-en-cas-de-crise", "conformite-et-securite",
    ]);
  });

  it.each([
    "portail-msp", "moteur-de-souscription", "moteur-de-risque",
    "module-de-remediation", "portail-client",
  ])("keeps %s only as an overview summary", (slug) => {
    expect(findFonctionnalite(slug)).toBeUndefined();
    expect(coreModules.find((module) => module.legacySlug === slug)?.summary.length).toBeGreaterThan(0);
  });
});