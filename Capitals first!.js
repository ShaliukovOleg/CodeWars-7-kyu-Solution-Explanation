// Solution / Решение

function capitalsFirst(str) {
    const words = str.split(' ');
    const upperWords = [];
    const lowerWords = [];

    for (const word of words) {
        if (/^[A-Z]/.test(word)) { // сожержит ли элемент только заглавные символы?
            upperWords.push(word);
        }
        else if (/^[a-z]/.test(word)) { // сожержит ли элемент только строчные символы?
            lowerWords.push(word); // Добавляем слово с строчной буквой в соответствующий массив
        }
    }

    const result = upperWords.concat(lowerWords).join(' ');

    return result; // Возвращаем результат
}

// Short version

const capitalsFirst = str => str.split(' ').reduce(
    ([upper, lower], word) =>
        /^[A-Z]/.test(word)
            ? [[...upper, word], lower]
            : /^[a-z]/.test(word)
                ? [upper, [...lower, word]]
                : [upper, lower],
    [[], []]
).flat().join(' ');

// Ver2

function capitalsFirst(str) {
    let words = str.split(' ');
    let upper = words.filter(function (x) { return x.charAt(0).match(/[A-Z]/) });
    let lower = words.filter(function (x) { return x.charAt(0).match(/[a-z]/) });
    return upper.concat(lower).join(' ');
}

/*

Create a function that takes an input String and returns a String, 
where all the uppercase words of the input String are in front and all the lowercase words at the end. 
The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, 
skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" 
the function should return: "You, Sort Already! hey me"

*/

/*

Создайте функцию, которая принимает на вход строку String и возвращает строку String, 
в которой все прописные слова входной строки находятся впереди, а все строчные - в конце. 
Порядок расположения прописных и строчных слов должен соответствовать порядку их появления.

Если слово начинается с цифры или специального символа, 
пропустите это слово и не включите его в результат.

Входная строка не будет пустой.

Для входной строки: "hey You, Sort me Already!" 
функция должна вернуть: "You, Sort Already! hey me".

*/