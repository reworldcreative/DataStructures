class Deque<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }
  pushFront(item: T): void {
    this.data.unshift(item);
  }
  pushBack(item: T): void {
    this.data.push(item);
  }
  popFront(): T | undefined {
    return this.data.shift();
  }
  popBack(): T | undefined {
    return this.data.pop();
  }
  size(): number {
    return this.data.length;
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  peekFront(): T | undefined {
    return this.data[0];
  }
  peekBack(): T | undefined {
    return this.data[this.data.length - 1];
  }
}

const deque = new Deque<number>();
deque.pushBack(1);
deque.pushBack(2);
deque.pushFront(3);

console.log(deque.peekFront()); // 3
console.log(deque.peekBack()); // 2
console.log(deque.size()); // 3

deque.popFront();
console.log(deque.peekFront()); // 1
console.log(deque.size()); // 2
