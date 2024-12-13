class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            this._insertRecursive(this.root, value);
        }
    }

    _insertRecursive(currentNode, value) {
        if (value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = new Node(value);
            } else {
                this._insertRecursive(currentNode.left, value);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = new Node(value);
            } else {
                this._insertRecursive(currentNode.right, value);
            }
        }
    }

    delete(value) {
        this.root = this._deleteRecursive(this.root, value);
    }

    _deleteRecursive(currentNode, value) {
        if (currentNode === null) {
            return currentNode;
        }

        if (value < currentNode.value) {
            currentNode.left = this._deleteRecursive(currentNode.left, value);
        } else if (value > currentNode.value) {
            currentNode.right = this._deleteRecursive(currentNode.right, value);
        } else {
            // Node with one child or no child
            if (currentNode.left === null) {
                return currentNode.right;
            } else if (currentNode.right === null) {
                return currentNode.left;
            }

            // Node with two children: get the inorder successor
            let minValueNode = this._minValueNode(currentNode.right);
            currentNode.value = minValueNode.value;
            currentNode.right = this._deleteRecursive(currentNode.right, minValueNode.value);
        }

        return currentNode;
    }

    _minValueNode(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    traverseInOrder() {
        this._traverseInOrderRecursive(this.root);
        console.log();
    }

    _traverseInOrderRecursive(node) {
        if (node !== null) {
            this._traverseInOrderRecursive(node.left);
            process.stdout.write(node.value + ' ');
            this._traverseInOrderRecursive(node.right);
        }
    }

    traversePreOrder() {
        this._traversePreOrderRecursive(this.root);
        console.log();
    }

    _traversePreOrderRecursive(node) {
        if (node !== null) {
            process.stdout.write(node.value + ' ');
            this._traversePreOrderRecursive(node.left);
            this._traversePreOrderRecursive(node.right);
        }
    }

    traversePostOrder() {
        this._traversePostOrderRecursive(this.root);
        console.log();
    }

    _traversePostOrderRecursive(node) {
        if (node !== null) {
            this._traversePostOrderRecursive(node.left);
            this._traversePostOrderRecursive(node.right);
            process.stdout.write(node.value + ' ');
        }
    }
}

// Example Usage
const tree = new BinaryTree();
const values = [10, 5, 15, 3, 7, 12, 18];
values.forEach(val => tree.insert(val));

console.log("In-order Traversal:");
tree.traverseInOrder();

console.log("Pre-order Traversal:");
tree.traversePreOrder();

console.log("Post-order Traversal:");
tree.traversePostOrder();

// Deleting a node
tree.delete(10);
console.log("\nIn-order Traversal after deleting 10:");
tree.traverseInOrder();

