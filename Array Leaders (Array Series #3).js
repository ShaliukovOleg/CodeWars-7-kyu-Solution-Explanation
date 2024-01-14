// Solution / Решение

function arrayLeaders(numbers) {
    const result = []; // Для хранения прошедших проверку элементов
    for (let i = 0; i < numbers.length; i++) { // Проходим по элементам массива
        let sum = 0; // Берем временную переменную для хранения суммы последующих элементов
        for (let j = i + 1; j < numbers.length; j++) {
            sum += numbers[j]; // Суммируем значения последующих элементов массива
        }
        if (numbers[i] > sum) { // Проверяем, является ли текущий элемент лидером
            result.push(numbers[i]); // Если да, добавляем его в результат
        }
    }
    return result; // Возвращаем массив лидеров
};

// Short version

const arrayLeaders = numbers => numbers.filter((n, i, arr) => n > arr.slice(i + 1).reduce((a, b) => a + b, 0));

// Tests

console.log(arrayLeaders([-1,-29,-26,-2])); // [ -1 ]
console.log(arrayLeaders([-36,-12,-27])); // [ -36, -12 ]

/*

Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , 
Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives , negatives and zeros
Repetition of numbers in the array/list could occur.
Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side
Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side
5 is greater than the sum all the elements to its right side
Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side
2 is greater than the sum all the elements to its right side
Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side
-1 is greater than the sum all the elements to its right side
3 is greater than the sum all the elements to its right side
Note : The last element 2 is greater than the sum of its right elements (abstract zero).

*/

/*

Введение и разминка (настоятельно рекомендуется)
Серия "Играем со списками/массивами
Определение
Элемент является лидером, если он больше, чем сумма всех элементов справа от него.


Задание
Дан массив/список [] целых чисел, 
Найдите всех лидеров в этом массиве.


Примечания
Размер массива/списка должен быть не менее 3.
Числа в массиве/списке будут состоять из положительных, отрицательных и нулей.
Возможно повторение чисел в массиве/списке.
Возвращаемый массив/список должен хранить ведущие числа в том же порядке, что и исходный массив/список.


Примеры ввода >> вывода
arrayLeaders ({1, 2, 3, 4, 0}) ==> возвращает {4}
Пояснение:
4 больше суммы всех элементов справа от него.
Примечание: Последний элемент 0 равен правой сумме своих элементов (абстрактный ноль).


arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Пояснение:
17 больше суммы всех элементов справа от него
5 больше суммы всех элементов справа от него
Примечание: Последний элемент 2 больше суммы правых элементов (абстрактный ноль).


arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Пояснение:
5 больше суммы всех элементов справа от него
2 больше суммы всех элементов справа от него
Примечание: Последний элемент -1 меньше суммы его правых элементов (абстрактный ноль).


arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Пояснение:
0 больше суммы всех элементов справа от него
-1 больше суммы всех элементов справа от него
3 больше суммы всех элементов справа от него
Примечание: Последний элемент 2 больше суммы его правых элементов (абстрактный ноль).

*/