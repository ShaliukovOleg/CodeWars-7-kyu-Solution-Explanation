// Solution / Решение

function strong(n) {
    const factorial = n => n < 2 ? 1 : n * factorial(n - 1); // Функция для нахождения факториала числа
    // Равно ли текущее число доступным факториалам чисел
    return n.toString().split('').reduce((sum, number) => sum + factorial(number), 0) === n ? "STRONG!!!!":"Not Strong !!";
}

// Tests

console.log(strong(145)); // STRONG!!!!
console.log(strong(7)); // Not Strong !!
console.log(strong(93)); // Not Strong !!

/*

Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.
For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String

Input >> Output Examples

strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong.

strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong.

*/

/*

Определение
Сильное число - это число, сумма факториалов цифр которого равна самому числу.
Например, 145 - сильное число, так как 1! + 4! + 5! = 1 + 24 + 120 = 145.

Задание
По заданному числу определить, является ли оно сильным или нет, и вернуть либо "STRONG!!!!", либо "Not Strong !!!".

Примечания
Передаваемое число всегда положительное.
Верните результат в виде строки

Примеры ввода >> вывода

strong_num(1) ==> return "STRONG!!!!"
Так как сумма факториалов его цифр (1) равна самому числу, то оно является сильным.

strong_num(123) ==> return "Not Strong !!!"
Так как сумма факториалов его цифр 1! + 2! + 3! = 9 не равна самому числу, то оно не является сильным.

strong_num(2) ==> return "STRONG!!!!"
Так как сумма факториалов его цифр 2! = 2 равна самому числу, то оно Strong.

strong_num(150) ==> return "Not Strong !!!"
Поскольку сумма факториалов его цифр 1! + 5! + 0! = 122 не равна самому числу, то оно не является сильным.

*/
