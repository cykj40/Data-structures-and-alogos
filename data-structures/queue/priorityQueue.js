// Priority Queue implementation using an Array in JavaScript

class PriorityQueueElement {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // Adds an element to the queue based on its priority
    enqueue(value, priority) {
        const newElement = new PriorityQueueElement(value, priority);
        let added = false;

        // Iterate through the queue to find the correct spot for the new element
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > newElement.priority) {
                this.items.splice(i, 0, newElement);
                added = true;
                break;
            }
        }

        // If the element has the highest priority, add it to the end
        if (!added) {
            this.items.push(newElement);
        }
    }

    // Removes and returns the element with the highest priority
    dequeue() {
        if (this.isEmpty()) {
            return "Priority Queue is empty";
        }
        return this.items.shift();
    }

    // Returns the element with the highest priority without removing it
    front() {
        if (this.isEmpty()) {
            return "Priority Queue is empty";
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

    // Prints the queue contents
    print() {
        console.log(this.items.map(item => `(${item.value}, priority: ${item.priority})`).join(", "));
    }
}

// Example usage:
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 3);
priorityQueue.print(); // Output: (Task 2, priority: 1), (Task 1, priority: 2), (Task 3, priority: 3)
console.log(priorityQueue.dequeue()); // Output: PriorityQueueElement { value: 'Task 2', priority: 1 }
console.log(priorityQueue.front()); // Output: PriorityQueueElement { value: 'Task 1', priority: 2 }
console.log(priorityQueue.isEmpty()); // Output: false
priorityQueue.print(); // Output: (Task 1, priority: 2), (Task 3, priority: 3)


