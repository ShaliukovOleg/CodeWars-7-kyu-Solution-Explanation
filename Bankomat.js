// Solution / Решение

function solve(n) {
    // Определяем номиналы доступных банкнот в порядке убывания
    const denominations = [500, 200, 100, 50, 20, 10];

    // Инициализируем переменные для подсчета количества банкнот и оставшейся суммы
    let count = 0; // Счетчик количества банкнот
    let remaining = n; // Оставшаяся сумма, которую нужно снять

    // Начинаем перебирать номиналы банкнот в порядке убывания
    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i]; // Текущий номинал банкноты

        // Пока оставшаяся сумма больше или равна текущему номиналу, продолжаем выдавать банкноты
        while (remaining >= denomination) {
            remaining -= denomination; // Вычитаем текущий номинал из оставшейся суммы
            count++; // Увеличиваем счетчик количества банкнот
        }
    }

    // После завершения цикла проверяем, можно ли полностью снять заданную сумму
    if (remaining === 0) {
        return count; // Возвращаем количество снятых банкнот
    } else {
        return -1; // Если осталась неразменная сумма, возвращаем -1, что указывает на невозможность снятия данной суммы
    }
}

// Short version

function solve(n) {
    const denominations = [500, 200, 100, 50, 20, 10];
    let count = 0;
    let remaining = n;

    for (const denomination of denominations) {
        while (remaining >= denomination) {
            remaining -= denomination;
            count++;
        }
    }

    return remaining === 0 ? count : -1;
}

// Version 2 (Shortest solution)

const solve = n =>
    (n % 10) ? -1 : [500, 200, 100, 50, 20, 10].reduce((pre, val) => (pre += n / val ^ 0, n %= val, pre), 0);

/*

An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. 
You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number 
of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.
Return that number, or -1 if it is impossible.

*/

/*

В банкомате имеются банкноты номиналом 10, 20, 50, 100, 200 и 500 долларов. 
Можно считать, что существует достаточно большой запас каждой из этих банкнот.

Необходимо написать функцию банкомата, определяющую минимальное количество банкнот, необходимое для выдачи денег. 
банкнот, необходимое для выдачи n долларов, причем 1 <= n <= 1500.
Верните это число или -1, если это невозможно.

*/