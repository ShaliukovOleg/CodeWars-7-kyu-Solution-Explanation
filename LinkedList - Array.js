// Solution / Решение

// Recursion / Рекурсия (эффективен, но проигрывает стеку в производительности при огромном количестве вложенных элементов)
function listToArray(list) {
    // Создаем пустой массив, в который будем добавлять значения из связанного списка.
    const result = [];

    // Создаем рекурсивную функцию для преобразования списка в массив.
    const recursiveConvert = node => {
        // Добавляем значение текущего узла связанного списка в массив result.
        result.push(node.value);
        // Если следующий узел существует (не равен null), рекурсивно вызываем функцию для следующего узла.
        if (node.next) recursiveConvert(node.next);
    }

    // Вызываем рекурсивную функцию, начиная с начального узла списка.
    recursiveConvert(list);

    // Возвращаем массив, содержащий значения из связанного списка.
    return result;
}

// Short version recursion
const listToArray = list => !list ? [] : [list.value].concat(listToArray(list.next));

// Stack / Стек 
function listToArray(list) {
    // Создаем пустой массив, в который будем добавлять значения из связанного списка.
    const result = [];
    // Цикл, который будет продолжаться, пока есть узлы в связанном списке.
    while (list) {
        // Добавляем значение текущего узла в массив result.
        result.push(list.value);

        // Переходим к следующему узлу в связанном списке.
        list = list.next;
    }
    return result;
}


/*

Linked lists are data structures composed of nested or chained objects, 
each containing a single value and a reference to the next object.

Here's an example of a list:

{value: 1, next: {value: 2, next: {value: 3, next: null}}}
Write a function listToArray (or list_to_array in Python) 
that converts a list to an array, like this:

[1, 2, 3]
Assume all inputs are valid lists with at least one value. 
For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

*/

/*

Связные списки - это структуры данных, состоящие из вложенных или соединенных в цепочку объектов, 
каждый из которых содержит одно значение и ссылку на следующий объект.

Вот пример списка:

{value: 1, next: {значение: 2, следующий: {value: 3, next: null}}}
Напишите функцию listToArray (или list_to_array в Python) 
которая преобразует список в массив, например, так:

[1, 2, 3]
Предположим, что все входные данные являются корректными списками, содержащими хотя бы одно значение. 
Для простоты все значения будут либо числами, либо строками, либо булевыми функциями.

*/