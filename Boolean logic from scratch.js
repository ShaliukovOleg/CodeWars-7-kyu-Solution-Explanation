// Solution / Решение

// Метод 'some' возвращает true, если хоть один из элементов вернет true
function or(a, b) { return [a, b].some(elem => Boolean(elem)) };

// Мы возвращаем true при сравнении отфильтрованных 'Boolean' элементов
function or(a, b) { return [a, b].filter(Boolean).length === 1 };

// Solution 2 / Решение 2

// последовательное сравнение элементов с true при помощи тернарного оператора
function or(a, b) { return a ? true : b ? true : false };
// вызываем функцию проверки исходя из функции 'or', и двух условий когда, или 'a' true или 'b'
function xor(a, b) { return or(a, b) && or(!a, !b) };

// Short version

const [or, xor] = [(a, b) => !(!a & !b), (a, b) => !a != !b];

// Tests

console.log(or(true, true)); // true
console.log(or(true, false),); // true
console.log(or(false, true),); // true
console.log(or(false, false)); // false
console.log(xor(true, true)); // false
console.log(xor(true, false)); // true
console.log(xor(false, true)); // true
console.log(xor(false, false)); // false

/*

Description

*/

/*

Description

*/