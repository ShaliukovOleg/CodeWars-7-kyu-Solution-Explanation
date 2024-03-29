// Solution / Решение

function solution(start, finish) {
  let jumps = 0; // Инициализация переменной для хранения количества прыжков
  // Цикл for используется для выполнения итераций от start до finish (не включительно)
  // i - переменная, которая будет изменяться от start до finish - 1
  // Выражение finish - i < 3 ? 1 : 3 используется для определения шага изменения переменной i
  // Если разница между finish и текущим значением i меньше 3, шаг равен 1, иначе шаг равен 3
  for (let i = start; i < finish; i += finish - i < 3 ? 1 : 3) {
    jumps++; // Увеличение счетчика прыжков при каждой итерации цикла
  }
  return jumps; // Возвращается общее количество прыжков
}

// Tests

console.log(solution(1, 5)); // 2
console.log(solution(2, 150)); // 50
console.log(solution(867, 1415)); // 184

/*

Description
An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 
(the cat cannot climb on the shelf directly above its head), according to the illustration:

                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐       
│------5-│        
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │     
BANG!────┘  ├─────► OK! 
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘
Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

*/

/*

Описание
Бесконечное количество полок расположены одна над другой в шахматном порядке.
Кошка может перепрыгнуть либо одну, либо три полки за раз: с полки i на полку i+1 или i+3 
(кошка не может забраться на полку, расположенную прямо над ее головой), в соответствии с рисунком:

                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐       
│------5-│        
└────────┘ ┌─────► OK!
            │ ┌────────┐
            │ │-4------│
            │ └────────┘
┌────────┐ │
│------3-│ │     
BANG!────┘ ├─────► OK! 
  ▲ |\_/| │ ┌────────┐
  │ ("^-^) │ │-2------│
  │ ) ( │ └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘
Вход
Стартовый и финишный номера полок (всегда положительные целые числа, финишный не меньше стартового)

Задача
Найти минимальное количество прыжков для перехода от старта к финишу

Пример
Старт 1, финиш 5, тогда ответ 2 (1 => 4 => 5 или 1 => 2 => 5)

*/
