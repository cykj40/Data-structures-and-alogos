// Stack implementation using a Linked List in JavaScript

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Pushes an element onto the stack
    push(value) {
        const newNode = new Node(value);
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    // Removes and returns the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        const removedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return removedValue;
    }

    // Returns the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.top.value;
    }

    // Returns true if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Returns the size of the stack
    getSize() {
        return this.size;
    }

    // Clears the stack
    clear() {
        this.top = null;
        this.size = 0;
    }

    // Prints the stack contents
    print() {
        let current = this.top;
        let result = "";
        while (current) {
            result += current.value + (current.next ? " -> " : "");
            current = current.next;
        }
        console.log(result);
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 30 -> 20 -> 10
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.isEmpty()); // Output: false
stack.clear();
console.log(stack.isEmpty()); // Output: true
