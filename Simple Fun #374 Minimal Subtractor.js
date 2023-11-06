// Solution / Решение

function minimalSubtractor(n) {
    for (let k = 0; k <= n - 2; k++) { // Внешний цикл перебирает значения k от 0 до n - 2 (k не превышает n - 2).
        let x = n;
        while (x > 0) { // Внутренний цикл выполняется, пока x больше 0.       
            x = (x - k) / 2; // В каждой итерации внутреннего цикла значение x уменьшается на k и затем делится на 2.   
            if (x === 1) return k; // При x равном 1 мы достигаем значение k удовлетворяющее условию
        }
    }
}

// Solution 2 / Решение 2 (рекурсия)

function minimalSubtractor(n, k = 0, x = n) { // Функция minimalSubtractor принимает три аргумента: n, k (по умолчанию 0) и x (по умолчанию n).
    while (x != 1) { // Выполняем цикл, пока x не станет равным 1.
        if ((x = (x - k) / 2) % 1) break; // В каждой итерации вычитаем k из x и делим x на 2.
    }
    return x == 1 ? k : minimalSubtractor(n, k + 1, n); // При x равном 1 мы достигаем значение k удовлетворяющее условию
    // В противном случае, вызываем функцию minimalSubtractor с увеличенным значением k (k + 1) и начальным значением n.
}

// Tests

console.log(minimalSubtractor(16)); // 0
console.log(minimalSubtractor(15)); // 1
console.log(minimalSubtractor(14)); // 12

/*

Task
You are given an positive integer n. 
You can do the following operation:

Choose a subtractor k(k>=0)
Then n = (n - k) / 2
......
......
......
......
Until n decrease to 1
Your task is to find the minimal subtractor, 
so that n can decrease to 1.

Still not understand the task? Look at the following example ;-)

Example
For n = 16, the output should be 0
16 -> (16-0)/2 -> (8-0)/2 -> (4-0)/2 -> (2-0)/2 -> 1

Also, 4 and 14 are valid subtractor:
16 -> (16-4)/2 -> (6-4)/2 -> 1
16 -> (16-14)/2 -> 1

But they are larger than 0.

For n = 15, the output should be 1
15 -> (15-1)/2 -> (7-1)/2 -> (3-1)/2 -> 1

For n = 14, the output should be 12
14 -> (14-12)/2 -> 1

Note
3 <= n <= 1000
n = (n - k) / 2 is ONE operation. It can not split to TWO operations n = n - k, then n = n / 2.
After each n = (n - k) / 2 operation, n should be an integer.
Happy Coding ^_^

*/

/*

Задача
Вам дано целое положительное число n. 
Вы можете выполнить следующую операцию:

Выбрать вычитатель k(k>=0).
Тогда n = (n - k) / 2
......
......
......
......
Пока n не уменьшится до 1
Ваша задача - найти минимальный вычитатель, 
чтобы n уменьшилось до 1.

Все еще не понятна задача? Посмотрите на следующий пример ;-)

Пример
Для n = 16 на выходе должно получиться 0
16 -> (16-0)/2 -> (8-0)/2 -> (4-0)/2 -> (2-0)/2 -> 1

Кроме того, 4 и 14 являются допустимыми вычитаемыми:
16 -> (16-4)/2 -> (6-4)/2 -> 1
16 -> (16-14)/2 -> 1

Однако они больше 0.

Для n = 15 выход должен быть равен 1
15 -> (15-1)/2 -> (7-1)/2 -> (3-1)/2 -> 1

Для n = 14 выход должен быть равен 12
14 -> (14-12)/2 -> 1

Примечание
3 <= n <= 1000
n = (n - k) / 2 - это ОДНА операция. Она не может быть разбита на ДВЕ операции n = n - k, затем n = n / 2.
После каждой операции n = (n - k) / 2, n должно быть целым числом.
Удачного кодирования ^_^

*/