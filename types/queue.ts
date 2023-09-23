class Queue<T> {
  private storage: T[] = [];

  enqueue(item: T): void {
    this.storage.push(item);
  }
  dequeue(): T | undefined {
    return this.storage.shift();
  }
  size(): number {
    return this.storage.length;
  }
}

const queue = new Queue<string>();

queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.size()); // Output: 3
console.log(queue.dequeue()); // Output: "A"
console.log(queue.size()); // Output: 2
