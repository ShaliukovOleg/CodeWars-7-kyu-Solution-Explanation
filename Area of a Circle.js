// Solution / Решение
function circleArea(radius) {
    if (radius <= 0) throw new 'Error'; // проверка на отрицательные или нулевые значения
    return (Math.PI * radius * radius); // подсчет согласно формуле площади круга
}


/*

Complete the function which will return the area of a circle with the given radius.
Returned value is expected to be accurate up to tolerance of 0.01.
If the radius is not positive, throw Error.

Example:

circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error

*/

/*

Заполните функцию, которая будет возвращать площадь круга с заданным радиусом.
Ожидается, что возвращаемое значение будет точным с допуском 0.01.
Если радиус не является положительным, то будет выдана ошибка Error.

Пример:

circleArea(43.2673); // возвращает 5881.248 (± 0.01)
circleArea(68); // возвращает 14526,724 (± 0,01)
circleArea(0); // выдает ошибку
circleArea(-1); // выкидывает ошибку

*/