import * as readline from "readline";
// Функция для шифрования текста шифром Цезаря
function encrypt(text: string, shift: number): string {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    let code = text.charCodeAt(i);
    char = String.fromCharCode(code + shift);
    encryptedText += char;
  }
  return encryptedText;
}

// Функция для расшифровки текста шифром Цезаря
function decrypt(text: string, shift: number): string {
  return encrypt(text, -shift); // Расшифровка - обратный сдвиг
}

const readL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ///
const shiftAmount: number = 3;
let inputText: string = "";

readL.question(`Введіть текст: `, (text) => {
  inputText = text;
  readL.question(
    `Виберіть опцію:\n1. Зашифрувати\n2. Розшифрувати\n`,
    (option) => {
      if (option === "1") {
        const encryptedText: string = encrypt(inputText, shiftAmount);
        console.log("Зашифрований текст: " + encryptedText);
      } else if (option === "2") {
        const decryptedText: string = decrypt(inputText, shiftAmount);
        console.log("Розшифрований текст: " + decryptedText);
      } else {
        console.log("Невірний вибір опції.");
      }
      readL.close();
    }
  );
});

// //////
// Функция для шифрования текста шифром Віженера
// function vigenereEncrypt(plainText: string, key: string): string {
//   let encryptedText = "";

//   for (let i = 0; i < plainText.length; i++) {
//     const plainChar = plainText.charAt(i);
//     const keyChar = key.charAt(i % key.length);
//     const plainCharCode = plainChar.charCodeAt(0);
//     const keyCharCode = keyChar.charCodeAt(0);
//     const encryptedCharCode = (plainCharCode + keyCharCode) % 256;
//     encryptedText += String.fromCharCode(encryptedCharCode);
//   }

//   return encryptedText;
// }

// function vigenereDecrypt(encryptedText: string, key: string): string {
//   let decryptedText = "";

//   for (let i = 0; i < encryptedText.length; i++) {
//     const encryptedChar = encryptedText.charAt(i);
//     const keyChar = key.charAt(i % key.length);
//     const encryptedCharCode = encryptedChar.charCodeAt(0);
//     const keyCharCode = keyChar.charCodeAt(0);

//     const decryptedCharCode = (encryptedCharCode - keyCharCode + 256) % 256;
//     decryptedText += String.fromCharCode(decryptedCharCode);
//   }

//   return decryptedText;
// }

// // Приклад використання:
// const key = "KEY";

// readL.question(`Введіть текст: `, (text) => {
//   inputText = text;
//   readL.question(
//     `Виберіть опцію:\n1. Зашифрувати\n2. Розшифрувати\n`,
//     (option) => {
//       if (option === "1") {
//         const encryptedText = vigenereEncrypt(inputText, key);
//         console.log("Зашифрований текст:", encryptedText);
//       } else if (option === "2") {
//         const decryptedText = vigenereDecrypt(inputText, key);
//         console.log("Розшифрований текст:", decryptedText);
//       } else {
//         console.log("Невірний вибір опції.");
//       }
//       readL.close();
//     }
//   );
// });
