// Solution / Решение

function countAnimals(animals, count) {
    // Разделяем строку на отдельные элементы
    const animalArray = animals.split(',');

    // Создаем массив для хранения количества каждого элемента
    const result = [];

    // Инициализируем счетчики для каждого элемента в массиве count
    const counters = {};
    for (const animal of count) {
        counters[animal] = 0;
    }

    // Считаем количество каждого элемента в исследуемом массиве
    for (const animal of animalArray) {
        if (counters.hasOwnProperty(animal)) {
            counters[animal]++;
        }
    }

    // Добавляем количество каждого животного в результат
    for (const animal of count) {
        result.push(counters[animal]);
    }

    return result;
}

// Short version
function countAnimals(animals, count) {
    return count.map(animal => (animals.split(',').filter(elem => elem === animal).length));
}
// Разбиваем строку 'animals' на массив
// и для каждого животного из массива 'count'
// считаем количество совпадений в массиве 'animals'

// Version according to the problem condition and using the match method / Версия в соответствии с условием задачи и методом подбора

function countAnimals(animals, count) {
    return count.map(animal => (animals.match(new RegExp(animal, "g")) || []).length);
}

// Tests

console.log(countAnimals("dog,cat", ["dog", "cat"]));   // [1, 1]
console.log(countAnimals("dog,cat", ["dog", "cat", "pig"]));    // [1, 1, 0]
console.log(countAnimals("dog,dog,cat", ["dog", "cat"]));   // [2, 1]
console.log(countAnimals("dog,dog,cat", ["pig", "cow"]));   // [0, 0]

/*

Task
Coding in function countAnimals. 
function accept two parameters: animals, a string contains some animals; count, 
an array list of which animals we should count. The result should be a number array.

Examples
countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]

*/

/*

Задача
Кодирование в функции countAnimals. 
Функция принимает два параметра: animals - строка, содержащая некоторое количество животных; count, 
список массивов, в которых нужно посчитать животных. Результатом должен быть массив чисел.

Примеры
countAnimals("dog,cat",["dog", "cat"]); //=> [1,1]
countAnimals("dog,cat",["dog", "cat", "pig"]); //=> [1,1,0]
countAnimals("dog,dog,cat",["dog", "cat"]); //=> [2,1]
countAnimals("dog,dog,cat",["pig", "cow"]); //=> [0,0]

*/