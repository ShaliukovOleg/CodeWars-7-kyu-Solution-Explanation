// Solution / Решение

function knockKnock(str) {
    const walls = str.split(' '); // Разбиваем строку на массив, используя пробел в качестве разделителя
    let result = '!'; // Инициализируем строку result
    for (let i = 1; i < walls.length; i++) { // Проходим по массиву, начиная с индекса 1
        const door = [...walls[i]] // Создаем массив символов для текущей стены
            .find(c => walls[i - 1] // Ищем символ двери, который встречается в предыдущей стене
                .includes(c)) || '^'; // Если дверь не найдена, используем символ '^'
        result += door; // Добавляем символ двери к результату
    }
    return result; // Возвращаем строку с символами
}

// Tests

console.log(knockKnock("vkxn kuxsrh adpvi vdbasjoj ypoi axwwe")); // !k^vo^
console.log(knockKnock("9utthp4g nuzwf8c ue2xc rdts7wh mnsd8vam uoix0y 98x5nr t9es ofyebf8 xyg4l 4coy8iyay 7gjah3jm opd4pjx1i q8iift 5719 wukk2vd 066odzf2")); // !uu^s^x9ey4aji^^d
console.log(knockKnock("nfw0fy dnnz4j vfxf 3ee5h6 fyw1spl 3p8sjovc pnoaxhn5a")); // !n^^^pp

/*

DESCRIPTION:
Imagine you are watching a variation upon the challenge 'Knock Knock' 
from the cult Japanese game show Takeshi's Castle - link here.

In this version, contestants must navigate their way through a series of walls, 
each of which has a certain number of doors, each painted with a single letter or digit. 
If any of the doors show a character that was also shown in the previous set, 
then that door will be open. Otherwise, it will be locked.

If there is no shared character between the current set of doors and the previous set, 
then the contestant must climb over the wall.

You hatch a devious plan, and decide to write a function that will process the course, 
returning a special code that future contestants may purchase in order to navigate the course as quickly as possible... 
very immoral, I know.

So:
You will be passed a string of random values, where each value represents a set of doors, and each character a door. 
E.g "uy6uq lhh105 tuzpwjus nc1a2 p6v7md cpyp p69hq2b8c 3a9k9r1aq"

The first value represents the beginning of the course, so simply log an exclamation mark.
From there, if a value shares a single character with the previous value, then log that character.
In the case that there are more than one characters in common (e.g "fr7og goat7"), 
then log the shared character that appears first in the current value 
- if the current value is "goat7", preceded by "fr7og", then log "g", and NOT "o" or "7".
If there is no shared character between the values, then log a caret, "^", 
in order to show the contestant climbing over the wall.

Your function should return an unspaced string of the logged characters. 

For example:
  knockKnock("uy6uq lhh105 tuzpwjus nc1a2 p6v7md cpyp p69hq2b8c 3a9k9r1aq");
  should return "!^^^^pp9"

Notes:
The number of doors in each wall will be random.
The number of walls will also be random.
Each value will always be alphanumeric.
All letters will be lower-case.

*/

/*

ОПИСАНИЕ:
Представьте, что вы смотрите вариацию на тему задания "Тук-тук 
из культового японского игрового шоу Takeshi's Castle - ссылка здесь.

В этой версии участники должны пройти через ряд стен, 
каждая из которых имеет определенное количество дверей, на каждой из которых нарисована одна буква или цифра. 
Если на одной из дверей изображен символ, который также был показан в предыдущем наборе, 
то эта дверь будет открыта. В противном случае она будет заперта.

Если между текущим и предыдущим набором дверей нет общего символа, 
то участник должен перелезть через стену.

Вы вынашиваете коварный план и решаете написать функцию, которая будет обрабатывать ход, 
возвращая специальный код, который будущие участники смогут приобрести, чтобы пройти дистанцию как можно быстрее... 
очень аморально, я знаю.

Итак:
Вам будет передана строка случайных значений, где каждое значение представляет собой набор дверей, а каждый символ - дверь. 
Например, "uy6uq lhh105 tuzpwjus nc1a2 p6v7md cpyp p69hq2b8c 3a9k9r1aq".

Первое значение представляет собой начало курса, поэтому просто поставьте восклицательный знак.
Далее, если значение имеет один символ с предыдущим значением, запишите этот символ.
В случае если общих символов больше одного (например, "fr7og goat7"), 
тогда запишите в журнал тот общий символ, который первым появляется в текущем значении 
- если текущее значение - "goat7", которому предшествует "fr7og", то регистрируйте "g", а НЕ "o" или "7".
Если между значениями нет общего символа, запишите карету, "^", 
чтобы показать, как участник перелезает через стену.

Ваша функция должна возвращать строку символов без пробелов. 

Например:
  knockKnock("uy6uq lhh105 tuzpwjus nc1a2 p6v7md cpyp p69hq2b8c 3a9k9r1aq");
  должно возвращаться "!^^^^pp9".

Примечания:
Количество дверей в каждой стене будет случайным.
Количество стен также будет случайным.
Каждое значение всегда будет буквенно-цифровым.
Все буквы будут в нижнем регистре.

Переведено с помощью DeepL.com (бесплатная версия)

*/