// Stack Implementation Example in JavaScript

class Stack {
    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element off the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";  // Stack is empty, no elements to pop
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in stack";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the entire stack
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log(str.trim());
    }
}

// Example usage of Stack
let stack = new Stack();

console.log("Is the stack empty?", stack.isEmpty());  // Output: true

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack after pushing 10, 20, 30:");
stack.printStack();  // Output: 10 20 30

// Peek at the top element
console.log("Top element is:", stack.peek());  // Output: 30

// Pop an element off the stack
console.log("Popped element is:", stack.pop());  // Output: 30

console.log("Stack after popping an element:");
stack.printStack();  // Output: 10 20

// Check if the stack is empty
console.log("Is the stack empty?", stack.isEmpty());  // Output: false

// Pop all elements to make the stack empty
stack.pop();
stack.pop();
console.log("Is the stack empty after popping all elements?", stack.isEmpty());  // Output: true
