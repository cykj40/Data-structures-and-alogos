// Stack implementation using an Array in JavaScript

class Stack {
    constructor() {
        this.items = [];
    }

    // Pushes an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Removes and returns the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Returns the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Returns true if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Returns the size of the stack
    size() {
        return this.items.length;
    }

    // Clears the stack
    clear() {
        this.items = [];
    }

    // Prints the stack contents
    print() {
        console.log(this.items.join(", "));
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10, 20, 30
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.isEmpty()); // Output: false
stack.clear();
console.log(stack.isEmpty()); // Output: true
