// Doubly Linked List Implementation Example in JavaScript

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Insert an element at the head of the list
    insertAtHead(element) {
        let newNode = new Node(element);
        if (this.head === null) {  // List is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert an element at the tail of the list
    insertAtTail(element) {
        let newNode = new Node(element);
        if (this.tail === null) {  // List is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Remove an element from the list
    remove(element) {
        if (this.head === null) {  // List is empty
            return null;
        }

        let curr = this.head;
        while (curr) {
            if (curr.element === element) {
                // Remove head
                if (curr === this.head) {
                    this.head = curr.next;
                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null;  // List is now empty
                    }
                }
                // Remove tail
                else if (curr === this.tail) {
                    this.tail = curr.prev;
                    this.tail.next = null;
                }
                // Remove from middle
                else {
                    curr.prev.next = curr.next;
                    curr.next.prev = curr.prev;
                }
                this.size--;
                return curr.element;
            }
            curr = curr.next;
        }
        return null;  // Element not found
    }

    // Print the list from head to tail
    printForward() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " <-> ";
            curr = curr.next;
        }
        console.log(str + "null");
    }

    // Print the list from tail to head
    printBackward() {
        let curr = this.tail;
        let str = "";
        while (curr) {
            str += curr.element + " <-> ";
            curr = curr.prev;
        }
        console.log(str + "null");
    }
}

// Example usage:
let dll = new DoublyLinkedList();

// Insert elements at the head
console.log("Inserting 10, 20 at the head:");
dll.insertAtHead(10);
dll.insertAtHead(20);
dll.printForward();  // Output: 20 <-> 10 <-> null

// Insert elements at the tail
console.log("Inserting 30, 40 at the tail:");
dll.insertAtTail(30);
dll.insertAtTail(40);
dll.printForward();  // Output: 20 <-> 10 <-> 30 <-> 40 <-> null

// Print the list backward
console.log("Print backward:");
dll.printBackward();  // Output: 40 <-> 30 <-> 10 <-> 20 <-> null

// Remove an element from the list
console.log("Removing element 10:");
dll.remove(10);
dll.printForward();  // Output: 20 <-> 30 <-> 40 <-> null

console.log("Removing element 40:");
dll.remove(40);
dll.printForward();  // Output: 20 <-> 30 <-> null
