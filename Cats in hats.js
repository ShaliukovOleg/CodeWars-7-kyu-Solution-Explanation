/*

The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z
The Cat In The Hat is 2,000,000 cat units tall.
Each cat is 2.5 times bigger than the cat underneath their hat.
Find the total height of the cats if they are standing on top of one another.
Counting starts from the Cat In The Hat

n = the number of cats
fix to 3 decimal places.

*/

/*

У нас есть кот в шляпе, и под шляпой находится другой кот, который тоже может иметь кота под собой, и так далее до буквы Z.
Высота Кота в шляпе составляет 2 000 000 кошачьих единиц.
Каждый кот в 2,5 раза больше кота под шляпой.
Найдите общую высоту котов, если они стоят друг на друге.
Отсчет начинается с кота в шляпе

n = количество кошек
Сократить до 3 знаков после запятой.

Пример:
console.log(height(0)) // "2000000.000"

*/

function height(n) {
    if (typeof n !== 'number') { // Проверка типов данных от пользователя. Нас интересует только числа
        n = Number(n);
    }

    return (2000000 * // Вернем изначальное количество (высоту 2000000) умноженное на
        (1 - Math.pow(0.4, n + 1)) // Отношение из единицы вычитаем при помощи метода Math.pow(){возвращает первый аргумент, возведенный в степень на второй аргумент}
        / 
        (1 - 0.4)) // Делим его на точно такое же отношение (В обоих случаях 0.4 = 1/2.5) 
        .toFixed(3); // Метод сокращает запись до трех знаков после запятой
}

// Обычный цикл тут не сработает, так как расчет ведется с последнего кота. 

console.log(height(0)); // "2000000.000"
console.log(height(7)); // "3331148.800"