// Solution / Решение

function findBalance(arr) {
    const average = arr => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length); // Для вычисления среднего значения массива
    
    return arr.reduce((result, _, i) => { // Метод reduce применяется для поиска балансных индексов в исходном массиве
        const left = arr.slice(0, i); // Создаем массив left, содержащий элементы слева от текущего индекса i
        const right = arr.slice(i + 1); // Создаем массив right, содержащий элементы справа от текущего индекса i
        
        if (average(left) === average(right)) { // Проверяем, равны ли средние значения left и right
            result.push(i); // Если равны, добавляем текущий индекс i в массив result
        }
        
        return result; // Возвращаем аккумулятор result для следующей итерации
    }, []);
}



// Tests

console.log(findBalance([1,1,1,1,1])); // [ 1, 2, 3 ]
console.log(findBalance([1,1,2,1,1])); // [ 1, 2, 3 ]
console.log(findBalance([1,1,3,1,1])); // [ 2 ]

/*

Description:
#5 is too hard? Sorry, I'll try to make kata easier(just try), 5kyu or 6kyu? ;-) 
Let's begin #6:

Given an array arr with positive integers, and more than 2 elements, 
return an array with the indexes of those elements, 
such as the average of its left side equals the average of its right side. 
The comparison will be between integer values, 
so you should round the average value first(to the nearest integer), and then do the comparison. 
If no element fulfills such condition, just return an empty array [].

Examples
findBalance([1,2,1]) === [1]

The balance point at index 1:
Left     Middle     Right
 1         2          1
left == right

findBalance([1,2,3]) === []

No balance point found, return an empty array.

findBalance([1,2,3,2,1]) === [2]

The balance point at index 1:
 Left     Middle     Right
 1,2        3         2,1
left  --> (1 + 2) / 2 --> 1.5 --> round(1.5) --> 2
right --> (2 + 1) / 2 --> 1.5 --> round(1.5) --> 2
left == right

findBalance([1,1,1,1,1]) === [1,2,3]

The balance point at index 1,2 and 3:
 Left     Middle     Right
  1         1        1,1,1
 1,1        1         1,1
1,1,1       1          1
In these 3 situations, the average of left side and 
right side all are 1.

findBalance([1,1,2,1,1]) === [1,2,3]

The balance point at index 1,2 and 3:
 Left     Middle     Right
  1         1        2,1,1
 1,1        2         1,1
1,1,2       1          1
In these 3 situations, the average of left side and 
right side all are 1(after rounding operation).

findBalance([1,1,3,1,1]) === [2]

*/

/*

Описание:
#5 - это слишком сложно? Извините, я постараюсь сделать ката полегче (только попробуйте), 5 кю или 6 кю? ;-) 
Приступим к #6:

Дается массив arr с целыми положительными числами и более чем 2 элементами, 
верните массив с индексами этих элементов, 
так, чтобы среднее значение его левой части равнялось среднему значению его правой части. 
Сравнение будет проводиться между целыми значениями, 
поэтому сначала следует округлить среднее значение (до ближайшего целого числа), а затем выполнять сравнение. 
Если ни один элемент не удовлетворяет такому условию, просто верните пустой массив [].

Примеры
findBalance([1,2,1]) === [1]

Точка равновесия с индексом 1:
Левая Средняя Правая
 1 2 1
левый == правый

findBalance([1,2,3]) === []

Точка баланса не найдена, возвращается пустой массив.

findBalance([1,2,3,2,1]) === [2]

Точка баланса с индексом 1:
 Левая Средняя Правая
 1,2 3 2,1
левая --> (1 + 2) / 2 --> 1,5 --> round(1,5) --> 2
правая --> (2 + 1) / 2 --> 1,5 --> round(1,5) --> 2
левый == правый

findBalance([1,1,1,1,1]) === [1,2,3]

Точка равновесия с индексами 1,2 и 3:
 Левая Средняя Правая
  1 1 1,1,1
 1,1 1 1,1
1,1,1 1 1
В этих трех ситуациях средние значения левой и 
правой стороны равны 1.

findBalance([1,1,2,1,1]) === [1,2,3]

Точка равновесия с индексами 1,2 и 3:
 Левая Средняя Правая
  1 1 2,1,1
 1,1 2 1,1
1,1,2 1 1
В этих трех ситуациях среднее значение левой и 
правой стороны равно 1 (после операции округления).

findBalance([1,1,3,1,1]) === [2]

*/