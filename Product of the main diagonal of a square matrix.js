// Solution / Решение

function mainDiagonalProduct(mat) {
    let result = 1; // для хранения результата произведения
    for (let i = 0; i < mat.length; ++i) { // Цикл по индексам строк
        result *= mat[i][i]; // проходим каждый элемент, который соответсвует критерию 
    }
    return result; // возвращаем результат
}

// Short version

const mainDiagonalProduct = mat => mat.reduce((acc, num, index) => acc * num[index], 1);

// Tests

console.log(mainDiagonalProduct([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 45
console.log(mainDiagonalProduct([[15, 25, 37], [28, 15, 12], [53, 18, 15]])); // 3375
console.log(mainDiagonalProduct([[5, 25, 37], [28, 5, 12], [53, 18, 5]])); // 125

/*
Main diagonal
[(1),  2 ,  3 ], 
[ 4 , (5),  6 ], 
[ 7 ,  8 , (9)] => 1 5 9 
*/

/*

Given a list of rows of a square matrix, 
find the product of the main diagonal.

Examples:
[[1, 0], [0, 1]] should return 1
[[1, 2, 3], [4, 5, 6], [7, 8, 9]] should return 45

*/

/*

Дан список строк квадратной матрицы, 
найдите произведение главной диагонали.

Примеры:
[[1, 0], [0, 1]] должно вернуть 1
[[1, 2, 3], [4, 5, 6], [7, 8, 9]] должно вернуть 45

*/