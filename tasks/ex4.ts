import * as readline from "readline";
const carNumberPattern = /^[А-ЯA-Z]{2}\d{4}[А-ЯA-Z]{2}$/i;
const carRegistry = new Map<string, string>();

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayList(): void {
  console.log("Список гос номерів автомобілів та власників:");
  carRegistry.forEach((owner, carNumber) => {
    console.log(carNumber + " власник - " + owner);
  });
  inputCarNumber();
}

function displayCarList(): void {
  console.log("Список гос номерів автомобілів:");
  carRegistry.forEach((carNumber) => {
    console.log(carNumber);
  });
  inputCarNumber();
}

function displayOwnersList(): void {
  console.log("Список власників автомобілів:");
  const uniqueOwners = new Set(carRegistry.values());

  uniqueOwners.forEach((owner) => {
    console.log(owner);
  });
  inputCarNumber();
}

function inputCarNumber(): void {
  readL.question(
    `Введіть номер автомобіля в форматі - AA0000AA або команду.: \n Для завершення роботи введіть "stop". \n Для виводу списку номерів введіть "car"або"list" \n Для виводу списку власників введіть "owner"\n`,
    (input) => {
      if (input == "stop") {
        readL.close();
      } else if (input == "list") {
        displayList();
      } else if (input == "car") {
        displayCarList();
      } else if (input == "owner") {
        displayOwnersList();
      } else {
        if (carNumberPattern.test(input)) {
          inputOwner(input);
        } else {
          console.log(`Error: Гос номер ${input} не відповідає формату.`);
        }
        inputOwner(input);
      }
    }
  );
}

function inputOwner(carNumber: string): void {
  readL.question(
    `Введіть власника автомобіля або команду:\nДля завершення роботи введіть "stop".\n`,
    (input) => {
      if (input == "stop") {
        readL.close();
      } else {
        carRegistry.set(carNumber, input);
        inputCarNumber();
      }
    }
  );
}

inputCarNumber();
