// Solution / Решение

function merryChristmas(s1, s2) {
    const s2Chars = s2.split(''); // преобразуем строку 2 в массив
    s2Chars.forEach(elem => s1 = s1.includes(elem) ? s1.replace(elem, "") : s1 + elem); // проверяем и заменяем каждый элемент второго массива в первой строке

    const s1Chars = s1.split(''); // преобразуем полученную строку 1 в массив
    const checkStr = [...'Merry Christmas!']; // преобразуем в массив строку согласно условию

    return s1Chars.sort().join`` === checkStr.sort().join`` // сравниваем два полученных массива на соответствие.
}

// Tests

console.log(merryChristmas("abcMerry Christmas!", "abc"));
console.log(merryChristmas("abcerry hristmas!", "abcMC"));
console.log(merryChristmas("abcMerry Christmas!", "bad"));

/*

When no more interesting kata can be resolved, 
I just choose to create the new kata, to solve their own, 
to enjoy the process --myjinxin2015 said

Description:
Christmas is coming soon. As a programmer, 
you need to complete a series of tasks to welcome the arrival of Christmas. 
This time your task is:

Given two string s1 and s2. You need to perform the following operations: 
Compare each character of s2 with s1. If s1 contains the character, remove it; 
If not, append it to s1. After these remove or append operations, 
if the characters of s1 are same as "Merry Christmas!"(order can be different), 
return true; Otherwise, return false. 
For example:

var s1="abcMerry Christmas!",s2="abc"
merryChristmas(s1,s2) === true

var s1="abcerry hristmas!",s2="abcMC"
merryChristmas(s1,s2) === true

var s1="abcMerry Christmas!",s2="bad"
merryChristmas(s1,s2) === false

*/

/*

Когда нет возможности решить более интересные ката, 
я просто создаю новые ката, чтобы решить их самостоятельно, 
чтобы насладиться процессом --myjinxin2015 сказал

Описание:
Скоро наступит Рождество. В роли программиста, 
вам необходимо выполнить ряд заданий, чтобы приветствовать приход Рождества. 
На этот раз ваша задача заключается в следующем:

Даны две строки s1 и s2. Вам необходимо выполнить следующие операции: 
Сравнить каждый символ s2 с s1. Если s1 содержит этот символ, то удалить его; 
Если нет, то добавить его к s1. После этих операций удаления или добавления, 
если символы s1 совпадают с символом "Merry Christmas!" (порядок может быть разным), 
возвращается true; в противном случае возвращается false. 
Например:

var s1="abcMerry Christmas!",s2="abc"
merryChristmas(s1,s2) === true

var s1="abcerry hristmas!",s2="abcMC"
merryChristmas(s1,s2) === true

var s1="abcMerry Christmas!",s2="bad"
merryChristmas(s1,s2) === false

*/