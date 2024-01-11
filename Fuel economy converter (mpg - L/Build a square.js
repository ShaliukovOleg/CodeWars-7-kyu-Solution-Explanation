// Solution / Решение

function generateShape(integer) {
    return Array.from( // Создаем массив
        { length: integer }, // Присваиваем ему длинну переданное число
        () => '+'.repeat(integer)) // передаем колбек функцию с методом repeat(переданное число), который повторяет кол-во '+' 
        .join('\n'); // Преобразуем массив в строку и после каждого элемента массива добавляем '\n'
}

// Tests

console.log(generateShape(5)); // '+++++\n+++++\n+++++\n+++++\n+++++\n'
console.log(generateShape(7)); // '+++++++\n+++++++\n+++++++\n+++++++\n+++++++\n+++++++\n+++++++\n'
console.log(generateShape(2)); // '++\n++\n'

/*

I will give you an integer. Give me back a shape that is as long and wide as the integer. 
The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

/*

Я дам вам целое число. Верните мне фигуру, длина и ширина которой равны целому числу. 
Целым числом будет целое число от 1 до 50.

Пример
n = 3, поэтому я ожидаю получить квадрат 3x3, как показано ниже в виде строки:

+++
+++
+++

*/