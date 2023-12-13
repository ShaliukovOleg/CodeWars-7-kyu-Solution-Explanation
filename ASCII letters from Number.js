// Solution / Решение

function convert(number) {
    let letter = ''; // создаем строку для результата
    for (let i = 0; i < number.length; i += 2) { // проходим по элементам числа с шагом '2'
        // при каждой итерации добавляем в результат преобразованный через fromCharCode два числа из строки
        letter += String.fromCharCode(number[i] + number[i + 1]); 
    }
    return letter; // возвращаем финальный результат
}

// Solution 2 / Решение 2

function convert(number) {
    const numberString = number.toString(); // преобразуем число в строку для дальнейших действий
    // берем каждые два символа из строки и обрабатываем их с помощью метода map
    const pairs = numberString.match(/\d{1,2}/g).map(pair => String.fromCharCode(pair)); 
    return pairs.join(''); // возвращаем финальный результат объединенный методом join
}

// Solution 3 / Решение 3

const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const convert = number => number.replace(/\d{2}/g, pair => letters[Number(pair) - 65] || ' ');

// Solution 4 / Решение 4

const convert = number => number.toString().match(/\d{1,2}/g).reduce((acc, pair) => acc + String.fromCharCode(pair), '')

// Solution 5 / Решение 5

const convert = number => String.fromCharCode(...number.match(/../g));

// Tests

console.log(convert("656667")); // ABC
console.log(convert("676584")); // CAT
console.log(convert("73327673756932858080698267658369")); // I LIKE UPPERCASE

/*

You have to create a function that converts integer given as 
string into ASCII uppercase letters or spaces.

All ASCII characters have their numerical order in table.

For example,

from ASCII table, character of number 65 is "A".
Numbers will be next to each other, 
So you have to split given number to two digit long integers.

Examples (input -> output)
'658776' -> 'AWL' (because in ASCII table 'A' is 65, 'W' is 87, 'L' is 76)
'73327673756932858080698267658369' ->'I LIKE UPPERCASE'

*/

/*

Необходимо создать функцию, которая преобразует целое число, заданное в виде 
в строку, в заглавные буквы ASCII или пробелы.

Все символы ASCII имеют свой числовой порядок в таблице.

Например,

из таблицы ASCII символ числа 65 - это "A".
Цифры будут располагаться рядом друг с другом, 
Поэтому необходимо разбить заданное число на двузначные длинные целые числа.

Примеры (ввод -> вывод)
'658776' -> 'AWL' (because in ASCII table 'A' is 65, 'W' is 87, 'L' is 76)
'73327673756932858080698267658369' ->'I LIKE UPPERCASE'

*/