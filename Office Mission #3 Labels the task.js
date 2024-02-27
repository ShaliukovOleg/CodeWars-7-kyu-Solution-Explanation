// Solution / Решение

function tasksTypes(deadlines, day) {
    return [ // Возвращаем массив с тремя значениями: количество задач на сегодня, в ближайшем будущем и в далеком будущем.
        deadlines.filter(d => d <= day).length, // Фильтруем задачи, у которых срок выполнения не позже сегодняшнего дня
        deadlines.filter(d => day < d && d <= day + 7).length, // Фильтруем задачи, у которых срок выполнения отложен на следующую неделю
        deadlines.filter(d => d > day + 7).length // Фильтруем задачи, у которых срок выполнения находится в далеком будущем
    ];
}

// Tests

console.log(tasksTypes([1, 2, 3, 4, 5],2)); // [ 2, 3, 0 ]
console.log(tasksTypes( [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8],1)); // [ 2, 8, 2 ]
console.log(tasksTypes([4, 14, 16],7)); // [ 1, 1, 1 ]

/*

DESCRIPTION:
This Kata series is transplanted from other sites ;-)

Mission
You have some tasks in your Asana account. For each ith of them you know its deadlinesi, 
which is the last day by which it should be completed. As you can see in your calendar, 
today is the day number day. 
Asana labels each task in accordance with its due date:

If the task is due today or it's already overdue, it is labeled as Today;

If the task should be completed within a week (but not today), 
i.e. its deadline is somewhere between day + 1 and day + 7 both inclusive, it is labeled as Upcoming;

All other tasks are labeled as Later;

Your goal is to find the number of tasks with each label and return it as an array of format 
[Today, Upcoming, Later], where Today, 
Upcoming and Later is the number of tasks with the corresponding label.

Example

For deadlines = [1, 2, 3, 4, 5] and day = 2, the output should be [2, 3, 0].
Today is day 2, so tasks with deadlines at 1 and 2 are labeled as Today. 
Other three tasks should be completed within a week and should be labeled as Upcoming. 

There're no tasks labeled as Later.

     Today      Upcoming
   |<====>|<====.=====.====>|
----1-----2-----3-----4-----5----->days
          ^
          |
          |
        Today

For deadlines = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8] and day = 1,

the output should be [2, 8, 2]

Today is day 1, which means that two tasks with deadlines 1 are labeled as Today. 
Tasks with deadlines 10 and 9 are labeled as Later, 
since their deadlines are more than 7 days ahead. 
The rest 8 tasks are labeled as Upcoming.

                  Upcoming                          Later
     <|=====.=====.=====.=====.=====.=====.====>|<====.=====|>
------1-----2-----3-----4-----5-----6-----7-----8-----9-----10----->days 
  (2 tasks)(2 tasks)   (3 tasks)
      ^
      |
      |
    Today

Input/Output

[input] integer array deadlines
Constraints: 1 ≤ deadlines.length ≤ 50, 1 ≤ deadlines[i] ≤ 18.
[input] integer day
Constraints: 1 ≤ day ≤ 18.
[output] an integer array
Array of three elements, the number of tasks labeled as Today, 
Upcoming and Later, respectively.

*/

/*

ОПИСАНИЕ:
Эта серия Ката пересажена с других сайтов ;-)

Миссия
У вас есть несколько задач в вашем аккаунте Asana. Для каждой из них вы знаете ее дедлайні, 
то есть последний день, к которому она должна быть выполнена. Как вы можете видеть в вашем календаре, 
сегодня - день номер один. 
Asana маркирует каждую задачу в соответствии с датой ее выполнения:

Если задача должна быть выполнена сегодня или уже просрочена, она помечается как Today;

Если задача должна быть выполнена в течение недели (но не сегодня), 
то есть срок ее выполнения находится где-то между 1-м и 7-м днем включительно, она помечается как Предстоящая;

Все остальные задачи помечаются как "Позже";

Ваша цель - найти количество задач с каждой меткой и вернуть его в виде массива формата 
[Today, Upcoming, Later], где Today, 
Upcoming и Later - количество задач с соответствующей меткой.

Пример

Для deadlines = [1, 2, 3, 4, 5] и day = 2, на выходе должно получиться [2, 3, 0].
Сегодня день 2, поэтому задачи со сроками 1 и 2 помечаются как Today. 
Три другие задачи должны быть выполнены в течение недели и помечены как предстоящие. 

Нет ни одной задачи, помеченной как Later.

    Сегодня   Предстоящие
   |<====>|<====.=====.====>|
----1-----2-----3-----4-----5----->дни
          ^
          |
          |
       Сегодня

Для deadlines = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8] и day = 1,

на выходе должно получиться [2, 8, 2].

Сегодня - день 1, значит, две задачи со сроками выполнения 1 помечены как Today. 
Задачи со сроками 10 и 9 помечены как Later, 
так как их дедлайны наступают более чем через 7 дней. 
Остальные 8 задач помечены как Предстоящие.

                  Предстоящие                       Позже
     <|=====.=====.=====.=====.=====.=====.====>|<====.=====|>
------1-----2-----3-----4-----5-----6-----7-----8-----9-----10----->дни
  (2 задания)(2 задания) (3 задания)
      ^
      |
      |
   Сегодня

Ввод/вывод

[input] целочисленный массив deadlines
Ограничения: 1 ≤ deadlines.length ≤ 50, 1 ≤ deadlines[i] ≤ 18.
[input] целочисленный массив day
Ограничения: 1 ≤ day ≤ 18.
[выход] целочисленный массив
Массив из трех элементов, количество задач, помеченных как Today, 
Предстоящие и Поздние, соответственно.

*/