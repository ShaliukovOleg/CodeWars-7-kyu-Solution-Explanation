// Solution / Решение

function minimumSteps(numbers, value) {
  const arr = numbers.sort((a, b) => a - b); // Сортируем массив

  for (i = 0; i < arr.length; i++) { // Итерируем по массиву
    if (arr.slice(0, i + 1).reduce((a, b) => a + b, 0) >= value) { // Проверяем, если сумма элементов подмассива больше или равна заданному значению
      return i; // Возвращаем индекс элемента, на котором условие выполнилось
    }
  }
  return i; // Если не нашли подходящего значения, возвращаем индекс последнего элемента массива
}

// Tests

console.log(minimumSteps([10, 9, 9, 8])); // 4
console.log(minimumSteps([8, 9, 10, 4, 2])); // 5
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67])); // 9

/*

Task
Given an array of N integers, you have to find how many times you have to add up 
the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.
All numbers will be positive.
Numbers could occur more than once , (Duplications may exist).
Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .
Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .

minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
Explanation:
We add two smallest elements (4 + 2), their sum is 6 .
Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .
Now we add the next smallest number (14 + 9) , so the sum becomes 23 .
Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .

minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
Explanation:
We add two smallest elements (19 + 17), their sum is 36 .
Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .
We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .
Expected Time Complexity O(n Log n)

*/

/*

Задача
Дан массив из N целых чисел, необходимо найти, сколько раз нужно сложить 
наименьшие числа массива, пока их сумма не станет больше или равна K.

Примечания:
Размер списка - не менее 3.
Все числа будут положительными.
Числа могут встречаться более одного раза (возможны дубликаты).
Порог K всегда будет достижим.

Примеры ввода >> вывода
minimumSteps({1, 10, 12, 9, 2, 3}, 6) ==> return (2)
Пояснение:
Мы добавляем два наименьших элемента (1 + 2), их сумма равна 3.
Затем мы прибавляем к ним следующее наименьшее число (3 + 3), так что сумма становится равной 6.
Теперь результат больше или равен 6, следовательно, выход (2), т.е. для этого требуется (2) операций.

minimumSteps({8 , 9, 4, 2}, 23) ==> возврат (3)
Пояснение:
Мы складываем два наименьших элемента (4 + 2), их сумма равна 6.
Затем мы добавляем к ним следующее наименьшее число (6 + 8), так что сумма становится 14.
Теперь добавляем следующее наименьшее число (14 + 9), так что сумма становится 23.
Теперь результат больше или равен 23, следовательно, выход - (3), т.е. для этого требуется (3) операций.

minimumSteps({19,98,69,28,75,45,17,98,67}, 464) ==> возврат (8)
Пояснение:
Мы складываем два наименьших элемента (19 + 17), их сумма равна 36.
Затем мы добавляем к ним следующее наименьшее число (36 + 28), так что сумма становится 64.
Мы должны продолжать делать это до тех пор, пока сумма не станет больше или равна K (464 в данном случае), что потребует 8 шагов.
Ожидаемая временная сложность O(n Log n)

*/
