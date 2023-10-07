import * as readline from "readline";
function checkBracketsEquation(equation: string): boolean {
  //   const stack: string[] = [];

  //   for (let char of equation) {
  //     if (char === "(") {
  //       stack.push(char);
  //     } else if (char === ")") {
  //       if (stack.length === 0 || stack.pop() !== "(") {
  //         return false; // Закрита дужка без відкритої
  //       }
  //     }
  //   }

  //     return stack.length === 0; // Всі дужки були закриті

  let openBracketsCount = 0;

  for (let char of equation) {
    if (char === "(") {
      openBracketsCount++;
    } else if (char === ")") {
      if (openBracketsCount === 0) {
        return false; // Закрита дужка без відкритої
      }
      openBracketsCount--;
    }
  }

  return openBracketsCount === 0;
}

const equation = "x * (y - 10)";
// const equation = "x * )(y - 10)(";
// if (checkBracketsEquation(equation)) {
//   console.log("Дужки розставлені правильно.");
// } else {
//   console.log("Помилка! Дужки розставлені неправильно.");
// }

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readL.question(`Введіть вираз який треба перевірити \n`, (equation) => {
  if (checkBracketsEquation(equation)) {
    console.log("Дужки розставлені правильно.");
  } else {
    console.log("Помилка! Дужки розставлені неправильно.");
  }
  readL.close();
});

// ///
/// regular
// function checkBracketsRegularEquation(equation: string): boolean {
//   const openBrackets = equation.match(/\((?!\))/g);
//   const closeBrackets = equation.match(/\)/g);

//   if (
//     openBrackets &&
//     openBrackets.length === (closeBrackets ? closeBrackets.length : 0)
//   ) {
//     return true;
//   }
//   return false;
//   // return openBrackets && openBrackets.length === (closeBrackets ? closeBrackets.length : 0) ? true : false;
// }
// if (checkBracketsRegularEquation(equation)) {
//   console.log("Дужки розставлені правильно.");
// } else {
//   console.log("Помилка! Дужки розставлені неправильно.");
// }
