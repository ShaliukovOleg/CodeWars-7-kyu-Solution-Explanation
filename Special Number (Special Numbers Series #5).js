// Solution / Решение

function specialNumber(n) {
  return `${n}`
    .split("") // Преобразуем число в массив
    .every((d) => Number(d) <= 5) // Проверяем каждое значение на соотвествие условию
    ? "Special!!" // Возвращаем в случае успешной проверки
    : "NOT!!"; // Возвращаем в случае провальной проверки
}

// Solution 2 / Решение 2

function specialNumber(n) {
  return /^[0-5]*$/ // Используем регулярное выражение для проверки значений числа
    .test(n + "") // Каждое значение перед проверкой преобразуем в строку
    ? "Special!!" // Возвращаем в случае успешной проверки
    : "NOT!!"; // Возвращаем в случае провальной проверки
}

// Tests

console.log(specialNumber(11)); // Special!!
console.log(specialNumber(55)); // Special!!
console.log(specialNumber(26)); // NOT!!

/*

Definition
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
Given a number determine if it special number or not .

Warm-up (Highly recommended)
Playing With Numbers Series

Notes
The number passed will be positive (N > 0) .
All single-digit numbers within the interval [1:5] are considered as special number.

Input >> Output Examples

specialNumber(2) ==> return "Special!!"
Explanation:
It's a single-digit number within the interval [1:5] .

specialNumber(9) ==> return "NOT!!"
Explanation:
Although, it's a single-digit number but Outside the interval [1:5] .

specialNumber(23) ==> return "Special!!"
Explanation:
All the number's digits formed from the interval [0:5] digits .

specialNumber(39) ==> return "NOT!!"
Explanation:
Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

specialNumber(59) ==> return "NOT!!"
Explanation:
Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .

specialNumber(513) ==> return "Special!!"
specialNumber(709) ==> return "NOT!!"

*/

/*

Определение
Число является особым, если его цифры состоят только из 0, 1, 2, 3, 4 или 5.
По заданному числу определите, является ли оно особым числом или нет.

Разминка (настоятельно рекомендуется)
Серия "Играем с числами

Примечания
Передаваемое число должно быть положительным (N > 0).
Все одноразрядные числа в интервале [1:5] считаются особым числом.

Примеры ввода >> вывода

specialNumber(2) ==> return "Special!!!"
Пояснение:
Это однозначное число в интервале [1:5] .

specialNumber(9) ==> return "NOT!!!"
Пояснение:
Хотя это и однозначное число, но вне интервала [1:5] .

specialNumber(23) ==> return "Special!!!"
Пояснение:
Все цифры числа образованы из цифр интервала [0:5] .

specialNumber(39) ==> return "NOT!!!"
Пояснение:
Хотя в интервале есть цифра (3), но второй цифры нет (Должны быть ВСЕ цифры числа) .

specialNumber(59) ==> return "NOT!!!"
Объяснение:
Хотя в интервале есть цифра (5), но второй цифры нет (Должны быть ВСЕ цифры числа ) .

specialNumber(513) ==> return "Special!!!"
specialNumber(709) ==> return "NOT!!!"

*/
