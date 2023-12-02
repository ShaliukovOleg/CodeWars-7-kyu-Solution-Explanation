// Solution / Решение

function exampleSort(arr, exampleArr) { // Сравнение позиций массива 'arr' согласно индексу элементов 'example'
    return arr.sort((a, b) => exampleArr.indexOf(a) - exampleArr.indexOf(b));
}

// Short version

const exampleSort = (arr, example) => arr.sort((a, b) => example.indexOf(a) - example.indexOf(b));

// Tests

console.log(exampleSort([1, 2, 3, 4, 5], [2, 3, 4, 1, 5])); // [ 2, 3, 4, 1, 5 ]
console.log(exampleSort([1, 2, 3, 3, 3, 4, 5], [2, 3, 4, 1, 5])); // [ 2, 3, 3, 3, 4, 1, 5 ]
console.log(exampleSort([1, 2, 3, 3, 3, 5], [2, 3, 4, 1, 5])); // [ 2, 3, 3, 3, 1, 5 ]

/*

Description

*/

/*

Description

*/