import { describe, it, expect } from "vitest";
import { rollDice } from "./index";
import { rollFiveDice } from "./index";
import { findFigures } from "./index";

describe("Roll dice", () => {
    it("Should return between 1 and 6 included", () => {
        const score = rollDice();
        const min = 1;
        const max = 6;
        expect(score >= min && score <= max).toBe(true);
    });
    it("Should return the sum of 5 dice rolls between 5 and 30 included", () => {
        const rolls = rollFiveDice();
        const min = 5;
        const max = 30;
        const sum = rolls.reduce((a, b) => a + b, 0);
        expect(sum >= min && sum <= max).toBe(true);
    });
});

describe("Find figures", () => {
    it("Should find a Brelan and return 'Brelan'", () => {
        const rolls = [2, 2, 2, 4, 5];
        const figure = findFigures(rolls);
        expect(figure).toBe("Brelan");
    });
});