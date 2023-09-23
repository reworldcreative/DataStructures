class Stack<T> {
  private storage: T[] = [];

  push(item: T): void {
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}

const stack = new Stack<string>();
stack.push("A");
stack.push("B");
stack.push("C");

console.log(stack.size()); // Output: 3
console.log(stack.peek()); // Output: "C"
console.log(stack.size()); // Output: 3
console.log(stack.pop()); // Output: "C"
console.log(stack.size()); // Output: 2
