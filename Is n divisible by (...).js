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

Description

*/

/*

Description

*/