// Solution / Решение

function zipvalidate(postcode) {
    if (!postcode) return false; // если postcode пуст или undefined, то сразу возвращаем false

    // Регулярное выражение означает следующее:
    // ^[12346] \d{5} - первая часть (строка должна начинаться с одной из цифр 1, 2, 3, 4 или 6), вторая часть (должно идти 5 цифр подряд)
    const postalCodePattern = /^[12346]\d{5}$/;
    return postalCodePattern.test(postcode); // Проверяем переданный postcode на соответствие регулярному выражению.
}

// Short version 

const zipvalidate = postcode => !!postcode && /^[12346]\d{5}$/.test(postcode);

/*

You should write a simple function that takes string as input and 
checks if it is a valid Russian postal code, returning true or false.

A valid postcode should be 6 digits with no white spaces, 
letters or other symbols. Empty string should also return false.

Please also keep in mind that a valid post code cannot start with 0, 5, 7, 8 or 9

Examples
Valid postcodes:
198328
310003
424000

Invalid postcodes:
056879
12A483
1@63
111

*/

/*

Необходимо написать простую функцию, которая принимает на вход строку и 
проверяет, является ли она действительным почтовым индексом России, и возвращает true или false.

Правильный почтовый индекс должен состоять из 6 цифр без пробелов, 
букв и других символов. Пустая строка также должна возвращать false.

Также следует помнить, что почтовый индекс не может начинаться с 0, 5, 7, 8 или 9.

Примеры
Допустимые почтовые индексы:
198328
310003
424000

Недействительные почтовые индексы:
056879
12A483
1@63
111

*/