// Solution / Решение

function sectSort(array, start, length) {
    const left = array.splice(0, start); // левую часть в отдельный массив
    const right = length ? array.splice(length) : []; // правую часть в отдельный массив
    const section = array.sort((a, b) => a - b); // Сортируем оставшуюся секцию 
    return [...left, ...section, ...right]; // разворачиваем все части в массив и возвращаем его
}

// Tests

console.log(sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5)); // [ 9, 7, 1, 2, 3, 4, 5, 8, 6 ]

/*

In this kata you are given an array to sort but you're expected to start sorting from 
a specific position of the array (in ascending order) 
and optionally you're given the number of items to sort.

Examples:
sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2) //=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5) //=> [9, 7, 1, 2, 3, 4, 5, 8, 6]

Documentation:
sectSort(array, start, length);
array - array to sort
start - position to begin sorting
length - number of items to sort (optional)

if the length argument is not passed or is zero, 
you sort all items to the right of the start position in the array

*/

/*

В этом ката вам дается массив для сортировки, но вы должны начать сортировку с 
определенной позиции массива (в порядке возрастания) 
и, в качестве опции, вам дается количество элементов для сортировки.

Примеры:
sectSort([1, 2, 5, 7, 4, 6, 3, 9, 8], 2) //=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
sectSort([9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5) //=> [9, 7, 1, 2, 3, 4, 5, 8, 6]

Документация:
sectSort(array, start, length);
массив - массив для сортировки
start - позиция для начала сортировки
length - количество элементов для сортировки (необязательно)

Если аргумент length не передан или равен нулю, 
вы отсортируете все элементы справа от начальной позиции в массиве

*/