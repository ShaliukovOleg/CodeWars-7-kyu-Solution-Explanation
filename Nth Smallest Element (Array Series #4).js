// Solution / Решение

const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1];

// Tests

console.log(nthSmallest([3, 1, 2], 2)); // 2
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3)); // 7
console.log(nthSmallest([-5, -1, -6, -18], 4)); // -1

/*

DESCRIPTION:
Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

Task
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.
Input >> Output Examples
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 

*/

/*

ОПИСАНИЕ:
Введение и разминка (настоятельно рекомендуется): Серия "Играем со списками/массивами

Задание
Задав массив/список целых чисел, найдите N-й наименьший элемент в массиве.

Примечания
Размер массива/списка должен быть не менее 3.
Числа в массиве/списке могут состоять из положительных, отрицательных и нулей.
В массиве/списке могут встречаться повторы, поэтому не удаляйте дубликаты.
Примеры ввода >> вывода
arr=[3,1,2] n=2 ==> return 2 
arr=[15,20,7,10,4,3] n=3 ==> return 7 
arr=[2,169,13,-5,0,-1] n=4 ==> return 2 
arr=[2,1,3,3,1,2], n=3 ==> return 2

*/
