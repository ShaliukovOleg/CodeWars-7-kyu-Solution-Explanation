// Solution / Решение

function superKeyGenerator(n) {
    switch (n % 3) {
        case 0: // Если n делится нацело на 3 (остаток равен 0)
            return "5".repeat(n);  // Возвращаем строку, состоящую из n пятерок
        case 1: // Если остаток от деления n на 3 равен 1
            return n < 10 ? "-1" : "5".repeat(n - 10) + "3".repeat(10); // Если n меньше 10, возвращаем "-1"
        case 2: // Если остаток от деления n на 3 равен 2
            return n < 5 ? "-1" : "5".repeat(n - 5) + "3".repeat(5); // Если n меньше 5, возвращаем "-1"

        default: // Если остаток от деления n на 3 не соответствует ни одному из вышеперечисленных случаев
            return 'woooooooow!';  // Так как подобных случаем не обрабатываются, то можно написать все что угодно для возврата
    }
}

// Solution 2 

function superKeyGenerator(n) {
    let num = n; // Создаем переменную num и присваиваем ей значение n.
    while (num % 3 != 0) // Запускаем цикл while, который будет выполняться, пока num не делится нацело на 3.
        num -= 5; // Уменьшаем num на 5 в каждой итерации цикла.

    return num < 0 ? '-1' : '5'.repeat(num).padEnd(n, '3');
    // Возвращаем результат: если num меньше 0, то возвращаем '-1', иначе создаем строку, состоящую из '5' повторенных num раз,
    // а затем дополняем эту строку символами '3' до длины n с помощью padEnd.
}

// Tests

console.log(superKeyGenerator(1)); // -1
console.log(superKeyGenerator(2)); // -1
console.log(superKeyGenerator(3)); // 555
console.log(superKeyGenerator(4)); // -1
console.log(superKeyGenerator(5)); // 33333
console.log(superKeyGenerator(6)); // 555555
console.log(superKeyGenerator(7)); // -1
console.log(superKeyGenerator(8)); // 55533333
console.log(superKeyGenerator(15)); // 555555555555555

/*

Task
We need to create a RSA Super Key Generator(SKG).

For simplicity, SKG(x) = true means that x is an RSA-SKG; 
otherwise, SKG(x) = false.

SKG(x) = true if and only if:

It's composed of exactly n digits;
There are numbers t and f, such as:
three is the number of 3s;
five is the number of 5s;
three is a multiple of 5;
five is a multiple of 3;
n = three + five.
Given number n, your task is to find the largest x, 
such as SKG(x) = true. 
If there is no such number, return "-1".

Example
For n = 3, the result should be "555". 
Because:
five = 3  --- number of fives is 3, which is a multiple of 3;
three = 0 --- number of threes is 0, which is a multiple of 5;
"555" is the largest number that meets these conditions.

Input/Output
[input] integer n
A positive integer.

[output] a string
The largest RSA-SKG number with n digits if it exists, "-1"otherwise.

*/

/*

Задача
Нам нужно создать RSA Super Key Generator(SKG).

Для простоты SKG(x) = true означает, что x является RSA-SKG; 
в противном случае SKG(x) = ложь.

SKG(x) = true тогда и только тогда, когда:

It's composed of exactly n digits;
There are numbers t and f, such as:
three is the number of 3s;
five is the number of 5s;
three is a multiple of 5;
five is a multiple of 3;
n = three + five.
Учитывая число n, ваша задача — найти наибольшее x, 
например SKG(x) = true. 
Если такого числа нет, верните «-1».

Пример
Ибо n = 3 результат должен быть "555". 
Потому что:
five = 3  --- number of fives is 3, which is a multiple of 3;
three = 0 --- number of threes is 0, which is a multiple of 5;
"555" is the largest number that meets these conditions.

Ввод, вывод
[input]целое числоn
Положительное целое число.

[output]строка
Наибольший номер RSA-SKG с nцифрами, если он существует, 
в противном случае — «-1».

*/