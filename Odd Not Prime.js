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

Description

*/

/*

Description

*/