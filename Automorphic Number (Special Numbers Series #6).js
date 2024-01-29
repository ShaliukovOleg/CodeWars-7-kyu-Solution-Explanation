// Solution / Решение

function automorphic(n) {
  return (n * n)
    .toString() // Преобразуем в строку
    .endsWith(n) // Сравниваем последнюю часть строки с изначальным числом
    ? "Automorphic" // Вернем в случае успеха
    : "Not!!"; // Вернем в случае провала
}

// Tests

console.log(automorphic(25)); // Automorphic
console.log(automorphic(53)); // Not!!
console.log(automorphic(76)); // Automorphic

/*

Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

*/

/*

Определение
Число называется автоморфным тогда и только тогда, когда его квадрат оканчивается теми же цифрами, что и само число.

Задание
По заданному числу определите, является ли оно автоморфным или нет.

*/
