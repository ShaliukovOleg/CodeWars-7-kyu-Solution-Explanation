// Solution / Решение

function solve(str) {
    // Создаем массив spaces для хранения индексов пробелов
    const spaces = [];

    // Убираем пробелы из строки и сохраняем их индексы
    const stringWithoutSpaces = str.replace(/ /g, (match, index) => {
        spaces.push(index); // Сохраняем индекс текущего пробела в массив spaces
        return ''; // Заменяем каждый пробел пустой строкой
    });

    // Разворачиваем строку без пробелов
    const reversedString = stringWithoutSpaces.split('').reverse().join('');

    // Создаем массив resultArray для хранения результата
    const resultArray = [];

    // Инициализируем переменную spaceIndex для отслеживания вставленных пробелов
    let spaceIndex = 0;

    // Перебираем символы исходной строки str
    for (let i = 0; i < str.length; i++) {
        if (spaces.includes(i)) {
            // Если текущий индекс соответствует индексу пробела, добавляем пробел в результат
            resultArray.push(' ');
            spaceIndex++;
        } else {
            // Иначе добавляем символ из развернутой строки с учетом смещения spaceIndex
            resultArray.push(reversedString[i - spaceIndex]);
        }
    }

    // Возвращаем результат, объединив элементы массива в строку
    return resultArray.join('');
}

// Short version

function solve(str) {
    let arr = [...str].filter(x => x != ' '); // разбиваем входящую строку на массив и убираем из массива пробелы.
    return str.replace(/\S/g, _ => arr.pop()); // берем входящую строку и заменяем все символы (через регулярку) на значения массива 'arr' с конца массива (pop)
}

console.log(solve("codewars")); // srawedoc
console.log(solve("your code")); // edoc ruoy
console.log(solve("your code rocks")); // skco redo cruoy
console.log(solve("i love codewars")); // s rawe docevoli

/*

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

*/

/*

В этом ката мы будем переворачивать строку, сохраняя пробелы (если они есть) на прежнем месте.

Например:

solve("наш код") = "edo cruo"
-- Обычная обратная строка без пробелов будет "edocruo". 
-- Однако в индексе 3 стоит пробел, поэтому строка становится "edo cruo".

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
Больше примеров в тестовых примерах. В качестве входных данных будут использоваться строчные буквы и в некоторых случаях пробелы.

*/