// Solution / Решение

function reverseAll(arr) {
    const reverseStr = str => str.split('').reverse().join(''); // функция разворачивающая строку
    const reverseSubStr = subStr => subStr.match(/\d+|[a-z]+|[^\da-z]+/gi).map(reverseStr).join(''); // функция разворачивающая подСтроку
    const reverseElem = elem => elem.split("\n").reverse().map(reverseSubStr).join("\n"); // функция разворачивающая элемент
    return arr.reverse().map(reverseElem); // возвращаем новый массив развернутых элементов
}

// Solution 2 / Решение 2

function reverseAll(arr) {
    return arr.reverse() // разворачиваем изначальный массив элементов
        .map(elem => elem.split('\n').reverse().join('\n')) // разделяем элемент на подстроку, согласно условию
        .map(subStr => subStr.split('\n').map(str => str // разделяем подстроку на строку
            // проходим по данной строке
            .replace(/[a-z]*/gi, e => e.split('').reverse().join('')) // возвращаем из строки только буквы и разворачиваем их
            .replace(/[0-9]*/g, e => e.split('').reverse().join('')) // возвращаем из строки только цифры и разворачиваем их
            .replace(/[^a-zA-Z0-9]*/g, e => e.split('').reverse().join(''))) // возвращаем из строки только символы и разворачиваем их
            .join('\n'))
}

// Tests

console.log(reverseAll(["abc123!@#\n314159"])); // "951413\ncba321#@!"
console.log(reverseAll(["abc123!@#\n314159", "987bbc\n#$%\nxyz886"])); // [ 'zyx688\n%$#\n789cbb', '951413\ncba321#@!' ]
console.log(reverseAll(["JOVmG$&&?@\nJcE91632PXFhMAsRli\n30620DOXPZoO149\n5513??%-&@YUpyCmRUAO", "_@!?#^15915736199076984"])); // ['^#?!@_48967099163751951', '3155@&-%??OAURmCypUY\n02603OoZPXOD941\nEcJ23619ilRsAMhFXP\nGmVOJ@?&&$']

/*

Task & Rules
Give you an array arr that contains some string elements, 
reverse all things in the array.

An example:
["abc123!@#\n314159", "987bbc\n#$%\nxyz886"]

Follow the example above, we learning how to reverse every things:

reverse array index:
["abc123!@#\n314159", "987bbc\n#$%\nxyz886"]
// to
["987bbc\n#$%\nxyz886", "abc123!@#\n314159"]

Each element is a string that separated by "\n", reverse it:
["987bbc\n#$%\nxyz886", "abc123!@#\n314159"]
// to
["xyz886\n#$%\n987bbc", "314159\nabc123!@#"]

The splited string may contains three kinds chars: letters, numbers, others. reverse them one by one:
["xyz886\n#$%\n987bbc", "314159\nabc123!@#"]
// to
["zyx688\n%$#\n789cbb", "951413\ncba321#@!"]

ok, return the result.

Some examples:
reverseAll(["abc123!@#\n314159", "987bbc\n#$%\nxyz886"])
// should  return
["zyx688\n%$#\n789cbb", "951413\ncba321#@!"]

reverseAll(["JOVmG$&&?@\nJcE91632PXFhMAsRli\n30620DOXPZoO149\n5513??%-&@YUpyCmRUAO", "_@!?#^15915736199076984"])
// should return
[ "^#?!@_48967099163751951", "3155@&-%??OAURmCypUY\n02603OoZPXOD941\nEcJ23619ilRsAMhFXP\nGmVOJ@?&&$"]

*/

/*

Задача и правила
Дан массив arr, содержащий несколько строковых элементов, 
выполните обратный перевод всех элементов массива.

Пример:
["abc123!@#\n314159", "987bbc\n#$%\nxyz886"]

Следуя приведенному примеру, мы узнаем, как перевернуть все вещи:
reverse array index:
["abc123!@#\n314159", "987bbc\n#$%\nxyz886"]
// to
["987bbc\n#$%\nxyz886", "abc123!@#\n314159"]

Каждый элемент - это строка, разделенная символом "\n", обратитесь к нему:
["987bbc\n#$%\nxyz886", "abc123!@#\n314159"]
// to
["xyz886\n#$%\n987bbc", "314159\nabc123!@#"]

Разбитая строка может содержать три вида символов: буквы, цифры, другие. Поменяйте их местами:
["xyz886\n#$%\n987bbc", "314159\nabc123!@#"]
// to
["zyx688\n%$#\n789cbb", "951413\ncba321#@!"]
// вернуть результат.

Примеры:
reverseAll(["abc123!@#\n314159", "987bbc\n#$%\nxyz886"])
// должно вернуть
["zyx688\n%$#\n789cbb", "951413\ncba321#@!"]

reverseAll(["JOVmG$&&?@\nJcE91632PXFhMAsRli\n30620DOXPZoO149\n5513??%-&@YUpyCmRUAO", "_@!?#^15915736199076984"])
// должно возвращать
[ "^#?!@_48967099163751951", "3155@&-%??OAURmCypUY\n02603OoZPXOD941\nEcJ23619ilRsAMhFXP\nGmVOJ@?&&$"]

*/