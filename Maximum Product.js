// Solution / Решение

function adjacentElementsProduct(array) {
  const result = []; // Создаем пустой массив для хранения произведений соседних элементов
  for (let i = 0; i < array.length - 1; i++) {
    // Цикл проходит по массиву до предпоследнего элемента
    result.push(array[i] * array[i + 1]); // Добавление в результат произведения текущего элемента и следующего элемента
  }
  return Math.max(...result); // Возвращаем максимальное значение из массива result
}

// Tests

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])); // 30

/*

Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Notes
Array/list size is at least 2.

Array/list numbers could be a mixture of positives, negatives also zeroes .

Input >> Output Examples

adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array

*/

/*

Задача
Дан массив целых чисел, найдите максимальное произведение, полученное при перемножении 2 соседних чисел в массиве.

Примечания
Размер массива/списка должен быть не менее 2.

Массив/список может состоять из положительных, отрицательных и нулевых чисел.

Вход >> Выход Примеры

adjacentElementsProduct([1, 2, 3]); ==> return 6
Пояснение:
Максимальное произведение, полученное при умножении 2 * 3 = 6, и это соседние числа в массиве.

adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Пояснение:
Максимальное произведение, полученное при умножении 5 * 10 = 50.

adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]) ==> return -14
Пояснение:
Максимальное произведение, полученное при умножении -2 * 7 = -14, и это соседние числа в массиве

*/
