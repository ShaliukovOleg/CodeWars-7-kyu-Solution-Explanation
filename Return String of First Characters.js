// Solution / Решение

function makeString(s) {
    // Разбиваем входную строку на массив слов, используя пробел как разделитель
    const words = s.split(' ');
    // Преобразуем каждое слово, извлекаем первый символ
    const firstChars = words.map(word => word[0]);
    // Объединяем полученные первые символы в строку
    const result = firstChars.join('');
    return result; // Возвращаем результат
}

// Short version 

const makeString = s => s.split(' ').map(word => word[0]).join('');

/*

In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

*/

/*

В этом упражнении в метод передается строка, а в ответ должна быть получена новая строка с первым символом каждого слова в строке.

Например:

"This Is A Test" ==> "TIAT".
Строки будут содержать только буквы и пробелы, между словами будет ровно 1 пробел, без опережающих и завершающих пробелов.

*/