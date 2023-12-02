// Solution / Решение

function isDivisible(n, ...arguments) { // тут используем оператор rest
    return arguments.every(elem => n % elem === 0) // делим каждый элемент с первым (в случае успеха возвращаем true)
};

// Solution 2 / Решение 2

function isDivisible(n) { // решение через ключевое слово arguments
    for (var i = 1; i < arguments.length; i++) { // проверяем все аргументы и делим первый аргумент на все остальные
        if (n % arguments[i]) return false; // в случае 
    } 
    return true; // в случае успеха возвращаем 'true'
}

// Short version

const isDivisible = (n, ...arg) => arg.every(elem => !(n % elem));

// Tests

console.log(isDivisible(3, 3, 4)); // false
console.log(isDivisible(12, 3, 4)); // true
console.log(isDivisible(8, 3, 4, 2, 5)); // false

/*

Create a function that checks if the first argument n is divisible by all other arguments 
(return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7

*/

/*

Создайте функцию, которая проверяет, делится ли первый аргумент n на все остальные аргументы 
(возвращает true, если других аргументов нет)

Пример:

(6,1,3)--> true, потому что 6 делится на 1 и 3
(12,2)--> true, потому что 12 делится на 2
(100,5,4,10,25,20)--> true
(12,7)--> false, потому что 12 не делится на 7

*/