// Структура вузла бінарного дерева
class treeNode {
  value: string;
  left: treeNode | null;
  right: treeNode | null;

  constructor(value: string) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Клас бінарного дерева
class BinaryTree {
  root: treeNode | null;

  constructor() {
    this.root = null;
  }

  // Метод для вставки значення в бінарне дерево
  insert(value: string): void {
    const newNode = new treeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: treeNode, newNode: treeNode): void {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  find(value: string): treeNode | null {
    let current: treeNode | null = this.root;
    let steps: number = 0;

    while (current && current.value !== value) {
      steps++;
      if (current === undefined) {
        return null;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (current == null) {
      console.log("не знайдено за: " + steps, "кроки");
    } else {
      console.log("знайдено за: " + steps, "кроки");
    }
    return current;
  }

  // Рекурсивний обхід в глибину (in-order)
  // depth(callback: (value: string) => void, node = this.root): void {
  //   if (node) {
  //     this.depth(callback, node.left);
  //     callback(node.value);
  //     this.depth(callback, node.right);
  //   }
  // }

  depth(node = this.root): void {
    if (node) {
      console.log(node.value);
      this.depth(node.left);
      this.depth(node.right);
    }
  }

  // Ітеративний обхід в ширину
  // breadth(callback: (value: string) => void): void {
  //   const queue: treeNode[] = [];
  //   if (this.root) {
  //     queue.push(this.root);
  //     while (queue.length > 0) {
  //       const node = queue.shift()!;
  //       callback(node.value);
  //       if (node.left) {
  //         queue.push(node.left);
  //       }
  //       if (node.right) {
  //         queue.push(node.right);
  //       }
  //     }
  //   }
  // }

  breadth(): void {
    const queue: treeNode[] = [];
    if (this.root) {
      queue.push(this.root);
      while (queue.length > 0) {
        const node: treeNode = queue.shift()!;
        console.log(node.value);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
  }
}

// використання
const tree = new BinaryTree();
// tree.insert("C");
// tree.insert("A");
// tree.insert("B");
// tree.insert("E");
// tree.insert("D");

tree.insert("N");
tree.insert("C");
tree.insert("Q");
tree.insert("B");
tree.insert("E");
tree.insert("P");
tree.insert("X");
tree.insert("D");
tree.insert("O");

console.log("Рекурсивний обхід в глибину (in-order):");
tree.depth();

console.log("Ітеративний обхід в ширину:");
tree.breadth();

// console.log(tree.find("C"));

// console.log(JSON.stringify(tree, null, "  "));
