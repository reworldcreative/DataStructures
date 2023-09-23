let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"

console.log(map.size);

// ///
// (HashMap)
const hashMap: { [key: string]: any } = {};
hashMap["kay1"] = "1";
hashMap["kay2"] = "2";

const first = hashMap["kay1"];
const second = hashMap["kay2"];

const myKey = "kay1" in hashMap;
console.log(hashMap["kay1"]);
console.log(myKey);
delete hashMap["kay1"];

const myKey2 = "kay1" in hashMap;
console.log(myKey2);

// ///
// (TreeMap)
class TreeMap<K, V> {
  private map: Map<K, V>;
  constructor() {
    this.map = new Map<K, V>();
  }
  add(key: K, value: V): void {
    this.map.set(key, value);
  }
  get(key: K): V | undefined {
    return this.map.get(key);
  }
  delete(key: K): boolean {
    return this.map.delete(key);
  }

  keys(): K[] {
    return [...this.map.keys()].sort();
  }
  values(): V[] {
    const sortedKeys = this.keys();
    return sortedKeys.map((key) => this.map.get(key)!);
  }
}

const treeMap = new TreeMap<string, number>();

treeMap.add("key3", 3);
treeMap.add("key1", 1);
treeMap.add("key2", 2);

console.log(treeMap.keys()); // [ 'key1', 'key2', 'key3' ]
console.log(treeMap.values()); // [ 1, 2, 3 ]
console.log(treeMap.get("key2")); //  2
