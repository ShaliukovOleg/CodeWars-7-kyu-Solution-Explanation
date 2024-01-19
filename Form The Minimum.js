// Solution / Решение

function minValue(values) {
    return +[...new Set(values)] // Фильтруем уникальные значения
        .sort((a, b) => a - b) // сортируем от меньшего к большему
        .join``; // Собираем массив в строку и преобразуем в число с помощью унарного оператора "+"
}

// Short version

const minValue = arr => +[...new Set(arr)].sort().join``;

// Tests

console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])); // 134679
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])); // 356789
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // 1

/*

Task
Given a list of digits, return the smallest number that could be formed from these digits, 
using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

*/

/*

Задача
Задав список цифр, верните наименьшее число, которое может быть образовано из этих цифр, 
используя цифры только один раз (дубликаты игнорировать).

Примечания:
В функцию передаются только положительные целые числа (> 0 ), никаких отрицательных или нулей.

Примеры ввода >> вывода
minValue ({1, 3, 1}) ==> return (13)
Пояснение:
(13) - это минимальное число, которое можно составить из {1, 3, 1}, без дубликатов

minValue({5, 7, 5, 9, 7}) ==> return (579)
Пояснение:
(579) - это минимальное число, которое может быть образовано из {5, 7, 5, 9, 7} , без дубликатов

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return ==> (134679)
Пояснение:
(134679) - это минимальное число, которое можно составить из {1, 9, 3, 1, 7, 4, 6, 6, 7} , без дубликатов

*/