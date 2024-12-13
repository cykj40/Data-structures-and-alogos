// Min Heap implementation in JavaScript

class MinHeap {
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

    // Heapify up to maintain the min heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[index] < this.heap[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Remove and return the minimum element (root) from the heap
    extractMin() {
        if (this.heap.length === 0) {
            return "Heap is empty";
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    // Heapify down to maintain the min heap property
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }
            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }

    // Return the minimum element without removing it
    getMin() {
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
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(17);
minHeap.insert(8);

console.log("Min Heap:");
minHeap.print(); // Output: 8, 10, 20, 17, 15

console.log("Extract Min:", minHeap.extractMin()); // Output: 8
console.log("Min Heap after extracting min:");
minHeap.print(); // Output: 10, 15, 20, 17

console.log("Current Min:", minHeap.getMin()); // Output: 10
console.log("Heap Size:", minHeap.size()); // Output: 4
console.log("Is Heap Empty?:", minHeap.isEmpty()); // Output: false
