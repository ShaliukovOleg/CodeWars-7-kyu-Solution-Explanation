// Solution / Решение

const mutate = (chromosome, p) => [...chromosome] // Разбиваем строку chromosome на массив отдельных символов
    // Проходим по каждому элементу массива и проверяем
    .map(bit => Math.random() < p ? (+bit ^ 1) : bit) // выпадает ли случайное число в диапазоне [0, 1) меньше заданной вероятности p
    .join``; // Объединяем массив битов обратно в строку

// Short version

// const mutate = (c, p) => c.replace(/./, b => b ^ (Math.random() < p));

// Tests

const zero = Array(10).join('0');
const one  = Array(10).join('1');

console.log(mutate(zero, 1)); // 111111111
console.log(mutate(one, 1)); // 000000000
console.log(mutate(one, 0)); // 111111111

/*

Mutation is a genetic operator used to maintain genetic diversity from one generation 
of a population of genetic algorithm chromosomes to the next.

Mutation

A mutation here may happen on zero or more positions in a chromosome. 
It is going to check every position and by a given probability 
it will decide if a mutation will occur.

A mutation is the change from 0 to 1 or from 1 to 0.
Note: Some tests are random. 
If you think your algorithm is correct but the result fails, 
trying again should work.

See other katas from this series
Genetic Algorithm Series - #1 Generate
Genetic Algorithm Series - #2 Mutation
Genetic Algorithm Series - #3 Crossover
Genetic Algorithm Series - #4 Get population and fitnesses
Genetic Algorithm Series - #5 Roulette wheel selection

*/

/*

Мутация - это генетический оператор, используемый для поддержания генетического разнообразия от одного поколения 
популяции хромосом генетического алгоритма к следующему.

Мутация

Мутация может происходить в нулевой или нескольких позициях хромосомы. 
Алгоритм проверяет каждую позицию и по заданной вероятности 
он решит, произойдет ли мутация.

Мутация - это изменение с 0 на 1 или с 1 на 0.
Примечание: некоторые проверки являются случайными. 
Если вы считаете, что ваш алгоритм верен, но результат не получается, 
повторите попытку.

Смотрите другие ката из этой серии
Genetic Algorithm Series - #1 Generate
Genetic Algorithm Series - #2 Mutation
Genetic Algorithm Series - #3 Crossover
Genetic Algorithm Series - #4 Get population and fitnesses
Genetic Algorithm Series - #5 Roulette wheel selection

*/