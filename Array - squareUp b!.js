// Solution / Решение

function squareUp(n) {
  const result = new Array(n * n); // Создаем массив фиксированного размера
  let index = 0; // Инициализируем переменную для отслеживания текущего индекса
  for (let i = 1; i <= n; i++) {
    // Внешний цикл для прохода по строкам
    for (let j = n; j >= 1; j--) {
      // Внутренний цикл для заполнения значений в строке
      result[index++] = j > i ? 0 : j; // Заполняем массив значениями, отражающими столбцы
    }
  }
  return result; // Возвращаем полученный массив
}

// Solution 2 / Решение 2

function squareUp(n) {
  const result = []; // Создание пустого массива "result"
  const data = Array.from({ length: n }, (v, i) => n - i); // Создание массива "data" от n до 1

  while (n--) { // Цикл, уменьшающий n на каждой итерации
    const arr = data.map((v, i) => (i < n ? 0 : v)); // Создание массива arr, заполняющегося нулями до индекса n
    result.push(arr); // Добавление массива arr в результат
  }

  return result.flat(); // Возвращение проверенного массива
}

// Short version

const squareUp = n => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => n - i - 2 < j ? n - j : 0)).flat();

// Tests

console.log(squareUp(4)); // [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
console.log(squareUp(9)); // [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 6, 5, 4, 3, 2, 1, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(squareUp(1)); // [ 1 ]

/*

This is a question from codingbat

Given an integer n greater than or equal to 0, 
create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
n<=1000.

*/

/*

Это вопрос с сайта codingbat

Учитывая, что целое число n больше или равно 0, 
создайте и верните массив со следующим шаблоном:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
n<=1000.

*/
