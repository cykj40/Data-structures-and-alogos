// Description: This file contains the tree data structure implementation in JavaScript.



class tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    insertChild(value) {
        const newTree = new tree(value);
        this.children.push(newTree);
        return newTree;
    }

    removeChild(value) {
        this.children = this.children.filter(child => child.value !== value);
    }
}

const myTree = new tree(1);
const child1 = myTree.insertChild(2);
const child2 = myTree.insertChild(3);
child1.insertChild(4);
child1.insertChild(5);
child2.insertChild(6);
child2.insertChild(7);
child2.insertChild(8);



console.log(myTree);
console.log(child1);
console.log(child2);