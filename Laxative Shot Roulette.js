// Solution / Решение

function getChance(n, x, a) {
    let chance = 1; // изначальная вероятность 1 (100%)
    for (let i = 0; i < a; i++) { // проходим по циклу согласно количеству стопок
        chance *= (n - x) / n; // при каждой итерации мы умножаем шанс на общее количество "оставшихся" стопок
        n--; // снижаем общее кол-во на 1
    }
    return Math.round(chance * 100) / 100; // возвращаем результат до двух знаков после запятой
}

// Solution 2 / Решение 2

function getChance(n, x, a) {
    let chance = 1;
    while (!!a--) chance *= (n - x) / n--
    return +chance.toFixed(2);
}

// Short version

const getChance = (n, x, a) => +Array.from({ length: a }, () => (n - x) / n--).reduce((a, b) => a * b, 1).toFixed(2);

// Tests

console.log(getChance(2, 1, 1)); // 0.5
console.log(getChance(4, 1, 3)); // 0.25
console.log(getChance(100, 10, 10)); // 0.33

/*

Description
Peter enjoys taking risks, and this time he has decided to take it up a notch!

Peter asks his local barman to pour him n shots, 
after which Peter then puts laxatives in x of them. 
He then turns around and lets the barman shuffle the shots. 
Peter approaches the shots and drinks a of them one at a time. 
Just one shot is enough to give Peter a runny tummy. 
What is the probability that Peter doesn't need to run to the loo?

Task
You are given:

n - The total number of shots.
x - The number of laxative laden shots.
a - The number of shots that peter drinks.

return the probability that Peter won't have the trots after drinking. 
n will always be greater than x, and a will always be less than n.

You must return the probability rounded to two decimal places i.e. 0.05 or 0.81

*/

/*

Описание
Питер любит рисковать, и на этот раз он решил пойти на риск!

Питер просит местного бармена налить ему n рюмок, 
после чего Питер кладет в каждую из них слабительное. 
Затем он отворачивается и позволяет бармену перетасовать рюмки. 
Питер подходит к рюмкам и выпивает одну из них за раз. 
Одной рюмки достаточно, чтобы у Питера начался насморк. 
Какова вероятность того, что Питеру не придется бежать в туалет?

Задача
Вам даны:

n - общее количество уколов.
x - количество уколов со слабительным.
a - количество рюмок, которые выпьет Питер.

Верните вероятность того, что у Питера не будет трошки после выпитого. 
n всегда будет больше, чем x, а a всегда будет меньше, чем n.

Вы должны вернуть вероятность, округленную до двух знаков после запятой, т. е. 0,05 или 0,81.

*/