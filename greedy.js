// write a function make change, that returns an integer that 
// represents the least number of coins that add up to an amount where the amount is always divisible by 5.

// coin values: 5, 10, 25

const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a);
    let coinTotal = 0;
    let i = 0;
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal;
}

console.log(makeChange([5, 10, 25], 50)); // 2