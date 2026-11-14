import { describe, expect, it } from "vitest";
import { fonctionnalites, findFonctionnalite } from "@/lib/fonctionnalites";

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