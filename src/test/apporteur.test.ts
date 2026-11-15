import { describe, expect, it } from "vitest";
import { apporteurActions } from "@/lib/apporteur";

describe("Apporteur : informer, jamais distribuer l'assurance", () => {
  it("peut informer", () => expect(apporteurActions.informer).toBe(true));
  it("peut mettre en relation", () => expect(apporteurActions.mettreEnRelation).toBe(true));
  it("ne peut pas conseiller", () => expect(apporteurActions.conseiller).toBe(false));
  it("ne peut pas présenter de contrat", () => expect(apporteurActions.presenterContrat).toBe(false));
  it("ne peut pas annoncer de prix", () => expect(apporteurActions.annoncerPrix).toBe(false));
  it("ne peut pas signer de devis", () => expect(apporteurActions.signerDevis).toBe(false));
});