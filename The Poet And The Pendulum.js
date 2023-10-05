// Solution / Решение

function pendulum(values) {
    values.sort((a, b) => a - b); // Сортируем входной массив

    // Для хранения отсортированных элементов.
    const result = values.reduce((acc, value, index) => {
        // Проверка индекса на четность.
        index % 2 === 0
            ? acc.unshift(value) // добавляем в начало массива
            : acc.push(value); // добавляем в конец массива
        return acc; // временный массив, пока мы не пройдем все элементы
    }, []);
    return result; // возвращаем новый массив.
};

// Solution / Решение

function pendulum(values) {
    values.sort((a, b) => a - b); // сортировка
    let left = values.filter((_, i) => i % 2 === 0);
    let right = values.filter((_, i) => i % 2 !== 0);
    return [...left.reverse(), ...right];
};

// Short version

function pendulum(values) {
    return values.sort((a, b) => a - b) // сортировка 
        .map((_, index) => v[( // проверка каждого элемента массива по индексу
            j = ~~((values.length - 1) / 2) * 2 - 2 * index) < 0 ? ~j : j]
        )
};

// Последнее решение хоть и короче, но с точки зрения читабельности очень плохое решение. Так как непонятно, как работают операторы "~~" и "~". 

// Tests

console.log(pendulum([27, 27, 19, 21, 22, 28, 24])); // [28,27,22,19,21,24,27]
console.log(pendulum([20, 19, 25, 16, 19, 30, 18, 24])); // [25,20,19,16,18,19,24,30]
console.log(pendulum([22, 26, 21, 27, 24, 21, 15, 26, 25])); // [27,26,24,21,15,21,22,25,26]

/*

Scenario
the rhythm of beautiful musical notes is drawing a Pendulum

Beautiful musical notes are the Numbers

Task
Given an array/list [] of n integers , 
Arrange them in a way similar to the to-and-fro movement of a Pendulum

The Smallest element of the list of integers , 
must come in center position of array/list.

The Higher than smallest , goes to the right .
The Next higher number goes to the left of minimum number and So on, 
in a to-and-fro manner similar to that of a Pendulum.

*/

/*

Сценарий
ритм красивых музыкальных нот рисует маятник

Красивые музыкальные ноты - это Цифры

Задача
Дан массив/список [] из n целых чисел, 
Расположите их таким образом, чтобы они напоминали движение маятника вперед-назад

Наименьший элемент списка целых чисел , 
должен занять центральное место в массиве/списке.

Старший, чем младший, - вправо.
Следующее большее число располагается слева от минимального и так далее, 
и так далее, аналогично маятнику.

*/