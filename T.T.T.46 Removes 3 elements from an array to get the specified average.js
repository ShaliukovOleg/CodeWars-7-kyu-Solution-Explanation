// Solution / Решение

function remove3Elements(arr, average) {
    // Если длина массива меньше 3 или среднее значение равно 0, возвращаем пустой массив
    if (arr.length === 3 && average)
        return [];

    // Используем reduce для суммирования всех элементов и вычитания среднего значения
    // Так как результат будет содержать три элемента, то average нужно умножить на 3 и уже к данному числу прибавить сумму элементов массива
    const result = arr.reduce((a, b) => a + b - average, 3 * average);

    // Используем циклы для перебора всех возможных комбинаций трех элементов
    for (let i = 0; i < arr.length - 2; i++)
        for (let j = i + 1; j < arr.length - 1; j++)
            for (let k = j + 1; k < arr.length; k++)
                if (arr[i] + arr[j] + arr[k] === result) return [arr[i], arr[j], arr[k]];
    // Если нужную комбинацию не нашли, возвращаем пустой массив согласно условию
    return [];
}

// Solution 2 / Решение 2

function remove3Elements(arr, average) {
    // Функция для вычисления среднего значения элементов массива x
    const arrSum = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

    // Внешний цикл перебирает все элементы массива arr
    for (let i = 0; i < arr.length; i++) {
        // Средний цикл перебирает элементы, начиная с элемента, следующего за i
        for (let j = i + 1; j < arr.length; j++) {
            // Внутренний цикл перебирает элементы, начиная с элемента, следующего за j
            for (let k = j + 1; k < arr.length; k++) {
                const copyArr = [...arr]; // Создаем копию исходного массива
                copyArr.splice(k, 1); // Удаляем элементы с индексами k
                copyArr.splice(j, 1); // Удаляем элементы с индексами j
                copyArr.splice(i, 1); // Удаляем элементы с индексами i
                if (arrSum(copyArr) === average) return [arr[i], arr[j], arr[k]]; // Возвращаем массив, содержащий найденные элементы
            }
        }
    }
    return []; // Если не найдено соответствующей комбинации, возвращаем пустой массив
}

// Solution 3 / Решение 3

function remove3Elements(arr, average) {
    const arrSum = x => x.length ? x.reduce((a, b) => a + b, 0) / x.length : 0; // Функция для вычисления среднего значения элементов массива x
    const n = arr.length; // Для сокращения записи в циклах

    for (let i = 0; i < n - 2; i++) { // Внешний цикл перебирает все элементы массива arr
        for (let j = i + 1; j < n - 1; j++) { // Средний цикл перебирает элементы, начиная с элемента, следующего за i
            for (let k = j + 1; k < n; k++) { // Внутренний цикл перебирает элементы, начиная с элемента, следующего за j
                const copyArr = [...arr.slice(0, i), ...arr.slice(i + 1, j), ...arr.slice(j + 1, k), ...arr.slice(k + 1)]; // Создаем копию исходного массива с элементами, которые не включены в тройку элементов, которые нужно будет удалить (i, j и k).
                if (arrSum(copyArr) === average) return [arr[i], arr[j], arr[k]]; // Возвращаем массив, содержащий найденные элементы
            }
        }
    }
    return []; // Если не найдено соответствующей комбинации, возвращаем пустой массив
}

// Tests

console.log(remove3Elements([1, 2, 3, 4], 1)); // [ 2, 3, 4 ]
console.log(remove3Elements([1, 2, 3, 4, 5, 6], 4)); // [ 1, 2, 6 ]
console.log(remove3Elements([6, 5, 4, 3, 2, 1], 4));[6, 2, 1]
console.log(remove3Elements([6, 5, 4, 3, 2, 1], 5)); // [ 3, 2, 1 ]
console.log(remove3Elements([6, 5, 4, 3, 2, 1], 7)); // []
console.log(remove3Elements([1, 2, 3], 0)); // [ 1, 2, 3 ]
console.log(remove3Elements([1, 2, 3], 1)); // []
console.log(remove3Elements([1, 2, 3, 4, 5, 7, 8, 9, 5, 1, 3, 5, 4, 52, 10], 0)); // []

/*

Description
You are given an array arr(length>=3) that contains some positive integers, 
try to remove 3 elements let the average of array equals to a specified value average.

Task
Complete function remove3Elements() that accepts two arguments arr and average. 
return an array that contains three elements which should be removed. 
The order of the three elements is arranged according to the sequence of the original array, 
you should not sort them. If there are more than one combinations meet the conditions, 
select the element that the index is smaller in the original array. 
If you can't find the 3 elements that match the condition, return an empty array [].

Example:
remove3Elements([1,2,3,4],1) should return [2,3,4]
remove3Elements([1,2,3,4,5,6],4) should return [1,2,6]
remove3Elements([6,5,4,3,2,1],4) should return [6,2,1]
remove3Elements([6,5,4,3,2,1],5) should return [3,2,1]
remove3Elements([6,5,4,3,2,1],7) should return []
remove3Elements([1,2,3],0) should return [1,2,3]
remove3Elements([1,2,3],1) should return []
remove3Elements([1,2,3,4,5,7,8,9,5,1,3,5,4,52,0],0) should return []

*/

/*

Описание
Дается массив arr(length>=3), содержащий некоторое количество целых положительных чисел, 
попробуйте удалить 3 элемента, чтобы среднее значение массива равнялось заданному среднему значению.

Задание
Выполнить функцию remove3Elements(), принимающую два аргумента arr и average. 
Возвращает массив, содержащий три элемента, которые необходимо удалить. 
Порядок расположения трех элементов соответствует порядку расположения исходного массива, 
сортировать их не следует. Если несколько комбинаций удовлетворяют условиям, 
выберите тот элемент, индекс которого меньше в исходном массиве. 
Если не удается найти 3 элемента, удовлетворяющих условию, возвращается пустой массив [].

Пример:
remove3Elements([1,2,3,4],1) should return [2,3,4]
remove3Elements([1,2,3,4,5,6],4) should return [1,2,6]
remove3Elements([6,5,4,3,2,1],4) should return [6,2,1]
remove3Elements([6,5,4,3,2,1],5) should return [3,2,1]
remove3Elements([6,5,4,3,2,1],7) should return []
remove3Elements([1,2,3],0) should return [1,2,3]
remove3Elements([1,2,3],1) should return []
remove3Elements([1,2,3,4,5,7,8,9,5,1,3,5,4,52,0],0) should return []

*/