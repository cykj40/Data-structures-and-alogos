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

// Test cases
console.log('Testing iterative Fibonacci implementation:');
console.log('F(0):', imperativeFibonacci(0));  // Should output 0
console.log('F(1):', imperativeFibonacci(1));  // Should output 1
console.log('F(5):', imperativeFibonacci(5));  // Should output 5
console.log('F(10):', imperativeFibonacci(10)); // Should output 55

// Performance test
console.log('\nPerformance test with larger number:');
console.time('F(40)');
console.log('F(40):', imperativeFibonacci(40));
console.timeEnd('F(40)');



