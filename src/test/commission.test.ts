import { describe, expect, it } from "vitest";
import { commissionGrid } from "@/lib/commission";

describe("commission grid", () => {
  it("pays 100 € under 1 000 €", () => expect(commissionGrid[0].value).toBe("100 €"));
  it("pays 200 € from 1 000 to 2 500 €", () => expect(commissionGrid[1].value).toBe("200 €"));
  it("pays 300 € from 2 500 to 5 000 €", () => expect(commissionGrid[2].value).toBe("300 €"));
  it("pays 10 % of net revenue above 5 000 €", () => expect(commissionGrid[3].value).toBe("10 % du revenu net"));
});

import { estimateMonthly } from "@/lib/commission";
describe("commission simulator", () => {
  it("3 dossiers à 200 € = 600 €", () => expect(estimateMonthly(3, 1)).toBe(600));
  it("tranche au-delà de 5 000 € n'affiche pas de montant", () => expect(estimateMonthly(3, 3)).toBeNull());
});
