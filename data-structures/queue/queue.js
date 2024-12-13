// Queue Implementation Example in JavaScript

class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";  // Queue is empty, no elements to dequeue
        }
        return this.items.shift();
    }

    // Get the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "No elements in queue";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print the entire queue
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        console.log(str.trim());
    }
}

// Example usage of Queue
let queue = new Queue();

console.log("Is the queue empty?", queue.isEmpty());  // Output: true

// Enqueue elements into the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue after enqueuing 10, 20, 30:");
queue.printQueue();  // Output: 10 20 30

// Get the front element
console.log("Front element is:", queue.front());  // Output: 10

// Dequeue an element from the queue
console.log("Dequeued element is:", queue.dequeue());  // Output: 10

console.log("Queue after dequeuing an element:");
queue.printQueue();  // Output: 20 30

// Check if the queue is empty
console.log("Is the queue empty?", queue.isEmpty());  // Output: false

// Dequeue all elements to make the queue empty
queue.dequeue();
queue.dequeue();
console.log("Is the queue empty after dequeuing all elements?", queue.isEmpty());  // Output: true
