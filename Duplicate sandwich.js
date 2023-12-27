// Solution / Решение

function duplicateSandwich(a) {
    for (let i = 0; i < a.length; i++) // Инициализация цикла: начало с i = 0, условие i < длины массива a, шаг i++
        if (i != a.lastIndexOf(a[i])) // Условие: если текущий индекс i не равен последнему индексу элемента a[i] в массиве
            return a.slice(i + 1, a.lastIndexOf(a[i])) // Возврат подмассива от i + 1 до последнего индекса элемента a[i]
}

// Tests

console.log(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])); // [ 2, 3, 4, 5, 6 ]
console.log(duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"])); // [ 'Hello', 'Example', 'hello' ]
console.log(duplicateSandwich([0, 0])); // []
console.log(duplicateSandwich([true, false, true])); // [ false ]
console.log(duplicateSandwich("example")); // xampl

/*

Task
In this kata you will be given a list consisting of unique elements except for one thing that appears twice.
Your task is to output a list of everything inbetween both occurrences of this element in the list.

Examples:
[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
[0, 0] => []
[true, false, true] => [false]
"example" => "xampl"

Notes
All elements will be the same datatype.
All used elements will be primitive.

*/

/*

Задание
В этом ката вам будет дан список, состоящий из уникальных элементов, за исключением одного, который встречается дважды.
Ваша задача - вывести список всего, что находится между обоими появлениями этого элемента в списке.

Примеры:
[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
[0, 0] => []
[true, false, true] => [false]
[true, false, true] => [false] "example" => "xampl"

Примечания
Все элементы будут иметь одинаковый тип данных.
Все используемые элементы будут примитивными.

*/