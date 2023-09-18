// Solution / Решение

function ArithmeticSequenceSum(a, r, n) {
    let sum = 0;
    let count = 0;

    for (let i = 1; i <= n; i++) {
        sum += a + (i - 1) * r;
        if (a + (i - 1) * r === r) {
            count++; 
        }
    }

    return sum;
}

// Short version
function ArithmeticSequenceSum(a, r, n) {
    // Используется формула для вычисления суммы арифметической прогрессии:
    // S = n/2 * (2a + (n-1)r)
    // Где:
    // - S - сумма первых n элементов арифметической прогрессии.
    // - a - первый элемент прогрессии.
    // - r - разность между элементами прогрессии (шаг).
    // - n - количество элементов, для которых нужно вычислить сумму.
    return n * (2 * a + (n - 1) * r) / 2;
}

/*

In your class, you have started lessons about "arithmetic progression". 
Because you are also a programmer, you have decided to write a function.

This function, arithmetic_sequence_sum(a, r, n), 
should return the sum of the first (n) elements of a sequence in which each element is the sum of the given integer (a), 
and a number of occurences of the given integer (r), 
based on the element's position within the sequence.

For example:

arithmetic_sequence_sum(2, 3, 5) should return 40:

1     2        3          4            5
a + (a+r) + (a+r+r) + (a+r+r+r) + (a+r+r+r+r) 
2 + (2+3) + (2+3+3) + (2+3+3+3) + (2+3+3+3+3) = 40

*/

/*

В вашем классе начались занятия по теме "Арифметическая прогрессия". 
Поскольку вы еще и программист, вы решили написать функцию.

Эта функция, arithmetic_sequence_sum(a, r, n), 
должна возвращать сумму первых (n) элементов последовательности, в которой каждый элемент является суммой заданного целого числа (a), 
и количества вхождений заданного целого числа (r), 
в зависимости от положения элемента в последовательности.

Например:

arithmetic_sequence_sum(2, 3, 5) должно возвращать 40:

1 2 3 4 5
a + (a+r) + (a+r+r) + (a+r+r+r) + (a+r+r+r+r) 
2 + (2+3) + (2+3+3) + (2+3+3+3) + (2+3+3+3+3) = 40

*/