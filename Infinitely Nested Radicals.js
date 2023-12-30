// Solution / Решение

function fn(x) {
    return 0.5 + Math.pow(x + 0.25, 0.5);
}

// Solution 2 / Решение 2

function fn(x) {
    const result = x; // Инициализация переменной result значением x
    for (let i = 1000; i > 0; i--) { // Запуск цикла с 1000 итерациями
        x = ((y) => Math.sqrt(result + y))(x); // Использование анонимной функции с параметром y, вычисление корня и перезапись x
    }
    return x; // Возвращение конечного значения x после всех итераций
}

// Short version

const fn = x => 0.5 + Math.pow(x + 0.25, 0.5); // С помощью метода Math.pow для более наглядного возведения в степень

// Or

const fn = x => 0.5 + Math.sqrt(x + 0.25); // Просто через Math.sqrt (корень из выражения)

// Tests

console.log(fn(2)); // 2
console.log(fn(6)); // 3
console.log(fn(12)); // 4

/*

Hello,
I am Jomo Pipi
and today we will be evaluating an expression like this:
(there are an infinite number of radicals)

    ______________________
   /      ________________
  /      /      __________
\/ x + \/ x + \/ x + ...

for a given value x

*/

/*

Здравствуйте,
Я Джомо Пипи
и сегодня мы будем оценивать выражение, подобное этому:
(существует бесконечное количество радикалов)

    ______________________
   /      ________________
  /      /      __________
\/ x + \/ x + \/ x + ...

для заданного значения x

*/