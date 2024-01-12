// Solution / Решение

const stickyCalc = (operator, num1, num2) => { 
    const firstNum = Math.round(num1); // Округление первого аргумента 
    const secondNum = Math.round(num2); // Округление второго аргумента
    return Math.round(eval(`${firstNum}${secondNum}${operator}${secondNum}`)); // строка выполняется, как арифметическое выражение, а затем округляется
};

// Tests

console.log(stickyCalc('+', 12.6, 14.2)); // 1328
console.log(stickyCalc('-', 15, 10)); // 1500
console.log(stickyCalc('*', 5, 5)); // 275
console.log(stickyCalc('/', 10, 7)); // 15

/*

Frank just bought a new calculator. But, this is no normal calculator. 
This is a 'Sticky Calculator.

Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:

For instance:

50 + 12 becomes 5012
and then the operation is carried out as usual:

(5012) + 12 = 5024
Task
It is your job to create a function which takes 3 parameters:

stickyCalc(operation, val1, val2)
which works just like Frank's sticky calculator

Some Examples
stickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101
Note
The calculator only works for positive integers only.
The calculator rounds any non-integer before operating.
The calculator rounds any output to nearest integer.
For example:

stickyCalc('/', 12.1, 6.8), 18);   
12.1 and 6.8 are rounded to 12 and 7 respectively & they 'stick together' to make 127.


Although 127 / 7 = 18.1428 ; 18 is outputted instead.

*/

/*

Фрэнк только что купил новый калькулятор. Но это не обычный калькулятор. 
Это "липкий калькулятор".

При сложении, вычитании, умножении или делении двух чисел эти два числа сначала слипаются:

Например:

50 + 12 становится 5012
а затем операция выполняется как обычно:

(5012) + 12 = 5024
Задание
Ваша задача - создать функцию, принимающую 3 параметра:

stickyCalc(operation, val1, val2)
которая работает точно так же, как липкий калькулятор Фрэнка.

Некоторые примеры
stickyCalc('+', 50, 12) // Вывод: (5012 + 12) = 5024
stickyCalc('-', 7, 5) // Вывод: (75 - 5) = 70
stickyCalc('*', 13, 20) // Вывод: (1320 * 20 ) = 26400
stickyCalc('/', 10, 10) // Вывод: (1010 / 10) = 101
Примечание
Калькулятор работает только с положительными целыми числами.
Перед началом работы калькулятор округляет любое нецелое число.
Калькулятор округляет все выходные данные до ближайшего целого числа.
Например:

stickyCalc('/', 12.1, 6.8), 18);   
12,1 и 6,8 округляются до 12 и 7 соответственно, и они "слипаются" в 127.


Хотя 127 / 7 = 18.1428 ; вместо этого выводится 18.

*/