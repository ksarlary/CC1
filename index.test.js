import { describe, it, expect } from "vitest";
import { rollDice } from "./index";
import { rollFiveDice } from "./index";
import { findFigures } from "./index";
import { calculateRollPoints } from "./index";

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
    it("Should find a Carré and return 'Carré'", () => {
        const rolls = [2, 2, 2, 2, 5];
        const figure = findFigures(rolls);
        expect(figure).toBe("Carré");
    });
    it("Should find a Full and return 'Full'", () => {
        const rolls = [2, 2, 2, 5, 5];
        const figure = findFigures(rolls);
        expect(figure).toBe("Full");
    });
    it("Should find a YAMS and return 'YAMS'", () => {
        const rolls = [2, 2, 2, 2, 2];
        const figure = findFigures(rolls);
        expect(figure).toBe("YAMS");
    });
    it("Should find a Suite and return 'Suite' from 1 to 5", () => {
        const rolls = [1, 2, 3, 4, 5];
        const figure = findFigures(rolls);
        expect(figure).toBe("Suite");
    });
    it("Should find a Suite and return 'Suite' from 2 to 6", () => {
        const rolls = [2, 3, 4, 5, 6];
        const figure = findFigures(rolls);
        expect(figure).toBe("Suite");
    });
    it("Should find a Chance and return 'Chance'", () => {
        const rolls = [1, 1, 3, 5, 6];
        const figure = findFigures(rolls);
        expect(figure).toBe("Chance");
    });
});

describe("Calculate sum", () => {
    it("Should calculate points for Brelan", () => {
        const rolls = [3, 3, 3, 4, 5];
        const points = calculateRollPoints(rolls);
        expect(points).toBe(28);
    });
    it("Should calculate points for Carré", () => {
        const rolls = [3, 3, 3, 3, 5];
        const points = calculateRollPoints(rolls);
        expect(points).toBe(35);
    });
    it("Should calculate points for Full", () => {
        const rolls = [3, 3, 3, 5, 5];
        const points = calculateRollPoints(rolls);
        expect(points).toBe(30);
    });
    it("Should calculate points for YAMS", () => {
        const rolls = [3, 3, 3, 3, 3];
        const points = calculateRollPoints(rolls);
        expect(points).toBe(50);
    });
    it("Should calculate points for Suite", () => {
        const rolls = [1, 2, 3, 4, 5];
        const points = calculateRollPoints(rolls);
        expect(points).toBe(40);
    });
    it("Should calculate points for Chance (sum of numbers)", () => {
        const rolls = [1, 1, 3, 5, 6];
        const points = calculateRollPoints(rolls);
        expect(points).toBe(16);
    });
});