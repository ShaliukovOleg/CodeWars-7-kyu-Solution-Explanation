/*

Rick wants a faster way to get the product of the largest pair in an array. 
Your task is to create a performant solution to find the product of the 
largest two integers in a unique array of positive numbers.
All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

*/

/*

Рик хочет быстрее получить произведение наибольшей пары в массиве. 
Ваша задача - создать производительное решение для нахождения произведения 
наибольших двух целых чисел в уникальном массиве положительных чисел.

*/

function maxProduct(a) {
    // ...
    let result = 0; 
    a = a.slice().sort((a, b) => { // Копируем элементы исходного массива, упорядочиваем их в порядке возврастания
        return a - b
    });
    let firstNum = a[a.indexOf(Math.max.apply(null, a))]; // Тут просто присваиваем переменной максимальный по индексу элемент массива
    let secondNum = a[a.indexOf(Math.max.apply(null, a)) - 1]; // Присваиваем второй переменной максимальный по индексу минус 1 элемент массива
    result = firstNum * secondNum; // Перемножаем их
    return result; // Возвращаем результат
}
console.log(maxProduct([7, 8, 9])); // Данный вариант рабочий, но не для больших массивов (долго прогружает все значения)

function maxProduct(a) {
    let bigNum = Math.max.apply(Math, a);
    a.splice(a.indexOf(bigNum), 1); // Просто удаляем из массива элемент максимальный в данном массиве
    let secondBigNum = Math.max.apply(Math, a); // Повторяем присвоение переменной максимального значения массива
    return bigNum * secondBigNum; // Произведение двух максимальных значений массива
}

console.log(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411])); // 187827