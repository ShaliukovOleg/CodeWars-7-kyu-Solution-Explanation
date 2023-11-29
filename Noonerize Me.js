// Solution / Решение

function noonerize(numbers) {
    const [first, second] = numbers;
    if (numbers.some(isNaN)) return 'invalid array';
    const calculateNoonerize = (a, b) => Math.abs(+(a[0] + b.slice(1)) - +(b[0] + a.slice(1)));
    return calculateNoonerize(first.toString(), second.toString());
}

// Short version

const noonerize = numbers =>
    numbers.some(isNaN) 
    ? `invalid array` 
    : Math.abs(numbers.map((val, idx) => `${numbers[idx ^ 1]}`[0] + `${val}`.slice(1)).reduce((pre, val) => pre - val));

// Tests

console.log(noonerize([12, 34])); // 18
console.log(noonerize([1000000, 9999999])); // 7000001
console.log(noonerize([55, 98])); // 37

/*

Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! 
If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

You will create a function which takes an array of two positive integers, 
spoonerizes them, and returns the positive difference between 
them as a single number or 0 if the numbers are equal:

[123, 456] = 423 - 156 = 267
Your code must test that all array items are numbers and return "invalid array" 
if it finds that either item is not a number. 
The provided array will always contain 2 elements.

When the inputs are valid, they will always be integers, no floats will be passed. 
However, you must take into account that the numbers will be of varying magnitude, 
between and within test cases.

*/

/*

Спонеризировать... с цифрами... нумеризировать?... нумбонеризировать?... нунеризировать? ...в любом случае! 
Если вы еще не знаете, что такое спунеризм, и еще не пробовали мое ката по спунеризму, пожалуйста, сначала ознакомьтесь с ним.

Вам предстоит создать функцию, которая принимает массив из двух положительных целых чисел, 
преобразует их в ложки и возвращает положительную разность между ними 
в виде одного числа или 0, если числа равны:

[123, 456] = 423 - 156 = 267
Ваш код должен проверить, что все элементы массива являются числами, и вернуть "invalid array". 
если обнаружится, что один из элементов не является числом. 
Предоставленный массив всегда будет содержать 2 элемента.

Если входные данные действительны, они всегда будут целыми числами, плавающие числа передаваться не будут. 
Однако следует учитывать, что числа будут разной величины, 
между тестовыми случаями и внутри них.

*/