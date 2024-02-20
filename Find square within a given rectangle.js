// Solution / Решение

function innerSquare(rect, center, side) {
    const result = []; // Для хранения результата
    const centerY = rect.findIndex(row => row.includes(center)); // Находим индекс строки, содержащей центральный элемент
    const centerX = rect[centerY].indexOf(center); // Находим индекс столбца, содержащего центральный элемент
    const spread = Math.floor((side - 1) / 2); // Вычисляем "распространение" стороны квадрата
    let currentRow = centerY - spread; // Начальная строка для поиска элементов квадрата

    for (let i = 0; i < side; i++) { // Итерируем через строки квадрата
        const currentRowIndex = rect[currentRow]; // Получаем текущую строку по индексу
        if (currentRowIndex) { // Проверяем, существует ли текущая строка (не выходит ли за пределы прямоугольника)
            result.push(currentRowIndex.slice( // Добавляем часть текущей строки к результату, ограничивая столбцы от и до
                Math.max(centerX - spread, 0), // Нижняя граница столбца
                Math.min(centerX + spread + 1, rect[currentRow].length) // Верхняя граница столбца
            ));
        }
        currentRow++; // Переходим к следующей строке
    }
    return result; // Возвращаем результат
}

// Reduce method

function innerSquare(rect, center, side) {
    const centerY = rect.findIndex(row => row.includes(center));
    const centerX = rect[centerY].indexOf(center);
    const spread = Math.floor((side - 1) / 2);
    let currentRow = centerY - spread;

    // Используем reduce для построения квадрата
    const result = Array.from({ length: side }).reduce((acc, _, i) => {
        const currentRowIndex = rect[currentRow + i];
        if (currentRowIndex) {
            acc.push(currentRowIndex.slice(
                Math.max(centerX - spread, 0),
                Math.min(centerX + spread + 1, currentRowIndex.length)
            ));
        }
        return acc;
    }, []);

    return result;
}

// Tests

let a = [[0, 1, 2, 3, 4, 5],
[6, 7, 8, 9, 10, 11],
[12, 13, 14, 15, 16, 17],
[18, 19, 20, 21, 22, 23],
[24, 25, 26, 27, 28, 29],
[30, 31, 32, 33, 34, 35],
[36, 37, 38, 39, 40, 41]];

console.log(innerSquare(a, 34, 1)); // [ [ 34 ] ]
console.log(innerSquare(a, 41, 5)); // [ [ 27, 28, 29 ], [ 33, 34, 35 ], [ 39, 40, 41 ] ]
console.log(innerSquare(a, 30, 5)); // [ [ 18, 19, 20 ], [ 24, 25, 26 ], [ 30, 31, 32 ], [ 36, 37, 38 ] ]

/*

Introduction
You are going to be given an array of arrays of integers as a first argument, 
which represents a rectangle. As a second and third arguments you will be given center and side(length) of the inner square. 
Your task is to find inner square.

Let's move on to examples, so it will be easier to understand.

Examples
let rect = [[0, 1, 2, 3, 4],
           [5, 6, 7, 8, 9],
           [10, 11, 12, 13, 14],
           [15, 16, 17, 18, 19],
           [20, 21, 22, 23, 24]];
let res1 = innerSquare(rect, 12, 3), res2 = innerSquare(rect, 14, 3), res3 = innerSquare(rect, 0, 3);

Results:

res1 // [[6, 7, 8], [11, 12, 13], [16, 17, 18]]
res2 // [[8, 9], [13, 14], [18, 19]]
res3 // [[0, 1], [5, 6]]
If the square is outside the boundaries of the rectangle, then it is clipped, as shown on the image.

Task
Write a function that returns array of arrays of integers which represents a inner square.

Notes:

rect: 3 <= rows <= 10, 3 <= cols <= 10
rect[0] <= center <= rect[rect.length - 1]
0 < side < 10 - always an odd number
There are more examples in test cases.

*/

/*

Введение
В качестве первого аргумента вам будет дан массив массивов целых чисел, 
который представляет собой прямоугольник. В качестве второго и третьего аргументов вам будут даны центр и сторона(длина) внутреннего квадрата. 
Ваша задача - найти внутренний квадрат.

Давайте перейдем к примерам, чтобы было проще разобраться.

Примеры
let rect = [[0, 1, 2, 3, 4],
           [5, 6, 7, 8, 9],
           [10, 11, 12, 13, 14],
           [15, 16, 17, 18, 19],
           [20, 21, 22, 23, 24]];
пусть res1 = innerSquare(rect, 12, 3), res2 = innerSquare(rect, 14, 3), res3 = innerSquare(rect, 0, 3);

Результаты:

res1 // [[6, 7, 8], [11, 12, 13], [16, 17, 18]]
res2 // [[8, 9], [13, 14], [18, 19]]
res3 // [[0, 1], [5, 6]]
Если квадрат выходит за границы прямоугольника, то он обрезается, как показано на рисунке.

Задание
Напишите функцию, возвращающую массив целых чисел, который представляет собой внутренний квадрат.

Примечания:

rect: 3 <= rows <= 10, 3 <= cols <= 10
rect[0] <= center <= rect[rect.length - 1]
0 < side < 10 - всегда нечетное число
Больше примеров можно найти в тестовых примерах.

*/