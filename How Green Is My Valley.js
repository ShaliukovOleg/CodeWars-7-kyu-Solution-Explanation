// Solution / Решение

function makeValley(arr) {
  const sortedArr = arr.sort((a, b) => a - b); // Сортировка входящего массива по убыванию
  const valley = []; // Результирующий массив

  for (let i = 0; i < sortedArr.length; i++) {
    if (i % 2 === 0) {
      valley.push(sortedArr[i]); // Добавление элемента в конец результирующего массива для чётного индекса
    } else {
      valley.unshift(sortedArr[i]); // Добавление элемента в начало результирующего массива для нечётного индекса
    }
  }

  return valley.length % 2 === 0 ? valley : valley.reverse(); // Проверка на длинну массива, если она четная разворачиваем массив
}

// Solution 2 / Решение 2

function makeValley(arr) {
  const sortedArr = arr.sort((a, b) => a - b); // Сортировка входящего массива по возрастанию

  // Используем метод reduce для построения долины
  const valley = sortedArr.reduce((acc, val, idx) => {
    // Вставляем элементы в начало или конец результирующего массива в зависимости от индекса
    if (idx % 2 === 0) {
      acc.push(val); // Добавление элемента в конец результирующего массива для чётного индекса
    } else {
      acc.unshift(val); // Добавление элемента в начало результирующего массива для нечётного индекса
    }
    return acc;
  }, []);

  return valley.length % 2 === 0 ? valley : valley.reverse(); // Проверка на длинну массива, если она четная разворачиваем массив
}

// Solution 3 / Решение 3

function makeValley(arr) {
  const leftWing = []; // Массив для левой части
  const rightWing = []; // Массив для правой части
  arr
    .sort((a, b) => b - a) // Сортировка входящего массива
    .forEach(
      (
        val,
        idx // Перебор элементов массива по их индексу и разбивка его в две противоположные стороны
      ) =>
        idx % 2 === 0
          ? leftWing.push(val) // Добавление элемента в конец левой части массива
          : rightWing.unshift(val) // Добавление элемента в начало правой части массива
    );
  return leftWing.concat(rightWing); // Объединение частей массива
}

// Tests

console.log(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1])); // [ 20, 17, 12, 10,  4,  2, 1,  1,  2,  9, 12, 13, 18 ]
console.log(makeValley([20, 16, 14, 10, 1])); // [ 20, 14, 1, 10, 16 ]
console.log(makeValley([19, 8, 6])); // [ 19, 6, 8 ]

/*

Input : an array of integers.
Output : this array, but sorted in such a way that there are two wings:
the left wing with numbers decreasing,
the right wing with numbers increasing.
the two wings have the same length. If the length of the array is odd the wings are around the bottom, 
if the length is even the bottom is considered to be part of the right wing.
each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. 
In other words the right wing must be nearly as steep as the left wing.

The function is make_valley or makeValley or make-valley.

a = [79, 35, 54, 19, 35, 25]
make_valley(a) --> [79, 35, 25, *19*, 35, 54]
The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
79..................54
    35..........35
        25. 
          ..19

a = [67, 93, 100, -16, 65, 97, 92]
make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
100.........................97
    93..........
               .........92
        67......
               .....65
            -16     

a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
The bottom is -82, left wing is [100, 68, 55, 38, 12]], 
right wing is [*-82*, 12, 46, 66, 72].

a = [14,14,14,14,7,14]
make_valley(a) => [14, 14, 14, *7*, 14, 14]

a = [14,14,14,14,14]
make_valley(a) => [14, 14, *14*, 14, 14]

A counter-example:

a = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]
A solution could be [17, 17, 15, 14, 8, 1, 4, 4, 5, 7, 7]
but the right wing [4, 4, 5, 7, 7] is much flatter than the left one 
[17, 17, 15, 14, 8].

Summing the differences between left and right wing:
(17-7)+(17-7)+(15-5)+(14-4)+(8-4) = 44

Consider the following solution:
[17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
Summing the differences between left and right wing:
(17-17)+(15-14)+(8-7)+(7-5)+(4-4) = 4
The right wing is nearly as steep as the right one.

*/

/*

Вход: массив целых чисел.
Выходные данные: этот массив, но отсортированный таким образом, что есть два крыла:
левое крыло с уменьшающимися числами,
правое крыло с возрастающими числами.
Оба крыла имеют одинаковую длину. Если длина массива нечетная, то крылья находятся внизу, 
если длина четная, то дно считается частью правого крыла.
Каждое целое число l в левом крыле должно быть больше или равно его аналогу r в правом крыле, причем разница l - r должна быть как можно меньше. 
Другими словами, правое крыло должно быть почти таким же крутым, как и левое.

Функция - make_valley или makeValley или make-valley.

a = [79, 35, 54, 19, 35, 25]
make_valley(a) --> [79, 35, 25, *19*, 35, 54]
Дно - 19, левое крыло - [79, 35, 25], правое крыло - [*19*, 35, 54].
79..................54
    35..........35
        25. 
          ..19

a = [67, 93, 100, -16, 65, 97, 92]
make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
Дно равно -16, левое крыло [100, 93, 67] и правое крыло [65, 92, 97] имеют одинаковую длину.
100.........................97
    93..........
               .........92
        67......
               .....65
            -16     

a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
Дно -82, левое крыло - [100, 68, 55, 38, 12]], 
правое крыло - [*-82*, 12, 46, 66, 72].

a = [14,14,14,14,7,14]
make_valley(a) => [14, 14, 14, *7*, 14, 14]

a = [14,14,14,14,14]
make_valley(a) => [14, 14, *

*/
