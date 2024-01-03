// Solution / Решение

function generate(length) {
    let result = []; // Массив для хранения значений и возвращения в конечном виде
    for (let i = 0; i < length; i++) { // Проходим нужное количество итераций, соответствующее переданной длине
        result.push(Math.round(Math.random())); // В теле итерации добавляем каждый раз новое случайное значение в конец массива
    }
    return result; // Возвращаем сгенерированный массив
}

// Short version

const generate = length => Array.from(Array(length), x => Math.round(Math.random())).join``;

// Tests

console.log(generate(16))
console.log(generate(16))
console.log(generate(16))

/*

A genetic algorithm is based in groups of chromosomes, called populations. 
To start our population of chromosomes we need to generate random binary strings with a specified length.

In this kata you have to implement a function generate that receives 
a length and has to return a random binary strign with length characters.

Example:
Generate a chromosome with length of 4 generate(4) 
could return the chromosome 0010, 1110, 1111... or any of 2^4 possibilities.

Note: Some tests are random. 
If you think your algorithm is correct but the result fails, 
trying again should work.

See other katas from this series
Genetic Algorithm Series - #1 Generate
Genetic Algorithm Series - #2 Mutation
Genetic Algorithm Series - #3 Crossover
Genetic Algorithm Series - #4 Get population and fitnesses
Genetic Algorithm Series - #5 Roulette wheel selection

This kata is a piece of Binary Genetic Algorithm

*/

/*

Генетический алгоритм основан на группах хромосом, называемых популяциями. 
Чтобы запустить нашу популяцию хромосом, нам нужно сгенерировать случайные двоичные строки заданной длины.

В этом задании вы должны реализовать функцию generate, которая получает 
длину и должна возвращать случайную двоичную строку с символами длины.

Пример:
Генерация хромосомы длиной 4 generate(4) 
может вернуть хромосому 0010, 1110, 1111... или любую из 2^4 возможностей.

Примечание: Некоторые тесты являются случайными. 
Если вы считаете, что ваш алгоритм верен, но результат не получается, 
повторите попытку.

Смотрите другие ката из этой серии
Серия генетических алгоритмов - #1 Генерация
Серия генетических алгоритмов - #2 Мутация
Серия генетических алгоритмов - #3 Кроссинговер
Серия генетических алгоритмов - #4 Получение популяции и фитнессов
Серия генетических алгоритмов - #5 Выбор колеса рулетки

Это ката является частью бинарного генетического алгоритма

*/