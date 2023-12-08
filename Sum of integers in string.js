// Solution / Решение

function sumOfIntegersInString(s) {
    return s
        .replace(/\D/gi, ' ') // заменяем все буквы пробелами, оставляя только цифры
        .split(' ') // преобразуем строку в массив
        // .map(elem => Number(elem)) // для преобразования элементов массива в числа (вместо унарного '+')
        .reduce((a, b) => +a + +b, 0); // преобразуем каждый элемент массива с помощью унарного оператора в цифру и суммируем их
}

// Or

function sumOfIntegersInString(s) {
    return s
        .split(/\D+/) // совмещаем оба метода в один и возвращаем массив
        .reduce((sum, num) => sum + +num, 0); // суммируем элементы массива
}

// Short version

const sumOfIntegersInString = s => s.split(/\D/).reduce((a, n) => a + +n, 0);

// Tests

console.log(sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog')); // 3635
console.log(sumOfIntegersInString('Fx1203jumps914ov3r1349the102l4zy')); // 3575
console.log(sumOfIntegersInString('Nan462omach585inesSonRunAw123ayLitt511leB******')); // 1681

/*

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. 
For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 
the sum of the integers is 3635.

Note: only positive integers will be tested.

*/

/*

Ваша задача в этом ката - реализовать функцию, которая вычисляет сумму целых чисел внутри строки. 
Например, в строке "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 
сумма целых чисел равна 3635.

Примечание: проверяются только положительные целые числа.

*/