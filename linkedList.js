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

        // Create a new node
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

        // Increase the size of the linked list
        this.size++;
    }

    // Remove an element from the specified location
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;  // Invalid index, return null or throw an error
        }

        let curr = this.head;
        let prev = null;

        // Deleting the first element (head)
        if (index === 0) {
            this.head = curr.next;
        } else {
            let it = 0;

            // Iterate over the list to the position to remove
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // Remove the element
            prev.next = curr.next;
        }

        // Decrease the size of the list
        this.size--;

        // Return the removed element
        return curr.element;
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


