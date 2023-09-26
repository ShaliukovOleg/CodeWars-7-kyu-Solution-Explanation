// Solution / Решение

// Объявление функции combine с использованием оператора rest для передачи произвольного количества объектов.
function combine(...objects) {
    // Создание пустого объекта result, который будет содержать объединенные свойства.
    const result = {};

    // Итерация по всем объектам, переданным в функцию через оператор rest.
    for (const obj of objects) {
        // Итерация по всем свойствам объекта obj с помощью Object.entries.
        // Object.entries возвращает массив пар ключ-значение из объекта.
        for (const [key, value] of Object.entries(obj)) {
            // Если ключ key уже существует в объекте result, то складываем его текущее значение с предыдущими значениями.
            // В противном случае, устанавливаем значение key в result равным текущему значению value.
            result[key] = (result[key] || 0) + value;
        }
    }

    // Возвращаем объект result, содержащий объединенные свойства.
    return result;
}

// Short version

const combine = (...objs) => objs.reduce((r, o) => (Object.entries(o).forEach(([k, v]) => r[k] = (r[k] || 0) + v), r), {});

/*

Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. 
Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.

*/

/*

Ваша задача - написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.

Все свойства входных объектов будут иметь только числовые значения. 
Объекты объединяются таким образом, что значения совпадающих ключей суммируются.

Пример:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Возвращает { a: 13, b: 20, c: 36, d: 3 }
Функция combine должна быть хорошим гражданином и не должна мутировать входные объекты.

*/