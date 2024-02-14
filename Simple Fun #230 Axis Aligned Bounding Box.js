// Solution / Решение

function axisAlignedBoundingBox(x, y) {
    // Используя деструктуризацию массива и нахождения максимальных и минимальных значений массивов
    // перемножаем результаты разности координат между собой для нахождения площади фигуры
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

// Tests

console.log(axisAlignedBoundingBox([1, 0, 4],[-1, 2, 2])); // 12
console.log(axisAlignedBoundingBox([1, 2, 0, 0],[1, 1, 1, 1])); // 0

/*

Task
Given a set of points on the plane, find the area of its axis-aligned minimum bounding box.
The axis-aligned minimum bounding box for a given point set is its minimum bounding box 
with edges parallel to the (Cartesian) coordinate axes.

Input/Output
[input] integer array x
Non-empty array of integers representing the X coordinates of the points on the plane.
2 ≤ x.length ≤ 20,
-100 ≤ x[i] ≤ 100.

[input] integer array y

Array of integers representing the Y coordinates of the points. ith elements of both x and y correspond to a single point.
y.length = x.length,
-100 ≤ y[i] ≤ 100.
[output] an integer
The desired area.

Example
For x = [1, 0, 4] and y = [-1, 2, 2], the output should be 12.

In the image below points are given in blue, 
and the axis-aligned minimum bounding box is given in red. Its area is 3 * 4 = 12.

    ______________________________________
   3|------^------|-----|-----|-----|-----|
    |      |      |     |     |     |     |
   2|------.________________________.-----|
    |      !      |     |     |     !     |
   1|------!------------------------!-----|
    |      !      |     |     |     !     |
   0|------!------------------------!---->|
    |      !      |     |     |     !     |
  -1|------!______._________________!-----|
    |      |      |     |     |     |     |
  -2|______|______|_____|_____|_____|_____|
    -1     0      1     2     3     4     5

    Selected area:
   2.________________________.
    !                        !
   1!                        !
    !                        !
   0!                        !
    !                        !
  -1!______._________________!
    0      1     2     3     4

    In this diagram, the points are labeled "."

*/

/*

Задача
По набору точек на плоскости найдите площадь его выровненной по оси минимальной граничной области.
Выровненное по оси минимальное ограничение для данного набора точек - это его минимальное ограничение 
с гранями, параллельными (декартовым) координатным осям.

Вход/выход
[вход] целочисленный массив x
Непустой массив целых чисел, представляющих координаты X точек на плоскости.
2 ≤ x.length ≤ 20,
-100 ≤ x[i] ≤ 100.

[input] целочисленный массив y

Массив целых чисел, представляющих координаты Y точек. i-й элемент как x, так и y соответствует одной точке.
y.length = x.length,
-100 ≤ y[i] ≤ 100.
[выход] целое число
Желаемая площадь.

Пример
Для x = [1, 0, 4] и y = [-1, 2, 2] выходное значение должно быть 12.

На изображении ниже точки выделены синим цветом, 
а минимальное ограничительное поле, выровненное по оси, - красным. Его площадь равна 3 * 4 = 12.

    ______________________________________
   3|------^------|-----|-----|-----|-----|
    |      |      |     |     |     |     |
   2|------.________________________.-----|
    |      !      |     |     |     !     |
   1|------!------------------------!-----|
    |      !      |     |     |     !     |
   0|------!------------------------!---->|
    |      !      |     |     |     !     |
  -1|------!______._________________!-----|
    |      |      |     |     |     |     |
  -2|______|______|_____|_____|_____|_____|
    -1     0      1     2     3     4     5

    Выделенная область:
   2.________________________.
    !                        !
   1!                        !
    !                        !
   0!                        !
    !                        !
  -1!______._________________!
    0      1     2     3     4

    На этой диаграмме точки обозначаются "."

*/