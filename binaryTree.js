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

traverseBinaryTree(binaryTree);





