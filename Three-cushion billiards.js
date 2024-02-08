// Solution / Решение

function hasScored(s) {
  let directions = 0; // Инициализируем счётчик направлений
  let balls = new Set(); // Инициализируем множество для уникальных мячей

  for (let i = 0; i < s.length; i++) {
    // Проходим по каждому символу в строке s.
    const char = s[i];
    if (char === "n" || char === "e" || char === "w" || char === "s") {
      // Проверяем, является ли символ одним из направлений: 'n', 'e', 'w', 's'.
      directions++; // Если символ - направление, увеличиваем счётчик направлений.
    } else {
      balls.add(char); // Если символ не является направлением, добавляем его в множество мячей.
      if (balls.size === 2) {
        // Проверяем, если в множестве мячей накопилось уже 2 различных мяча.
        return directions >= 3; // Если это так, то проверяем, было ли сделано 3 или более движений в любом из направлений.
      }
    }
  }
  return false; // Если мы дошли до этой точки, значит, не было сделано 3 или более движений в любом из направлений.
}

// Solution 2 / Решение 2

function hasScored(s) {
  let [directions, balls] = [0, new Set()]; // Инициализируем переменные: счетчик направлений и множество для уникальных мячей.
  for (let c of s) {
    // Проходим по каждому символу в строке s.

    "news".includes(c) // Проверяем, является ли текущий символ одним из направлений ('n', 'e', 'w', 's').
      ? directions++ // Если да, увеличиваем счетчик направлений
      : balls.add(c); // иначе добавляем символ в множество мячей.

    if (balls.size === 2) return directions >= 3; // Проверяем, если в множестве мячей уже два различных мяча.
    // Если это так, проверяем, было ли сделано 3 или более движений в любом из направлений.
  }
  return false; // Если дошли до этой точки, значит, не было сделано 3 или более движений в любом из направлений.
}

// Tests

console.log(hasScored("wWnsR")); // true
console.log(hasScored("YnesRs")); // true
console.log(hasScored("neR")); // false

/*

Description
Three-cushion billiards, also called three-cushion carom, is a form of carom billiards. 
The object of the game is to carom the cue ball off both object balls while contacting the rail cushions at least three times before contacting the second object ball.

The table consists of 4 cushions (north, east, south and west)
There are 3 balls (white, yellow, red)
The cue ball is the ball that the player starts with (white and yellow are allowed to be picked)
The object balls are the 2 remaining balls that the player did not pick to start with (red is always one of these balls)
wiki link https://en.wikipedia.org/wiki/Three-cushion_billiards

The billiards table
           n
   +----------------+
   |                |
   |                |
   |        R       |
   |                |
 w |                | e
   |                |
   |                |
   |                |
   |      W Y       |
   |                |
   +----------------+
            s
Task
Given an encoded string representing the collisions of the cue ball with object balls and cushions, 
return a boolean indicating whether a point was scored. 
You may assert the player hits a valid cue ball (white or yellow).

Input
The input consists of a combination of zero, one or more occurences of the following chars:

'w', 'e', 'n', 's' - west, east, north and south cushion
'W', 'Y', 'R' - white, yellow and red ball

Output
return a boolean indicating whether a point is scored

Conditions to score a point
The cue ball must have made contact with the cushions at least three times before contacting the second object ball for the first time.
Both object balls must be hit at least once.

Additional info
The cue ball may contact the cushions before or after hitting the first object ball.
The cue ball does not have to contact three different cushions as long as it has been in contact with any cushion at least three times in total.
Using a specific technique (a massé shot), it is possible to hit the same cushion multiple times in succession, curving the cue ball.
It is allowed that both object balls collide a number of times, this is not encoded in the input and can be ignored altogether

Examples
Scoring a point
input       description
------------------------------------------------------------------------------
"YnesR"     white ball is cue ball, first hits yellow ball, 
            then 3 cushions, finally red ball
 
"RnesY"     white ball is cue ball, first hits red ball, 
            then 3 cushions, finally yellow ball
 
"WnesR"     yellow ball is cue ball, first hits white ball, 
            then 3 cushions, finally red ball
 
"wWnsR"     yellow ball is cue ball, first hits a cushion,
            then white ball, 2 more cushions, finally red ball
 
"wnWsR"     yellow ball is cue ball, first hits 2 cushions,
            then white ball, 1 more cushion, finally red ball
 
"wnsWR"     yellow ball is cue ball, first hits 3 cushions,
            then white ball, finally red ball
 
"YneswR"    white ball is cue ball, first hits yellow ball, 
            then 4 cushions, finally red ball
 
"YnesRs"    white ball is cue ball, first hits yellow ball, 
            then 3 cushions, then red ball, finally another cushion
 
"YnesYR"    white ball is cue ball, first hits yellow ball, 
            then 3 cushions, then yellow ball again, finally red ball
 
"wnwYR"     white ball is cue ball, first hits 3 cushions (one cushion twice),
            then white ball, finally red ball
 
"wwwYR"     white ball is cue ball, first hits 3 cushions (one cushion trice),
            then white ball, finally red ball
 

No score
input       description
------------------------------------------------------------------------------
"YneRw"     there are only 2 cushions hit before hitting the second object 
            ball (red)
 
"wYnwY"     the yellow ball is hit twice, but the red ball was not hit
 
"neR"       only the red ball was hit, no other object ball
 
""          a total miscue, causing no collisions after hitting the cue ball

"YRnnenRY"  more than 3 cushions were hit, but not before hitting the
            second object ball for the first time (red)
 
"eRWewsnW"  more than 3 cushions were hit, but not before hitting the
            second object ball for the first time (white)

*/

