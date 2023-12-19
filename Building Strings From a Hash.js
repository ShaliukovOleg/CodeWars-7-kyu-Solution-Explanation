// Solution / Решение

function solution(obj) {
    return Object.entries(obj) // Преобразуем объект в массив пар ключ/значение с помощью Object.entries().
        .map(([key, value]) => `${key} = ${value}`) // Используем map для формирования строк вида "КЛЮЧ = ЗНАЧЕНИЕ".
        .join(',') // Объединяем строки, разделяя их запятыми
}

// Short version

const solution = obj => Object.entries(obj).map(([k, v]) => `${k} = ${v}`).join(',');

// Or 

const solution = obj => `${Object.entries(obj).map(([k, v]) => `${k} = ${v}`)}`;

// Or

const solution = obj => Object.entries(obj).reduce((acc, [k, v]) => acc + `${k} = ${v},`, ''.slice());

// Tests

console.log(solution({a: 1, b: '2'})); // a = 1,b = 2
console.log(solution({key: 14, way: '25'})); // key = 14,way = 25

/*

Complete the solution so that it takes the object (JavaScript/CoffeeScript) 
or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". 
Each key/value pair should be separated by a comma except for the last pair.

Example:
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

*/

/*

Доработайте решение так, чтобы оно принимало объект (JavaScript/CoffeeScript) 
или хэш (Ruby) и генерирует человекочитаемую строку из пар ключ/значение.

Формат должен быть "KEY = VALUE". 
Каждая пара ключ/значение должна быть разделена запятой, кроме последней пары.

Пример:
solution({a: 1, b: '2'}) // должно вернуть "a = 1,b = 2".

*/