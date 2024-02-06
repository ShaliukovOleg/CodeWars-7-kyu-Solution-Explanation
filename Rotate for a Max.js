// Solution / Решение

function maxRot(n) {
  return Math.max( // Возвращает максимальное значение из массива чисел
    ...(n = String(n).split("")) // Преобразует число в строку, разбивает строку на массив символов
      .reduce( // Применяет функцию к аккумулятору и каждому значению массива, возвращает одно результирующее значение
        (r, _, i) => // Функция для reduce, принимает аккумулятор (r), текущий элемент (_), индекс (i)
          r.concat([ // Добавляет текущее измененное число в массив результатов
            r[i] // Возвращает элемент массива с индексом i
              .slice(0, i) // Отрезает часть массива до индекса i
              .concat(r[i].slice(i + 1)) // Добавляет часть массива после индекса i
              .concat(r[i].slice(i, i + 1)), // Добавляет элемент массива с индексом i (вращение числа)
          ]),
        [n] // Начальное значение аккумулятора - массив, содержащий исходное число
      )
      .map((e) => e.join("")) // Преобразует каждый подмассив в строку и возвращает массив строк
  );
}

// Solution 2 / Решение 2

function maxRot(n) {
  let result = n; // Создаем переменную result и присваиваем ей значение аргумента n
  let nStr = String(n); // Преобразуем число n в строку и сохраняем его в переменную nStr
  for (let i = 0; i < nStr.length - 1; i++) { // Начинаем цикл, который выполняется для каждой позиции числа, кроме последней
    // Вращаем число на текущей позиции: переносим символ с позиции i+1 в конец строки
    // (с помощью slice), а символ с позиции i удаляем из строки
    nStr = nStr.slice(0, i) + nStr.slice(i + 1) + nStr[i];
    result = Math.max(result, parseInt(nStr)); // Преобразуем новое число (после вращения) из строки в целое число и сравниваем с result, заменяем result на большее из двух чисел
  }
  return result; // Возвращаем результат после всех вращений
}

// Tests

console.log(maxRot(195881031)); // 988103115
console.log(maxRot(896219342)); // 962193428
console.log(maxRot(69418307)); // 94183076

/*

Let us begin with an example:

Take a number: 56789. Rotate left, you get 67895.

Keep the first digit in place and rotate left the other digits: 68957.
Keep the first two digits in place and rotate the other ones: 68579.
Keep the first three digits and rotate left the rest: 68597. 
Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers:

56789 -> 67895 -> 68957 -> 68579 -> 68597
and you must return the greatest: 68957.

Task
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

So max_rot (or maxRot or ... depending on the language) is such as:
max_rot(56789) should return 68957
max_rot(38458215) should return 85821534

*/

/*

Давайте начнем с примера:

Возьмем число: 56789. Поверните его влево, и вы получите 67895.

Сохраните первую цифру на месте и поверните влево остальные цифры: 68957.
Сохраните первые две цифры на месте и поверните остальные: 68579.
Сохраните первые три цифры и поверните влево остальные: 68597. 
Теперь все кончено, так как при сохранении первых четырех остается только одна цифра, которая поворачивается сама.

Получилась следующая последовательность чисел:

56789 -> 67895 -> 68957 -> 68579 -> 68597
и вы должны вернуть наибольшее из них: 68957.

Задание
Напишите функцию max_rot(n), которая при заданном положительном целом n возвращает максимальное число, полученное при выполнении вращений, аналогичных приведенному выше примеру.

Таким образом, max_rot (или maxRot, или ... в зависимости от языка) будет выглядеть так:
max_rot(56789) должен вернуть 68957
max_rot(38458215) должен вернуть 85821534

*/
