class User {
  constructor(
    public personalNumber: number,
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}

  compareTo(other: User): number {
    return this.personalNumber - other.personalNumber;
  }
}

// Создание коллекции пользователей
const users: User[] = [
  new User(102, "Иван", "Петров", 25),
  new User(103, "Мария", "Иванова", 30),
  new User(101, "Петр", "Сидоров", 28),
  new User(105, "Анна", "Козлова", 22),
  new User(104, "Алексей", "Смирнов", 35),
  new User(108, "Екатерина", "Зайцева", 29),
  new User(106, "Артем", "Григорьев", 31),
  new User(107, "Ольга", "Белова", 26),
  new User(110, "Дмитрий", "Морозов", 27),
  new User(109, "Наталья", "Денисова", 33),
];

// Вывод коллекции до и после сортировки
console.log("Коллекция до сортировки:");
console.log(users);

// Сортировка с использованием Comparable
users.sort((user1, user2) => user1.compareTo(user2));

console.log(
  "Коллекция после сортировки по персональному номеру с использованием Comparable:"
);
console.log(users);

// Сортировка с использованием Comparator
function compareUsersByPersonalNumber(user1: User, user2: User): number {
  return user1.personalNumber - user2.personalNumber;
}

users.sort(compareUsersByPersonalNumber);

console.log(
  "Коллекция после сортировки по персональному номеру с использованием Comparator:"
);
console.log(users);
