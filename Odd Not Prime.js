// Solution / Решение

const isPrime = n => {
    // Проверка от 2 до квадратного корня из n.
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false; // Если n делится на i без остатка, то n не является простым числом.
    }
    return n > 1; // Если n больше 1, то оно считается простым, и функция возвращает true.
}

const oddNotPrime = (n, start = 1) => {
    // Инициализация переменной count, начинаем считать с числа start.
    let count = 0;

    // Цикл от start до n с шагом 2 (проверка нечетных чисел).
    for (let i = start; i <= n; i += 2) {
        // Если число не является простым, увеличиваем count.
        if (!isPrime(i)) count++;
    }
    return count; // Возвращаем итоговое количество чисел.
}

// Tests

console.log(oddNotPrime(5)); // 1
console.log(oddNotPrime(10)); // 2
console.log(oddNotPrime(99)); // 26
console.log(oddNotPrime(9)); // 2
console.log(oddNotPrime(1)); // 1

/*

For "x", determine how many positive integers less than or equal to "x" are odd but not prime. 
Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1
Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2

*/

/*

Для числа "x" определите, сколько целых положительных чисел, меньших или равных "x", являются нечетными, но не простыми. 
Предположим, что "x" - это целое число от 1 до 10000.

Пример: 5 состоит из трех нечетных чисел (1,3,5), и только число 1 не является простым, поэтому ответ равен 1.
Пример: 10 состоит из пяти нечетных чисел (1,3,5,7,9), и только 1 и 9 не являются простыми, поэтому ответ равен 2.

*/