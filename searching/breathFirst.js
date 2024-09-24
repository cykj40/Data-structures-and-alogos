// example of a breadth first search algorithm

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addEdge(u, v) {
        if (!this.adjacencyList[u]) this.adjacencyList[u] = [];
        if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
        this.adjacencyList[u].push(v);
        this.adjacencyList[v].push(u);
    }

    breathFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}