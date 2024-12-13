// AVL Tree implementation in JavaScript

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Get the height of the node
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Get the balance factor of the node
    getBalance(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Right rotate subtree rooted with y
    rightRotate(y) {
        const x = y.left;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        // Return new root
        return x;
    }

    // Left rotate subtree rooted with x
    leftRotate(x) {
        const y = x.right;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        // Return new root
        return y;
    }

    // Insert a value into the AVL tree
    insert(node, value) {
        // Perform the normal BST insertion
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insert(node.left, value);
        } else if (value > node.value) {
            node.right = this.insert(node.right, value);
        } else {
            // Duplicate values are not allowed
            return node;
        }

        // Update height of this ancestor node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Get the balance factor to check if this node became unbalanced
        const balance = this.getBalance(node);

        // If the node is unbalanced, then balance it

        // Left Left Case
        if (balance > 1 && value < node.left.value) {
            return this.rightRotate(node);
        }

        // Right Right Case
        if (balance < -1 && value > node.right.value) {
            return this.leftRotate(node);
        }

        // Left Right Case
        if (balance > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Left Case
        if (balance < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        // Return the (unchanged) node pointer
        return node;
    }

    // Public method to insert a value
    insertValue(value) {
        this.root = this.insert(this.root, value);
    }

    // In-order traversal of the AVL tree
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

// Example usage:
const avl = new AVLTree();
avl.insertValue(10);
avl.insertValue(20);
avl.insertValue(30);
avl.insertValue(40);
avl.insertValue(50);
avl.insertValue(25);

console.log("In-order Traversal of the AVL Tree:");
avl.inOrderTraversal();
// Output: 10, 20, 25, 30, 40, 50

// This example shows how the AVL tree self-balances after each insertion to maintain optimal height.
