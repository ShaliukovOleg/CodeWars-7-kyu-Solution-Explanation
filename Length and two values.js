/*

Given an integer n and two other values, build an array of size n filled with these two values alternating.

*/

/*

Вводные данные: три аргумента.
-Целое число (n)
-Первое значение (неважно что, строка, цифра или логическое выражение) (firstValue)
-Второе значение (неважно что, строка, цифра или логическое выражение) (secondValue)
Требуется создать массив и заполнить его по очереди двумя значениями, длинна массива будет целое число (n)

*/

/*

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []

*/

function alternate(n, firstValue, secondValue) {
    let result = []; // Создаем переменную, в которую вернем все значения (массив)
    for (let i = 0; i < n; i++) { // Создаем цикл с шагом +1
        if (i % 2 === 0) { // Разбиваем значения засчет простого условия, что каждое второе значение i (четное значение) будет добавляться в массив со значением "secondValue"
            result.push(firstValue);
        } else {
            result.push(secondValue);
        }
    }
    return result; // Возвращаем массив
}

console.log(alternate(5, true, false)) 
// [true, false, true, false, true]