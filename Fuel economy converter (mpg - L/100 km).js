// Solution / Решение

function mpg2lp100km(x) {
    // Используем формулу преобразования, умножая на объем галлона (3.785411784) и деля на длину мили в километрах (1.609344).
    // Результат округляется до двух знаков после запятой без дополнительных преобразований.
    return Math.round((100 * 3.785411784) / (x * 1.609344) * 100) / 100;
}

function lp100km2mpg(x) {
    // Используем ту же формулу преобразования, но в обратном порядке.
    // Результат также округляется до двух знаков после запятой без дополнительных преобразований.
    return Math.round((100 / 1.609344) / (x / 3.785411784) * 100) / 100;
}

// Solution 2 / Решение 2

// Более короткая запись, но в целом все тоже самое, что и в функции выше
const mpg2lp100km = x => Math.round(235.214 / x * 100) / 100;
const lp100km2mpg = x => Math.round(235.214 / x * 100) / 100;

// Short version

const mpg2lp100km = lp100km2mpg = x => Math.round(23521.4 / x) / 100;

// Tests

console.log(mpg2lp100km(42)); // 5.6
console.log(lp100km2mpg(9)); // 26.13

/*

Background
While mpg (miles per gallon) is a common unit of measurement for fuel economy in North America, 
for Europe the standard unit of measurement is generally liter per 100 km. 
Conversion between these units is somewhat hard to calculate in your head, 
so your task here is to implement a simple convertor in both directions.

Functions
mpg2lp100km() converts from miles per gallon to liter per 100 km.
lp100km2mpg() converts in the opposite direction.

Output
The output of both functions should be a number rounded to 2 decimal places.

Examples
mpg2lp100km(42) returns 5.6
lp100km2mpg( 9) returns 26.13

Reference
For this kata, use U.S. gallon, not imperial gallon.
1 gallon = 3.785411784 liters
1 mile = 1.609344 kilometers

*/

/*

Справочная информация
В то время как mpg (miles per gallon) является общепринятой единицей измерения экономии топлива в Северной Америке, 
в Европе стандартной единицей измерения обычно является литр на 100 км. 
Конвертацию между этими единицами довольно сложно рассчитать в уме, 
поэтому ваша задача - реализовать простой конвертер в обе стороны.

Функции
mpg2lp100km() конвертирует мили на галлон в литры на 100 км.
lp100km2mpg() конвертирует в обратном направлении.

Выходные данные
На выходе обеих функций должно получиться число, округленное до 2 знаков после запятой.

Примеры
mpg2lp100km(42) возвращает 5,6
lp100km2mpg( 9) возвращает 26,13

Ссылка
Для этого ката используйте галлоны США, а не имперские галлоны.
1 галлон = 3,785411784 литра
1 миля = 1,609344 километра

*/