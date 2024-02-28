// Solution / Решение

const isAllPossibilities = (arr) => {
    arr.sort((a, b) => a - b); // Сортируем массив arr в порядке возрастания
    // Проверяем, все ли значения в массиве соответствуют его индексам
    return arr.every((value, index) => value === index);
}

// Tests

console.log(isAllPossibilities([0,1,2,3])); // true
console.log(isAllPossibilities([1,2,3,4])); // false

/*

DESCRIPTION:
A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).
Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Examples:

[1,2,0,3] => True
# Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

[0,1,2,2,3] => False
# Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

[0] => True
# Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).

*/

/*

ОПИСАНИЕ:
Непустой массив a длины n называется массивом всех возможностей, если он содержит все числа от 0 до a.length - 1 (оба включительно).
Напишите функцию, которая принимает целочисленный массив и возвращает true, если массив является массивом всех возможностей, иначе false.

Примеры:

[1,2,0,3] => True
# Включает все числа от 0 до a.length - 1 (4 - 1 = 3)

[0,1,2,2,3] => False
# Не включает все числа от 0 до a.length - 1 (5 - 1 = 4)

[0] => True
# Включает все числа от 0 до a.length - 1 (1 - 1 = 0).

*/