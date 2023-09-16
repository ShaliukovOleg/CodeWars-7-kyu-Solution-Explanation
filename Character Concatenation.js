// Solution / решение

function charConcat(string) {
    let result = ''; // Переменная для результат
    const length = string.length; // Записываем длину строки в переменную для удобства

    for (let i = 0; i < Math.floor(length / 2); i++) { // цикл для сбора всех символов строки
        const leftChar = string[i]; // самый левый символ в итерации
        const rightChar = string[length - i - 1]; // самый правый символ в итерации
        const sequenceNumber = i + 1; // номер итерации
        result += leftChar + rightChar + sequenceNumber;
    }

    return result;
}

// Short solution
const charConcat = string => [...string].slice(0, string.length / 2).map((c, i) => c + string[string.length - i - 1] + (i + 1)).join('');

/*

Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", 
then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result

*/

/*

Если задана строка, то необходимо последовательно соединить первую букву слева и первую букву справа и "1", 
затем вторую букву слева и вторую букву справа и "2", и так далее.

Если длина строки нечетная, отбросьте центральный элемент.

Например:

charConcat("abcdef") == 'af1be2cd3'
charConcat("abc!def") == 'af1be2cd3' // тот же результат

*/