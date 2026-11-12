import { describe, expect, it } from "vitest";
import { commissionGrid } from "@/lib/commission";

describe("commission grid", () => {
  it("pays 100 € under 1 000 €", () => expect(commissionGrid[0].value).toBe("100 €"));
  it("pays 200 € from 1 000 to 2 500 €", () => expect(commissionGrid[1].value).toBe("200 €"));
  it("pays 300 € from 2 500 to 5 000 €", () => expect(commissionGrid[2].value).toBe("300 €"));
  it("pays 10 % of net revenue above 5 000 €", () => expect(commissionGrid[3].value).toBe("10 % du revenu net"));
});
