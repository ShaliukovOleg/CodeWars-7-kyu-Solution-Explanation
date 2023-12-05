// Solution / Решение

function sortByValueAndIndex(array) {
    const result = []; // Создание пустого массива result, который будет хранить пары [значение * ++индекс, ++индекс]
    for (let i = 0; i < array.length; i++) { // Итерация по элементам массива array
        result[i] = [array[i] * (i + 1), i + 1]; // Заполнение массива result парами [значение * ++индекс, ++индекс]
    }
    result.sort((a, b) => a[0] - b[0]); // Сортировка массива result по первым элементам каждой пары

    for (let i = 0; i < result.length; i++) { // Итерация по элементам массива result
        array[i] = result[i][0] / result[i][1]; // Обновление элементов массива array значениями, деленными на соответствующие индексы
    }
    return array; // Возвращение отсортированного массива array
}
console.log(sortByValueAndIndex([-29, -19, -20, -16, -28, -13, -10, 10, 10, 10, 12, 6, 28, 28, 13, 22]));

// Short version

const sortByValueAndIndex = arr =>
    arr.map((val, i) => [val * ++i, val]).sort(([a], [b]) => a - b).map(([, val]) => val);

// Tests

console.log(sortByValueAndIndex([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(sortByValueAndIndex([23, 2, 3, 4, 5])); // [ 2, 3, 4, 23, 5 ]
console.log(sortByValueAndIndex([26, 2, 3, 4, 5])); // [ 2, 3, 4, 5, 26 ]
console.log(sortByValueAndIndex([-29, -19, -20, -16, -28, -13, -10, 10, 10, 10, 12, 6, 28, 28, 13, 22]));
// [ -28, -13, -10, -16, -20, -19, -29,   6,  10,  10,  10,  12, 13,  22,  28,  28];

/*

Sort an array by value and index
Your task is to sort an array of integer numbers by the 
product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5

Have fun coding it and please 
don't forget to vote and rank this kata! :-)

*/

/*

Сортировка массива по значению и индексу
Ваша задача - отсортировать массив целых чисел по 
произведению значения и индекса позиций.

Для сортировки индекс начинается с 1, а не с 0!
Сортировка должна быть по возрастанию.
Массив никогда не будет нулевым и всегда будет содержать числа.

Пример:

Вход: 23, 2, 3, 4, 5
Произведение значения и индекса:
23 => 23 * 1 = 23 -> Output-Pos 4
 2 => 2 * 2 = 4 -> Output-Pos 1
 3 => 3 * 3 = 9 -> Output-Pos 2
 4 => 4 * 4 = 16 -> Output-Pos 3
 5 => 5 * 5 = 25 -> Output-Pos 5

Выход: 2, 3, 4, 23, 5

Получайте удовольствие от кодирования и, пожалуйста, 
не забывайте голосовать и оценивать это ката! :-)

*/