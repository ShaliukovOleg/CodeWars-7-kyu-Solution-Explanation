// Solution / Решение

function numbersWithDigitInside(x, d) {
    // Создание массива чисел от 1 до x включительно используя Array.from
    // и функции обратного вызова, которая увеличивает индекс на 1
    const numbers = Array.from({ length: x }, (_, index) => index + 1)
        .filter(num => String(num).includes(d.toString())); // Фильтрация чисел: оставляем только те, которые содержат цифру d
    const count = numbers.length; // Подсчет количества элементов, прошедших фильтрацию
    const sum = count ? numbers.reduce((a, b) => a + b, 0) : 0; // Вычисление суммы чисел используя reduce
    const product = count ? numbers.reduce((a, b) => a * b, 1) : 0; // Вычисление произведения чисел используя reduce

    return [count, sum, product]; // Возвращение массива, содержащего количество, сумму и произведение
}

// Tests

console.log(numbersWithDigitInside(11,1)); // [ 3, 22, 110 ]
console.log(numbersWithDigitInside(20,0)); // [ 2, 30, 200 ]
console.log(numbersWithDigitInside(44,4)); // [ 9, 286, 5955146588160 ]

/*

You have to search all numbers from inclusive 1 to inclusive a given number x, 
that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]

If there are no numbers, which include the digit, return [0,0,0].

*/

/*

Вам нужно найти все числа от 1 до включительно заданного числа x, 
в которых есть заданная цифра d.
Значение d всегда будет 0 - 9.
Значение x всегда будет больше 0.

Вы должны вернуть в виде массива

количество этих чисел,
их сумму
и их произведение.

Например:
x = 11
d = 1
->
Числа: 1, 10, 11
Возврат: [3, 22, 110]

Если нет чисел, включающих цифру, возвращается [0,0,0].

*/