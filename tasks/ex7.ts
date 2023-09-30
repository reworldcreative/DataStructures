class SortingAlgorithms {
  // Метод для сортировки массива методом пузырька
  static bubbleSort(arr: number[]): void {
    const sortArray: number[] = [...arr];
    for (let i: number = 0; i < sortArray.length - 1; i++) {
      for (let j: number = 0; j < sortArray.length - i - 1; j++) {
        // Сравниваем два соседних элемента
        if (sortArray[j] > sortArray[j + 1]) {
          // Если текущий элемент больше следующего, меняем их местами
          const temp = sortArray[j];
          sortArray[j] = sortArray[j + 1];
          sortArray[j + 1] = temp;
        }
      }
    }

    console.log(sortArray);
  }

  // Метод для сортировки массива методом выбора
  // /// toEnd
  static selectionSortEnd(arr: number[]): void {
    const sortArray: number[] = [...arr];
    // максимальный
    for (let i: number = 0; i < sortArray.length - 1; i++) {
      // Находим максимальный элемент в оставшейся части массива
      let maxNumb: number = 0;
      let index: number = -1;
      for (let j: number = 0; j < sortArray.length - i; j++) {
        if (sortArray[j] > maxNumb) {
          maxNumb = sortArray[j];
          index = j;
        }
      }
      // Меняем максимальный элемент с текущим элементом
      const temp = sortArray[sortArray.length - 1 - i];
      sortArray[sortArray.length - 1 - i] = maxNumb;
      sortArray[index] = temp;
    }

    console.log(sortArray);
  }

  // /// toStart
  static selectionSortStart(arr: number[]): void {
    const sortArray: number[] = [...arr];

    // // минимальный
    for (let i: number = 0; i < sortArray.length - 1; i++) {
      // Находим минимальный элемент в оставшейся части массива
      let minNumb: number = Infinity;
      let index: number = -1;
      for (let j: number = i; j < sortArray.length; j++) {
        if (sortArray[j] < minNumb) {
          minNumb = sortArray[j];
          index = j;
        }
      }
      // Меняем минимальный элемент с текущим элементом
      const temp = sortArray[i];
      sortArray[i] = minNumb;
      sortArray[index] = temp;
    }
    console.log(sortArray);
  }

  // ///Double
  static selectionSortDouble(arr: number[]): void {
    const sortArray: number[] = [...arr];
    // минимальный и максимальный

    for (let i: number = 0; i < sortArray.length / 2; i++) {
      let maxNumb: number = -Infinity;
      let minNumb: number = Infinity;
      let maxindex: number = -1;
      let minindex: number = -1;
      for (let j: number = i; j < sortArray.length - i; j++) {
        if (sortArray[j] > maxNumb) {
          maxNumb = sortArray[j];
          maxindex = j;
        }
        if (sortArray[j] < minNumb) {
          minNumb = sortArray[j];
          minindex = j;
        }
      }

      let maxtemp = sortArray[sortArray.length - i - 1];
      sortArray[sortArray.length - i - 1] = maxNumb;
      sortArray[maxindex] = maxtemp;

      if (maxtemp != minNumb) {
        let mintemp = sortArray[i];
        sortArray[i] = minNumb;
        sortArray[minindex] = mintemp;
      }
    }
    console.log(sortArray);
  }

  // Метод для сортировки массива методом вставки
  static insertionSort(arr: number[]): void {
    const sortArray: number[] = [...arr];
    for (let i: number = 1; i < sortArray.length; i++) {
      const current: number = sortArray[i];
      let j: number = i;
      while (j > 0 && sortArray[j - 1] > current) {
        sortArray[j] = sortArray[j - 1];
        j--;
      }
      sortArray[j] = current;
    }
    console.log(sortArray);
  }

  // Метод для сортировки массива слиянием
  static mergeSort(arr: number[]): number[] {
    const sortArray: number[] = [...arr];

    // /// объединение массива
    const mergeArray = (arrFirst: number[], arrSecond: number[]) => {
      const arrSort = [];
      let i: number = 0,
        j: number = 0;
      // сравниваем два массива, поочередно сдвигая указатели
      while (i < arrFirst.length && j < arrSecond.length) {
        // arrSort.push(
        //   arrFirst[i] < arrSecond[j] ? arrFirst[i++] : arrSecond[j++]
        // );

        if (arrFirst[i] < arrSecond[j]) {
          arrSort.push(arrFirst[i]);
          i++;
        } else {
          arrSort.push(arrSecond[j]);
          j++;
        }
      }
      // обрабатываем последний элемент при разной длине массивов и возвращаем один отсортированный массив
      return [...arrSort, ...arrFirst.slice(i), ...arrSecond.slice(j)];
    };

    // /// разделение массива и возвращение отсортированного
    const divideArray = (unsortArray: number[]): number[] => {
      // Проверяем корректность переданных данных
      if (!unsortArray || !unsortArray.length) {
        return [];
      }
      //Если массив содержит один элемент просто возвращаем его
      if (unsortArray.length <= 1) {
        return unsortArray;
      }
      // Находим середину массива и делим его на два
      const middle = Math.floor(unsortArray.length / 2);
      const arrLeft = unsortArray.slice(0, middle);
      const arrRight = unsortArray.slice(middle);
      // Для новых массивов снова вызываем сортировку, сливаем их и возвращаем снова единый массив
      return mergeArray(divideArray(arrLeft), divideArray(arrRight));
    };

    return divideArray(sortArray);
  }

  // Метод для сортировки массива быстрой сортировкой
  static quickSort(arr: number[]): number[] {
    const sortArray: number[] = [...arr];

    if (arr.length < 2) {
      return arr;
    }
    const middle: number = Math.floor(sortArray.length / 2);
    const more: number[] = [];
    const less: number[] = [];

    for (let i: number = 0; i < sortArray.length; i++) {
      if (i === middle) {
        continue;
      }
      if (sortArray[i] < sortArray[middle]) {
        less.push(sortArray[i]);
      } else {
        more.push(sortArray[i]);
      }
    }
    return [
      ...SortingAlgorithms.quickSort(less),
      sortArray[middle],
      ...SortingAlgorithms.quickSort(more),
    ];
  }

  static isSorted(arr: number[]): boolean {
    for (let i: number = 1; i < arr.length - 1; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
}

// Пример использования класса SortingAlgorithms
const unsortedArray = [64, 25, 12, 22, 11];
// const unsortedArray = [
//   84, 17, 95, 68, 41, 61, 11, 23, 89, 72, 57, 35, 78, 6, 31, 75, 47, 98, 50, 3,
//   64, 29, 93, 21, 42, 69, 10, 55, 96, 27, 82, 15, 36, 70, 7, 88, 54, 44, 92, 65,
//   19, 80, 59, 2, 85, 14, 46, 58, 91, 25,
// ];

// const start = performance.now();
// console.log("Стартовий массив:");
// console.log(unsortedArray);
// const end = performance.now();
// const timew = end - start;
// console.log(`Час виконання: ${timew} мс`);

console.time("Час виконання Стартовий массив");
console.log("Стартовий массив:");
console.log(unsortedArray);
console.timeEnd("Час виконання Стартовий массив");

console.time("Час виконання Сортировка пузырьком");
console.log("Сортировка пузырьком:");
SortingAlgorithms.bubbleSort(unsortedArray);
console.timeEnd("Час виконання Сортировка пузырьком");

console.log("Сортировка выбором:");
console.time("Час виконання Сортировка выбором в конец");
console.log("------------------ в конец");
SortingAlgorithms.selectionSortEnd(unsortedArray);
console.timeEnd("Час виконання Сортировка выбором в конец");

console.time("Час виконання Сортировка выбором в начало");
console.log("------------------ в начало");
SortingAlgorithms.selectionSortStart(unsortedArray);
console.timeEnd("Час виконання Сортировка выбором в начало");

console.time("Час виконання Сортировка выбором подвійна");
console.log("------------------ подвійна");
SortingAlgorithms.selectionSortDouble(unsortedArray);
console.timeEnd("Час виконання Сортировка выбором подвійна");

console.time("Час виконання Сортировка вставками");
console.log("Сортировка вставками:");
SortingAlgorithms.insertionSort(unsortedArray);
console.timeEnd("Час виконання Сортировка вставками");

console.time("Час виконання Сортировка слиянием");
console.log("Сортировка слиянием:");
console.log(SortingAlgorithms.mergeSort(unsortedArray));
console.timeEnd("Час виконання Сортировка слиянием");

console.time("Час виконання Быстрая сортировка");
console.log("Быстрая сортировка:");
console.log(SortingAlgorithms.quickSort(unsortedArray));
console.timeEnd("Час виконання Быстрая сортировка");
