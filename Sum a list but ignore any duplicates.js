// Solution / Решение

function sumNoDuplicates(numList) {
    const duplicates = numList.filter((item, index) => numList.indexOf(item) !== index); // массив дубликатов
    // фильтруем массив от элементов, которых больше чем 1
    const uniqueValues = numList.filter((element) => !duplicates.includes(element));
    // возвращаем сумму уникальных элементов
    return uniqueValues.reduce((a, b) => a + b, 0);
}

// Short version 

function sumNoDuplicates(numList) {
    return numList.reduce((a, b) => numList.indexOf(b) === numList.lastIndexOf(b) ? a + b : a, 0);
}

// Tests

console.log(sumNoDuplicates([1, 1, 2, 3])) // 5
console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));
console.log(sumNoDuplicates([0, 1, 4, 4, 0, 4, 2, 5, 9, 0, 10, 9, 0, 1, 2]));

/*

Please write a function that sums a list, but ignores any duplicate items in the list.
For instance, for the list [3, 4, 3, 6] , the function should return 10.

*/

/*

Напишите, пожалуйста, функцию, которая суммирует список, но игнорирует все дублирующиеся элементы в списке.
Например, для списка [3, 4, 3, 6] функция должна возвращать 10.

*/