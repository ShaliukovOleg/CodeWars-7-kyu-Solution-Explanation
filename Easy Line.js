// Solution / Решение

function easyLine(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) { // Цикл, который итерирует от 1 до n включительно.
        result *= (i + n) / i; // На каждой итерации result умножается на (i + n) / i.
    }
    return Math.round(Math.log(result)); // Возврат округленного натурального логарифма результата.
}

// Short version

const easyLine = n => Math.round(Math.log([...Array(n)].reduce((pre, _, index) => pre * (++index + n) / index, 1)));

// Tests

console.log(easyLine(7)); // 8
console.log(easyLine(13)); // 16
console.log(easyLine(17)); // 22
console.log(easyLine(19)); // 24

/*

In the drawing below we have a part of the Pascal's triangle, 
horizontal lines are numbered from zero (top).

We want to calculate the sum of the squares of the binomial coefficients 
on a given horizontal line with a function called easyline (or easyLine or easy-line).

Can you write a program which calculate easyline(n) where n is the horizontal line number?

The function will take n (with: n>= 0) 
as parameter and will return the sum of the squares of the binomial coefficients on line n.

Examples:
easyline(0) => 1
easyline(1) => 2
easyline(4) => 70
easyline(50) => 100891344545564193334812497256

Ref:
http://mathworld.wolfram.com/BinomialCoefficient.html

alternative text

Note:
In Javascript, Coffeescript, Typescript, C++, PHP, C, R, Nim, 
Fortran to get around the fact that we have no big integers the function easyLine(n) will in fact return

round(log(easyline(n)))

and not the easyline(n) of the other languages.

So, in Javascript, Coffeescript, Typescript, C++, PHP, R, Nim, C, Fortran:

easyLine(0) => 0
easyLine(1) => 1
easyLine(4) => 4
easyLine(50) => 67

*/

/*

На рисунке ниже изображена часть треугольника Паскаля, 
горизонтальные линии пронумерованы, начиная с нуля (сверху).

Мы хотим вычислить сумму квадратов биномиальных коэффициентов 
на заданной горизонтальной линии с помощью функции easyline (или easyLine или easy-line).

Можете ли вы написать программу, которая вычисляет easyline(n), где n - номер горизонтальной линии?

Функция будет принимать n (при этом: n>= 0) 
в качестве параметра и будет возвращать сумму квадратов биномиальных коэффициентов на линии n.

Примеры:
easyline(0) => 1
easyline(1) => 2
easyline(4) => 70
easyline(50) => 100891344545564193334812497256

Ссылка:
http://mathworld.wolfram.com/BinomialCoefficient.html

альтернативный текст

Примечание:
В Javascript, Coffeescript, Typescript, C++, PHP, C, R, Nim, 
Fortran, чтобы обойти тот факт, что у нас нет больших целых чисел, функция easyLine(n) на самом деле будет возвращать

round(log(easyline(n)))

а не easyline(n) из других языков.

Таким образом, в Javascript, Coffeescript, Typescript, C++, PHP, R, Nim, C, Fortran:

easyLine(0) => 0
easyLine(1) => 1
easyLine(4) => 4
easyLine(50) => 67

*/