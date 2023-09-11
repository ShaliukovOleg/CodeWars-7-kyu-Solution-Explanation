/*

Yet another staple for the functional programmer. 
You have a sequence of values and some predicate for those values. 
You want to remove the longest prefix of elements such that the predicate is true for each element. 
We'll call this the dropWhile function. It accepts two arguments. 
The first is the sequence of values, and the second is the predicate function. 
The function does not change the value of the original sequence.

Your task is to implement the dropWhile function. 
If you've got a span function lying around, this is a one-liner! 
Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, 
you can implement the span function in one line. 
This is the beauty of functional programming: there are a whole host of useful functions, 
many of which can be implemented in terms of each other.

*/

/*

У вас есть последовательность значений и некоторое правило для этих значений.
Вы хотите удалить самый длинный префикс элементов, чтобы правило стало истинным для каждого элемента.
Мы вызовем это функцией dropWhile, которая принимает два аргумента.
Первый аргумент - последовательность значений.
Второй аргумент - функция с правилом.
Функция не изменяет значения исходной последовательности.

Ваша задача — реализовать функцию dropWhile.
Можно реализовать функцию в одной строке.
В этом прелесть функционального программирования: есть целый ряд полезных функций,
многие из которых могут быть реализованы друг с другом.

*/

/*

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

dropWhile(seq, isEven) // -> [1,2,5,4,3,2]

*/

function dropWhile(arr, pred) {
    // Your Kafkaesque code here, plox...
    while ( // Условие
        arr.length // Если массив не пустой (т.е. пустой массив вернул бы ноль и условие бы прервалось, так как 0(FALSE))
        && pred(arr[0]) // Наше правило, которое задано изначально. Только четные значения. 
        ) 
        arr.shift() // Если значение проходит эти два условия оно удаляется из массива посредством метода shift. 

    return arr; // Возвращаем получившийся массив с элементами, которые прошли по условию (predicate)
}



