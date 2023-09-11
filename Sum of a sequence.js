/* 
Description
Your task is to write a function which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step.
If begin value is greater than the end, your function should return 0. 
If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

*/

/*

Описание
Ваша задача - написать функцию, возвращающую сумму последовательности целых чисел.
Последовательность задается 3 неотрицательными значениями: begin, end, step.
Если значение begin больше end, то функция должна возвращать 0. 
Если end не является результатом целого числа шагов, то не надо добавлять его к сумме. Смотрите 4-й пример ниже.

*/

/* 
Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

*/

const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    let result = 0; // Новая переменная, которой будет присвоено значение суммы всех шагов в цикле при его завершении
    for ( // решение через цикл for
        let i = begin; // Создаем переменную в цикле и присваиваем ей значение аргумента begin. 
        i <= end; // Значение к которому стремится переменная i. В данном случае она стремится к значению аргумента end. 
        i += step) // Шаг в данном цикле происходит со значением (step)  присвоенным через оператор (+=) 
        {
        result += i; // Тело цикла. Переменной объявленной перед циклом добавляется значение i. Другая запись: (result = result + i). 
    }
    // Завершение выполнения цикла
    return result; // При выходе из цикла вернем значение переменной. 
};


console.log(sequenceSum(-6, -2, 2)); // -12
console.log(sequenceSum(1, 6, 3)); // 5
console.log(sequenceSum(2, 18, 4)); // 50

