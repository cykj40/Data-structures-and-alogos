// Basic FizzBuzz Solution
function fizzBuzz(n) {
    // Loop from 1 to n
    for (let i = 1; i <= n; i++) {
        // Check divisibility conditions
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// More optimized solution using a single string
function fizzBuzzOptimized(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        // Build the string based on conditions
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        // If output is empty, use the number
        console.log(output || i);
    }
}

// Advanced solution with customizable rules
function fizzBuzzAdvanced(n, rules) {
    return Array.from({ length: n }, (_, i) => i + 1).map(num => {
        return rules.reduce((output, [divisor, word]) => {
            return num % divisor === 0 ? output + word : output;
        }, '') || num;
    });
}

// Example usage:
console.log('Basic FizzBuzz:');
fizzBuzz(15);

console.log('\nOptimized FizzBuzz:');
fizzBuzzOptimized(15);

console.log('\nAdvanced FizzBuzz with custom rules:');
const rules = [
    [3, 'Fizz'],
    [5, 'Buzz']
];
console.log(fizzBuzzAdvanced(15, rules));

// Bonus: One-liner FizzBuzz (not recommended for interviews but shows JavaScript prowess)
const fizzBuzzOneLiner = n => Array.from({ length: n }, (_, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
