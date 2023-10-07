// Алгоритм Дейкстри
class MyGraph {
  private cityList: Map<string, Map<string, number>> = new Map();
  addCity(city: string): void {
    this.cityList.set(city, new Map());
  }
  addRoad(from: string, to: string, distance: number): void {
    if (!this.cityList.has(from) || !this.cityList.has(to)) {
      throw new Error("Місто не існує");
    }
    this.cityList.get(from)!.set(to, distance);
    this.cityList.get(to)!.set(from, distance);
  }

  getList() {
    return this.cityList;
  }

  findShortestPath(
    start: string,
    end: string
  ): { path: string[]; totalDistance: number } {
    const distances: Map<string, number> = new Map();
    const previous: Map<string, string | null> = new Map();
    const queue: string[] = [];

    // Ініціалізація початкових відстаней та попередніх вершин
    for (const city of this.cityList.keys()) {
      // distances.set(city, city === start ? 0 : Infinity);
      distances.set(city, city === start ? 0 : Number.MAX_SAFE_INTEGER);
      previous.set(city, null);
      queue.push(city);
    }

    while (queue.length > 0) {
      // Шукаємо вершину з найменшою відстанню з черги
      let currentCity = queue[0];
      for (const city of queue) {
        // Отримуємо відстані до поточного міста та міста з найменшою відстанню
        const distanceToCity = distances.get(city)!;
        const distanceToCurrentCity = distances.get(currentCity)!;

        // Порівнюємо відстані та змінюємо поточне місто, якщо знайдено меншу відстань
        if (distanceToCity < distanceToCurrentCity) {
          currentCity = city;
        }
      }

      queue.splice(queue.indexOf(currentCity), 1);

      // перераховуємо відстані до сусідніх вершин
      this.cityList.get(currentCity)!.forEach((distance, neighbor) => {
        const newDistance = distances.get(currentCity)! + distance;
        if (newDistance < distances.get(neighbor)!) {
          distances.set(neighbor, newDistance);
          previous.set(neighbor, currentCity);
        }
      });
    }

    // Відновлюємо шлях
    const path: string[] = [];
    let current = end;
    while (current !== null) {
      path.unshift(current);
      current = previous.get(current)!;
    }

    let totalDistance = 0;
    for (let index = 0; index < path.length - 1; index++) {
      totalDistance += this.cityList.get(path[index])!.get(path[index + 1])!;
    }

    return { path, totalDistance };
  }
}

// Створюємо граф міст и шляхів
const ukraineMyGraph = new MyGraph();
ukraineMyGraph.addCity("Одеса");
ukraineMyGraph.addCity("Київ");
ukraineMyGraph.addCity("Харків");
ukraineMyGraph.addCity("Львів");
ukraineMyGraph.addCity("Хмельницький");
ukraineMyGraph.addCity("Полтава");
ukraineMyGraph.addCity("Чернігів");
ukraineMyGraph.addCity("Житомир");
ukraineMyGraph.addCity("Дніпро");
ukraineMyGraph.addCity("Суми");

ukraineMyGraph.addRoad("Одеса", "Київ", 480);
ukraineMyGraph.addRoad("Одеса", "Хмельницький", 559);
ukraineMyGraph.addRoad("Одеса", "Харків", 686);
ukraineMyGraph.addRoad("Одеса", "Полтава", 596);
ukraineMyGraph.addRoad("Одеса", "Дніпро", 463);
ukraineMyGraph.addRoad("Одеса", "Львів", 743);
ukraineMyGraph.addRoad("Дніпро", "Полтава", 183);
ukraineMyGraph.addRoad("Дніпро", "Київ", 479);
ukraineMyGraph.addRoad("Дніпро", "Харків", 222);
ukraineMyGraph.addRoad("Полтава", "Київ", 343);
ukraineMyGraph.addRoad("Полтава", "Харків", 144);
ukraineMyGraph.addRoad("Полтава", "Чернігів", 477);
ukraineMyGraph.addRoad("Полтава", "Суми", 261);
ukraineMyGraph.addRoad("Київ", "Хмельницький", 348);
ukraineMyGraph.addRoad("Київ", "Житомир", 140);
ukraineMyGraph.addRoad("Київ", "Харків", 488);
ukraineMyGraph.addRoad("Київ", "Чернігів", 423);
ukraineMyGraph.addRoad("Хмельницький", "Житомир", 208);
ukraineMyGraph.addRoad("Хмельницький", "Львів", 247);
ukraineMyGraph.addRoad("Житомир", "Львів", 407);
ukraineMyGraph.addRoad("Харків", "Чернігів", 523);
ukraineMyGraph.addRoad("Суми", "Чернігів", 338);
ukraineMyGraph.addRoad("Суми", "Харків", 185);

// шукаємо найкоротший шлях
const shortestPath = ukraineMyGraph.findShortestPath("Одеса", "Суми");
console.log("Найкоротший шлях:", shortestPath.path.join(" -> "));
// let totalStep = 0;
// // Проходимося по кожному місту в шляху, крім останнього
// for (let i = 0; i < shortestPath.path.length - 1; i++) {
//   const currentCity = shortestPath.path[i];
//   const nextCity = shortestPath.path[i + 1];

//   // Знаходимо найкоротший шлях між поточним і наступним містом
//   const shortestPathBetweenCities = ukraineMyGraph.findShortestPath(
//     currentCity,
//     nextCity
//   );

//   // Додаємо довжину цього шляху (кількість міст) до загальної відстані
//   totalStep += shortestPathBetweenCities.path.length - 1;
// }

// console.log("Кількість кроків між містами:", totalStep);
console.log("Відстань між містами:", shortestPath.totalDistance, "км.");
// console.log(ukraineMyGraph.getList());
