// Solution / Решение

function reverseSlice(str) {
    const result = []; // Пустой массив для хранения результата
    str = str.split('').reverse().join(''); // Инвертирование строки
    for (let i = str.length - 1; i >= 0; i--) { // Итерация по индексам символов в обратной последовательности
        result.unshift(str.slice(i)); // Создание подстроки начиная с текущего индекса и добавление ее в начало массива result
    }
    return result; // Возврат результата - массива инвертированных подстрок исходной строки
}

// Solution 2 / Решение 2

function reverseSlice(str) {
    const result = []; // Пустой массив для хранения результата
    str = str.split('').reverse().join(''); // Инвертирование строки
    for (let i = 0; i < str.length; i++) { // Итерация по индексам символов в обратной последовательности
        result.push(str.slice(i));  // Создание подстроки начиная с начального индекса и добавление ее в конец массива result
    }
    return result; // Возврат результата - массива инвертированных подстрок исходной строки
}

// Solution 3 / Решение 3

function reverseSlice(str) {
    return Array.from( // создаем массив, передаем в него два аргумента
        { length: str.length }, // длина создаваемого массива
        (_, i) => str.split('').reverse().join('').slice(i) // callback-функция, которая вызывается для каждого индекса от нуля до str.length
    );
}

// Tests

console.log(reverseSlice('123')); // [ '321', '21', '1' ]
console.log(reverseSlice('abcde')); // [ 'edcba', 'dcba', 'cba', 'ba', 'a' ]
console.log(reverseSlice('!olleH')); // [ 'Hello!', 'ello!', 'llo!', 'lo!', 'o!', '!' ]

/*

You'll be given a string of characters as an input. 
Complete the function that returns a list of strings: 
(a) in the reverse order of the original string, 
and (b) with each successive string starting one character 
further in from the end of the original string.

Assume the original string is at least 3 characters long. 
Try to do this using slices and avoid converting the string to a list.

Examples
'123'   ==>  ['321', '21', '1']
'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']

*/

/*

В качестве входных данных вам будет дана строка символов. 
Выполните функцию, которая возвращает список строк: 
(a) в обратном порядке по отношению к исходной строке, 
и (b) с каждой последующей строкой, начинающейся на один символ 
дальше от конца исходной строки.

Предположим, что исходная строка имеет длину не менее 3 символов. 
Постарайтесь сделать это с помощью фрагментов и не преобразуйте строку в список.

Примеры
'123' ==> ['321', '21', '1']
'abcde' ==> ['edcba', 'dcba', 'cba', 'ba', 'a']

*/