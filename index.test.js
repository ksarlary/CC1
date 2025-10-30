import { describe, it, expect } from "vitest";
import { rollDice } from "./index";
import { rollFiveDice } from "./index";

describe("Roll dice", () => {
    it("Should return between 1 and 6 included", () => {
        const score = rollDice();
        const min = 1;
        const max = 6;
        expect(score >= min && score <= max).toBe(true);
    });
    it("Should return the sum of 5 dice rolls between 5 and 30 included", () => {
        const score = rollFiveDice();
        const min = 5;
        const max = 30;
        expect(score >= min && score <= max).toBe(true);
    });
});