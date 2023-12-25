// Solution / Решение

function candies(kids) {
    if (kids.length < 2) return -1; // Проверка на кол-во детей
    // Нахождение максимального значения помноженного на длинну массива
    const maxCandies = Math.max.apply(null, kids) * kids.length;
    // Вычитание из нужного максимального количества конфет для всех детей, 
    // того кол-ва которое есть изначально
    return maxCandies - kids.reduce((acc, elem) => acc + elem, 0);
}

// Solution 2 / Решение 2

function candies(kids) {
    if (kids.length < 2) return -1; // Проверка на кол-во детей

    let max = 0; // максимальное значение
    let sum = 0; // сумма всех конфет в массиве

    for (var i = 0; i < kids.length; i++) {
        max = Math.max(max, kids[i]);
        sum += kids[i];
    }
    // максимальное кол-во помноженное на длинну массива 
    // минус сумму конфет в изначальном массиве
    return max * kids.length - sum; 
}

// Tests

console.log(candies([5, 8, 6, 4])); // 9
console.log(candies([1, 2, 4, 6])); // 11
console.log(candies([1, 2])); // 1

/*

Description
"It's the end of trick-or-treating and we have a list/array representing 
how much candy each child in our group has made out with. 
We don't want the kids to start arguing, 
and using our parental intuition we know trouble is brewing as many 
of the children in the group have received different amounts of 
candy from each home.

So we want each child to have the same amount of candies, 
only we can't exactly take any candy away from the kids, 
that would be even worse. 
Instead we decide to give each child extra candy 
until they all have the same amount.

Task
Your job is to find out how much candy each child has, 
and give them each additional candy until they too have 
as much as the child(ren) with the most candy. 
You also want to keep a total of how much candy you've handed out 
because reasons."

Your job is to give all the kids the same amount of candies as the kid 
with the most candies and then return the total number candies 
that have been given out. 
If there are no kids, or only one, return -1.

In the first case (look below) the most candies are given to second kid 
(i.e second place in list/array), 8. 
Because of that we will give the first kid 3 so he can have 8 
and the third kid 2 and the fourth kid 4, 
so all kids will have 8 candies.
So we end up handing out 3 + 2 + 4 = 9.

(5, 8, 6, 4) =>  9
(1, 2, 4, 6) => 11
(1, 6)       =>  5
( )          => -1
(6)          => -1 (because only one kid)

*/

/*

Описание
"Закончился праздник, и у нас есть список/массив, представляющий. 
сколько конфет получил каждый ребенок в нашей группе. 
Мы не хотим, чтобы дети начали спорить, 
и, используя родительскую интуицию, мы знаем, что назревает беда, поскольку многие 
дети в группе получили разное количество 
конфет из каждого дома.


Поэтому мы хотим, чтобы у каждого ребенка было одинаковое количество конфет, 
но мы не можем забрать у детей ни одной конфеты, 
это было бы еще хуже. 
Вместо этого мы решили дать каждому ребенку по конфете. 
пока у всех не будет одинаковое количество.


Задание
Ваша задача - выяснить, сколько конфет есть у каждого ребенка, 
и дать каждому дополнительную конфету, пока у них не будет 
столько же, сколько у ребенка (детей) с наибольшим количеством конфет. 
Вы также должны вести подсчет количества конфет, которые вы раздали. 
потому что так надо".


Ваша задача - раздать всем детям столько же конфет, сколько у ребенка 
с наибольшим количеством конфет, а затем вернуть общее количество конфет. 
которые были розданы. 
Если детей нет или есть только один, верните -1.


В первом случае (см. ниже) больше всего конфет получает второй ребенок 
(то есть второе место в списке/массиве), 8. 
Поэтому мы дадим первому ребенку 3 конфеты, чтобы у него было 8 конфет. 
третьему ребенку - 2, а четвертому - 4, 
так что у всех детей будет по 8 конфет.
Таким образом, в итоге мы раздадим 3 + 2 + 4 = 9.


(5, 8, 6, 4) =>  9
(1, 2, 4, 6) => 11
(1, 6)       =>  5
( )          => -1
(6)          => -1 (потому что только один ребенок)

*/