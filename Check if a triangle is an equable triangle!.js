// Solution / Решение

function equableTriangle(a, b, c) {
    const p = (a + b + c) / 2; // Записываем в переменную периметр поделенный пополам
    // Сравнение периметра с площадью треугольника по формуле Герона
    return p * 2 === Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

// Short version

const equableTriangle = (a, b, c) => Math.pow(4 * (a + b + c), 2) === (a + b + c) * (b + c - a) * (a + c - b) * (a + b - c);

// Tests

console.log(equableTriangle(5, 12, 13)); // true
console.log(equableTriangle(2, 3, 4)); // false
console.log(equableTriangle(6, 8, 10)); // true
console.log(equableTriangle(7, 15, 20)); // true

/*

A triangle is called an equable triangle if its area equals its perimeter. 
Return true, if it is an equable triangle, else return false. 
You will be provided with the length of sides of the triangle. 
Happy Coding!

*/

/*

Треугольник называется равносторонним, если его площадь равна периметру. 
Верните true, если треугольник равносторонний, иначе верните false. 
Вам будет предоставлена длина сторон треугольника. 
Счастливого кодирования!

*/