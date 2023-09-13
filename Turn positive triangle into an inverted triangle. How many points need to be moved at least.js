// Solution / Решение
function leastMove(side) {
    // Вычисляем общее количество точек в положительном треугольнике
    const totalPoints = (side * (side + 1)) / 2;

    // Вычисляем количество движений, необходимых для превращения положительного треугольника в инвертированный треугольник
    // Деление на 3 объясняется тем, что:
    // В положительном треугольнике каждая строка имеет количество точек, равное индексу строки.
    // Поэтому, чтобы преобразовать положительный треугольник в инвертированный, нам нужно переместить половину точек из каждой строки в строку выше.
    // Таким образом, в среднем, каждая точка перемещается на две позиции вверх.
    // Сумма точек от 1 до n можно выразить как (n * (n + 1)) / 2.

    const moves = Math.floor(totalPoints / 3);
    return moves;
}

// Short version
function leastMoveShort(side) {
    return Math.floor((side * (side + 1)) / 6);
}
console.log(leastMoveShort(9));

/*

Description:
This is a positive triangle:

   o   
  o o  
 o o o 
Turn it into an inverted triangle. How many points need to be moved at least?

   o     How many points     o o o
  o o    --------------->     o o
 o o o   need to be moved      o
Task
Complete function leastMove. An argument side will be given. 
It's the side length of the triangle. You need to calculate and return the minimum number of moves.

Some examples:
 leastMove(2) === 1
 
   o         +---- o
  o o   ---> |    o o   --->  o o
             +---> x           o
             
 leastMove(3) === 2
 
   o         +--> x o x <--+       o o o
  o o   ---> |     o o     |  --->  o o
 o o o       +--- o o o ---+         o
             
 leastMove(4) === 3
 
   o                  o --------+  
  o o   --->  +--> x o o x <--+ | ---> o o o o
 o o o        |     o o o     | |       o o o
o o o o       +--- o o o o ---+ |        o o
                      x <-------+         o
                      
 leastMove(9) === 15 
 
         a
        a a
       a a a
x x x o o o o y y     6 a move to 6 x
 x x o o o o o y
  x o o o o o o       3 b move to 3 y
   o o o o o o c
  b o o o o o c c     6 c move to 6 z
 b b o o o o c c c
      z z z
       z z
        z
      
 
 leastMove(50) === 425 
 No "image" here ;-) Please find a way to calculate it.
Note: This is a math problem. 2 <= side <= 100000

*/

/*

Описание:
Это положительный треугольник:

   o   
  o o  
 o o o 
Превратите его в перевернутый треугольник. Сколько хотя бы точек нужно переместить?

   o     Сколько точек       o o o
  o o    --------------->     o o
 o o o   нужно переместить     o
Задача
Полная функция leastMove. sideБудет приведен аргумент . 
Это длина стороны треугольника. Вам необходимо посчитать и вернуть минимальное количество ходов.

Некоторые примеры:
 leastMove(2) === 1
 
   o         +---- o
  o o   ---> |    o o   --->  o o
             +---> x           o
             
 leastMove(3) === 2
 
   o         +--> x o x <--+       o o o
  o o   ---> |     o o     |  --->  o o
 o o o       +--- o o o ---+         o
             
 leastMove(4) === 3
 
   o                  o --------+  
  o o   --->  +--> x o o x <--+ | ---> o o o o
 o o o        |     o o o     | |       o o o
o o o o       +--- o o o o ---+ |        o o
                      x <-------+         o
                      
 leastMove(9) === 15 
 
         a
        a a
       a a a
x x x o o o o y y     6 a move to 6 x
 x x o o o o o y
  x o o o o o o       3 b move to 3 y
   o o o o o o c
  b o o o o o c c     6 c move to 6 z
 b b o o o o c c c
      z z z
       z z
        z
      
 
 leastMove(50) === 425 
 No "image" here ;-) Please find a way to calculate it.

*/
