// Solution / Решение

function partlist(arr) {
    const returnArray = []; // Массив для результата

    for (let i = 1; i < arr.length; i++) {
        returnArray.push([ // Добавляем новый массив в returnArray.
            arr // Получаем первую часть массива, присоединив элементы с индексами от 0 до i-1 и объединив их в строку с пробелами.
                .slice(0, i) // Вырезаем часть массива от 0 до i (не включая i).
                .join` `, // Объединяем элементы в строку, разделенную пробелами.
            arr // Получаем вторую часть массива, присоединив элементы с индексами от i до конца массива и объединив их в строку с пробелами.
                .slice(i) // Вырезаем часть массива, начиная с индекса i.
                .join` ` // Объединяем элементы в строку, разделенную пробелами.
        ]);
    }

    return returnArray; // Возвращаем массив с подмассивами.
}


// Tests

console.log(partlist(["I", "wish", "I", "hadn't", "come"])); 
`[
    [ 'I', "wish I hadn't come" ],
    [ 'I wish', "I hadn't come" ],
    [ 'I wish I', "hadn't come" ],
    [ "I wish I hadn't", 'come' ]
 ]`

console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"])); 
`[
    [ 'cdIw', 'tzIy xDu rThG' ],
    [ 'cdIw tzIy', 'xDu rThG' ],
    [ 'cdIw tzIy xDu', 'rThG' ]
 ]`

console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"])); 
`[
    [ 'vJQ', 'anj mQDq sOZ' ],
    [ 'vJQ anj', 'mQDq sOZ' ],
    [ 'vJQ anj mQDq', 'sOZ' ]
 ]`

/*

DESCRIPTION:
Write a function partlist that gives all the ways to divide a list (an array)
of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair 
(or an array for languages without tuples or a structin C - C: see Examples test Cases - )

Each part will be in a string
Elements of a pair must be in the same order as in the original array.

Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"],
["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
or
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"},
{"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"),
("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"),
("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)
(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

Note
You can see other examples for each language in "Your test cases"

*/

/*

ОПИСАНИЕ:
Напишите функцию partlist, которая дает все способы разделить список (массив)
состоящий как минимум из двух элементов, на две непустые части.

Каждые две непустые части будут находиться в паре 
(или массив для языков без кортежей или структур на C - C: см. примеры test Cases - ).

Каждая часть будет находиться в строке
Элементы пары должны располагаться в том же порядке, что и в исходном массиве.

Примеры возвратов на разных языках:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"],
["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]. 
или
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}}, {"az toto", "picaro zone kiwi"}},
{{"az toto picaro", "zone kiwi"}}, {{"az toto picaro zone", "kiwi"}}.
или
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"),
("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
или 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"),
("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
или
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)
(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

Примечание
Другие примеры для каждого языка вы можете посмотреть в разделе "Ваши тестовые примеры"

*/