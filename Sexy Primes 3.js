// Solution / Решение

const isPrime = n => n > 1 && ![...Array(Math.sqrt(n) | 0)].some((_, i) => n % (i + 2) === 0);
const sexy_prime = (x, y) => isPrime(x) && isPrime(y) && Math.abs(x - y) === 6;

// Or

// const isPrime = num => !Array(num).fill(1).join(``).match(/^1?$|^(11+?)\1+$/);
// const sexy_prime = (x, y) => Math.abs(x - y) && isPrime(x) && isPrime(y) === 6;
/*
Array(num).fill(1).join('') - создает массив из num элементов, заполняет его единицами и затем объединяет эти единицы в строку.
.match(/^1?$|^(11+?)\1+$/) - проверяем получившееся выражение на соответствие шаблону 
^1?$ - строка содержит либо ноль, либо единицу
^(11+?)\1+$ - строка, число которой больше 1
(11+?) - две или более единицы, где +? - соответствует одной или более группе
*/

// Tests

console.log(sexy_prime(5, 11)); // true
console.log(sexy_prime(13, 19)); // true
console.log(sexy_prime(83, 89)); // true
console.log(sexy_prime(1, 11)); // false

/*

Sexy primes are pairs of two primes that are 6 apart. 
In this kata, your job is to complete the function which returns true if x & y are sexy, 
false otherwise.

Examples
5, 11   -->  true
61, 67  -->  true
7, 13   -->  true
5, 7    -->  false
1, 7    -->  false  (1 is not a prime)

Note: x & y are always positive integers, but they are not always in order of precendence... 
For example you can be given either (5, 11) or (11, 5) - both are valid.

*/

/*

Сексуальные простые числа - это пары из двух простых чисел, которые отличаются друг от друга на 6. 
В этом ката ваша задача - выполнить функцию, которая возвращает true, если x и y сексуальны, 
ложь в противном случае.

Примеры
5, 11 --> true
61, 67 --> true
7, 13 --> истина
5, 7 --> false
1, 7 --> ложно (1 не является простым числом)

Примечание: x и y - всегда целые положительные числа, но они не всегда расположены в порядке старшинства... 
Например, вам может быть дано либо (5, 11), либо (11, 5) - оба варианта верны.

*/