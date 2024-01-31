// Solution / Решение

function tidyNumber(n) {
  return (
     n.toString() // Преобразуем в строку
      .split("") // Преобразуем в массив
      .sort() // Сортируем и объединяем
      .join(``) === `${n}`
  ); // Сравниваем с вводным числом возвращаем true или false
}

// Tests

console.log(tidyNumber(9672)); // false
console.log(tidyNumber(2789)); // true
console.log(tidyNumber(2335)); // true

/*

Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not.

*/

/*

Определение
Аккуратное число - это число, цифры которого расположены в неубывающем порядке.

Задание
Задано число, найдите, является ли оно аккуратным или нет.

*/
