// Solution / Решение

function isSmooth(n) {
    // Используется цикл for-of для итерации по массиву пар [divisor, label].
    for (const [divisor, label] of [[2, 'power of 2'], [3, '3-smooth'], [5, 'Hamming number'], [7, 'humble number']]) {
        while (n % divisor === 0) n /= divisor; // Пока n делится на divisor без остатка, делим n на divisor.
        if (n === 1) return label; // Если n стало равным 1, возвращаем соответствующую метку.
    }
    return 'non-smooth'; // Если ни одно из условий не выполнилось, возвращаем 'non-smooth'.
}

// Short version

const isSmooth = n => [[2, 'power of 2'], [3, '3-smooth'], [5, 'Hamming number'], [7, 'humble number']]
    .map(([d, l]) => { while (n % d === 0) n /= d; return n === 1 && l; }) // делим n на делитель и при n === 1, возвращаем конкретную метку 
    .filter(Boolean)[0] || 'non-smooth'; // фильтруем только определенные метки и берем первую, если она есть 

// Tests

console.log(isSmooth(60)); // Hamming number
console.log(isSmooth(98)); // humble number
console.log(isSmooth(111)); // non-smooth
console.log(isSmooth(4096)); // power of 2

/*

The concept of "smooth number" is applied to all those numbers whose prime factors are lesser than or equal to 7: 
60 is a smooth number (2 * 2 * 3 * 5), 111 is not (3 * 37).

More specifically, smooth numbers are classified by their highest prime factor and your are tasked with writing a 
isSmooth/is_smooth function that returns a string with this classification as it follows:

2-smooth numbers should be all defined as a "power of 2", as they are merely that;
3-smooth numbers are to return a result of "3-smooth";
5-smooth numbers will be labelled as "Hamming number"s (incidentally, you might appreciate this nice kata on them);
7-smooth numbers are classified as "humble number"s;
for all the other numbers, just return non-smooth.

Examples:
isSmooth(16) === "power of 2"
isSmooth(36) === "3-smooth"
isSmooth(60) === "Hamming number"
isSmooth(98) === "humble number"
isSmooth(111) === "non-smooth"

The provided input n is always going to be a positive number > 1.

*/

/*

Понятие "гладкое число" применяется ко всем тем числам, простые коэффициенты которых меньше или равны 7: 
60 - гладкое число (2 * 2 * 3 * 5), 111 - нет (3 * 37).

Более конкретно, гладкие числа классифицируются по их наибольшему простому фактору, и ваша задача - написать функцию 
isSmooth/is_smooth, которая возвращает строку с этой классификацией в следующем виде:

2-гладкие числа должны быть все определены как "power of 2", так как они просто являются таковыми;
3-гладкие числа должны возвращать результат "3-smooth";
5-гладкие числа будут обозначаться как "Hamming number" (кстати, вы можете оценить эту замечательную ката на них);
7-гладкие числа классифицируются как "humble number";
для всех остальных чисел просто верните non-smooth.

Примеры:
isSmooth(16) === "power of 2"
isSmooth(36) === "3-smooth"
isSmooth(60) === "Hamming number"
isSmooth(98) === "humble number"
isSmooth(111) === "non-smooth"

При вводе n всегда будет положительным числом > 1.

*/