// Solution / Решение

function game(nobi) {
    const result = [0, 0];
    for (const n of nobi) {
        switch (n) {
            case '[]':
                result[0] += 2;
                break;
            case '8<':
                result[1] += 2;
                break;
            case '()':
                result[0]++;
                result[1]++;
                break;
        }
    }
    return result;
}

// Solution 2 / Решение 2

function game(nobi) {
    const result = { '[]': 0, '8<': 0, '()': 0 }; // Создаем объект result с начальными значениями счетчиков
    nobi.forEach(n => result[n] !== undefined && result[n]++); // Проверяем, существует ли текущий элемент в объекте result
    return [result['[]'] * 2 + result['()'], result['8<'] * 2 + result['()']]; // Возвращаем результат в виде массива, в котором значения вычислены
}

// Tests

console.log(game(["[]","8<","()"])); // [ 3, 3 ]
console.log(game(["[]","8<","[]","8<","()","8<","()"])); // [ 6, 8 ]

/*

Story
Do you know who is the Doraemon? 
If you don't know, please refer to this.


Nobita Nobi and Doraemon to play "Rock Paper Scissors" game. 
Every round of game, the winner can get two Dorayaki(a kind of dessert). 
If there is a tie, everyone gets a Dorayaki. 
Kind Nobita Nobi not always action "Paper", 
because they are good friends.

Task
Complete function game() that accepts a argument:
nobi: An array that contains Nobita Nobi's action in each round.

Returns how much Dorayaki that Nobita Nobi and Doraemon will get. 
The result should be an array that contains two elements like this:

[Nobita Nobi's Dorayaki, Doraemon's Dorayaki]
Hint: Doraemon is a robot cat without fingers.

Example
game(["[]","8<","()"])  ===  [3,3]

Nobita Nobi win 1 time, Doraemon win 1 time, tie 1 time
Nobita Nobi got: 1 * 2 + 1 = 3 Dorayaki
Doraemon got: 1 * 2 + 1 = 3 Dorayaki

game(["[]","8<","[]","8<","()","8<","()"])  ===  [6,8]

Nobita Nobi win 2 times, Doraemon win 3 times, tie 2 times

Nobita Nobi got: 2 * 2 + 2 = 6 Dorayaki
Doraemon got: 3 * 2 + 2 = 8 Dorayaki 

*/

/*

История
Знаете ли вы, кто такой Дораэмон? 
Если не знаете, обратитесь к этому.


Нобита Ноби и Дораэмон играют в игру "Камень-ножницы-бумага". 
В каждом раунде победитель получает два дораяки (вид десерта). 
При равенстве очков каждый получает по дораяки. 
Добрый Нобита Ноби не всегда действует "Бумагой", 
потому что они хорошие друзья.

Задание
Выполните функцию game(), принимающую аргумент:
nobi: Массив, содержащий действия Нобиты Ноби в каждом раунде.

Возвращает количество дораяки, которое получат Нобита Ноби и Дораэмон. 
В результате должен получиться массив, содержащий два элемента, например:

[Дораяки Нобиты Ноби, Дораяки Дораэмона].
Подсказка: Дораэмон - это кот-робот без пальцев.

Пример
game(["[]", "8<","()"]) === [3,3]

Нобита Ноби выиграл 1 раз, Дораэмон выиграл 1 раз, ничья 1 раз
Нобита Ноби получил: 1 * 2 + 1 = 3 дораяки.
Дораэмон получил: 1 * 2 + 1 = 3 дораяки

game(["[]", "8<","[]", "8<","()", "8<","()"]) === [6,8]

Нобита Ноби победил 2 раза, Дораэмон победил 3 раза, ничья 2 раза

Нобита Ноби получил: 2 * 2 + 2 = 6 дораяки.
Дораэмон получил: 3 * 2 + 2 = 8 дораяки

*/