// Solution / Решение

const swapDiagonals = matrix => { 
    return res = matrix // Возвращаем результат операции.
        .map((row, i) => row // Используем метод map для преобразования каждой строки матрицы.
            .map((val, j) => (i === j || i + j === row.length - 1) // Проверяем, находится ли элемент на одной из диагоналей.
                ? row[row.length - 1 - j] // Если да, меняем элемент на соответствующий элемент с противоположной диагонали.
                : val // Иначе оставляем элемент без изменений.
            )
        );
};

// Tests

console.log(swapDiagonals( [[1,10],  [100,1000]])); // [ [ 10, 1 ], [ 1000, 100 ] ]
console.log(swapDiagonals([[1,2,3],  [4,5,6],  [7,8,9]])); // [ [ 3, 2, 1 ], [ 4, 5, 6 ], [ 9, 8, 7 ] ]
console.log(swapDiagonals([[43,455,32,103],  [102,988,298,981],  [309,21,53,64], [2,22,35,291]])); // [ [ 103, 455, 32, 43 ], [ 102, 298, 988, 981 ], [ 309, 53, 21, 64 ], [ 291, 22, 35, 2 ] ]

/*

Task
The longest diagonals of a square matrix are defined as follows:

the first longest diagonal goes from the top left corner to the bottom right one;
the second longest diagonal goes from the top right corner to the bottom left one.
Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.

Example

For
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

the output should be

[[3, 2, 1],
 [4, 5, 6],
 [9, 8, 7]]

Input/Output
[input] 2D integer array matrix

Constraints: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000.
[output] 2D integer array
Matrix with swapped diagonals.

*/

/*

Задача
Самые длинные диагонали квадратной матрицы определяются следующим образом:

первая длиннейшая диагональ проходит из левого верхнего угла в правый нижний;
вторая длинная диагональ проходит из правого верхнего угла в левый нижний.
Дана квадратная матрица, ваша задача - поменять местами ее самые длинные диагонали, поменяв местами элементы в соответствующих позициях.

Пример

Для
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

на выходе должно получиться

[[3, 2, 1],
 [4, 5, 6],
 [9, 8, 7]]

Вход/выход
[вход] Двумерная матрица целочисленного массива

Ограничения: 1 ≤ matrix.length ≤ 10, matrix.length = matrix[i].length, 1 ≤ matrix[i][j] ≤ 1000.
[выход] Двумерный целочисленный массив
Матрица с поменявшимися местами диагоналями.

*/