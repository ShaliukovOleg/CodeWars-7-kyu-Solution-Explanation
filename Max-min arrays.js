// Solution / Решение

function solve(arr) {
    //..
    arr.sort((a, b) => b - a); // Сортируем исходный массив
    let result = []; // Массив для результата

    for (let i = 0; i < arr.length / 2; i++) {
        // Сортируем элементы согласно условию
        result.push(arr[i]);
        // В случае нечетного количества элементов в массиве 
        // (чтобы избежать дублирования центрального элемента)
        // Добавляем проверку
        if (i !== arr.length - i - 1) {
            result.push(arr[arr.length - i - 1]);
        }
    }

    return result;
};

// Short version

const solve = arr =>
    [...Array(arr.sort((a, b) => a - b).length)].map((_, index) => index % 2 ? arr.shift() : arr.pop());


console.log(solve([15, 11, 10, 7, 12]));
console.log(solve([52, 77, 72, 44, 74, 76, 40]));

/*

In this Kata, you will be given an array of unique elements, 
and your task is to rearrange the values so that the first max value is followed by the first minimum, 
followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. 
The second max is 12 and the second min is 10 and so on.

*/

/*

В этом ката вам будет дан массив уникальных элементов, 
и ваша задача - переставить значения так, чтобы за первым максимальным значением следовало первое минимальное, 
затем второе максимальное значение, затем второе минимальное значение и т.д.

Например:

solve([15,11,10,7,12]) = [15,7,12,10,11]
Первое максимальное значение равно 15, а первое минимальное - 7. 
Второе максимальное значение - 12, второе минимальное - 10 и так далее.

*/

