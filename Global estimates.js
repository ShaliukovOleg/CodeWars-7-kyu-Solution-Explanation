// Solution / Решение

function globalEstimate(estimates) {
    let bestCase = 0;
    let worstCase = 0;

    estimates.forEach(([best, worst]) => { // Находим суммы лучших и худших случаев
        bestCase += best;
        worstCase += worst;
    });

    return [bestCase, Math.round((bestCase + worstCase) / 2), worstCase]; // Возвращаем кортеж с глобальным наилучшим, средним и наихудшим случаем
}

// Short version

const globalEstimate = estimates => estimates.reduce(([best, avg, worst], [b, w]) => [best + b, avg + (b + w) / 2, worst + w], [0, 0, 0]);

// Tests

console.log(globalEstimate([[1, 2], [3, 4]])); // [ 4, 5, 6 ]
console.log(globalEstimate([[0, 1], [0, 10]])); // [ 0, 5.5, 11 ]
console.log(globalEstimate([[1, 3], [1, 4], [1, 5]])); // [ 3, 7.5, 12 ]

/*

Lately, feature requests have been piling up and you need a way to make global estimates of the time it would take to implement them all. 
If you estimate feature A to take 4 to 6 hours to implement, and feature B to take 2 to 5 hours, 
then in the best case it will only take you 6 (4 + 2) hours to implement both features, 
and in the worst case it will take you 11 (6 + 5). 
In the average case, it will take you 8.5 hours.

To help you streamline the estimation process, write a function that returns a tuple (JS: array) 
of the global best case, average case and worst case given a tuple of tuples (JS: array of arrays) 
representing best case and worst case guesses.

For example,
estimates = ((1, 2), (3, 4))
global_estimate(estimates) == (4, 5, 6)

Don't worry about rounding or invalid input.

*/

/*

В последнее время запросы на функции накапливаются, и вам нужен способ глобально оценить время, которое потребуется для их реализации. 
Если вы оцениваете, что реализация функции A займет от 4 до 6 часов, а функции B - от 2 до 5 часов, 
то в лучшем случае вам потребуется всего 6 (4 + 2) часов, чтобы реализовать обе функции, 
а в худшем - 11 (6 + 5). 
В среднем случае это займет 8,5 часа.

Чтобы упростить процесс оценки, напишите функцию, которая возвращает кортеж (JS: массив) 
глобальных значений наилучшего, среднего и наихудшего случая, учитывая кортеж кортежей (JS: массив массивов) 
представляющих предположения о наилучшем и наихудшем случае.

Например,
estimates = ((1, 2), (3, 4))
global_estimate(estimates) == (4, 5, 6)

Не беспокойтесь об округлении или некорректном вводе.

*/