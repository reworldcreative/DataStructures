const mySet = new Set<number>();
mySet.add(3);
mySet.add(1);
mySet.add(2);
mySet.add(3); // Дубльоване значення
console.log(mySet); // Set { 3, 1, 2 }

// ///
class HashSet<T> {
  private items: Record<string, T> = {};
  add(item: T): void {
    const key = this.getKey(item);
    this.items[key] = item;
  }
  delete(item: T): void {
    const key = this.getKey(item);
    if (key in this.items) {
      delete this.items[key];
    }
  }
  has(item: T): boolean {
    const key = this.getKey(item);
    return key in this.items;
  }
  toArray(): T[] {
    return Object.values(this.items);
  }
  private getKey(item: T): string {
    return JSON.stringify(item);
  }
}
const myHashSet = new HashSet<number>();
myHashSet.add(3);
myHashSet.add(1);
myHashSet.add(2);
myHashSet.add(3); // Дубльоване значення
console.log(myHashSet.toArray()); // [3, 1, 2]

// ///
// TreeSet
class TreeSet<T> {
  private items: T[] = [];
  private compareFunction: (a: T, b: T) => number;
  constructor(compareFunction: (a: T, b: T) => number) {
    this.compareFunction = compareFunction;
  }
  add(item: T): void {
    if (!this.has(item)) {
      this.items.push(item);
      this.items.sort(this.compareFunction);
    }
  }
  delete(item: T): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  has(item: T): boolean {
    return this.items.some(
      (existingItem) => this.compareFunction(existingItem, item) === 0
    );
  }
  toArray(): T[] {
    return [...this.items];
  }
}
function compareNumbers(a: number, b: number): number {
  return a - b;
}

function compareStrings(a: string, b: string): number {
  return a.localeCompare(b);
}

const numberTreeSet = new TreeSet<number>(compareNumbers);
numberTreeSet.add(3);
numberTreeSet.add(1);
numberTreeSet.add(2);
numberTreeSet.add(3); // Дубльоване значення
console.log(numberTreeSet.toArray()); // [1, 2, 3]

const stringTreeSet = new TreeSet<string>(compareStrings);
stringTreeSet.add("apple");
stringTreeSet.add("banana");
stringTreeSet.add("cherry");
stringTreeSet.add("banana"); // Дубльоване значення
console.log(stringTreeSet.toArray()); // ["apple", "banana", "cherry"]
