/*

Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.
For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

*/

/*

Создайте функцию, которая сравнивает две вероятности и возвращает истину, если первая, скорее всего, в противном случае ложна.
Для этого упражнения вероятность выражается двумя числами, разделенными двоеточием, например. вероятность 1 из 3 будет 1:3.
Ввод: ('1:3','1:2') — вернет false, так как 1 из 3 менее вероятен, чем 1 из 2.
1 из 3 (33%) и 1 из 2 (50%) 

*/

/*

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

*/

function mostLikely(prob1, prob2) {
    let numArr1 = prob1.split(':'); // Разделяем выражение при помощи метода сплит(двоеточие, как делитель) 
    let numArr2 = prob2.split(':'); // Разделяем выражение при помощи метода сплит(двоеточие, как делитель) 
    // Как альтернативу, строку можно разбить и через slice(0, 1) и slice(0, -1);
    // console.log(prob1.slice(0,1)); // Вернет из 1:3 (1)
    // console.log(prob1.slice(2,3)); // Вернет из 1:3 (3)
    let chance1 = numArr1[0] / numArr1[1]; // Делим первый элемент массива на второй
    let chance2 = numArr2[0] / numArr2[1]; // Делим первый элемент массива на второй

    return chance1 > chance2; // Возвращаем результат сравнения переменных, получившихся при делении элементов массива
}

console.log(mostLikely('2:3', '2:7')); 