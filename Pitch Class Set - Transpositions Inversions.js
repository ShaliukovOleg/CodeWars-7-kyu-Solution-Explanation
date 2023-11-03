// Solution / Решение

function operate(pcSet, operation) {
    const n = parseInt(operation.replace(/\D/g, ''), 10); // Извлечь число n из операции

    if (operation.includes('I')) {
        return [...pcSet.map(elem => (12 - elem + n) % 12).sort((a, b) => a - b)];
    } else {
        return [...pcSet.map(elem => (elem + n) % 12).sort((a, b) => a - b)];
    }
}

// Solution 2 / Решение 2

function operate(pcSet, operation) {
    const n = parseInt(operation.replace(/\D/g, ''), 10); // Извлечь число n из операции
    const isInverse = operation.includes('I'); // Проверить, является ли операция инверсией
    // Применить операцию к каждому элементу и сохранить результат в новом массиве
    const result = pcSet.map(element => {
        if (isInverse) {
            return (12 - element + n) % 12;
        } else {
            return (element + n) % 12;
        }
    });
    return result.sort((a, b) => a - b); // Отсортировать результат
}

// Short version

function operate(pcSet, op) {
    const n = parseInt(op.replace(/\D/g, ''), 10);
    return op.includes('I')
        ? [...pcSet.map(element => (12 - element + n) % 12).sort((a, b) => a - b)]
        : [...pcSet.map(element => (element + n) % 12).sort((a, b) => a - b)];
}

// Tests

console.log(operate([1, 2, 3], "T1")) // [ 2, 3, 4 ]
console.log(operate([1, 2, 3], "T0")); // [ 1, 2, 3 ]
console.log(operate([1, 2, 3], "T0I")); // [ 9, 10, 11 ]
console.log(operate([1, 2, 3], "T11")); // [ 0, 1, 2 ]
console.log(operate([1, 2, 3], "T11I")); // [ 8, 9, 10 ]
console.log(operate([1, 2, 3, 7, 10, 11], "T10I")); // [ 0, 3, 7, 8, 9, 11 ]

/*

Musical set theory provides concepts and tools for musical analysis. 
Most of it deals with sets of pitches and pitch classes. 
For this purpose, we can assign numbers to each different pitch class (note) as following: 
C=0, C#=1, D=2, D#=3, E=4, F=5, F#=6, G=7, G#=8, A=9, A#=10, B=11. 
This way, a pitch class set is just an unordered collection of pitch classes (notes) without any duplication. 
So, [2, 4, 6] is an example of a pitch class set, as well as [3, 6, 8, 2, 10, 0]. 
They are usually represented this way, similar to an array.

There are some simple operations/transformations that one can do with these pitch class sets. 
Two of them are the transposition and the inversion. 
A transposition(T) is simply to add the same number (between 0 and 11) to all elements of the collection. 
A T5 of the set [1, 2, 3] should be [6, 7, 8]. Note that exist only twelve notes, 
so a T10 of the previous set should be [11, 0, 1], using modulo 12.

To operate an inversion(I) subtract each element of the list from twelve. 
Using the same set [1, 2, 3], a T0I - an inversion of T0 - should be [11, 10, 9]. 
Note that if one asks for the TnI inversion of some set it means the inversion of the transposition n. 
Consequently, the TnI of [1,2,3] should be [(12-1)+n, (12-2)+n, (12-3)+n] <=> [0,11,10].

Here you can find extra information if needed. Here you find an example of this kind of calculator.

You should create a function that receives a pitch class set (array) 
as first argument and a transposition or inversion operation (string) 
as second argument, formated as "Tn" (transposition n) or "TnI" 
(inversion n) where n is a number between 0 and 12. Below are some examples:

operation([4,6,7,10], "T1");
result = [5,7,8,11]

operation([4,6,7,10], "T1I");
result = [3,6,7,9] //sorted

operation([10,6,7], "T10");
result = [4,5,8] //sorted

operation([10,6,7], "T10I");
result = [0,3,4] //sorted

Notice how it should always return a sorted array independently of the input.

*/

/*

Теория музыкальных множеств предоставляет понятия и инструменты для музыкального анализа. 
В основном в ней рассматриваются наборы питчей и питчевые классы. 
Для этого мы можем присвоить номера каждому классу тональности (ноте) следующим образом: 
C=0, C#=1, D=2, D#=3, E=4, F=5, F#=6, G=7, G#=8, A=9, A#=10, B=11. 
Таким образом, набор питч-классов - это просто неупорядоченная коллекция питч-классов (нот) без дублирования. 
Так, [2, 4, 6] является примером набора питч-классов, так же как и [3, 6, 8, 2, 10, 0]. 
Обычно они представляются таким образом, подобно массиву.

Существует несколько простых операций/преобразований, которые можно выполнять с этими наборами питч-классов. 
Две из них - транспозиция и инверсия. 
Транспозиция (T) - это просто добавление одного и того же числа (от 0 до 11) ко всем элементам коллекции. 
Т5 набора [1, 2, 3] должно быть [6, 7, 8]. Заметим, что существует только двенадцать нот, 
поэтому T10 предыдущего набора должно быть [11, 0, 1], используя модулор 12.

Для выполнения операции инверсии (I) вычтем каждый элемент списка из двенадцати. 
Используя тот же набор [1, 2, 3], T0I - инверсия T0 - должна быть [11, 10, 9]. 
Заметим, что если спрашивают об инверсии TnI некоторого множества, то имеют в виду инверсию транспозиции n. 
Следовательно, TnI множества [1,2,3] должно быть [(12-1)+n, (12-2)+n, (12-3)+n] <=> [0,11,10].

При необходимости здесь можно найти дополнительную информацию. Здесь приведен пример такого калькулятора.

Необходимо создать функцию, принимающую в качестве первого аргумента набор (массив) классов высоты тона 
в качестве первого аргумента и операцию транспонирования или инверсии (строку) 
в качестве второго аргумента, оформленного в виде "Tn" (транспозиция n) или "TnI" 
(инверсия n), где n - число от 0 до 12. Ниже приведены примеры:

operation([4,6,7,10], "T1");
result = [5,7,8,11]

операция([4,6,7,10], "T1I");
result = [3,6,7,9] //sorted

операция([10,6,7], "Т10");
result = [4,5,8] //sorted

операция([10,6,7], "T10I");
result = [0,3,4] //sorted

Обратите внимание, что она всегда должна возвращать отсортированный массив независимо от входных данных.

*/