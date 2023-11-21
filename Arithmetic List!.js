// Solution / Решение

var seqlist = function (first, c, l) {
    const result = []; // создаем массив для результата

    while (result.length < l) {
        // цикл выполняется, пока количество элементов в массиве не станет
        // больше необходимого количества терминов, которое нужно вернуть
        result.push(first); // добавляем значение в результирующий массив
        first += c; // увеличиваем элемент на значение шага (c)
    }

    return result; // возвращаем результат
}

// Short version

const seqlist = (first, c, l) => Array.from({ length: l }, (_, i) => first + i * c);

// Tests

console.log(seqlist(0, 1, 20)); // [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
console.log(seqlist(5, 2, 5)); // [ 5, 7, 9, 11, 13 ]

/*

In this kata, you will write an arithmetic list 
which is basically a list that contains consecutive terms in the sequence.

You will be given three parameters :
- first the first term in the sequence
- c the constant that you are going to ADD ( since it is an arithmetic sequence...)
- l the number of terms that should be returned

Useful link: Sequence
Be sure to check out my Arithmetic sequence Kata first ;)
Don't forget about the indexing pitfall ;)

*/

/*

В этом ката вы напишете арифметический список 
который по сути является списком, содержащим последовательные члены в последовательности.

Вам будут даны три параметра :
- first - первый термин в последовательности
- c константа, которую вы собираетесь ДОБАВИТЬ (поскольку это арифметическая последовательность...)
- l количество терминов, которые должны быть возвращены.

Полезная ссылка: Последовательность
Не забудьте сначала ознакомиться с моим каталогом арифметических последовательностей ;)
Не забывайте о подводных камнях индексирования ;)

*/