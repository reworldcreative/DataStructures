import * as readline from "readline";
const carNumberPattern = /^[А-ЯA-Z]{2}\d{4}[А-ЯA-Z]{2}$/i;

const carsList = new Set<string>();

function addCarNumber(number: string): void {
  if (carNumberPattern.test(number)) {
    carsList.add(number);
    console.log(`Государственный номер ${number} добавлен в список.`);
  } else {
    console.log(
      `Ошибка: Государственный номер ${number} не соответствует формату.`
    );
  }
  input();
}
function displayCarNumbers(): void {
  let index = 1;
  console.log(`Список государственных номеров автомобилей:`);
  carsList.forEach((number) => {
    console.log(`${index}) ${number}`);
    index++;
  });
  input();
}

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function input(): void {
  readL.question(
    `Введіть номер автомобіля в форматі - AA0000AA або команду.: \n Для завершення роботи введіть "stop". \n Для виводу списку введіть "list" \n`,
    (input) => {
      if (input == "stop") {
        readL.close();
      } else if (input == "list") {
        displayCarNumbers();
      } else {
        addCarNumber(input);
      }
    }
  );
}

input();
