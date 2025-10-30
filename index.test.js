import { describe, it, expect } from "vitest";
import { rollDice } from "./index";
import { rollFiveDice } from "./index";
import { findFIGUREs } from "./index";
import { calculateRollPoints } from "./index";
import { calculateTotalSUM } from "./index";

describe("Roll dice", () => {
    it("Should return between 1 and 6 included", () => {
        const SCORE = rollDice();
        const MIN = 1;
        const MAX = 6;
        expect(SCORE >= MIN && SCORE <= MAX).toBe(true);
    });
    it("Should return the sum of 5 dice rolls between 5 and 30 included", () => {
        const ROLLS = rollFiveDice();
        const MIN = 5;
        const MAX = 30;
        const SUM = ROLLS.reduce((a, b) => a + b, 0);
        expect(SUM >= MIN && SUM <= MAX).toBe(true);
    });
});

describe("Find figuress", () => {
    it("Should find a Brelan and return 'Brelan'", () => {
        const ROLLS = [2, 2, 2, 4, 5];
        const FIGURE = findFIGUREs(ROLLS);
        expect(FIGURE).toBe("Brelan");
    });
    it("Should find a Carré and return 'Carré'", () => {
        const ROLLS = [2, 2, 2, 2, 5];
        const FIGURE = findFIGUREs(ROLLS);
        expect(FIGURE).toBe("Carré");
    });
    it("Should find a Full and return 'Full'", () => {
        const ROLLS = [2, 2, 2, 5, 5];
        const FIGURE = findFIGUREs(ROLLS);
        expect(FIGURE).toBe("Full");
    });
    it("Should find a YAMS and return 'YAMS'", () => {
        const ROLLS = [2, 2, 2, 2, 2];
        const FIGURE = findFIGUREs(ROLLS);
        expect(FIGURE).toBe("YAMS");
    });
    it("Should find a Suite and return 'Suite' from 1 to 5", () => {
        const ROLLS = [1, 2, 3, 4, 5];
        const FIGURE = findFIGUREs(ROLLS);
        expect(FIGURE).toBe("Suite");
    });
    it("Should find a Suite and return 'Suite' from 2 to 6", () => {
        const ROLLS = [2, 3, 4, 5, 6];
        const FIGURE = findFIGUREs(ROLLS);
        expect(FIGURE).toBe("Suite");
    });
    it("Should find a Chance and return 'Chance'", () => {
        const ROLLS = [1, 1, 3, 5, 6];
        const FIGURE = findFIGUREs(ROLLS);
        expect(FIGURE).toBe("Chance");
    });
});

describe("Calculate sum", () => {
    it("Should calculate points for Brelan", () => {
        const ROLLS = [3, 3, 3, 4, 5];
        const POINTS = calculateRollPoints(ROLLS);
        expect(POINTS).toBe(28);
    });
    it("Should calculate points for Carré", () => {
        const ROLLS = [3, 3, 3, 3, 5];
        const POINTS = calculateRollPoints(ROLLS);
        expect(POINTS).toBe(35);
    });
    it("Should calculate points for Full", () => {
        const ROLLS = [3, 3, 3, 5, 5];
        const POINTS = calculateRollPoints(ROLLS);
        expect(POINTS).toBe(30);
    });
    it("Should calculate points for YAMS", () => {
        const ROLLS = [3, 3, 3, 3, 3];
        const POINTS = calculateRollPoints(ROLLS);
        expect(POINTS).toBe(50);
    });
    it("Should calculate points for Suite", () => {
        const ROLLS = [1, 2, 3, 4, 5];
        const POINTS = calculateRollPoints(ROLLS);
        expect(POINTS).toBe(40);
    });
    it("Should calculate points for Chance (sum of numbers)", () => {
        const ROLLS = [1, 1, 3, 5, 6];
        const POINTS = calculateRollPoints(ROLLS);
        expect(POINTS).toBe(16);
    });
    it("Should calculate sum of points for multiple 5 dice rolls", () => {
        const ALL_ROLLS = [
            [1, 1, 3, 5, 6], // Chance: 16
            [2, 2, 2, 4, 5], // Brelan: 28
            [3, 3, 3, 3, 3] // YAMS: 50
        ];
        expect(calculateTotalSUM(ALL_ROLLS)).toBe(94);
    });
});