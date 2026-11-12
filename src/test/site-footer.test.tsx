import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteFooter } from "@/components/site";

async function renderFooter(path = "/") {
  const rootRoute = createRootRoute({ component: SiteFooter });
  const router = createRouter({ routeTree: rootRoute, history: createMemoryHistory({ initialEntries: [path] }) });
  await act(async () => {
    render(<RouterProvider router={router} />);
    await router.load();
  });
  const nav = (await screen.findAllByRole("navigation", { name: "Plan du site", hidden: true }))
    .find((n) => n.querySelector("button[data-accordion]"))!;
  const buttons = Array.from(nav.querySelectorAll<HTMLButtonElement>("button[data-accordion]")) as [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement];
  return { nav, buttons };
}

describe("Footer accordions — ARIA", () => {
  it("each header button controls a labelled region and starts closed", async () => {
    const { buttons } = await renderFooter();
    expect(buttons.map((b) => b.textContent)).toEqual(["Entreprises", "Partenaires", "Plateforme"]);
    for (const b of buttons) {
      expect(b).toHaveAttribute("aria-expanded", "false");
      const panel = document.getElementById(b.getAttribute("aria-controls")!)!;
      expect(panel).toHaveAttribute("role", "region");
      expect(panel).toHaveAttribute("aria-labelledby", b.id);
    }
  });

  it("only one section is open at a time and links stay in the DOM when closed", async () => {
    const { buttons } = await renderFooter();
    const [ent, part] = buttons;
    const partPanel = document.getElementById(part.getAttribute("aria-controls")!)!;
    expect(within(partPanel).getAllByRole("link", { hidden: true }).length).toBeGreaterThan(0);
    fireEvent.click(ent);
    expect(ent).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(part);
    expect(part).toHaveAttribute("aria-expanded", "true");
    expect(ent).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(part);
    expect(part).toHaveAttribute("aria-expanded", "false");
  });
});

describe("Footer accordions — keyboard", () => {
  it("ArrowDown/ArrowUp move focus and wrap around", async () => {
    const { buttons } = await renderFooter();
    const [a, b, c] = buttons;
    a.focus();
    fireEvent.keyDown(a, { key: "ArrowDown" });
    expect(document.activeElement).toBe(b);
    fireEvent.keyDown(b, { key: "ArrowDown" });
    fireEvent.keyDown(c, { key: "ArrowDown" });
    expect(document.activeElement).toBe(a);
    fireEvent.keyDown(a, { key: "ArrowUp" });
    expect(document.activeElement).toBe(c);
  });

  it("Home and End jump to the first and last section", async () => {
    const { buttons } = await renderFooter();
    buttons[1].focus();
    fireEvent.keyDown(buttons[1], { key: "End" });
    expect(document.activeElement).toBe(buttons[2]);
    fireEvent.keyDown(buttons[2], { key: "Home" });
    expect(document.activeElement).toBe(buttons[0]);
  });

  it("headers are native buttons so Enter and Space toggle them", async () => {
    const { buttons } = await renderFooter();
    for (const b of buttons) expect(b.tagName).toBe("BUTTON");
    expect(buttons[0]).toHaveAttribute("type", "button");
  });
});

describe("Footer accordions — Escape", () => {
  it("Escape closes the open section and returns focus to its header", async () => {
    const { buttons } = await renderFooter();
    const [, part] = buttons;
    fireEvent.click(part);
    expect(part).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(part, { key: "Escape" });
    expect(part).toHaveAttribute("aria-expanded", "false");
    const panel = document.getElementById(part.getAttribute("aria-controls")!)!;
    expect(panel).toHaveClass("invisible");
    expect(document.activeElement).toBe(part);
  });

  it("Escape from a link inside the open section closes it and focuses its header", async () => {
    const { buttons } = await renderFooter();
    const [ent] = buttons;
    fireEvent.click(ent);
    const panel = document.getElementById(ent.getAttribute("aria-controls")!)!;
    const link = within(panel).getAllByRole("link", { hidden: true })[0]!;
    link.focus();
    fireEvent.keyDown(link, { key: "Escape" });
    expect(ent).toHaveAttribute("aria-expanded", "false");
    expect(document.activeElement).toBe(ent);
  });

  it("Escape closes the open section even when focus sits on another header", async () => {
    const { buttons } = await renderFooter();
    const [ent, , plat] = buttons;
    fireEvent.click(ent);
    plat.focus();
    fireEvent.keyDown(plat, { key: "Escape" });
    expect(ent).toHaveAttribute("aria-expanded", "false");
    expect(document.activeElement).toBe(ent);
  });

  it("Escape with nothing open closes nothing and leaves focus alone", async () => {
    const { buttons } = await renderFooter();
    const [a, b, c] = buttons;
    b.focus();
    fireEvent.keyDown(b, { key: "Escape" });
    for (const x of [a, b, c]) expect(x).toHaveAttribute("aria-expanded", "false");
    expect(document.activeElement).toBe(b);
  });
});

describe("Footer links — states", () => {
  it("marks the current page link with aria-current and underline", async () => {
    await renderFooter("/fonctionnalites/portail-msp");
    const current = screen.getAllByRole("link", { name: "Portail MSP", hidden: true });
    expect(current.length).toBeGreaterThan(0);
    for (const l of current) {
      expect(l).toHaveAttribute("aria-current", "page");
      expect(l.className).toContain("underline");
    }
    for (const l of screen.getAllByRole("link", { name: "Moteur de risque", hidden: true }))
      expect(l).not.toHaveAttribute("aria-current");
  });

  it("links carry hover and visible focus styles", async () => {
    await renderFooter();
    const link = screen.getAllByRole("link", { name: "Portail MSP", hidden: true })[0]!;
    expect(link.className).toMatch(/hover:underline/);
    expect(link.className).toMatch(/focus-visible:ring-2/);
  });
});
