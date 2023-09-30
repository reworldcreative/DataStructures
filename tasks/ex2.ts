import * as readline from "readline";
const carNumberPattern = /^[А-ЯA-Z]{2}\d{4}[А-ЯA-Z]{2}$/i;

class CarNumber {
  constructor(
    public number: string,
    public prev: CarNumber | null = null,
    public next: CarNumber | null = null
  ) {}
}

class CarsList {
  private head: CarNumber | null = null;
  private tail: CarNumber | null = null;
  private length: number = 0;

  append(number: string, position: number): void {
    if (isNaN(position) || position < 0) {
      console.log("Помилка: неприпустима позиція.");
      return;
    }

    const newNumber = new CarNumber(number);

    if (this.head === null) {
      this.head = newNumber;
    } else if (position <= 1) {
      newNumber.next = this.head;
      this.head.prev = newNumber;
      this.head = newNumber;
    } else if (position > this.length) {
      newNumber.prev = this.tail;
      this.tail!.next = newNumber;
      this.tail = newNumber;
    } else {
      let current: CarNumber | null = this.head;
      let index = 0;
      let prev: CarNumber | null = null;

      while (current && index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      if (prev) {
        prev.next = newNumber;
      }
      newNumber.next = current;
    }
    if (this.tail === null) {
      this.tail = newNumber;
    }
    this.length++;
  }

  display(): void {
    let current: CarNumber | null = this.head;
    let index: number = 1;
    if (current == null) {
      console.log("список пустий");
    } else {
      while (current) {
        console.log(index + ") " + current.number);
        current = current.next;
        index++;
      }
    }
  }
}

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const carsList = new CarsList();

function checkInput(input: string): void {
  if (input == "stop") {
    readL.close();
  } else if (input == "list") {
    carsList.display();
    inputNumber();
  } else {
    if (carNumberPattern.test(number)) {
      inputPosition();
    } else {
      console.log(`Error: номер ${number} не відповідає формату.`);
      inputNumber();
    }
  }
}

let number: string = "";
let position: number = 1;

function inputNumber(): void {
  readL.question(
    `Введіть номер автомобіля в форматі - AA0000AA або команду.: \n Для завершення роботи введіть "stop". \n Для виводу списку введіть "list" \n`,
    (input) => {
      number = input;
      checkInput(input);
    }
  );
}

function inputPosition(): void {
  readL.question("Введіть позицію для вставки: ", (input) => {
    position = +input;
    carsList.append(number, position);
    inputNumber();
  });
}

inputNumber();
