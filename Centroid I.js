// Solution / Решение

function centroid(c) {
    const resultArr = [0, 0, 0]; // Инициализация массива результатов с нулевыми значениями

    for (let i = 0; i < c.length; i++) { // Проходим по массиву точек
        for (let j = 0; j < c[i].length; j++) { // Проходим по каждому внутреннему массиву по индексу
            resultArr[j] += c[i][j]; // Суммируем значения для каждого измерения
        }
    }
    // Вычисляем среднее значение для каждого измерения и округляем до двух знаков после запятой
    return resultArr.map(elem => +(elem / c.length).toFixed(2));
}

// Short version

const centroid = c => c[0].map((_, index) => +(c.reduce((acc, c) => acc + c[index], 0) / c.length).toFixed(2));

// Tests

console.log(centroid([[1, 0, 5], [0, 1, 5], [2, 2, 5]])); // [ 1, 1, 5 ]
console.log(centroid([[7, 0, 5], [3, 1, 5], [2, 1, 5]])); // [ 4, 0.67, 5 ]

/*

Write a function centroid(c) to calculate the centroid of 3D coordinates.
Return the results as a list of floats. Round the values to two decimal places.

*/

/*

Напишите функцию centroid(c) для вычисления центроида трехмерных координат.
Верните результаты в виде списка плавающих чисел. Округлите значения до двух знаков после запятой.

*/