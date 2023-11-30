// Solution / Решение

function sortCards(array) {
    const cardOrder = "A23456789TJQK"; // Определение порядка сортировки карт

    return array.sort((a, b) => {
        return cardOrder.indexOf(a) - cardOrder.indexOf(b); // Сравнение позиций карт с cardOrder
    });
}

// Solution 2 / Решение 2

function sortCards(array) {
    // Создание объекта, ключи - это символы карт с особыми рангами, а значения - их числовые эквиваленты
    const map = { 'A': 1, 'T': 10, 'J': 12, 'Q': 13, 'K': 14 };
    // Использование метода sort для сортировки массива с использованием функции сравнения
    return array.sort((a, b) => (map[a] || a) - (map[b] || b));
}

// Tests

console.log(sortCards([3, 9, "A", 5, "T", 8, 2, 4, "Q", 7, "J", 6, "K"])); // [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];
console.log(sortCards(["J", "J", 2, "T", 9, 6])); // [ 2, 6, 9, 'T', 'J', 'J' ]
console.log(sortCards(["A", 2, 3, 4, 5, 6, 6, 7, 8, 9, "T", "J", "Q", "A"])); // 'A', 'A', 2, 3, 4, 5, 6, 6, 7, 8, 9, 'T', 'J', 'Q'];

/*

Write a function sort_cards() that sorts a shuffled list of cards, 
so that any given list of cards is sorted by rank, no matter the starting collection.

All cards in the list are represented as strings, 
so that sorted list of cards looks like this:

['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

Example:
>>> sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'])
['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

Hint: Tests will have many occurrences of same rank cards, as well as vary in length. 
You can assume though, that input list is always going to have at least 1 element.

*/

/*

Напишите функцию sort_cards(), которая сортирует перетасованный список карт, 
таким образом, чтобы любой заданный список карт был отсортирован по рангу, независимо от начальной коллекции.

Все карты в списке представлены в виде строк, 
так что отсортированный список карт выглядит следующим образом:

['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'].

Пример:
>>> sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'])
['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'].

Подсказка: Тесты будут содержать много повторений карт одного ранга, а также отличаться по длине. 
Однако можно предположить, что во входном списке всегда будет хотя бы 1 элемент.

*/