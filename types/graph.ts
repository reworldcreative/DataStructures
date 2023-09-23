class Graph<T> {
  private adjacencyList: Map<T, T[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: T, vertex2: T): void {
    if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
      throw new Error("Both vertices must exist in the graph");
    }

    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }

  print(): void {
    for (const [vertex, neighbors] of this.adjacencyList) {
      const neighborString = neighbors.join(", ");
      console.log(`${vertex} -> [${neighborString}]`);
    }
  }
}
console.time("Час виконання");
const graph = new Graph<string>();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("A", "D");

graph.print();
console.timeEnd("Час виконання");
// Measure-Command { npx ts-node graph.ts }
