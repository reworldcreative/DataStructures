import * as Benchmark from "benchmark";

const suite = new Benchmark.Suite();

const array = new Array<number>(1000000);
class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.length++;
  }

  insert(index: number, data: T): void {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of range");
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (index === this.length) {
      this.push(data);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      newNode.next = current!.next;
      current!.next = newNode;
    }
    this.length++;
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.data;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const removedData = this.head.data;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return removedData;
  }

  remove(index: number): void {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of range");
    }

    if (index === 0) {
      this.head = this.head!.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current!.next;
      }
      current!.next = current!.next!.next;
      if (!current!.next) {
        this.tail = current;
      }
    }
    this.length--;
  }

  getLength(): number {
    return this.length;
  }
}
const linkedList = new LinkedList<number>();

// Заполнение массива и связанного списка случайными числами
for (let i = 0; i < 1000000; i++) {
  const randomNumber = Math.random();
  array[i] = randomNumber;
  linkedList.push(randomNumber);
}

suite
  .add("Array - Добавление в конец", function () {
    array.push(Math.random());
  })
  .add("Array - Добавление в середину", function () {
    const index = Math.floor(Math.random() * array.length);
    array.splice(index, 0, Math.random());
  })
  .add("Array - Получение из конца", function () {
    const lastIndex = array.length - 1;
    const value = array[lastIndex];
  })
  .add("Array - Получение из середины", function () {
    const index = Math.floor(Math.random() * array.length);
    const value = array[index];
  })
  .add("Array - Удаление из конца", function () {
    array.pop();
  })
  .add("Array - Удаление из середины", function () {
    const index = Math.floor(Math.random() * array.length);
    array.splice(index, 1);
  })
  .add("LinkedList - Добавление в конец", function () {
    linkedList.push(Math.random());
  })
  .add("LinkedList - Добавление в середину", function () {
    const index = Math.floor(Math.random() * linkedList.getLength());
    linkedList.insert(index, Math.random());
  })
  .add("LinkedList - Получение из конца", function () {
    const lastIndex = linkedList.getLength() - 1;
    const value = linkedList.get(lastIndex);
  })
  .add("LinkedList - Получение из середины", function () {
    const index = Math.floor(Math.random() * linkedList.getLength());
    const value = linkedList.get(index);
  })
  .add("LinkedList - Удаление из середины", function () {
    const index = Math.floor(Math.random() * linkedList.getLength());
    linkedList.remove(index);
  })
  .add("LinkedList - Удаление из конца", function () {
    linkedList.pop();
  })
  .on("cycle", function (event: any) {
    console.log(String(event.target));
  })
  .run({ async: true });
