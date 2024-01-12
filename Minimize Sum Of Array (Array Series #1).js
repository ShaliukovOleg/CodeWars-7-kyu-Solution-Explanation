// Solution / Решение

function minSum(arr) {
    return arr
        .sort((a, b) => a - b) // Сортируем элементы массива
        .reduce((sum, elem) => elem * arr.pop() + sum, 0); // берем первый элемент и умножаем его на последний элемент и добавляем его к сумме
}

// Tests

console.log(minSum([5,4,2,3])); // 22
console.log(minSum([12,6,10,26,3,24])); // 342
console.log(minSum([9,2,8,7,5,4,0,6])); // 74

/*

Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series

Task
Given an array of integers , 
Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size

Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 

Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)

Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)

Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

*/

/*

Введение и разминка (настоятельно рекомендуется)
Серия "Играем со списками/массивами

Задача
Дан массив целых чисел, 
Найдите минимальную сумму, которая получается при суммировании произведения каждых двух целых чисел.

Примечания
Массив/список будет содержать только положительные числа.
Массив/список всегда будет иметь четный размер

Вход >> Выход Примеры
minSum({5,4,2,3}) ==> return (22) 

Пояснение:
Минимальная сумма, полученная при суммировании произведения каждых двух целых чисел, 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)

Пояснения:
Минимальная сумма, полученная при суммировании произведения двух целых чисел , 26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)

Пояснения:
Минимальная сумма, полученная при суммировании произведения двух целых чисел , 9*0 + 8*2 +7*4 +6*5 = 74

*/