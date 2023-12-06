// Solution / Решение

function sortByHeight(a) {
    const sortPeople = a.filter(height => height !== -1).sort((a, b) => a - b); // фильтруем массив добавляя только "людей" в новый массив и сортируем его
    return a.map(height => height === -1 ? -1 : sortPeople.shift()); // добавляем после каждого "дерева" человека из отсортированного массива.
}

// Short version

const sortByHeight = a => {
    const sortPeople = a.filter(h => h !== -1).sort((a, b) => a - b);
    return a.map(h => h === -1 ? -1 : sortPeople.shift());
};

// Tests

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); // [ -1, 150, 160, 170, -1,  -1, 180, 190 ]
console.log(sortByHeight([-1, -1, -1, -1, -1])); // [ -1, -1, -1, -1, -1 ]
console.log(sortByHeight([4, 2, 9, 11, 2, 16])); // [ 2, 2, 4, 9, 11, 16 ]

/*

Task
Some people are standing in a row in a park. 
There are trees between them which cannot be moved.

Your task is to rearrange the people by their heights 
in a non-descending order without moving the trees.

Example
For a = 
[-1, 150, 190, 170, -1, -1, 160, 180], 
the output should be
[-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output
[input] integer array a

If a[i] = -1, then the ith position is occupied by a tree. 
Otherwise a[i] is the height of a person standing in the ith position.

Constraints:
5 ≤ a.length ≤ 30,
-1 ≤ a[i] ≤ 200.

[output] an integer array
Sorted array a with all the trees untouched.

*/

/*

Задача
Несколько человек стоят в ряд в парке. 
Между ними находятся деревья, которые нельзя сдвинуть с места.

Ваша задача - переставить людей по росту 
в порядке, отличном от убывания, не сдвигая деревья.

Пример
Для a = 
[-1, 150, 190, 170, -1, -1, 160, 180], 
на выходе должно получиться
[-1, 150, 160, 170, -1, -1, 180, 190].

Вход/выход
[вход] целочисленный массив a

Если a[i] = -1, то i-я позиция занята деревом. 
В противном случае a[i] - это высота человека, стоящего на i-й позиции.

Ограничения:
5 ≤ a.length ≤ 30,
-1 ≤ a[i] ≤ 200.

[выход] целочисленный массив
Отсортированный массив a со всеми нетронутыми деревьями.

*/