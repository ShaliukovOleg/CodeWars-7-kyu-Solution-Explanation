// Solution / Решение

function pisano(n) {
    let a = 0, b = 1; // Инициализируем два первых числа последовательности Фибоначчи
    let loop = 0; // Инициализируем переменную для отслеживания длины периода

    while (true) { // Запускаем бесконечный цикл
        [a, b] = [b, (a + b) % n]; // Обновляем значения a и b в соответствии с последовательностью Фибоначчи и модулем n
        loop++; // Увеличиваем счетчик длины периода

        if (a === 0 && b === 1) return loop; // Если мы вернулись к началу последовательности, возвращаем длину периода
    }
}

// Tests

console.log(pisano(7)); // 16
console.log(pisano(8)); // 12
console.log(pisano(9)); // 24

/*

The Fibonacci numbers are the numbers in the integer sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, ...

Defined by the recurrence relation
  Fib(0) = 0 
  Fib(1) = 1
  Fib(2) = 1
  Fib(i) = Fib(i-1) + Fib(i-2)
  

For any integer n, the sequence of Fibonacci numbers Fib(i) taken modulo n is periodic. 
The Pisano period, denoted Pisano(n), is the length of the period of this sequence.

For example, the sequence of Fibonacci numbers modulo 3 begins:

0, 1, 1, 2, 0, 2, 2, 1, 0, 1, 1, 2, 0, 2, 2, 1, 0, 1, 1, 2, 0, 2, 2, 1, ... 
This sequence has period 8. The repeating patter is 0, 1, 1, 2, 0, 2, 2, 1 So Pisano(3) = 8

Your task is to write the Pisano function that takes an integer n and outputs the length of pisano period.

*/

/*

Числа Фибоначчи - это числа в целочисленной последовательности:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, ...

Определяется рекуррентным соотношением
  Fib(0) = 0 
  Fib(1) = 1
  Fib(2) = 1
  Fib(i) = Fib(i-1) + Fib(i-2)

Для любого целого числа n последовательность чисел Фибоначчи Fib(i), взятых по модулю n, является периодической. 
Период Пизано, обозначаемый Pisano(n), - это длина периода этой последовательности.

Например, последовательность чисел Фибоначчи по модулю 3 начинается:

0, 1, 1, 2, 0, 2, 2, 1, 0, 1, 1, 2, 0, 2, 2, 1, 0, 1, 1, 2, 0, 2, 2, 1, ... 
Эта последовательность имеет период 8. Повторяющийся паттерн - 0, 1, 1, 2, 0, 2, 2, 1. Таким образом, Пизано(3) = 8

Ваша задача - написать функцию Pisano, которая принимает целое число n и выдает длину периода Pisano.

Переведено с помощью DeepL.com (бесплатная версия)

*/