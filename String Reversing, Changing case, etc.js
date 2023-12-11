// Solution / Решение

function reverseAndMirror(s1, s2) {
    const changeCase = str => [...str] // Функция для изменения регистра символов
        .map(char => char === char.toLowerCase()
            ? char.toUpperCase()
            : char.toLowerCase());
    // Возвращаем перевернутые и зеркальные строки
    return [...changeCase(s2).reverse(), '@@@', ...changeCase(s1).reverse(), ...changeCase(s1)].join('');
}

// Tests

console.log(reverseAndMirror('FizZ', 'buZZ')); // zzUB@@@zZIffIZz
console.log(reverseAndMirror('Water', 'Fish')); // HSIf@@@RETAwwATER

/*

Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; 
e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; 
e.g Water -> RETAwwATER 

** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**

*/

/*

Учитывая 2 параметра строки, покажите конкатенацию:

обратная 2-й строке с инвертированным регистром; 
например, Рыба -> HSIf
разделитель между обеими строками: @@@
1-я строка, перевернутая с инвертированным регистром, а затем зеркально отображенная; 
например, Вода -> RETAwwATER 

** Имейте в виду, что это ката было изначально разработано для языка Shell, я знаю, что оно может быть проще в других языках.**

*/