// Solution / Решение

function permutationAverage(n) {
    const digits = n.toString().split(''); // Преобразуем число в массив
    const permutations = getPermutations(digits); // Генерируем все перестановки цифр числа
    const sum = permutations.reduce((acc, perm) => acc + Number(perm.join('')), 0); // Считаем сумму всех перестановок
    return Math.round(sum / permutations.length); // Округляем ответ согласно условию
}

function getPermutations(arr) {
    if (arr.length === 1) return [arr]; // Проверка для исключения массива с одним элементом
    // Используем reduce с тремя параметрами: (для генерации перестановок)
    // perms - массив для накопления результатов перестановки
    // digit - текущая цифра массива (arr)
    // index - индекс текущей цифры digit
    return arr.reduce((perms, digit, index) => {
        const rest = [...arr.slice(0, index), ...arr.slice(index + 1)]; // Получаем массив без текущей цифры
        return perms.concat(getPermutations(rest).map((perm) => [digit, ...perm])); // Рекурсивно генерируем перестановки оставшихся цифр
    }, []);
}

// Short version (hard to read)
const permutationAverage = n => {
    const digits = n.toString().split('');
    const permutations = getPermutations(digits);
    const sum = permutations.reduce((acc, perm) => acc + +perm.join(''), 0);
    return Math.round(sum / permutations.length);
}

const getPermutations = arr => arr.length === 1 ? [arr] : arr.reduce((perms, digit, index) =>
    perms.concat(getPermutations([...arr.slice(0, index), ...arr.slice(index + 1)]).map(perm => [digit, ...perm])), []);

/*

A number is simply made up of digits.
The number 1256 is made up of the digits 1, 2, 5, and 6.
For 1256 there are 24 distinct permutations of the digits:
1256, 1265, 1625, 1652, 1562, 1526, 2156, 2165, 2615, 2651, 2561, 2516,
5126, 5162, 5216, 5261, 5621, 5612, 6125, 6152, 6251, 6215, 6521, 6512.

Your goal is to write a program that takes a number, n, 
and returns the average value of all distinct permutations of the digits in n. 
Your answer should be rounded to the nearest integer. 
For the example above the return value would be 3889. *

n will never be negative

A few examples:

permutation_average(2)
return 2

permutation_average(25)
>>> 25 + 52 = 77
>>> 77 / 2 = 38.5
return 39 *

permutation_average(20)
>>> 20 + 02 = 22
>>> 22 / 2 = 11
return 11

permutation_average(737)
>>> 737 + 377 + 773 = 1887
>>> 1887 / 3 = 629
return 629

Note: Your program should be able to handle numbers up to 6 digits long

* ignore these marks, they're for Python only

*/

/*

Число состоит из цифр.
Число 1256 состоит из цифр 1, 2, 5 и 6.
Для числа 1256 существует 24 варианта перестановки цифр:
1256, 1265, 1625, 1652, 1562, 1526, 2156, 2165, 2615, 2651, 2561, 2516,
5126, 5162, 5216, 5261, 5621, 5612, 6125, 6152, 6251, 6215, 6521, 6512.

Ваша задача - написать программу, которая принимает число n, 
и возвращает среднее значение всех различных перестановок цифр в n. 
Ответ должен быть округлен до ближайшего целого числа. 
Для приведенного выше примера возвращаемое значение будет равно 3889. *

n никогда не будет отрицательным

Несколько примеров:

permutation_average(2)
возврат 2

permutation_average(25)
>>> 25 + 52 = 77
>>> 77 / 2 = 38.5
возврат 39 *

permutation_average(20)
>>> 20 + 02 = 22
>>> 22 / 2 = 11
возврат 11

permutation_average(737)
>>> 737 + 377 + 773 = 1887
>>> 1887 / 3 = 629
вернуть 629

Примечание: Ваша программа должна уметь работать с числами длиной до 6 цифр

* игнорируйте эти знаки, они предназначены только для Python

*/