// Queue implementation using a Linked List in JavaScript

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Adds an element to the back of the queue
    enqueue(value) {
        const newNode = new Node(value);
        if (this.rear === null) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // Removes and returns the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const removedValue = this.front.value;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return removedValue;
    }

    // Returns the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.front.value;
    }

    // Returns true if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Returns the size of the queue
    getSize() {
        return this.size;
    }

    // Clears the queue
    clear() {
        this.front = this.rear = null;
        this.size = 0;
    }

    // Prints the queue contents
    print() {
        let current = this.front;
        let result = "";
        while (current) {
            result += current.value + (current.next ? " -> " : "");
            current = current.next;
        }
        console.log(result);
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10 -> 20 -> 30
console.log(queue.dequeue()); // Output: 10
console.log(queue.peek()); // Output: 20
console.log(queue.isEmpty()); // Output: false
queue.clear();
console.log(queue.isEmpty()); // Output: true
