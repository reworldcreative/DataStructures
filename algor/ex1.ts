import * as readline from "readline";

// function createArray(arrLen: number): number[] {
//   const array: number[] = new Array(arrLen);
//   for (let i = 0; i < arrLen; i++) {
//     array[i] = Math.floor(Math.random() * 100);
//   }
//   return array;
//   //   return [1, 2, 3, 5, 4, 5, 6, 7, 5, 8, 9, 10];
// }

// function search(number: number, arr: number[]): void {
//   //   const index = arr.indexOf(number);
//   //   if (index !== -1) {
//   //     console.log(`число ${number} в масиві: ${arr} на позиції ${index}`);
//   //   } else {
//   //     console.log(`числа ${number} в масиві: ${arr} немає`);
//   //   }

//   let fIndex: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === number) {
//       fIndex.push(i);
//     }
//   }
//   if (fIndex.length > 0) {
//     console.log(`число ${number}на позиції ${fIndex}`);
//   } else {
//     console.log(`числа ${number} в масиві немає`);
//   }

//   readL.close();
// }

// const readL = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readL.question(`Введіть довжину масива \n`, (input) => {
//   const array: number[] = createArray(+input);

//   console.log(array);
//   readL.question(`Введіть число яке знайти \n`, (input) => {
//     search(+input, array);
//   });
// });

// ///
// Map
// const myMap = new Map();
// function createMap(mapLen: number): void {
//   for (let i = 0; i < mapLen; i++) {
//     addToMap(Math.floor(Math.random() * 100), i);
//   }
// }
// function addToMap(key: number, value: number): void {
//   if (myMap.has(key)) {
//     // Якщо ключ вже існує, додаємо значення до масиву
//     const existingValues = myMap.get(key);
//     existingValues.push(value);
//     myMap.set(key, existingValues);
//   } else {
//     // Якщо ключ не існує, створюємо новий масив з цим значенням
//     myMap.set(key, [value]);
//   }
// }

// function displayMap(): void {
//   const array: number[] = new Array(10);
//   for (const [key, values] of myMap.entries()) {
//     values.forEach((element: { key: number }) => {
//       array[+element] = key;
//     });
//   }
//   console.log(array);
// }

// const readL = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readL.question(`Введіть довжину масива \n`, (input) => {
//   createMap(+input);
//   displayMap();
//   readL.question(`Введіть число яке знайти \n`, (input) => {
//     console.log(...myMap.get(+input));
//   });
// });

// /////
///

// Array
function search(number: number, arr: number[]): void {
  let fIndex: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      fIndex.push(i);
    }
  }
  if (fIndex.length > 0) {
    console.log(`число ${number} на позиції`, ...fIndex);
  } else {
    console.log(`числа ${number} в масиві немає`);
  }

  readL.close();
}

// Map
const myMap = new Map();
function addToMap(key: number, value: number): void {
  if (myMap.has(key)) {
    // Якщо ключ вже існує, додаємо значення до масиву
    const existingValues = myMap.get(key);
    existingValues.push(value);
    myMap.set(key, existingValues);
  } else {
    // Якщо ключ не існує, створюємо новий масив з цим значенням
    myMap.set(key, [value]);
  }
}

function displayMap(): void {
  const array: number[] = new Array(10);
  for (const [key, values] of myMap.entries()) {
    values.forEach((element: { key: number }) => {
      array[+element] = key;
    });
  }
  console.log(array);
}

// /// //////////////
const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readL.question(`Введіть довжину масива \n`, (input) => {
  let array: number[] = [];
  for (let i = 0; i < +input; i++) {
    let randomNumber = Math.floor(Math.random() * 100);
    addToMap(randomNumber, i);
    array.push(randomNumber);
  }

  console.log(`map:`);
  displayMap();
  console.log(`array: \n`, array);
  readL.question(`Введіть число яке знайти \n`, (input) => {
    console.time("Час виконання Map");
    console.log("пошук в Map:");
    if (myMap.has(+input)) {
      console.log(`число ${+input} на позиції`, ...myMap.get(+input));
    } else {
      console.log(`числа ${+input} в масиві немає`);
    }
    console.timeEnd("Час виконання Map");

    console.time("Час виконання Array");
    console.log("пошук в Array:");
    search(+input, array);
    console.timeEnd("Час виконання Array");
  });
});
