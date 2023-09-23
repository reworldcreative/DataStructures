// class TestList<T> {
//   private items: T[] = [];

//   add(item: T): void {
//     this.items.push(item);
//   }

//   remove(item: T): void {
//     const index = this.items.indexOf(item);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }

//   getAll(): T[] {
//     return this.items;
//   }

//   count(): number {
//     return this.items.length;
//   }
// }

// const testList = new TestList<number>();
// testList.add(1);
// testList.add(2);
// testList.add(3);

// console.log(testList.getAll()); // [1, 2, 3]
// console.log(testList.count()); // 3

// testList.remove(2);
// console.log(testList.getAll()); // [1, 3]
// console.log(testList.count()); // 2

// ///
class MyNode<T> {
  data: T;
  next: MyNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: MyNode<T> | null;

  constructor() {
    this.head = null;
  }

  append(data: T): void {
    const newNode = new MyNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const myList = new LinkedList<number>();
myList.append(1);
myList.append(2);
myList.append(3);
myList.print(); //  1, 2, 3
