// Solution / Решение

function highAndLow(numbers) {
    const numbersArray = numbers.split(/\s+/).map(Number); // преобразование строки в массив чисел
    const result = numbersArray
        .sort((a, b) => b - a) // Сортировка массива
        .reduce((acc, num, index, array) => { // Возвращение через 'reduce' максимального и минимального элемента по индексу
            if (index === 0 || index === array.length - 1) {
                acc.push(num);
            }
            return acc;
        }, []);
    return result.join(' '); // Преобразование массива оставшихся элементов в строку
}

// Solution 2 / Решение 2

function highAndLow(numbers) {
    const numArr = numbers.split(/\s+/).map(Number);
    return [Math.max(...numArr), Math.min(...numArr)].join(' ');
}

// Solution 3 / Решение 3

function highAndLow(numbers) {
    const arr = numbers.split(' ').sort((a, b) => b - a);
    return `${arr[0]} ${arr[arr.length - 1]}`;
}

// Tests

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // 42 -9
console.log(highAndLow("1 2 3")); // 3, 1

/*

In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, 
and highest number is first.

*/

/*

В этом небольшом задании вам дается строка чисел, разделенных пробелами, 
и нужно вернуть наибольшее и наименьшее число.

Примеры
highAndLow("1 2 3 4 5"); // возвращается "5 1"
highAndLow("1 2 -3 4 5"); // возвращается "5 -3"
highAndLow("1 9 3 4 -5"); // возвращается "9 -5"

Примечания
Все числа являются допустимыми Int32, проверять их не нужно.
Во входной строке всегда будет хотя бы одно число.
Выходная строка должна состоять из двух чисел, разделенных одним пробелом, 
причем первым будет наибольшее число.

*/