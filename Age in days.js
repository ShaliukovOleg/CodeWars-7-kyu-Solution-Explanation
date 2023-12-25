// Solution / Решение

function ageInDays(year, month, day) {
    const today = new Date(); // получаем сегодняшнюю дату
    const birthDate = new Date(year, month - 1, day); // месяцы в JS начинаются с 0
    const diffInMc = today - birthDate; // Разница в миллисекундах
    const days = Math.floor(diffInMc / (1000 * 60 * 60 * 24)); // Преобразование миллисекунд в дни
    return `You are ${days} days old`;
}

// Short version

const ageInDays = (year, month, day) => `You are ${Math.floor((new Date() - new Date(year, month - 1, day)) / (1000 * 60 * 60 * 24))} days old`;

// Tests

console.log(ageInDays(1990, 6, 15)); // You are 12247 days old
console.log(ageInDays(2000, 7, 16)); // You are 8563 days old
console.log(ageInDays(2010, 8, 17)); // You are 4879 days old

/*

Did you ever want to know how many days old are you? 
Complete the function which returns your age in days. 
The birthday is given in the following order: 
year, month, day.

For example if today is 30 November 2015 then
ageInDays(2015, 11, 1) returns "You are 29 days old"

The birthday is expected to be in the past.
Suggestions on how to improve the kata are welcome!

*/

/*

Хотели ли вы когда-нибудь узнать, сколько вам дней от роду? 
Заполните функцию, которая возвращает ваш возраст в днях. 
Дата рождения указана в следующем порядке: 
год, месяц, день.


Например, если сегодня 30 ноября 2015 года, то
ageInDays(2015, 11, 1) возвращает "Вам 29 дней".


Ожидается, что день рождения будет в прошлом.
Предложения по улучшению ката приветствуются!

*/