let array: Array<number> = [5, 2, 7, 8, 3];
let array2: string[] = ["a", "b", "c"];

let array4: number[] = [...array];
// array.forEach(element => {
//     array4.push(element);
// });

console.log(array[1]);
array[1] = 6;
console.log(array[1]);

let array3: string[] = array2;

array2[0] = "d";
console.log(array3[0]);

console.log(array4[1]);

// console.log("length = " + array.push(9));
// console.log(array[5]);
// console.log("pop = " + array.pop());
// console.log(array[5]);

// console.log("length = " + array.unshift(9));
// console.log(array[0]);
// console.log("shift = " + array.shift());
// console.log(array[0]);
