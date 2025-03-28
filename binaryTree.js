const binaryTree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: null,
            right: null
        }
    }
};

function traverseBinaryTree(tree) {
    if (!tree) {
        return;
    }
    console.log(tree.value);
    traverseBinaryTree(tree.left);
    traverseBinaryTree(tree.right);
}

function visualizeTree(node, prefix = '', isLeft = true) {
    if (!node) return;

    console.log(`${prefix}${isLeft ? '├── ' : '└── '}${node.value}`);

    // Compute the new prefix for children
    const newPrefix = prefix + (isLeft ? '│   ' : '    ');

    // Recursively visualize left and right subtrees
    if (node.left || node.right) {
        if (node.left) visualizeTree(node.left, newPrefix, node.right !== null);
        if (node.right) visualizeTree(node.right, newPrefix, false);
    }
}

// Original traversal (unchanged)
console.log("Original traversal (pre-order):");
traverseBinaryTree(binaryTree);

// Add visualization
console.log("\nTree visualization:");
visualizeTree(binaryTree, '', false);





