// Solution / Решение

function maxTriSum(numbers) {
    return [...new Set(numbers)] // Возвращаем только уникальные элементы массива
        .sort((a, b) => b - a) // Сортируем оставшиеся элементы
        .splice(0, 3) // Вырезаем из массива три максимальных элемента согласно условию
        .reduce((a, b) => a + b); // Суммируем данные элементы
}

// Tests

console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])); // 18
console.log(maxTriSum([-3, -27, -4, -2, -27, -2])); // -9
console.log(maxTriSum([-14, -12, -7, -42, -809, -14, -12])); // -33

/*

Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .
Array/list numbers could be a mixture of positives , negatives and zeros .
Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples

1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order, their sum is (17)
Note : duplications are not included when summing , (i.e) the numbers added only once.

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order, their sum is (18),
Note : duplications are not included when summing , (i.e) the numbers added only once.

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order, their sum is (41),
Note : duplications are not included when summing , (i.e) the numbers added only once.

*/

/*

Задача
Если задан массив/список [] из n целых чисел, найдите максимальную сумму триплетов в массиве без дублирования.


Примечания :
Размер массива/списка не менее 3.
Массив/список может состоять из положительных, отрицательных и нулевых чисел.
Повторение чисел в массиве/списке может иметь место, поэтому (дубликаты не учитываются при суммировании).

Примеры ввода >> вывода

1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Пояснение:
Поскольку триплеты, максимизирующие сумму {6,8,3}, расположены по порядку, их сумма равна (17)
Примечание: при суммировании не учитываются дубликаты (т.е. числа, сложенные только один раз).

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> возврат (18)
Пояснение:
Поскольку триплеты максимизируют сумму {8, 6, 4} по порядку, их сумма равна (18),
Примечание: при суммировании не учитываются дубликаты (т.е. числа, сложенные только один раз).

3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> возврат (41)
Пояснение:
Поскольку триплеты максимизируют сумму {12 , 29 , 0} по порядку, их сумма равна (41),
Примечание: при суммировании не учитываются дубликаты (т.е. числа, сложенные только один раз).

*/