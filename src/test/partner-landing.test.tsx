import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PartnerLanding, type LandingData } from "@/components/partner-landing";

const d: LandingData = {
  slug: "mssp",
  eyebrow: "Pour les MSSP et SOC",
  h1: "MSSP et SOC",
  intro: "Intro.",
  cta: "Devenir apporteur d’affaires",
  visual: { label: "Un dossier transmis", text: "Texte." },
  problemTitle: "Problème",
  problems: [["a", "b"]],
  solutionTitle: "Solution",
  solutionText: "Texte.",
  solutionRule: "Règle.",
  youBring: "Vous.",
  weBring: "Nous.",
  stepsTitle: "Étapes",
  steps: [["a", "b"]],
  services: [["a", "b"]],
  offerTitle: "Offre",
  offerText: "Texte.",
  useCases: [
    ["Après une revue de sécurité", "Premier scénario."],
    ["Lors d’un point de suivi SOC", "Second scénario."],
  ],
  faq: [["q", "a"]],
  finalTitle: "Final",
  finalText: "Texte.",
};

async function renderLanding() {
  const rootRoute = createRootRoute({ component: () => <PartnerLanding d={d} /> });
  const router = createRouter({ routeTree: rootRoute, history: createMemoryHistory({ initialEntries: ["/partenaires/mssp"] }) });
  await act(async () => {
    render(<RouterProvider router={router} />);
    await router.load();
  });
  return screen.getAllByRole("link", { name: /^Devenir apporteur d’affaires/, hidden: true });
}

describe("Use-case action links", () => {
  it("gives every use-case card exactly one action link, with the same label and destination", async () => {
    const links = await renderLanding();
    expect(links).toHaveLength(2);
    for (const l of links) {
      expect(l.textContent?.trim()).toBe("Devenir apporteur d’affaires");
      expect(l.getAttribute("href")).toBe("/devenir-partenaire#candidature");
      expect(l.className).toMatch(/min-h-11/);
      expect(l.className).toMatch(/focus-visible:ring-2/);
    }
    expect(new Set(links.map((l) => l.className)).size).toBe(1);
  });
});
