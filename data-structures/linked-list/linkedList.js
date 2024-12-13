class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert an element at a specific index
    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return;  // Invalid index
        }

        let node = new Node(element);
        let curr, prev;

        curr = this.head;

        // Add the element at the first index (head)
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            let it = 0;

            // Iterate to find the correct position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // Insert the element
            node.next = curr;
            prev.next = node;
        }

        this.size++;
    }

    // Remove an element from the specified location
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;  // Invalid index, return null
        }

        let curr = this.head;
        let prev = null;

        if (index === 0) {
            this.head = curr.next;
        } else {
            let it = 0;
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }

        this.size--;
        return curr.element;
    }

    // Find an element in the linked list
    find(element) {
        let curr = this.head;
        let index = 0;
        while (curr) {
            if (curr.element === element) {
                return index;
            }
            curr = curr.next;
            index++;
        }
        return -1;  // Element not found
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let curr = this.head;
        let next = null;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    // Clear the linked list
    clear() {
        this.head = null;
        this.size = 0;
    }

    // Helper method to print the linked list
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " -> ";
            curr = curr.next;
        }
        console.log(str + "null");
    }
}

// Example usage:
let ll = new LinkedList();
ll.insertAt(1, 0);
ll.insertAt(2, 1);
ll.insertAt(3, 2);
ll.insertAt(4, 3);

console.log("Before removal:");
ll.printList();  // Output: 1 -> 2 -> 3 -> 4 -> null

// Remove element at index 2 (which is the element 3)
ll.removeFrom(2);
console.log("After removal:");
ll.printList();  // Output: 1 -> 2 -> 4 -> null

// Find an element
console.log("Find element 4:", ll.find(4));  // Output: 2
console.log("Find element 5:", ll.find(5));  // Output: -1

// Reverse the linked list
ll.reverse();
console.log("After reversing:");
ll.printList();  // Output: 4 -> 2 -> 1 -> null

// Clear the linked list
ll.clear();
console.log("After clearing:");
ll.printList();  // Output: null



