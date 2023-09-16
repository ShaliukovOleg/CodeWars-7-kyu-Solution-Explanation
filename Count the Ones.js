// Solution / Решение

function hammingWeight(x) {
    // ...
    let count = 0;
    while (x !== 0) {
        count += x & 1; // Проверяем младший бит
        x >>>= 1; // Сдвигаем число вправо на 1 бит
    }
    return count;
}

// Short solution
let hammingWeight = x => x === 0 ? 0 : 1 + hammingWeight(x & (x - 1));


// Tests
console.log(hammingWeight(10)) // 2
console.log(hammingWeight(21)) // 3

/*

The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. 
There are several algorithms for efficient computing of the Hamming weight for numbers. 
In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. 
Thus,

hammingWeight(10) // 1010  => 2
hammingWeight(21) // 10101 => 3
The interesting part of this task is that you have to do it without string operation 
(hey, it's not really interesting otherwise)

*/

/*

Весом Хэмминга строки называется количество символов, отличающихся от нулевого символа используемого алфавита. 
Существует несколько алгоритмов эффективного вычисления веса Хэмминга для чисел. 
В данном Ката, говоря техническим языком, необходимо выяснить количество битов "1" в двоичном представлении числа. 
Таким образом,

hammingWeight(10) // 1010 => 2
hammingWeight(21) // 10101 => 3
Интересность этой задачи заключается в том, что ее нужно решать без строковой операции 
(в противном случае это не очень интересно).

Переведено с помощью www.DeepL.com/Translator (бесплатная версия)

*/