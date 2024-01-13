// Solution / Решение

function maxProduct(numbers, size) {
    return numbers
        .sort((a, b) => a - b) // Сортируем массив от меньшего к большему
        .slice(numbers.length - size) // Возвращаем часть массива согласно переданным в переменную size размерам
        .reduce((a, b) => a * b); // Перемножаем элементы оставшейся части массива
}

// Tests

console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5)); // 9600
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)); // 247895375
console.log(maxProduct([-4, -27, -15, -6, -1], 2)); // 4

/*

Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series

Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)

Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)

Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)

Explanation:
Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)

Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
maxProduct ({10, 3, -1, -27} , 3)  return (-30)

Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .

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