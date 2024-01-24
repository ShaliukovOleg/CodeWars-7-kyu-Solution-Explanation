// Solution / Решение

function balancedNum(number) {
  const strNum = number.toString(); // Преобразование числа в строку для удобства работы с символами
  const length = strNum.length; // Получение длины строки
  if (length <= 2) return "Balanced"; // Если строка состоит из 2 символов или менее, считается сбалансированной

  const leftside = strNum.slice(0, Math.floor((length - 1) / 2)); // Получение левой части строки (без среднего символа, если строка имеет нечетную длину)
  const rightside = strNum.slice(Math.ceil((length + 1) / 2)); // Получение правой части строки (без среднего символа, если строка имеет нечетную длину)
  const sum = (str) =>
    str.split("").reduce((a, b) => parseInt(a) + parseInt(b), 0); // Функция для вычисления суммы цифр в строке

  return sum(leftside) === sum(rightside) ? "Balanced" : "Not Balanced"; // Сравнение сумм левой и правой частей для определения сбалансированности строки
}

// Tests

console.log(balancedNum(66545)); // Not Balanced
console.log(balancedNum(195591)); // Balanced
console.log(balancedNum(1230987)); // Not Balanced

/*

A balanced number is a number where the sum of digits to the left of the middle digit(s) 
and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. 
(For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. 
(For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, 
e.g. 413023 is a balanced number because the left sum and right sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. 
The passed number will always be positive.

Examples

7 ==> return "Balanced"
Explanation:
middle digit(s): 7
sum of all digits to the left of the middle digit(s) -> 0
sum of all digits to the right of the middle digit(s) -> 0
0 and 0 are equal, so it's balanced.

295591 ==> return "Not Balanced"
Explanation:
middle digit(s): 55
sum of all digits to the left of the middle digit(s) -> 11
sum of all digits to the right of the middle digit(s) -> 10
11 and 10 are not equal, so it's not balanced.

959 ==> return "Balanced"
Explanation:
middle digit(s): 5
sum of all digits to the left of the middle digit(s) -> 9
sum of all digits to the right of the middle digit(s) -> 9
9 and 9 are equal, so it's balanced.

27102983 ==> return "Not Balanced"
Explanation:
middle digit(s): 02
sum of all digits to the left of the middle digit(s) -> 10
sum of all digits to the right of the middle digit(s) -> 20
10 and 20 are not equal, so it's not balanced.

*/

/*

Сбалансированное число - это число, в котором сумма цифр слева от средней цифры (цифр) 
и сумма цифр справа от средней цифры (цифр) равны.

Если число имеет нечетное количество цифр, то в нем есть только одна средняя цифра. 
(Например, у числа 92645 одна средняя цифра - 6.) В противном случае средних цифр две. 
(Например, средние цифры числа 1301 - 3 и 0).Средняя цифра (цифры) не должна учитываться при определении того, является ли число сбалансированным или нет, 
Например, 413023 - сбалансированное число, так как сумма левого и правого слагаемых равна 5.

ЗадачаПо заданному числу найти, является ли оно сбалансированным, и вернуть строку "Balanced" или "Not Balanced" соответственно. 
Переданное число всегда будет положительным.

Примеры

7 ==> return "Balanced"
Пояснение:
средняя цифра(ы): 7
сумма всех цифр слева от средней цифры (цифр) -> 0
сумма всех цифр справа от средней цифры (цифр) -> 0
0 и 0 равны, поэтому число сбалансировано.

295591 ==> return "Not Balanced"
Объяснение:
средняя цифра(ы): 55
сумма всех цифр слева от средней цифры (цифр) -> 11
сумма всех цифр справа от средней цифры (цифр) -> 10
11 и 10 не равны, поэтому оно не сбалансировано.

959 ==> return "Balanced"
Объяснение:
средняя цифра(ы): 5
сумма всех цифр слева от средней цифры (цифр) -> 9
сумма всех цифр справа от средней цифры (цифр) -> 9
9 и 9 равны, поэтому число сбалансировано.

27102983 ==> return "Not Balanced".
Объяснение:
средняя цифра(ы): 02
сумма всех цифр слева от средней

*/
