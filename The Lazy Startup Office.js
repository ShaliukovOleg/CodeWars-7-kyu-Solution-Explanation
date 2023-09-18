// Solution / Решение

function binRota(arr) {
    // Инициализируем пустой массив, в который будем добавлять имена сотрудников.
    const result = [];

    // Проходим по строкам 2D массива с сотрудниками.
    for (let i = 0; i < arr.length; i++) {
        // Если индекс строки четный (начиная с 0), то имена добавляются в обычном порядке.
        // Если индекс строки нечетный, то имена добавляются в обратном порядке.
        const row = i % 2 === 0 ? arr[i] : arr[i].reverse();

        // Добавляем имена из текущей строки в результат.
        result.push(...row);
    }

    // Возвращаем массив с именами сотрудников в нужном порядке.
    return result;
}

// Short version
const binRota = arr => arr.flatMap((row, i) => i % 2 === 0 ? row : row.reverse());

// Or
const binRota = arr =>
    arr.map((row, i) => (i % 2 === 0 ? row : row.reverse())).flat(); 
    // flat для "выравнивания" полученных массивов в один одномерный массив

/*

A startup office has an ongoing problem with its bin. 
Due to low budgets, they don't hire cleaners. 
As a result, the staff are left to voluntarily empty the bin. 
It has emerged that a voluntary system is not working and the bin is often overflowing. 
One staff member has suggested creating a rota system based upon the staff seating plan.

Create a function binRota that accepts a 2D array of names. 
The function will return a single array containing staff names in the order that they should empty the bin.

Adding to the problem, the office has some temporary staff. 
This means that the seating plan changes every month. 
Both staff members' names and the number of rows of seats may change. 
Ensure that the function binRota works when tested with these changes.

Notes:

All the rows will always be the same length as each other.
There will be no empty spaces in the seating plan.
There will be no empty arrays.
Each row will be at least one seat long.
An example seating plan is as follows:



Or as an array:

[ ["Stefan", "Raj",    "Marie"],
  ["Alexa",  "Amy",    "Edward"],
  ["Liz",    "Claire", "Juan"],
  ["Dee",    "Luke",   "Katie"] ]
The rota should start with Stefan and end with Dee, taking the left-right zigzag path as illustrated by the red line:


As an output you would expect in this case:
["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"])

*/

/*

В одном из начинающих офисов существует постоянная проблема с мусорным ведром. 
Из-за низкого бюджета уборщиц не нанимают. 
В результате сотрудники вынуждены добровольно очищать мусорные контейнеры. 
Выяснилось, что добровольная система не работает, и мусорное ведро часто переполняется. 
Один из сотрудников предложил создать систему ротации на основе плана рассадки персонала.

Создадим функцию binRota, принимающую двумерный массив имен. 
Функция будет возвращать один массив, содержащий имена сотрудников в том порядке, в котором они должны опорожнять урну.

Проблема заключается в том, что в офисе работает несколько временных сотрудников. 
Это означает, что план рассадки меняется каждый месяц. 
Могут меняться как имена сотрудников, так и количество рядов сидений. 
Убедитесь, что функция binRota работает при тестировании с учетом этих изменений.

Примечания:

Все ряды всегда будут иметь одинаковую длину.
В плане рассадки не будет пустых мест.
Пустых массивов не будет.
Каждый ряд будет иметь длину не менее одного места.
Пример плана рассадки выглядит следующим образом:



Или в виде массива:

[ ["Stefan", "Raj",    "Marie"],
  ["Alexa",  "Amy",    "Edward"],
  ["Liz",    "Claire", "Juan"],
  ["Dee",    "Luke",   "Katie"] ]
Рота должна начинаться со Стефана и заканчиваться Ди, и идти зигзагообразным путем слева направо, как показано красной линией:


В качестве выходных данных в этом случае можно ожидать:
["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"])

*/