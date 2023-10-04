// Solution / Решение

function lengthOfVine(n, height, radius) {
    const circumference = 2 * Math.PI * radius; // Вычисляем длину окружности дерева (одного оборота)
    const spiralLength = Math.sqrt(circumference ** 2 + (height / n) ** 2); // Вычисляем длину спирали на одном обороте лозы
    const totalLength = n * spiralLength; // Вычисляем общую длину виноградной лозы
    return parseFloat(totalLength.toFixed(2)); // Округляем до двух десятичных знаков и возвращаем
}

// Short version

function lengthOfVine(n, height, radius) {
    return parseFloat((n * Math.sqrt((2 * Math.PI * radius) ** 2 + (height / n) ** 2)).toFixed(2));
}

// Short version (thanks Bubbler, AntonTimofeev)

function lengthOfVine(n, height, radius) {
    return +Math.hypot(2 * Math.PI * radius * n, height).toFixed(2)
}

// Tests

console.log(lengthOfVine(5, 20, 0.5)); // 25.43
console.log(lengthOfVine(2, 10, 1)); // 16.06
console.log(lengthOfVine(3, 4, 5)); // 94.33
/*
Methods description
Math.hypot - returns the square root of the sum of the squares of its arguments.
+(Code) - unary plus. Converts it to a number.
toFixed(n) - to n decimal places.
*/

/*
Описание методов
Math.hypot - возвращает квадратный корень из суммы квадратов своих аргументов.
+(Code) - унарный плюс. Преобразует в число.
toFixed(n) - до n знаков после запятой.
*/

/*

Story
There is a vine wrapped on a tree. 
Vine wrapped around the tree n times 
(from the bottom to the top). 
We know the height and the radius of the tree. 
Please calculate the shortest length of the vine.

Task
Complete function lengthOfVine() that accepts three numeric arguments n,
height and radius. return a float value(the shortest length of the vine).
The result should round to two decimal places.

Examples
lengthOfVine(2,10,1) === 16.06
lengthOfVine(5,20,0.5) === 25.43
lengthOfVine(3,4,5) === 94.33

Hint
You can take the tree as a cylinder, the vine is a line from the bottom to the top. Turn the three-dimensional geometry into the plane geometry can solve the problem.

*/

/*

История
На дереве висит виноградная лоза. 
Лоза обвилась вокруг дерева n раз 
(снизу вверх). 
Нам известны высота и радиус дерева. 
Вычислите наименьшую длину лозы.

Задание
Напишите функцию lengthOfVine(), принимающую три числовых аргумента n,
возвращает значение float (наименьшая длина лозы).
Результат должен округляться до двух знаков после запятой.

Примеры
lengthOfVine(2,10,1) === 16.06
lengthOfVine(5,20,0.5) === 25.43
lengthOfVine(3,4,5) === 94,33

Подсказка
Дерево можно рассматривать как цилиндр, а лозу - как линию от низа до верха. Превращение трехмерной геометрии в геометрию плоскости позволяет решить задачу.

*/