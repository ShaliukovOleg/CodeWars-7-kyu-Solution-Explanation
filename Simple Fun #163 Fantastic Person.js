// Solution / Решение

function fantasticPerson(table) {
    for (let i = 0; i < table.length; i++) { // Начало цикла for, который перебирает элементы массива table
        if (table[i].every(b => b)) return i; // Проверить каждый элемент массива на соответствие
    }
    return -1; // Если ни один подмассив не соответствует условию, возвращается -1
}

// Функция принимает двумерный массив.
// Она использует метод findIndex() для поиска первого подмассива (ряда), 
// в котором все элементы истинны (равны true).
// Если такой подмассив найден, функция возвращает его индекс; в противном случае, возвращается -1.
function fantasticPerson(table) {
    return table.findIndex(elem => elem.every(Boolean));
}

// Tests

console.log(fantasticPerson([
    [true,true,true], 
    [false,true,true], 
    [false,false,true]])); // 0

/*

Task
We have a society with n people and have a table which describes 
if people in that society identify themselves with others in that society.

A fantastic person is a person who everyone identifies with and who doesn't 
identify with anybody else but himself.

If we have a Fantastic person in the society return their index 
(people are number from 0 to n-1), otherwise return -1.

Note : You can assume that in this society there are no two different people who both identify with each other. 
Thus if a identifies with b then b is guaranteed not to and vice versa.

Example
For:

  table = [ [True,True,True], [False,True,True], [False,False,True]] 
  The result should be 0.

We see that person 0 doesn't identify with anybody (except himself!), 
person 1 identifies only with person 0. and person 2 identifies with 0 and 1.

Hence person 0 is Fantastic Person.

Input/Output
[input] 2D boolean array table
An n by n matrix in which n[i][j] is true if and only if person j identifies with person i.

[output] an integer
the index of the Fantastic person and -1 if they don't exist.

*/

/*

Задача
У нас есть общество с n людьми и есть таблица, которая описывает 
идентифицируют ли себя люди в этом обществе с другими людьми в этом обществе.

Фантастический человек - это человек, с которым все себя отождествляют и который не отождествляет себя ни с кем, кроме себя. 
идентифицирует себя ни с кем, кроме себя.

Если в обществе есть фантастический человек, вернем его индекс 
(люди имеют номера от 0 до n-1), в противном случае возвращается -1.

Примечание: Можно предположить, что в данном обществе нет двух разных людей, которые бы отождествляли себя друг с другом. 
Таким образом, если a отождествляет себя с b, то b гарантированно не отождествляет себя с ним, и наоборот.

Пример
Для:

  table = [ [True,True,True], [False,True,True], [False,False,True]]. 
  Результатом должно быть 0.

Мы видим, что человек 0 не идентифицирует себя ни с кем (кроме себя самого!), 
человек 1 отождествляет себя только с человеком 0. а человек 2 отождествляет себя с 0 и 1.

Следовательно, человек 0 является Фантастической личностью.

Вход/выход
[вход] Двумерная таблица булевых массивов
Матрица n на n, в которой n[i][j] истинно тогда и только тогда, когда человек j идентифицирует себя с человеком i.

[выход] целое число
индекс Фантастической личности и -1, если она не существует.

*/