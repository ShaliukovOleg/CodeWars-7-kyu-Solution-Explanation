// Solution / Решение

const maxGap = numbers =>
    Math.max( // Используем Math.max для нахождения максимального значения в массиве
        ...numbers // Используем spread-оператор для передачи отсортированного массива чисел в Math.max
            .sort((a, b) => a - b) // Сортируем массив чисел по возрастанию
            .map((num, idx, arr) =>
                // Для каждого элемента в массиве вычисляем разницу с последующим элементом
                ++idx < arr.length ? arr[idx] - num : 0
            )
    );

// Tests

console.log(maxGap([-7, -42, -809, -14, -12])); // 767
console.log(maxGap([12, -5, -7, 0, 290])); // 278
console.log(maxGap([-54, 37, 0, 64, -15, 640, 0])); // 576

/*

Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series

Task
Given an array/list [] of integers , 
Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives and negatives also zeros_
Repetition of numbers in the array/list could occur.
The Maximum Gap is computed Regardless the sign.

Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .

maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .
Note : Regardless the sign of negativity.

maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .
Note : Regardless the sign of negativity.

maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .
Note : Regardless the sign of negativity.

*/

/*

Введение и разминка (настоятельно рекомендуется)
Серия "Играем со списками/массивами


Задача
Дан массив/список [] целых чисел, 
Найти максимальную разность между последовательными элементами в отсортированном виде.


Примечания
Размер массива/списка должен быть не менее 3.
Числа в массиве/списке будут состоять из положительных и отрицательных чисел, а также нулей.
Возможно повторение чисел в массиве/списке.
Максимальный разрыв вычисляется без учета знака.


Примеры ввода >> вывода
maxGap ({13,10,5,2,9}) ==> return (4)
Пояснения:
Максимальный зазор после сортировки массива равен 4, разница между 9 и 5 = 4.


maxGap ({-3,-27,-4,-2}) ==> return (23)
Пояснения:
Максимальный разрыв после сортировки массива равен 23 , Разница между |-4- (-27)| = 23 .
Примечание: Независимо от знака отрицания.


maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Пояснения:
Максимальный зазор после сортировки массива равен 767 , Разница между | -809- (-42)| = 767 .
Примечание: Независимо от знака отрицания.


maxGap ({-54,37,0,64,640,0,-15}) // return (576)
Пояснения:
Максимальный зазор после сортировки массива равен 576 , Разница между | 64 - 640 | = 576.
Примечание: Независимо от знака отрицания.

*/