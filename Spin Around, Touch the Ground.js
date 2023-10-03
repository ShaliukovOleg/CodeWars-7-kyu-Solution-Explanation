// Solution / Решение

function spinAround(turns) {
    let totalTurns = 0; // Сумма всех поворотов в градусах
    for (let direction of turns) { // Проходим массив по значениям
        if (direction === "right") {
            totalTurns += 90; // добавляем к значению 90 при 'right'
        }
        else if (direction === "left") {
            totalTurns -= 90; // отнимаем к значению 90 при 'left'
        }
    }
    return Math.floor(Math.abs(totalTurns) / 360);
    // округленное вниз до целого числа
}

// Short version

function spinAround(turns) {
    return Math.floor(Math.abs(turns.reduce((a, d) => a + (d === "right" ? 90 : d === "left" ? -90 : 0), 0)) / 360)
}

// Tests

console.log()
console.log()
console.log()

/*

Given a list of directions to spin, "left" or "right", 
return an integer of how many full 360° rotations were made. 
Note that each word in the array counts as a 
90° rotation in that direction.

Worked Example
["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)

Examples
["left", "right", "left", "right"] ➞ 0
["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2
["left", "left", "left", "left"] ➞ 1

Notes
Return a positive number.
All tests will only include the words "right" and "left".

*/

/*

Задается список направлений вращения, "влево" или "вправо", 
возвращает целое число, показывающее, сколько полных оборотов на 360° было сделано. 
Обратите внимание, что каждое слово в массиве считается за 
90° поворота в этом направлении.

Пример работы
["право", "право", "право", "право", "лево", "право"] ➞ 1
# Вы вращались вправо 4 раза (90 * 4 = 360)
# Вы крутанулись влево один раз (360 - 90 = 270)
# Но для полного оборота вы еще раз повернулись вправо (270 + 90 = 360)

Примеры
["левый", "правый", "левый", "правый"] ➞ 0
["право", "право", "право", "право", "право", "право", "право", "право", "право"] ➞ 2
["левый", "левый", "левый", "левый", "левый"] ➞ 1

Примечания
Возвращать положительное число.
Во всех тестах будут присутствовать только слова "правый" и "левый".

*/