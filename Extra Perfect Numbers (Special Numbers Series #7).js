// Solution / Решение

function extraPerfect(n) {
  const result = []; // Переменная для результата
  for (let i = 1; i <= n; i += 2) { // Цикл с шагом кратным +2
    result.push(i); // Добавляем каждый элемент до значения n, переданного в качестве аргумента в функцию
  }
  return result; // Возвращаем результат
}

// Short version

const extraPerfect = n => Array.from({ length: Math.ceil(n / 2) }, (_, index) => index * 2 + 1);

// Tests

console.log(extraPerfect(7)); // [1,3,5,7]
console.log(extraPerfect(28)); // [1,3,5,7,9,11,13,15,17,19,21,23,25,27]
console.log(extraPerfect(39)); // [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]

/*

Definition
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N.

*/

/*

Определение
Сверхсовершенное число - это число, в котором первый и последний биты являются установленными битами.

Задача
Дано целое положительное число N , верните сверхсовершенные числа в диапазоне от 1 до N.

*/
