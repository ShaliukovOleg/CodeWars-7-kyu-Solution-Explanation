// Solution / Решение

function crossover(chromosome1, chromosome2, index) {
    const firstPart = str => str.slice(0, index); // Создаем функцию firstPart, которая возвращает первую часть строки до заданного индекса.
    const secondPart = str => str.slice(index); // Создаем функцию secondPart, которая возвращает вторую часть строки начиная с заданного индекса.
    return [
        firstPart(chromosome1) + secondPart(chromosome2), // Первая комбинация: первая часть chromosome1 + вторая часть chromosome2.
        firstPart(chromosome2) + secondPart(chromosome1) // Вторая комбинация: первая часть chromosome2 + вторая часть chromosome1.
    ];
};

// Short version

const crossover = (chr1, chr2, i) => [chr1.slice(0, i) + chr2.slice(i), chr2.slice(0, i) + chr1.slice(i)];

// Tests

console.log(crossover('110', '001', 2)); // [ '111', '000' ]
console.log(crossover('111000', '000110', 3)); // [ '111110', '000000' ]

/*

In genetic algorithms, crossover is a genetic operator used to vary the programming 
of chromosomes from one generation to the next.

The one-point crossover consists in swapping one's cromosome part with another in a specific given point. 
The image bellow shows the crossover being applied on chromosomes 
1011011001111 and 1011100100110 with the cut point (index) 4:

In this kata you have to implement a function crossover that receives two chromosomes chromosome1, 
chromosome2 and a zero-based index and it has to return an array with the crossover 
result on both chromosomes [chromosome1, chromosome2].

Example:
crossover('111000', '000110', 3) should return ['111110', 000000']

See other katas from this series
Genetic Algorithm Series - #1 Generate
Genetic Algorithm Series - #2 Mutation
Genetic Algorithm Series - #3 Crossover
Genetic Algorithm Series - #4 Get population and fitnesses
Genetic Algorithm Series - #5 Roulette wheel selection

*/

/*

В генетических алгоритмах кроссинговер - это генетический оператор, используемый для изменения программирования 
хромосом от одного поколения к другому.

Одноточечный кроссинговер заключается в замене одной части хромосомы на другую в определенной точке. 
На изображении ниже показано, как кроссинговер применяется к хромосомам 
1011011001111 и 1011100100110 с точкой отсечения (индексом) 4:

В этом задании вы должны реализовать функцию кроссовера, которая получает две хромосомы chromosome1, 
хромосому2 и нулевой индекс и должна возвращать массив с результатом скрещивания 
на обеих хромосомах [хромосома1, хромосома2].

Пример:
crossover('111000', '000110', 3) должен вернуть ['111110', 000000'].

Смотрите другие ката из этой серии
Genetic Algorithm Series - #1 Generate
Genetic Algorithm Series - #2 Mutation
Genetic Algorithm Series - #3 Crossover
Genetic Algorithm Series - #4 Get population and fitnesses
Genetic Algorithm Series - #5 Roulette wheel selection

*/