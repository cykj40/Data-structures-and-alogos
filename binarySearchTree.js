// an example of a binary search tree

const binarySearchTree = {
    value: 4,
    left: {
        value: 2,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: {
            value: 3,
            left: null,
            right: null
        }
    },
    right: {
        value: 6,
        left: {
            value: 5,
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

function traverseBinarySearchTree(tree) {
    if (!tree) {
        return;
    }
    console.log(tree.value);
    traverseBinarySearchTree(tree.left);
    traverseBinarySearchTree(tree.right);
}


traverseBinarySearchTree(binarySearchTree);

// an example of inserting a value into a binary search tree
function insertIntoBinarySearchTree(tree, value) {
    if (value < tree.value) {
        if (tree.left) {
            insertIntoBinarySearchTree(tree.left, value);
        } else {
            tree.left = {
                value,
                left: null,
                right: null
            };
        }
    } else {
        if (tree.right) {
            insertIntoBinarySearchTree(tree.right, value);
        } else {
            tree.right = {
                value,
                left: null,
                right: null
            };
        }
    }
}

insertIntoBinarySearchTree(binarySearchTree, 8);

traverseBinarySearchTree(binarySearchTree);