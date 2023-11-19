// Solution / Решение

var nthterm = function (f, n, c) { 
    return f + (n * c)
}

// Функция принимает первый аргумент прогрессии 'f', порядковый номер 'n' и разность 'с', а затем использует формулу арифметической прогрессии для вычисления n-го значения.

// Tests

console.log(nthterm(1, 2, 3)); // 7
console.log(nthterm(2, 2, 2)); // 6
console.log(nthterm(-50, 10, 20)); // 150

/*

A sequence is usually a set or an array of numbers that has a strict way for moving from the nth term to the (n+1)th term.
If f(n) = f(n-1) + c where c is a constant value, then f is an arithmetic sequence.
An example would be (where the first term is 0 and the constant is 1) is [0, 1, 2, 3, 4, 5, ... and so on] )
Else if (pun) f(n) = f(n-1) * c where c is a constant value, then f is a geometric sequence.
Example where the first term is 2 and the constant is 2 will be [2, 4, 8, 16, 32, 64, ... to infinity ... ]
There are some sequences that aren't arithmetic nor are they geometric.
Here is a link to feed your brain : Sequence !

You're going to write a function that's going to return the value in the nth index of an arithmetic sequence.
(That is, adding a constant to move to the next element in the "set").

The function's name is nthterm/Nthterm, it takes three inputs first,n,c where:

first is the first value in the 0 INDEX.
n is the index of the value we want.
c is the constant added between the terms.
Remember that first is in the index 0 .. just saying ...

*/

/*

Последовательность - это, как правило, набор или массив чисел, в котором существует строгий способ перехода от n-го члена к (n+1)-му.
Если f(n) = f(n-1) + c, где c - постоянная величина, то f - арифметическая последовательность.
Примером может служить последовательность (где первый член равен 0, а константа равна 1) [0, 1, 2, 3, 4, 5, ... и так далее]).
Иначе если (каламбур) f(n) = f(n-1) * c, где c - постоянная величина, то f - геометрическая последовательность.
Пример, в котором первый член равен 2, а константа равна 2, будет иметь вид [2, 4, 8, 16, 32, 64, ... до бесконечности ... ].
Существуют последовательности, которые не являются ни арифметическими, ни геометрическими.
Вот ссылка, чтобы подкормить ваш мозг: Последовательность!

Вам предстоит написать функцию, которая будет возвращать значение в n-ом индексе арифметической последовательности.
(То есть, добавление константы для перехода к следующему элементу "множества").

Имя функции - nthterm/Nthterm, она принимает три входа first,n,c, где:

first - первое значение в ИНДЕКСЕ 0.
n - индекс нужного нам значения.
c - константа, добавляемая между термами.
Помните, что first находится в индексе 0 ... просто говоря ...

*/