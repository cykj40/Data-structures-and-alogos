// brute force example
const cache = {};

const coins = [10, 6, 1];

const makeChange = (c) => {
    if (cache[c]) return cache[c];
    let minCoins = -1;

    // for each coin value that is less than c
    coins.forEach((coin) => {
        if (c - coin >= 0) {
        let currMinCoins = makeChange(c - coin);
        if (minCoins === -1 || currMinCoins < minCoins) {
            minCoins = currMinCoins;
        }
        }
    });
    cache[c] = minCoins + 1;
    return cache[c];
    };

console.log(makeChange(12)); // 2
console.log(makeChange(13)); // 2
console.log(makeChange(64)); // 7
