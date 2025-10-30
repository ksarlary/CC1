/* index.js */
export function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

export function rollFiveDice() {
    const DICE_1 = rollDice();
    const DICE_2 = rollDice();
    const DICE_3 = rollDice();
    const DICE_4 = rollDice();
    const DICE_5 = rollDice();
    const diceRolls = [DICE_1, DICE_2, DICE_3, DICE_4, DICE_5];
    return diceRolls;
}

export function findFigures(diceRolls) {
    let figure = "Chance";
    let numberCounts = [
        { number: 1, count: 0 },
        { number: 2, count: 0 },
        { number: 3, count: 0 },
        { number: 4, count: 0 },
        { number: 5, count: 0 },
        { number: 6, count: 0 }
    ]

    for (let i = 0; i < diceRolls.length; i++) {
        let dice = diceRolls[i];

        for (let j = 0; j < numberCounts.length; j++) {
            if (dice === numberCounts[j].number) {
                numberCounts[j].count++;
            }
        }
    }

    let hasBrelan = false;
    let hasPair = false;
    let hasSuite = false;

    if (
        numberCounts[0].count === 1 &&
        numberCounts[1].count === 1 &&
        numberCounts[2].count === 1 &&
        numberCounts[3].count === 1 &&
        numberCounts[4].count === 1 &&
        numberCounts[5].count === 0
    ) {
        hasSuite = true;
    }
    if (
        numberCounts[0].count === 0 &&
        numberCounts[1].count === 1 &&
        numberCounts[2].count === 1 &&
        numberCounts[3].count === 1 &&
        numberCounts[4].count === 1 &&
        numberCounts[5].count === 1
    ) {
        hasSuite = true;
    }

    numberCounts.forEach((numberCount) => {
        if (numberCount.count === 5) {
            figure = "YAMS";
        } else if (numberCount.count === 4) {
            figure = "Carré";
        } else if (numberCount.count === 3) {
            hasBrelan = true;
        }
        if (numberCount.count === 2) {
            hasPair = true;
        }
    });

    if (hasBrelan && hasPair) {
        figure = "Full";
    } else if (hasBrelan) {
        figure = "Brelan";
    } else if (hasSuite) {
        figure = "Suite";
    }

    return figure;
}

export function calculateRollPoints(diceRolls) {
    const FIGURE_POINTS = {
        "Brelan": 28,
        "Carré": 35,
        "Full": 30,
        "GrandeSuite": 40,
        "YAMS": 50
    };
    const FIGURE = findFigures(diceRolls);
    switch (FIGURE) {
        case "Brelan":
            return FIGURE_POINTS.Brelan;
        case "Carré":
            return FIGURE_POINTS.Carré;
        case "Full":
            return FIGURE_POINTS.Full;
        case "Suite":
            return FIGURE_POINTS.GrandeSuite;
        case "YAMS":
            return FIGURE_POINTS.YAMS;
        default:
            return diceRolls.reduce((a, b) => a + b, 0);
    }
}

export function calculateTotalSum(multipleRolls) {
    let totalSum = 0;
    multipleRolls.forEach(roll => {
        let rollPoints = calculateRollPoints(roll);
        totalSum += rollPoints;
    });
    return totalSum;
};