// 

class Graph {
    constructor() {
        this.adjList = {};
    }
    addNode(node) {
        this.adjList[node.value] = {
            node: node,
            edges: []
        }
    }
    addEdge(node1, node2) {
        this.adjList[node1.value].edges.push(node2);
        this.adjList[node2.value].edges.push(node1);
    }
    removeNode(node) {
        delete this.adjList[node.value];
        for (let key in this.adjList) {
            const edges = this.adjList[key].edges;
            const index = edges.indexOf(node);
            if (index > -1) {
                edges.splice(index, 1);
            }
        }
    }

}
const adjList = new Graph();
const node1 = {value: 1}
const node2 = {value: 2}
adjList.addNode(node1)
adjList.addNode(node2)

adjList.addEdge(node1, node2)

console.log(adjList)
console.log({}) 

