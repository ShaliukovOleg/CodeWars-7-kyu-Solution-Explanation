// Solution / Решение

function queue(queuers, pos) {
    // Инициализация переменной для отслеживания общего времени ожидания.
    let minutesWait = 0;

    // Цикл, проходящий по каждому человеку в очереди.
    for (let i = 0; i < queuers.length; i++) {
        // Рассчитываем время ожидания для текущего человека.
        // Используем Math.min для выбора минимального значения между различными параметрами.
        // 1. Разница между количеством билетов текущего человека и человека на позиции pos.
        // 2. 1, чтобы избежать отрицательного времени ожидания, если текущий человек находится за pos.
        minutesWait += Math.min(queuers[pos] - (i > pos), queuers[i]); // Добавляем рассчитанное время ожидания к общему времени ожидания.
    }

    // Возвращаем общее время ожидания.
    return minutesWait;
}

// Solution 2 / Решение 2

function queue(queuers, pos) {
    return queuers.reduce((acc, elem, index) => acc + Math.min(elem, queuers[pos] - (index > pos)), 0);
}

// Tests

console.log(queue([2, 5, 3, 6, 4], 2)); // 12
console.log(queue([2, 5, 3, 6, 4], 3)); // 20
console.log(queue([2, 5, 3, 6, 4], 4)); // 17

/*

You managed to send your friend to queue for tickets in your stead, but there is a catch: 
he will get there only if you tell him how much that is going to take. 
And everybody can only take one ticket at a time, 
then they go back in the last position of the queue if they need more (or go home if they are fine).

Each ticket takes one minutes to emit, the queue is well disciplined, 
Brit-style, and so it moves smoothly, with no waste of time.

You will be given an array/list/vector with all the people queuing and the initial position of your buddy, 
so for example, knowing that your friend is in the third position 
(that we will consider equal to the index, 2 (3 in COBOL): 
he is the guy that wants 3 tickets!) and the initial queue is [2, 5, 3, 4, 6].

The first dude gets his ticket and the queue goes now like 
this [5, 3, 4, 6, 1], 
then [3, 4, 6, 1, 4] and so on. 
In the end, our buddy will be queuing for 12 minutes, true story!

Build a function to compute it, 
resting assured that only positive integers are going to be there and you will be always given a valid index; 
but we also want to go to pretty popular events, 
so be ready for big queues with people getting plenty of tickets.

*/

/*

Вам удалось отправить своего друга вместо вас встать в очередь за билетами, но есть одна загвоздка: 
он попадет туда, только если вы скажете ему, сколько это будет стоить. 
И каждый может взять только один билет за раз, 
если им нужно больше, они возвращаются на последнюю позицию в очереди (или идут домой, если все в порядке).

На выдачу каждого билета уходит одна минута, очередь хорошо дисциплинирована, 
и поэтому движется плавно, без потерь времени.

Вам дадут массив/список/вектор со всеми людьми в очереди и начальной позицией вашего приятеля, 
Так, например, зная, что ваш друг находится на третьей позиции 
(которую мы будем считать равной индексу 2 (3 в COBOL): 
он тот парень, который хочет получить 3 билета!) и начальная очередь имеет вид [2, 5, 3, 4, 6].

Первый чувак получает свой билет, и теперь очередь выглядит следующим образом 
так [5, 3, 4, 6, 1], 
затем [3, 4, 6, 1, 4] и так далее. 
В итоге наш приятель будет стоять в очереди 12 минут, правда!

Постройте функцию для ее вычисления, 
будьте уверены, что там будут только положительные целые числа, и вам всегда будет задан правильный индекс; 
Но мы также хотим посещать довольно популярные мероприятия, 
так что будьте готовы к большим очередям, когда люди получают много билетов.

*/