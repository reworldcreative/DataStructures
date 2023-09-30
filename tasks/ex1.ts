import * as readline from "readline";
const carNumbers: string[] = [];
const carNumberPattern = /^[А-ЯA-Z]{2}\d{4}[А-ЯA-Z]{2}$/i;

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addCarNumber(number: string): void {
  if (carNumberPattern.test(number)) {
    carNumbers.push(number);
    console.log(`Государственный номер ${number} добавлен в список.`);
  } else {
    console.log(
      `Ошибка: Государственный номер ${number} не соответствует формату.`
    );
  }
}
function displayCarNumbers(): void {
  console.log("Список государственных номеров автомобилей:");
  carNumbers.forEach((number, index) => {
    console.log(`${index + 1}. ${number}`);
  });
}
function main(): void {
  console.log("Программа учета автомобилей.");
  console.log(
    "Введите государственные номера автомобилей в формате - AA0000AA или команду."
  );
  console.log('Для вывода списка введите "list".');
  console.log('Для завершения работы введите "stop".');

  readL.on("line", (input) => {
    if (!input) {
      console.log("Ввод пуст. Пожалуйста, введите номер или команду.");
    } else if (input === "stop") {
      console.log("Работа программы завершена.");
      readL.close();
    } else if (input === "list") {
      displayCarNumbers();
    } else {
      addCarNumber(input);
    }
  });
}
main();
