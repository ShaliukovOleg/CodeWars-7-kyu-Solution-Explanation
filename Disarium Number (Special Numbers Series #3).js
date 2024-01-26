// Solution / Решение

function disariumNumber(n) {
  return n ===
    n
      .toString() // Преобразуем число в строку
      .split("") // Преобразуем строку в массив
      .reduce((a, b, i) => a + b ** ++i, 0) // С каждым элементом массива умножаем его индекс++ (т.к. начинается с нуля) и суммируем
    ? "Disarium !!" // Возвращаем в случае успеха
    : "Not !!"; // Возвращаем в случае провала
}

// Tests

console.log(disariumNumber(135)); // Disarium !!
console.log(disariumNumber(1024)); // Not !!
console.log(disariumNumber(136586)); // Not !!

/*

Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series

Notes
Number passed is always Positive .
Return the result as String

Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"

disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"

*/

/*

Определение
Дисариевым числом называется такое число, сумма цифр которого, приводимых в движение с соответствующих позиций, равна самому числу.

Задача
Определите, является ли данное число дисариевым или нет.

Разминка (настоятельно рекомендуется)
Серия "Играем с числами

Примечания
Передаваемое число всегда положительно.
Возвращаем результат в виде строки

Примеры ввода >> вывода
disariumNumber(89) ==> return "Disarium !!!"
Пояснение:
Так как 81 + 92 = 89, то на выходе получается "Disarium !!!".

disariumNumber(564) ==> return "Not !!!"
Пояснение:
Так как , 51 + 62 + 43 = 105 != 564, то выводится "Not !!!".

*/
