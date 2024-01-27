// Solution / Решение

function jumpingNumber(n) {
  return [...`${n}`].every(
    // Сравниваем каждое значение преобразованного числа в массив
    (e, i, arr) => i === 0 || Math.abs(arr[i - 1] - e) === 1 // Берем каждое значение массива и вычитаем соседний элемент и сравниваем его с 1
  )
    ? "Jumping!!" // Возвращаем в случае, если проверка пройдена
    : "Not!!"; // Возвращаем в случае, если проверка провалена
}

// Solution 2 / Решение 2

function jumpingNumber(n) {
  const digits = [...`${n}`]; // Преобразуем число в массив
  for (let i = 1; i < digits.length; i++) {
    // Сравниваем каждый элемент массива друг с другом по очереди
    if (Math.abs(digits[i - 1] - digits[i]) !== 1) {
      // Возвращаем положительное число и сравниваем его с 1
      return "Not!!"; // Если хоть одно число равно 1, то вернем Not
    }
  }
  return "Jumping!!"; // Если число "прыгающее", то вернем Jumping!!
}

// Tests

console.log(jumpingNumber(23)); // Jumping!!
console.log(jumpingNumber(32)); // Jumping!!
console.log(jumpingNumber(79)); // Not!!

/*

Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not.

*/

/*

Определение
Прыгающее число - это число, в котором все соседние цифры отличаются на 1.

Задание
Задано число, найдите, является ли оно прыгающим или нет.

*/
