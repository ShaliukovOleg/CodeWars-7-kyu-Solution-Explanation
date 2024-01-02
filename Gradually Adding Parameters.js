// Solution / Решение

function add() {
    let result = 0; // Переменная для хранения суммы значений
    for (let i = 0; i < arguments.length; i++) { // Итерирование по аргументам функции
        result += arguments[i] * ++i // Увеличение i и умножение текущего аргумента на увеличенное значение i
    }
    return result; // Возвращение результата
}

// Solution 2 / Решение 2

function add(...nums) {
    return [...nums].reduce((a, b, i) => a + b * ++i, 0) // Перебор элентов массива через 'reduce' с использованием оператора 'rest'
}

// Tests

console.log(add(100,200,300)); // 1400
console.log(add(1,4,-5,5)); // 14

/*

This kata is all about adding numbers.

You will create a function named add. 
This function will return the sum of all the arguments. 
Sounds easy, doesn't it??

Well here's the twist. 
The inputs will gradually increase with their index as parameter to the function.

add(3,4,5); 
returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26

Remember the function will return 0 if no arguments are passed.

Example
add(); //=> 0
add(1,2,3); //=> 14
add(1,4,-5,5); //=> 14

*/

/*

Это ката посвящено сложению чисел.

Вы создадите функцию с именем add. 
Эта функция будет возвращать сумму всех аргументов. 
Звучит просто, не правда ли?

Но вот в чем загвоздка. 
Входные данные будут постепенно увеличиваться с ростом их индекса в качестве параметра функции.

add(3,4,5); 
возвращает ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26

Помните, что функция вернет 0, если не передано ни одного аргумента.

Пример
add(); //=> 0
add(1,2,3); //=> 14
add(1,4,-5,5); //=> 14

*/