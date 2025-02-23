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

