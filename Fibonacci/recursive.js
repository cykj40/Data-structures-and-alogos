// fibonacci sequence is a sequence of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
// this is a recursive function to calculate the nth fibonacci number.

export const recursiveFibonacci = (n) => {
    // Handle invalid input
    if (n < 0) return null;
    // Base cases
    if (n <= 1) return n;
    // Recursive case: sum of previous two numbers
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

// Test cases
console.log('Testing recursive Fibonacci implementation:');
console.log('F(0):', recursiveFibonacci(0));  // Should output 0
console.log('F(1):', recursiveFibonacci(1));  // Should output 1
console.log('F(5):', recursiveFibonacci(5));  // Should output 5
console.log('F(10):', recursiveFibonacci(10)); // Should output 55


