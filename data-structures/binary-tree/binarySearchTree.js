// Binary Search Tree implementation in JavaScript

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Inserts a value into the BST
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Searches for a value in the BST
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }

    // Traverses the BST in-order
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Traverses the BST pre-order
    preOrderTraversal(node = this.root) {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Traverses the BST post-order
    postOrderTraversal(node = this.root) {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }

    // Finds the minimum value in the BST
    findMin() {
        let current = this.root;
        while (current && current.left !== null) {
            current = current.left;
        }
        return current ? current.value : null;
    }

    // Finds the maximum value in the BST
    findMax() {
        let current = this.root;
        while (current && current.right !== null) {
            current = current.right;
        }
        return current ? current.value : null;
    }

    // Removes a value from the BST
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            // Node with only one child or no child
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            node.value = this.findMinNode(node.right).value;
            node.right = this.removeNode(node.right, node.value);
            return node;
        }
    }

    findMinNode(node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
bst.insert(17);
bst.insert(25);

console.log("In-order Traversal:");
bst.inOrderTraversal(); // Output: 8, 10, 12, 15, 17, 20, 25

console.log("Pre-order Traversal:");
bst.preOrderTraversal(); // Output: 15, 10, 8, 12, 20, 17, 25

console.log("Post-order Traversal:");
bst.postOrderTraversal(); // Output: 8, 12, 10, 17, 25, 20, 15

console.log("Minimum value:", bst.findMin()); // Output: 8
console.log("Maximum value:", bst.findMax()); // Output: 25

bst.remove(10);
console.log("In-order Traversal after removing 10:");
bst.inOrderTraversal(); // Output: 8, 12, 15, 17, 20, 25
