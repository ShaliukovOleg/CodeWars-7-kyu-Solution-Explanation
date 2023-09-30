// Solution / Решение

function climb(n) {
    const sequence = []; // Чтобы хранить последовательность чисел
    while (n > 0) { // Цикл будет работать до тех пор, пока n больше нуля
        sequence.push(n); // Добавляем текущее значение n в массив
        if (n % 2 === 0) { // Проверяем, является ли n четным числом
            n /= 2; // Если n четное, делим его на 2
        } else {
            n = (n - 1) / 2; // Если n нечетное, вычитаем 1 и затем делим на 2
        }
    }
    return sequence.reverse(); // вернуть последовательность в правильном порядке
}

// Short version

function climb(n) {
    return [...n.toString(2)].map((_, idx, arr) => n >> arr.length - ++idx);
}

// Tests

console.log(climb(1));   // [1]
console.log(climb(10));  // [1, 2, 5, 10]
console.log(climb(13));  // [1, 3, 6, 13]

/*

For every positive integer N, there exists a unique sequence starting with 1 and 
ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1.

For example, given N = 13, the sequence is [1, 3, 6, 13], because . . . :
 3 =  2*1 +1
 6 =  2*3
 13 = 2*6 +1

Write a function that returns this sequence given a number N. 
Try generating the elements of the resulting list in ascending order, 
i.e., without resorting to a list reversal or prependig the elements to a list.

*/

/*

Для каждого целого положительного числа N существует единственная последовательность, 
начинающаяся с 1 и заканчивающаяся N, такая, что каждое число в ней либо удваивается, либо удваивается плюс 1. 

Например, при N = 13 последовательность имеет вид [1, 3, 6, 13], так как . . . :
 3 = 2*1 +1
 6 = 2*3
 13 = 2*6 +1

Напишите функцию, возвращающую эту последовательность при заданном числе N. 
Попробуйте сформировать элементы полученного списка в порядке возрастания, 
т.е. не прибегая к переворачиванию списка или добавлению элементов в список.

*/