// Queue implementation using an Array in JavaScript

class Queue {
    constructor() {
        this.items = [];
    }

    // Adds an element to the back of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Removes and returns the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Returns the front element without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Returns true if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Returns the size of the queue
    size() {
        return this.items.length;
    }

    // Clears the queue
    clear() {
        this.items = [];
    }

    // Prints the queue contents
    print() {
        console.log(this.items.join(", "));
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: 10, 20, 30
console.log(queue.dequeue()); // Output: 10
console.log(queue.front()); // Output: 20
console.log(queue.isEmpty()); // Output: false
queue.clear();
console.log(queue.isEmpty()); // Output: true
