// Solution / Решение

const rowWeights = array => {
    const teams = [0, 0]; // Две команды для четных и нечетных людей в очереди
    array.forEach((x, i) => teams[i % 2] += x); // Один проход по массиву в котором мы к текущем командам добавляем четные и нечетные значения "людей"
    return teams; // Возвращаем полученный массив результатов
};

// Short version

// const rowWeights = array => array.reduce((teams, x, i) => (teams[i % 2] += x, teams), [0, 0]);

// Tests

console.log(rowWeights([50, 60, 70, 80])); // [ 120, 140 ]
console.log(rowWeights([13, 27, 49])); // [ 62, 27 ]
console.log(rowWeights([70, 58, 75, 34, 91])); // [ 236, 92 ]

/*

Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), 
return a new array/tuple of two integers, where the first one is the total weight of team 1, 
and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.

Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

*/

/*

Сценарий
Несколько человек стоят в ряд, разделившись на две команды.
Первый человек попадает в команду 1, второй - в команду 2, третий - в команду 1 и так далее.


Задача
Дается массив целых положительных чисел (веса людей), 
вернуть новый массив/кортеж из двух целых чисел, где первое - общий вес команды 1, 
а второе - общий вес команды 2.


Примечания
Размер массива должен быть не менее 1.
Все числа будут положительными.


Примеры ввода >> вывода
rowWeights([13, 27, 49]) ==> return (62, 27)
Пояснения:
Первый элемент 62 - это общий вес команды 1, а второй элемент 27 - общий вес команды 2.


rowWeights([50, 60, 70, 80]) ==> return (120, 140)
Пояснения:
Первый элемент 120 - это общий вес команды 1, а второй элемент 140 - общий вес команды 2.


rowWeights([80]) ==> return (80, 0)
Пояснения:
Первый элемент 80 - это общий вес команды 1, а второй элемент 0 - общий вес команды 2.

*/