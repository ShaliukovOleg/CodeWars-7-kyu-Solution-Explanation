// Solution / Решение

// Определение класса Node для представления узла связанного списка
class Node {
  // Конструктор класса Node принимает данные узла и ссылку на следующий узел
  constructor(data, next) {
    this.data = data; // Свойство для хранения данных узла
    this.next = next; // Свойство для хранения ссылки на следующий узел
  }
}

const push = (head, data) => new Node(data, head); // Функция push используется для добавления нового узла с данными в начало связанного списка

const buildOneTwoThree = () => // Функция buildOneTwoThree создает связанный список с тремя узлами: 1, 2 и 3
  [3, 2, 1].reduce((acc, val) => push(acc, val), null); // Массив [3, 2, 1] используется для последовательного добавления узлов
    // в связанный список с помощью функции push

// Tests

console.log();
console.log();
console.log();

/*

DESCRIPTION:
Linked Lists - Push & BuildOneTwoThree

Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. 
Try to use the push() function within your buildOneTwoThree() function.

Here's an example of push() usage:

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
The push function accepts head and data parameters, where head is either a node object or null/None/nil. 
Your push implementation should be able to create a new linked list/node when head is null/None/nil.

The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null

*/

/*

DESCRIPTION:
Связанные списки - Push и BuildOneTwoThree

Напишите функции push() и buildOneTwoThree(), чтобы легко обновлять и инициализировать связанные списки. 
Попробуйте использовать функцию push() внутри функции buildOneTwoThree().

Вот пример использования push():

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
Функция push принимает параметры head и data, где head - это либо объект узла, либо null/None/nil. 
Ваша реализация push должна уметь создавать новый связанный список/узел, если head равен null/None/nil.

Функция buildOneTwoThree должна создавать и возвращать связный список с тремя узлами: 1 -> 2 -> 3 -> null

*/