/*

Описание
Бильярд на трех подушках, также называемый каром на трех подушках, является разновидностью каромного бильярда. 
Цель игры - отбить кием оба предметных шара, при этом коснувшись подушек рельс не менее трех раз, прежде чем коснуться второго предметного шара.

Стол состоит из 4 подушек (северной, восточной, южной и западной).
Имеется 3 шара (белый, желтый, красный).
Шар для кия - это шар, с которого игрок начинает игру (разрешается выбирать белый и желтый).
Шары-объекты - это 2 оставшихся шара, которые игрок не выбрал для начала (красный - всегда один из этих шаров).
Ссылка на вики https://en.wikipedia.org/wiki/Three-cushion_billiards

Бильярдный стол
           n
   +----------------+
   |                |
   |                |
   |        R       |
   |                |
 w |                | e
   |                |
   |                |
   |                |
   |      W Y       |
   |                |
   +----------------+
            s
Задача
Дана закодированная строка, представляющая столкновения шара для кия с предметными шарами и подушками, 
верните логическое число, указывающее, было ли набрано очко. 
Можно утверждать, что игрок попал в правильный шар для кия (белый или желтый).

Вход
Входные данные состоят из комбинации нуля, одного или нескольких вхождений следующих символов:

'w', 'e', 'n', 's' - западная, восточная, северная и южная подушки
'W', 'Y', 'R' - белый, желтый и красный мяч.

Выход
возвращает логическое число, указывающее, было ли набрано очко

Условия для начисления очка
Шар кия должен соприкоснуться с подушками не менее трех раз, прежде чем впервые соприкоснется со вторым предметным шаром.
По обоим предметным шарам нужно ударить не менее одного раза.

Дополнительная информация
Шар кия может соприкасаться с подушками до или после удара по первому предметному шару.
Шару не обязательно касаться трех разных подушек, если он соприкасался с любой подушкой не менее трех раз в общей сложности.
Используя специальную технику (удар массэ), можно ударить по одной и той же подушке несколько раз подряд, изогнув шар кия.
Допускается, что оба предметных шара сталкиваются несколько раз, это не кодируется в исходных данных и может быть проигнорировано.

Примеры
Забивание очка
описание ввода
------------------------------------------------------------------------------
"YnesR" белый шар - шар для кия, сначала ударяет желтый шар, 
            затем 3 подушки, наконец, красный шар
 
"RnesY" белый шар является шаром для кия, сначала бьет красный шар, 
            затем 3 подушки, наконец, желтый шар
 
"WnesR" желтый шар - это шар для кия, сначала бьется белый шар, 
            затем 3 подушки, наконец, красный шар
 
"WWnsR" желтый шар - шар для кия, сначала бьет подушку,
            затем белый шар, еще 2 подушки, наконец, красный шар
 
"wnWsR" желтый шар - шар для кия, сначала бьет по 2 подушкам,
            затем белый шар, еще 1 подушку, наконец, красный шар
 
"wnsWR" желтый шар - шар для кия, сначала бьет по 3 подушкам,
            затем белый шар, наконец, красный шар
 
"YneswR" белый шар - шар для кия, первый удар - желтый шар, 
            затем 4 подушки, наконец, красный шар
 
"YnesRs" белый шар - кий, первый удар - желтый шар, 
            затем 3 подушки, затем красный шар, наконец, еще одна подушка
 
"YnesYR" белый шар - шар для кия, сначала бьет желтый шар, 
            затем 3 подушки, затем снова желтый шар, наконец, красный шар
 
"wnwYR" белый шар - шар для кия, сначала бьет по 3 подушкам (одна подушка дважды),
            затем белый шар, наконец, красный шар
 
"wwwYR" белый шар является шаром для кия, сначала ударяет по 3 подушкам (одна подушка трижды),
            затем белый шар, наконец, красный шар
 

Нет счета
описание ввода
------------------------------------------------------------------------------
"YneRw" перед ударом по второму объекту ударяются только 2 подушки 
            мяч (красный)
 
"wYnwY" желтый шар был сбит дважды, но красный шар не был сбит
 
"neR" был задет только красный шар, ни один другой шар-объект не был задет.
 
"" полная ошибка, не вызвавшая никаких столкновений после удара по шару кия

"YRnnenRY" было сбито более 3 подушек, но не раньше, чем был сбит второй предметный шар
            второй предметный шар в первый раз (красный)
 
"eRWewsnW" было сбито более 3 подушек, но не до удара по второму предметному шару в первый раз (красный)
            второго шара-объекта в первый раз (белый)

*/
