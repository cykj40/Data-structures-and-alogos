// Max Heap implementation in JavaScript

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Helper method to swap elements at two indices
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Helper method to get the parent index
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Helper method to get the left child index
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Helper method to get the right child index
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Insert a value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Heapify up to maintain the max heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[index] > this.heap[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Remove and return the maximum element (root) from the heap
    extractMax() {
        if (this.heap.length === 0) {
            return "Heap is empty";
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    // Heapify down to maintain the max heap property
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let largest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
                largest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
                largest = rightChildIndex;
            }
            if (largest !== index) {
                this.swap(index, largest);
                index = largest;
            } else {
                break;
            }
        }
    }

    // Return the maximum element without removing it
    getMax() {
        if (this.heap.length === 0) {
            return "Heap is empty";
        }
        return this.heap[0];
    }

    // Return the size of the heap
    size() {
        return this.heap.length;
    }

    // Check if the heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }

    // Print the heap contents
    print() {
        console.log(this.heap.join(", "));
    }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(20);
maxHeap.insert(17);
maxHeap.insert(8);

console.log("Max Heap:");
maxHeap.print(); // Output: 20, 17, 15, 10, 8

console.log("Extract Max:", maxHeap.extractMax()); // Output: 20
console.log("Max Heap after extracting max:");
maxHeap.print(); // Output: 17, 10, 15, 8

console.log("Current Max:", maxHeap.getMax()); // Output: 17
console.log("Heap Size:", maxHeap.size()); // Output: 4
console.log("Is Heap Empty?:", maxHeap.isEmpty()); // Output: false
