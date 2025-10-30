/* index.js */
export function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

export function rollFiveDice(){
    const dice_1 = rollDice();
    const dice_2 = rollDice();
    const dice_3 = rollDice();
    const dice_4 = rollDice();
    const dice_5 = rollDice();
    return dice_1 + dice_2 + dice_3 + dice_4 + dice_5;
}