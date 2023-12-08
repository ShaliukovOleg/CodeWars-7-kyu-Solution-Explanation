// Solution / Решение

function sortList(sortBy, list) {
    return list.sort((a, b) => b[sortBy] - a[sortBy]);
}

// Short version

const sortList = (sortBy, arr) => arr.sort((a, b) => b[sortBy] - a[sortBy]);

// Tests

const arrayToSort = [
    { "a": 1, "b": 3 },
    { "a": 3, "b": 2 },
    { "a": 2, "b": 40 },
    { "a": 4, "b": 12 }
];

console.log(sortList('a', arrayToSort)); // [ { a: 4, b: 12 }, { a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 } ]
console.log(sortList('b', arrayToSort)); // [ { a: 2, b: 40 }, { a: 4, b: 12 }, { a: 1, b: 3 }, { a: 3, b: 2 } ]

/*

You'll be passed an array of objects (list) 
- you must sort them in descending order based on the value of the specified property (sortBy).

Example

When sorted by "a", this:
[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]

should return:
[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]

The values will always be numbers, 
and the properties will always exist.

*/

/*

Вам будет передан массив объектов (список). 
- Вы должны отсортировать их в порядке убывания на основе значения указанного свойства (sortBy).

Пример

При сортировке по "a" это:
[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]

должно вернуть:
[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]

Значения всегда будут числами, 
а свойства всегда будут существовать.

*/