// Solution / Решение

function rotate(rows) {
    let index; // Инициализация переменной для хранения индекса начальной плитки.
    return rows // Возвращаем новый массив после преобразования.
        .map((row, i) => ( // Используем метод map для преобразования каждой строки в новое значение.
            i === 0 && (index = row.indexOf('.')), // Если это первая строка и в ней есть точка, устанавливаем index.
            row.indexOf('.') - index // Возвращаем разницу между индексом текущей точки и index.
        ));
}

// Short version

const rotate = rows => rows.map(row => row.indexOf('.'));

// Tests

const act = ([
    "x.xx",
    "x.xx",
    "...x",
    "xxx."
]);

console.log(rotate(act)); // [ 0, 0, -1, 2 ]

/*

    Task
"Given a scrambled path, return the rotations needed in horizontal direction to make a clear passage from top to bottom."
There is always at least one configuration possible. Multiple solutions may be possible. Any valid solution passes this kata.

Input
rows: an array of strings, each representing a row that needs to be rotated in order to make a clear passage from top to bottom.
'x': a wall
'.': a tile of path

Output
return an array of integers, specifying the amount of rotations required to make a clear passage when all rows have been rotated.
zero: no rotations
positive: number of rotations to the left
negative: number of rotations to the right

    Specification
Rotations
A rotation to the left, shifts all tiles to the left, adding the left most tiles back to the right.
A rotation to the right, shifts all tiles to the right, adding the right most tiles back to the left.

rows:     rotations: [0, 1, 0, -1]    clear passage:
xx.x      0                           xx.x
xxx.      1     // rotate left        xx.x
xx.x      0                           xx.x
x.xx     -1     // rotate right       xx.x

Clear Passage
a clear passage is formed when there is a continous path possible from any tile and the top row to any tile at the bottom row
a continous path is formed by having a chain of adjacent tiles in any of the 4 directions (up, down, left, right);

Clear passages:
xx.x    .xxx
xx.x    ...x 
x..x    xx.x
        xx.x

    Input Constraints
100 tests with 3 <= height <= 5 and 3 <= width <= 5
100 tests with 6 <= height <= 8 and 2 <= width <= 3
100 tests with 2 <= height <= 3 and 6 <= width <= 8
100 tests with 8 <= height <= 12 and 8 <= width <= 12
100 tests with 10 <= height <= 100 and 10 <= width <= 100
10 tests with 100 <= height <= 200 and 100 <= width <= 200
10 tests with 200 <= height <= 300 and 200 <= width <= 300
10 tests with 300 <= height <= 400 and 300 <= width <= 400
5 tests with 400 <= height <= 500 and 400 <= width <= 500

    Examples
Straight path - clear

rows:     rotations: [0, 0, 0, 0]   clear passage:

x.xx      0                         x.xx
x.xx      0                         x.xx
x.xx      0                         x.xx
x.xx      0                         x.xx

Straight path - scrambled

rows:     rotations: [1, 0, 0, -2]  clear passage:

xx.x      1                         x.xx
x.xx      0                         x.xx
x.xx      0                         x.xx
xxx.     -2                         x.xx

Complex path - clear

rows:     rotations: [0, 0, 0, 0]   clear passage:

x.xx      0                         x.xx 
x.xx      0                         x.xx 
x...      0                         x... 
xxx.      0                         xxx.

Complex path - scrambled

rows:     rotations: [0, 0, -1, 0]  clear passage:

x.xx      0                         x.xx 
x.xx      0                         x.xx 
...x     -1                         x... 
xxx.      0                         xxx.

*/

/*

Задача
"Учитывая запутанную траекторию, найдите повороты, необходимые для того, чтобы сделать проход сверху вниз по горизонтали".
Всегда существует хотя бы одна возможная конфигурация. Возможно несколько решений. Любое правильное решение позволяет пройти это ката.

Вход
rows: массив строк, каждая из которых представляет ряд, который нужно повернуть, чтобы сделать свободный проход сверху вниз.
'x': стена
'.': плитка пути

Выход
возвращает массив целых чисел, указывающих количество поворотов, 
необходимых для создания свободного прохода, когда все ряды повернуты.
ноль: никаких вращений
положительный: количество поворотов влево
отрицательный: количество поворотов вправо

    Спецификация
Вращения
При повороте влево все плитки сдвигаются влево, добавляя наибольшие левые плитки обратно вправо.
При повороте вправо все плитки сдвигаются вправо, добавляя наибольшее количество правых плиток обратно влево.

rows: rotations: [0, 1, 0, -1] чистый проход:
xx.x 0 xx.x
xxx.      1 // повернуть влево xx.x
xx.x 0 xx.x
x.xx -1 // повернуть направо xx.x

Чистый проход
чистый проход образуется, если существует непрерывный путь от любой плитки верхнего ряда до любой плитки нижнего ряда
непрерывный путь образуется при наличии цепочки соседних плиток в любом из 4 направлений (вверх, вниз, влево, вправо);

Чистые проходы:
xx.x .xxx
xx.x ...x 
x..x xx.x
        xx.x

    Входные ограничения
100 тестов с 3 <= высотой <= 5 и 3 <= шириной <= 5
100 тестов с 6 <= высотой <= 8 и 2 <= шириной <= 3
100 тестов с 2 <= высотой <= 3 и 6 <= шириной <= 8
100 тестов с 8 <= высотой <= 12 и 8 <= шириной <= 12
100 тестов с 10 <= высотой <= 100 и 10 <= шириной <= 100
10 тестов с 100 <= высотой <= 200 и 100 <= шириной <= 200
10 тестов с 200 <= высотой <= 300 и 200 <= шириной <= 300
10 тестов с 300 <= высотой <= 400 и 300 <= шириной <= 400
5 тестов с 400 <= высотой <= 500 и 400 <= шириной <= 500

    Примеры
Прямой путь - clear

rows:     rotations: [0, 0, 0, 0]   clear passage:

x.xx      0                         x.xx
x.xx      0                         x.xx
x.xx      0                         x.xx
x.xx      0                         x.xx

Прямой путь - scrambled

rows:     rotations: [1, 0, 0, -2]  clear passage:

xx.x      1                         x.xx
x.xx      0                         x.xx
x.xx      0                         x.xx
xxx.     -2                         x.xx

Сложный путь - clear

rows:     rotations: [0, 0, 0, 0]   clear passage:

x.xx      0                         x.xx 
x.xx      0                         x.xx 
x...      0                         x... 
xxx.      0                         xxx.

Сложный путь - scrambled

rows:     rotations: [0, 0, -1, 0]  clear passage:

x.xx      0                         x.xx 
x.xx      0                         x.xx 
...x     -1                         x... 
xxx.      0                         xxx.

*/