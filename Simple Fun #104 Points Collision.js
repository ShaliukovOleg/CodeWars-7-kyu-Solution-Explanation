// Solution / Решение

function pointsCollision(p, q, u, v) {
    const deltaX = q[0] - p[0]; // Разница между координатами x для точек p и q
    const deltaY = q[1] - p[1]; // Разница между координатами y для точек p и q
    const deltaVx = u[0] - v[0]; // Разница между скоростями x для точек u и v
    const deltaVy = u[1] - v[1]; // Разница между скоростями y для точек u и v

    switch (true) { // Используем конструкцию switch для различных случаев в зависимости от значений переменных
        case deltaX === 0 && deltaY === 0: // Проверяем, совпадают ли координаты точек p и q (если обе разницы равны 0)
            return true; // Возвращаем true, если координаты совпадают

        case deltaVx === 0 && deltaVy === 0: // Проверяем, совпадают ли скорости точек u и v (если обе разницы равны 0)
            return false; // Возвращаем false, если скорости совпадают

        case deltaVx === 0: // Проверяем, параллельна ли скорость точки u по оси x (если deltaVx равно 0)
            return deltaY / deltaVy > 0; // Возвращаем true, если точки движутся в одном направлении по оси y

        case deltaVy === 0: // Проверяем, параллельна ли скорость точки u по оси y (если deltaVy равно 0)
            return deltaX / deltaVx > 0; // Возвращаем true, если точки движутся в одном направлении по оси x

        default: // Для остальных случаев
            const t1 = deltaX / deltaVx; // Параметр t1 для точек u и v
            const t2 = deltaY / deltaVy; // Параметр t2 для точек u и v
            return t1 > 0 && t1 === t2; // Возвращаем true, если обе точки движутся в одном направлении и t1 больше 0
    }
}

// Tests

console.log(pointsCollision([1, 1],[8, 2],[-2, -6],[12, -4])); // false
console.log(pointsCollision([1, 1],[1, 1],[-2, -6],[12, -4])); // true
console.log(pointsCollision([1, 1],[30, 30],[5, 5],[4, 4])); // true

/*

Task
You are given two different points on a plane. 
Each point has its own initial coordinates and own velocity vector (in some units per second). 
The points start moving with given velocities at the same moment in time. 
Will they collide?

Example
For p=[0, 0],q=[10, 0],u=[40, 0] and v=[-30, 0], the result should be true.
For p=[1, 1],q=[30, 30],u=[5, 5] and v=[4, 4], the result should be true.
For p=[-3, 0],q=[-2, 0],u=[2, 0] and v=[2, 0], the result should be false.

Input & Output
[input] integer array p
coordinates of the first point in the form [X, Y]

Constraints:

-100 ≤ X ≤ 100,
-100 ≤ Y ≤ 100,

[input] integer array q
coordinates of the second point in the form [X, Y]

Constraints:

-100 ≤ X ≤ 100,
-100 ≤ Y ≤ 100,
[input] integer array u
velocity of the first point in the form [Vx, Vy]

Constraints:

-100 ≤ X ≤ 100,
-100 ≤ Y ≤ 100,
[input] integer array v
velocity of the second point in the form [Vx, Vy]

Constraints:

-100 ≤ X ≤ 100,
-100 ≤ Y ≤ 100,
[output] a boolean value
true if the points will have the same coordinates at some point in time, false otherwise

*/

/*

Задача
Вам даны две различные точки на плоскости. 
Каждая точка имеет свои начальные координаты и свой вектор скорости (в некоторых единицах в секунду). 
Точки начинают двигаться с заданными скоростями в один и тот же момент времени. 
Столкнутся ли они?

Пример
Для p=[0, 0],q=[10, 0],u=[40, 0] и v=[-30, 0] результат должен быть истинным.
Для p=[1, 1],q=[30, 30],u=[5, 5] и v=[4, 4] результат должен быть истинным.
Для p=[-3, 0],q=[-2, 0],u=[2, 0] и v=[2, 0] результат должен быть ложным.

Вход и выход
[вход] целочисленный массив p
координаты первой точки в виде [X, Y].

Ограничения:

-100 ≤ X ≤ 100,
-100 ≤ Y ≤ 100,

[input] целочисленный массив q
координаты второй точки в виде [X, Y].

Ограничения:

-100 ≤ X ≤ 100,
-100 ≤ Y ≤ 100,
[input] целочисленный массив u
скорость первой точки в виде [Vx, Vy].

Ограничения:

-100 ≤ X ≤ 100,
-100 ≤ Y ≤ 100,
[input] целочисленный массив v
скорость второй точки в виде [Vx, Vy].

Ограничения:

-100 ≤ X ≤ 100,
-100 ≤ Y ≤ 100,
[выход] булево значение
true, если точки будут иметь одинаковые координаты в некоторый момент времени, false - в противном случае

*/