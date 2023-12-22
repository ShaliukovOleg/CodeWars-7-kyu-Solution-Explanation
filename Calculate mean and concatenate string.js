// Solution / Решение

function mean(lst) {
    // Используем деструктуризацию массива для создания переменных numbers и letters и в них передаем элементы за один проход массива
    const [numbers, letters] = lst.reduce(([nums, chars], elem) => /\d/.test(elem) ? [nums.concat(+elem), chars] : [nums, chars.concat(elem)], [[], []]);
    // Вычисляем среднее значение чисел используя метод reduce
    const averageNum = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    // Возвращаем массив, содержащий округленное среднее значение чисел (1 знак после запятой) и объединенные буквы.
    return [Math.round(averageNum * 10) / 10, letters.join('')];
}

// Short version

const mean = lst => lst.reduce(([nums, chars], elem) => isNaN(elem) ? [nums, chars + elem] : [(nums * 10 + +elem) / 10, chars], [0, ``]);

// Tests

console.log(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]));
// [ 3.6, 'udiwstagwo' ]
console.log(mean(["0", "c", "7", "x", "6", "2", "3", "5", "w", "7", "0", "y", "v", "u", "h", "i", "n", "u", "0", "0"]));
// [ 3, 'cxwyvuhinu' ]
console.log(mean(["0", "u", "a", "y", "0", "a", "9", "q", "3", "v", "g", "7", "6", "4", "y", "d", "8", "6", "0", "d"]));
// [ 4.3, 'uayaqvgydd' ]

/*

You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. 
There will always be 10 integers and 10 characters. 
Create a single string with the characters and return it as a[1] 
while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']

Here is an example of your return
[3.6, "udiwstagwo"]

In C# and Java the mean return is a double.

*/

/*

Вам будет дан массив, который будет содержать как целые числа, так и символы.

Верните массив длины 2 с a[0], представляющим среднее значение десяти целых чисел в виде числа с плавающей точкой. 
В массиве всегда будет 10 целых чисел и 10 символов. 
Создайте одну строку с символами и верните ее в виде a[1] 
с сохранением исходного порядка.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'].

Вот пример вашего возврата
[3.6, "udiwstagwo"].

В C# и Java среднее значение return - это double.

*/