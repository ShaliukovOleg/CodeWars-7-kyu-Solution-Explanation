// Solution / Решение

function getLastDigit(index) {
    // Если индекс равен 0, возвращаем 0
    if (index === 0) return 0;
    // Если индекс равен 1 или 2, возвращаем 1
    if (index === 1 || index === 2) return 1;

    // Инициализируем переменные для двух предыдущих чисел в последовательности Фибоначчи
    let prevPrev = 1; // Предпредыдущее число
    let prev = 1;     // Предыдущее число
    let result = 0;   // Результат (последняя цифра текущего числа)

    // Начинаем счетчик с 3, так как первые два числа Фибоначчи уже известны
    for (let i = 3; i <= index; i++) {
        // Считаем следующее число в последовательности Фибоначчи и берем только последнюю цифру с помощью операции %
        result = (prev + prevPrev) % 10;

        // Обновляем значения предыдущих чисел для следующей итерации
        prevPrev = prev;
        prev = result;
    }

    // Возвращаем последнюю цифру числа Фибоначчи
    return result;
}

// Short version (without checking incoming values) / (без проверок входящих значений)

function getLastDigit(index) {
    let a = 1, b = 1;
    for (let i = 2; i < index; i++) [a, b] = [b, (a + b) % 10];
    return b;
}

// With info

function getLastDigit(index) {
    // Инициализируем две переменные a и b, которые представляют собой первые два числа Фибоначчи
    let a = 1, b = 1;

    // Начинаем цикл с индекса 2, так как первые два числа Фибоначчи уже известны и равны 1
    for (let i = 2; i < index; i++) {
        // Используем деструктивное присваивание, чтобы обновить значения a и b
        // Для a присваиваем значение b, а для b - сумму предыдущих a и b, затем берем только последнюю цифру с помощью операции % 10
        [a, b] = [b, (a + b) % 10];
    }

    // Возвращаем b, который содержит последнюю цифру числа Фибоначчи
    return b;
}

/*

As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... 
Write a method that takes the index as an argument and returns last digit from fibonacci number. 
Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0. 
Fibonacci sequence grows very fast and value can take very big numbers 
(bigger than integer type can contain), 
so, please, be careful with overflow.

*/

/*

Как вы, вероятно, знаете, последовательность Фибоначчи - это числа в следующей целочисленной последовательности: 1, 1, 2, 3, 5, 8, 13... 
Напишите метод, который принимает в качестве аргумента индекс и возвращает последнюю цифру из числа Фибоначчи. 
Пример: getLastDigit(15) - 610. Ваш метод должен возвращать 0, так как последняя цифра числа 610 равна 0. 
Последовательность Фибоначчи растет очень быстро, и ее значение может принимать очень большие числа 
(больше, чем может содержать тип integer), 
поэтому, пожалуйста, будьте осторожны с переполнением.

*/