// Solution / Решение

const mapPopulationFit = (population, fitness) => {
    const result = []; // Массив содержащий объекты с хромосомой и её оценкой приспособленности.
    for (chromosome of population) { // Цикл for...of проходит через каждую хромосому в массиве population.
        result.push({ chromosome: chromosome, fitness: fitness(chromosome) }); // Cоздаем объект для каждой хромосомы, содержащий свойство "chromosome" с самой хромосомой и свойство "fitness" с оценкой приспособленности
    }
    return result; // Возвращается массив, содержащий объекты с хромосомой и её оценкой приспособленности для каждой хромосомы
};

// Short version

// const mapPopulationFit = (population, fitness) =>  population.map(chromosome => ({ chromosome, fitness: fitness(chromosome) }));
    // Используем метод map для преобразования каждой хромосомы в объект с соответствующей оценкой приспособленности.

/*

In a genetic algorithm, a population is a collection of candidates that may evolve toward a better solution.

We determine how close a chromosome is to a ideal solution by calculating its fitness. 
https://www.codewars.com/kata/567b468357ed7411be00004a/train You are given two parameters, 
the population containing all individuals and a function fitness that determines how close to the solution a chromosome is.

Your task is to return a collection containing an object with the chromosome and the calculated fitness.

[
  { chromosome: c, fitness: f },
  { chromosome: c, fitness: f },
  ...
]

See other katas from this series
Genetic Algorithm Series - #1 Generate
Genetic Algorithm Series - #2 Mutation
Genetic Algorithm Series - #3 Crossover
Genetic Algorithm Series - #4 Get population and fitnesses
Genetic Algorithm Series - #5 Roulette wheel selection

*/

/*

В генетическом алгоритме популяция - это набор кандидатов, которые могут эволюционировать в сторону лучшего решения.

Мы определяем, насколько хромосома близка к идеальному решению, вычисляя ее пригодность. 
https://www.codewars.com/kata/567b468357ed7411be00004a/train Вам даны два параметра, 
популяция, содержащая все особи, и функция fitness, определяющая, насколько хромосома близка к решению.

Ваша задача - вернуть коллекцию, содержащую объект с хромосомой и вычисленным фитнесом.

[
  { chromosome: c, fitness: f },
  { chromosome: c, fitness: f },
  ...
]

Смотрите другие ката из этой серии
Genetic Algorithm Series - #1 Generate
Genetic Algorithm Series - #2 Mutation
Genetic Algorithm Series - #3 Crossover
Genetic Algorithm Series - #4 Get population and fitnesses
Genetic Algorithm Series - #5 Roulette wheel selection

*/