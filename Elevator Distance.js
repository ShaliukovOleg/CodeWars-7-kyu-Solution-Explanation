// Solution / Решение

function elevatorDistance(array) {
    let totalDistance = 0; // Переменная для хранения общего расстояния
    for (let i = 1; i < array.length; i++) { // Начинаем массив этажей со второго этажа (индекс 1)
        const distance = Math.abs(array[i] - array[i - 1]); // Вычисляем разницу между текущим этажом и предыдущим
        totalDistance += distance; // Добавляем разницу к общему расстоянию
    }
    return totalDistance; // Возвращаем общее расстояние
}

// Short version

function elevatorDistance(array) {
    return array.slice(1).reduce((acc, curr, index) => acc + Math.abs(curr - array[index]), 0);
}

// Tests

console.log(elevatorDistance([5, 2, 8])); // 9
console.log(elevatorDistance([1, 2, 3])); // 2
console.log(elevatorDistance([7, 1, 7, 1])); // 18

/*

Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, 
then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, 
return an integer representing the total distance travelled for visiting each floor in the array in order.

// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0
Array will always contain at least 2 floors. 
Random tests will contain 2-20 elements in array, and floor values between 0 and 30.

*/

/*

Представьте, что вы находитесь на 5-м этаже здания, затем спускаетесь на 2-й этаж, 
затем снова поднимаетесь на 8-й этаж. В общей сложности вы преодолели расстояние в 3 + 6 = 9 этажей.

Зададим массив, представляющий ряд этажей, на которые необходимо подняться на лифте, 
верните целое число, представляющее общее расстояние, пройденное при посещении каждого этажа в массиве по порядку.

// простые примеры
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// если два последовательных этажа одинаковы,
//расстояние между ними равно 0
elevatorDistance([3,3]) = 0
Массив всегда будет содержать не менее 2 этажей. 
Случайные тесты будут содержать 2-20 элементов в массиве и значения этажей от 0 до 30.

*/