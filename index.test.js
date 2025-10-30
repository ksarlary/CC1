import { describe, it, expect } from "vitest";
import { rollDice } from "./index";

describe("Roll dice", () => {
    it("Should return between 1 and 6 included", () => {
        const score = rollDice();
        const min = 1;
        const max = 6;
        expect(score >= min && score <= max).toBe(true);
    });
});