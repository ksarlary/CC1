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
    let figure = "No Figure";
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

    numberCounts.forEach((numberCount) => {
        if (numberCount.count === 4) {
            figure = "Carré";
        }
    });

    numberCounts.forEach((numberCount) => {
        if (numberCount.count === 3) {
            hasBrelan = true;
        }
    });

    numberCounts.forEach((numberCount) => {
        if (numberCount.count === 2) {
            hasPair = true;
        }
    });

    if (hasBrelan && hasPair) {
        figure = "Full";
    } else if (hasBrelan) {
        figure = "Brelan";
    }

    return figure;
}