import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/site";

async function renderHeader() {
  const rootRoute = createRootRoute({ component: SiteHeader });
  const router = createRouter({ routeTree: rootRoute, history: createMemoryHistory({ initialEntries: ["/"] }) });
  await act(async () => {
    render(<RouterProvider router={router} />);
    await router.load();
  });
}

describe("Mobile navigation closes after selecting a link", () => {
  it.each(["Vue d’ensemble", "Comment ça marche", "Cadre réglementaire", "Ressources", "Simulateur de commission"])("closes after %s", async (name) => {
    await renderHeader();
    fireEvent.click(screen.getByRole("button", { name: "Ouvrir le menu" }));
    const nav = screen.getByRole("navigation", { name: "Navigation mobile" });
    fireEvent.click(within(nav).getByRole("link", { name }));
    expect(screen.queryByRole("navigation", { name: "Navigation mobile" })).not.toBeInTheDocument();
  });

  it.each(["Attirer vos clients", "Suivre vos prospects", "Être payé sans effort", "Agir en cas de crise", "Conformité et sécurité"])("closes and resets the tools after %s", async (name) => {
    await renderHeader();
    fireEvent.click(screen.getByRole("button", { name: "Ouvrir le menu" }));
    fireEvent.click(screen.getByRole("button", { name: "Outils de l’apporteur" }));
    fireEvent.click(within(screen.getByRole("navigation", { name: "Navigation mobile" })).getByRole("link", { name }));
    expect(screen.queryByRole("navigation", { name: "Navigation mobile" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Ouvrir le menu" }));
    expect(screen.getByRole("button", { name: "Outils de l’apporteur" })).toHaveAttribute("aria-expanded", "false");
  });

  it.each(["Eliocyber, accueil", "Ouvrir un compte Pro"])("also closes after the persistent %s link", async (name) => {
    await renderHeader();
    fireEvent.click(screen.getByRole("button", { name: "Ouvrir le menu" }));
    const links = screen.getAllByRole("link", { name });
    const link = links.at(-1);
    if (!link) throw new Error("Missing header link");
    fireEvent.click(link);
    expect(screen.queryByRole("navigation", { name: "Navigation mobile" })).not.toBeInTheDocument();
  });
});