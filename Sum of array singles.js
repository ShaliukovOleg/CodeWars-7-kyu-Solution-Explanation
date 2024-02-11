// Solution / Решение

function repeats(arr){
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)) // Фильтруем массив на наличие уникальных значений
              .reduce((a, b) => a + b); // Складываем отфильтрованные значения согласно условию
};

// Tests

console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // 12
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])); // 22
console.log(repeats([5, 10, 19, 13, 10, 13])); // 24

/*

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, 
and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!

*/

/*

В этом ката вам будет дан массив чисел, в котором два числа встречаются один раз, а остальные - только два. 
Ваша задача - вернуть сумму чисел, которые встречаются только один раз.

Например, repeats([4,5,7,5,4,8]) = 15, потому что только числа 7 и 8 встречаются один раз, 
и их сумма равна 15. Все остальные числа встречаются дважды.

Больше примеров в тестовых примерах.

Удачи!

*/