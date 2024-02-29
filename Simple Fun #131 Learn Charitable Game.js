// Solution / Решение

function learnCharitableGame(arr) {
    const sum = arr.reduce((a, b) => a + b, 0); // Вычисляем сумму элементов массива
    const length = arr.length; // Получаем длину массива
    return sum !== 0 && sum % length === 0; // Проверяем, чтобы сумма была ненулевой и делилась нацело на длину массива
}

// Tests

console.log(learnCharitableGame([0, 56, 100])); // true
console.log(learnCharitableGame([100, 100, 100, 90, 1, 0, 0])); // false
console.log(learnCharitableGame([0, 0, 0, 0])); // false

/*

Task
You have some people who are betting money, and they all start with the same amount of money (this number>0).
Find out if the given end-state of amounts is possible after the betting is over and money is redistributed.

Input/Output

[input] integer array arr
the proposed end-state showing final amounts for each player
[output] a boolean value
true if this is a possible end-state and false otherwise

Examples
For arr = [0, 56, 100], the output should be true.
Three players start with the same amount of money 52.

At the end of game, player 1 lose 52, player2 win 4, and player3 win 48.
For arr = [0, 0, 0], the output should be false.

Players should start with a positive number of of money.
For arr = [11], the output should be true.

One player always keep his money at the end of game.
For arr = [100, 100, 100, 90, 1, 0, 0], the output should be false.

These players can not start with the same amount of money.

*/

/*

Задача
У вас есть несколько человек, которые делают ставки на деньги, и все они начинают с одинаковой суммой денег (это число>0).
Выясните, возможно ли заданное конечное состояние сумм после того, как ставки закончатся и деньги будут перераспределены.

Вход/выход

[вход] целочисленный массив arr
предлагаемое конечное состояние, показывающее итоговые суммы для каждого игрока
[выход] булево значение
true, если это возможное конечное состояние, и false в противном случае.

Примеры
Для arr = [0, 56, 100] выходное значение должно быть true.
Три игрока начинают игру с одинаковым количеством денег 52.

В конце игры игрок 1 проиграл 52, игрок 2 выиграл 4, а игрок 3 выиграл 48.
Для arr = [0, 0, 0] вывод должен быть ложным.

Игроки должны начинать игру с положительным числом денег.
Для arr = [11] вывод должен быть истинным.

Один игрок всегда сохраняет свои деньги в конце игры.
Для arr = [100, 100, 100, 90, 1, 0, 0] вывод должен быть ложным.

Эти игроки не могут начинать игру с одинаковым количеством денег.

Переведено с помощью DeepL.com (бесплатная версия)

*/