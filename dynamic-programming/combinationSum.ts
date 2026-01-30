/**
 * pattern: Unbounded Knapsack/Combination Sum DP problem
 * Key Characteristics: 
 * - Infinite Supply of each item
 * - order does not matter
 * - need to count ways, not find optimal value
 * Recognition Tips: 
 * - Number of ways /combinations to make amount X
 * - unlimited use of each element
 * - order does not matter
 */


function combinationSum(items: number[], target: number): number {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1; // Base case: one way to make 0

    // For each item
    for (const item of items) {
        // Update all possible sums that can include this item
        for (let i = item; i <= target; i++) {
            dp[i] += dp[i - item];
        }
    }

    return dp[target]; // Number of ways to make the target
}

// test cases
console.log(combinationSum([1, 2, 3], 4));
console.log(combinationSum([2, 3, 5], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2, 3, 5], 9));
console.log(combinationSum([2, 3, 5], 10));
console.log(combinationSum([2, 3, 5], 11));
console.log(combinationSum([2, 3, 5], 12));
console.log(combinationSum([2, 3, 5], 13));

// Example usage:
// const result = combinationSum([1, 2, 3], 4);
// console.log(result); // Output: number of ways to make 4 using 1, 2, 3






