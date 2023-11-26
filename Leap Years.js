// Solution / Решение

function isLeapYear(year) {
    switch (true) { // проверяем через конструкцию switch true, от большего к меньшему согласно кратности
        case year % 400 === 0: // проверка года кратного 400
            return true;
        case year % 100 === 0: // проверка года кратного 100
            return false;
        case year % 4 === 0: // проверка года кратного 4
            return true;
        default:
            return false;
    }
}

const isLeapYear = year => year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;

// Tests

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2015)); // false

/*

In this kata you should simply determine, whether a given year is a leap year or not. 

In case you don't know the rules, here they are:
Years divisible by 4 are leap years,
but years divisible by 100 are not leap years,
but years divisible by 400 are leap years.

Tested years are in range 1600 ≤ year ≤ 4000.

*/

/*

В этом ката нужно просто определить, является ли данный год високосным или нет. 

Если вы не знаете правил, то вот они:
Годы, кратные 4, являются високосными,
годы, кратные 100, не являются високосными,
а годы, кратные 400, являются високосными.

Проверяемые годы находятся в диапазоне 1600 ≤ год ≤ 4000.

*/