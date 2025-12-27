function findNumbers(nums: number[]): number {
    let count = 0;

    for (const num of nums) {
        const digitCount = Math.floor(Math.log10(num)) + 1;
        if (digitCount % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(findNumbers([12, 345, 2, 6, 7896]));