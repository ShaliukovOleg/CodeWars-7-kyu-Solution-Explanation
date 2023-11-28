// Solution / Решение

function nbYear(p0, percent, aug, p) {
    let year = 0; // дополнительная переменная, которую мы вернем в конце
    while (p0 < p) { // условие выполнение цикла
        p0 += Math.floor(p0 * percent / 100 + aug); // сама формула согласно условию
        year++; // повышаем значение года на 1
    }
    return year; // возврат результата
}

// Solution 2 / Решение 2

function nbYear(p0, percent, aug, p) {
    let year = 0;
    while (p0 < p) p0 += p0 * percent / 100 + aug  | 0, year++;
    return year;
}

// Solution 3 / Решение 3

function nbYear(p0, percent, aug, p) {
    for (let year = 0; p0 < p; year++) {
        p0 += p0 * percent / 100 + aug | 0
    }
    return year;
}

// Tests

console.log(nbYear(1500, 5, 100, 5000)); // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94

/*

In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.

*/

/*

В небольшом городе численность населения в начале года составляет p0 = 1000 человек. 
Население регулярно увеличивается на 2% в год, кроме того, в город ежегодно прибывает 50 новых жителей. 
Сколько лет необходимо городу, чтобы его население стало больше или равно p = 1200 жителей?

В конце первого года численность населения составит: 
1000 + 1000 * 0,02 + 50 => 1070 жителей.

В конце второго года численность населения составит: 
1070 + 1070 * 0,02 + 50 => 1141 житель (** число жителей - целое число **)

В конце 3-го года будет:
1141 + 1141 * 0.02 + 50 => 1213

Для этого потребуется целых 3 года.
Более общие заданные параметры:

p0, percent, aug (количество жителей, прибывающих или убывающих каждый год), p (количество населения, которое должно быть равно или превышено).

функция nb_year должна вернуть n количество целых лет, необходимых для того, чтобы численность населения была больше или равна p.

aug - целое число, percent - положительное или нулевое плавающее число, p0 и p - положительные целые числа (> 0).

Примеры:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Примечание:
Не забудьте преобразовать параметр percent в проценты в теле функции: если параметр percent равен 2, то его нужно преобразовать в 0.02.

Доли людей не существует. На конец каждого года численность населения является целым числом: 252,8 человек, округлим до 252 человек.

*/