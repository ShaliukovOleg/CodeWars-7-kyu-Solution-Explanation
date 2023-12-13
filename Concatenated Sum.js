// Solution / Решение

function checkConcatenatedSum(num, n) {
    return Math.abs(num) // возвращаем модуль входящего числа
        .toString() // преобразуем число в строку
        .split`` // преобразуем строку в массив
        .map(char => Number(char.repeat(n))) // проходим элементам массива и каждый элемент повторяем n-раз
        .reduce((a, b) => a + b) === Math.abs(num) // суммируем полученные элементы и сравниваем их с модулем входящего числа
}

// Short version

const checkConcatenatedSum = (num, n) =>
    [...`${Math.abs(num)}`].reduce((pre, val) => pre + Math.sign(num) * val.repeat(n), 0) === num;

// Tests

console.log(checkConcatenatedSum(2997, 3)); // 
console.log(checkConcatenatedSum(-2997, 3)); // 

/*

The number 198 has the property that 198 = 11 + 99 + 88, i.e., 
if each of its digits is concatenated twice and then summed, the result will be the original number. 
It turns out that 198 is the only number with this property. 
However, the property can be generalized so that each digit is concatenated n times and then summed.

Examples
original number =2997 , n=3 
2997 = 222+999+999+777 and here each digit is concatenated three times.
original number=-2997 , n=3
-2997 = -222-999-999-777 and here each digit is concatenated three times.

Task
Write a function named checkConcatenatedSum that tests if a number has this generalized property.

*/

/*

Число 198 обладает тем свойством, что 198 = 11 + 99 + 88, т.е, 
если каждую из его цифр сложить дважды, а затем просуммировать, то результатом будет исходное число. 
Оказалось, что 198 - единственное число, обладающее этим свойством. 
Однако это свойство можно обобщить так, что каждая цифра складывается n раз, а затем суммируется.

Примеры
исходное число =2997 , n=3 
2997 = 222+999+999+777, и здесь каждая цифра складывается три раза.
исходное число = 2997 , n=3
-2997 = -222-999-999-777 и здесь каждая цифра суммируется три раза.

Задание
Напишите функцию с именем checkConcatenatedSum, которая проверяет, 
обладает ли число этим обобщенным свойством.

*/