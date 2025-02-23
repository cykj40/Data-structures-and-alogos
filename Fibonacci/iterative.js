// this is an iterative function to calculate the nth fibonacci number.

export const imperativeFibonacci = (n) => {
    // Handle invalid input
    if (n < 0) return null;
    // Handle base cases
    if (n <= 1) return n;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;  // Return the final calculated value
};

