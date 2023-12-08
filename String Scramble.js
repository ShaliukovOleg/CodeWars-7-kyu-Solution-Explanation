// Solution / Решение

function scramble(str, arr) {
    const chars = str.split(''); // преобразуем строку в массив
    const indexedValues = chars.map((value, index) => [value, arr[index]]); // Создаем массив пар [значение, индекс] для каждого элемента
    indexedValues.sort((a, b) => a[1] - b[1]); // Сортируем массив по индексам
    console.log(indexedValues);
    const sortedValues = indexedValues.map(pair => pair[0]); // Извлекаем отсортированные значения
    return sortedValues.join(''); // собираем итоговый массив обратно в строку
};

// Solution 2 / Решение 2 (Hash-map)

function scramble(str, arr) {
    const valueMap = {};
    [...str].forEach((value, index) => valueMap[arr[index]] = value); // добавляем в хеш-карту, где ключ - индекс, а значение - элементы
    const sortedValues = arr.map((_, index) => valueMap[index]); // Извлекаем из хеш-карты значения в порядке индексов
    return sortedValues.join(''); // собираем полученный массив в строку
};

// Solution 3 / Решение 3 

const scramble = (str, arr) => {
    const valueMap = arr.reduce((acc, val, index) => {
        acc[val] = str[index];
        return acc;
    }, {});
    return Object.values(valueMap).join('');
};

// Solution 4 / Решение 4

const scramble = (str, arr) => {
    const result = [...str];
    for (let i = 0; i < arr.length; i++) {
        result.splice(arr[i], 1, str[i]);
    }
    return result.join('');
};

// Solution 5 / Решение 5

const scramble = (str, arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = str[arr.indexOf(i)];
    }
    return result.join('');
};

// Short version (if method 'fromEntries' works);

const scramble = (str, arr) => {
    const valueMap = Object.fromEntries(arr.map((val, index) => [val, str[index]]));
    return arr.map((_, index) => valueMap[index]).join('');
};

// Short version

const scramble = (str, arr) => arr.map((_, i) => str[arr.indexOf(i)]).join('');

// Or

const scramble = (str, arr) => [...str].reduce((acc, _, i, result) => acc + result[arr.indexOf(i)], '');

// Tests

console.log(scramble('abcd', [0, 3, 1, 2])); // acdb
console.log(scramble('sc301s', [4, 0, 3, 1, 5, 2])); // c0s3s1
console.log(scramble('bskl5', [2, 1, 4, 3, 0])); // 5sblk

/*

Given a string and an array of index numbers, 
return the characters of the string rearranged to be in the order specified by the accompanying array.

Ex:
scramble('abcd', [0,3,1,2]) -> 'acdb'

The string that you will be returning back will have: 
'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, 
because the order of those characters maps to their corresponding numbers in the index array.

In other words, put the first character in the string at the index 
described by the first element of the array.

You can assume that you will be given a string and array of equal length 
and both containing valid characters 
(A-Z, a-z, or 0-9).

*/

/*

Дана строка и массив индексных чисел, 
возвращает символы строки, переставленные в порядке, указанном сопутствующим массивом.

Например:
scramble('abcd', [0,3,1,2]) -> 'acdb'

Строка, которую вы вернете обратно, будет содержать: 
'a' в индексе 0, 'b' в индексе 3, 'c' в индексе 1, 'd' в индексе 2, 
потому что порядок этих символов соответствует их номерам в массиве индексов.

Другими словами, поместите первый символ в строке в индекс 
описываемому первым элементом массива.

Можно предположить, что вам будут даны строка и массив одинаковой длины 
и оба содержат допустимые символы 
(A-Z, a-z или 0-9).

*/