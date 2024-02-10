// Solution / Решение

function poorGirl(matches, action) { // Объявление функции poorGirl с параметрами matches и action

    const actions = action.reduce((acc, values) => { // Создание массива действий на основе массива action
        const [move, num] = values.split(':'); // Деструктуризация значения в массиве action
        acc.push(...Array(parseInt(num)).fill(move)); // Заполнение массива acc действиями, указанными в action
        return acc; // Возврат аккумулятора
    }, []); // Начальное значение аккумулятора - пустой массив

    let currentIndex = 0; // Инициализация переменной currentIndex - индекс текущего действия в массиве actions
    let result = ''; // Инициализация переменной result - результирующей строки

    for (let i = 0; i < matches.length; i++) { // Цикл по каждому элементу в массиве matches
        if (matches[i] !== '1' && currentIndex < actions.length) { // Проверка условия: если текущий элемент не '1' и индекс текущего действия меньше длины массива actions
            result += actions[currentIndex] === 'Sell' ? '$' : '1'; // Если текущее действие - 'Sell', добавляем '$' к результату, иначе добавляем '1'
            currentIndex++; // Увеличиваем индекс текущего действия
        } else {
            result += matches[i]; // Если условие не выполняется, добавляем текущий элемент из массива matches к результату
        }
    }

    return result; // Возвращаем результат
}


// Tests

let matchesTest1 = "i1!"
let actionTest1 = ["Sell:2", "Burn:1", "Sell:3", "Burn:2", "Burn:1", "Burn:1", "Burn:1"]

console.log(poorGirl(matchesTest1, actionTest1)); // $1$

let matchesTest2 = "i1!111ii!i1!111ii!i1!111ii!i1!111ii!"
let actionTest2 = ["Sell:21", "Burn:1", "Sell:3", "Burn:2", "Burn:1", "Burn:1", "Burn:1"]

console.log(poorGirl(matchesTest2, actionTest2)); // $1$111$$$$1$111$$$$1$111$$$$1$111$$$

/*

Story
On a cold New Year’s Eve, a poor girl tries to sell matches in the street. 
She is freezing badly, but she is afraid to go home because her father will beat her for not selling any matches. 
She takes shelter in a nook and lights the matches to warm herself.

In their glow, she sees several lovely visions including a Christmas tree and a holiday feast. 
The girl looks skyward and sees a shooting star, 
then she remembers her dead grandmother saying that such a falling star means someone has died and is going into Heaven. 
As she lights the next match, she sees a vision of her grandmother, 
the only person to have treated her with love and kindness. 
She strikes one match after another to keep the vision of her grandmother alive for as long as she can.

Running out of matches, the child dies and her grandmother carries her soul to Heaven. 
The next morning, passers-by find the child dead in the nook and take pity on her, 
not knowing that she had left this world and will not be cold or hungry any more.

The ending is so sad, why don't we have a happy ending? 
such as the little girl sold her matches, and then buy some lottery tickets and winning $1000000? 
Or the little girl and the guy who sold the lighter fell in love, and then held a grand wedding? 
I hate Andersen.

Descrption
The little match girl in the corner of the street. 
There are some matches in her hands:"i1!111ii!i1!111ii!i1!111ii!i1!111ii!". 
i is a match that did not burn. You can see the match head on the top of i. 
! is also a match that did not burn, 
The match head is at the bottom of the !. 
1 is a burnt match.

Here is the little match girl's action:
["Sell:2","Burn:1","Sell:3","Burn:2","Burn:1","Burn:1","Burn:1"]

We want to know: To the last, What's in the little girl's hand? The above example should return:
"$1$1111$$$1111111111!111ii!i1!111ii!"
Sell: i/!-->$  Burn: i/!-->1
The little match girl always sell or burn the match from left side.

Task
Complete function poorGirl that accepts 2 argument matches and action. 
Returns the result in accordance with the rules above.
Note: If the action requires more than the actual number of matches, 
please ignore the additional action.

*/

/*

История
В холодную новогоднюю ночь бедная девочка пытается продать спички на улице. 
Она сильно замерзла, но боится идти домой, потому что отец побьет ее за то, что она не продала спички. 
Она укрывается в укромном уголке и зажигает спички, чтобы согреться.

В их свете она видит несколько прекрасных видений, в том числе рождественскую елку и праздничный пир. 
Девушка смотрит в небо и видит падающую звезду, 
Затем она вспоминает, что ее умершая бабушка говорила, что такая падающая звезда означает, что кто-то умер и попадает на небеса. 
Когда она зажигает следующую спичку, ей является видение ее бабушки, 
единственного человека, который относился к ней с любовью и добротой. 
Она зажигает одну спичку за другой, чтобы сохранить видение бабушки как можно дольше.

Когда спички заканчиваются, ребенок умирает, и бабушка уносит ее душу на небеса. 
На следующее утро прохожие находят ребенка мертвым в закутке и жалеют ее, 
Не зная, что она покинула этот мир и больше не будет мерзнуть и голодать.

Концовка такая печальная, почему бы нам не сделать счастливый конец? 
Например, девочка продала свои спички, а потом купила несколько лотерейных билетов и выиграла $10000? 
Или девочка и парень, продавший зажигалку, полюбили друг друга, а потом устроили пышную свадьбу? 
Я ненавижу Андерсена.

Описание
Маленькая девочка со спичками на углу улицы. 
В ее руках несколько спичек: "i1!111ii!i1!111ii!i1!111ii!i1!111ii!i1!111ii!". 
i - спичка, которая не сгорела. Вы можете увидеть головку спички на вершине i. 
! - это тоже спичка, которая не сгорела, 
Головка спички находится в нижней части ! 
1 - это сгоревшая спичка.

Вот действия маленькой спичечницы:
["Sell:2","Burn:1","Sell:3","Burn:2","Burn:1","Burn:1","Burn:1"]

Мы хотим знать: До последнего, Что в руке у маленькой девочки? Приведенный выше пример должен вернуть:
"$1$1111$$$1111111111!111ii!i1!111ii!"
Продать: i/!-->$ Сжечь: i/!-->1
Маленькая девочка всегда продает или сжигает спички с левой стороны.

Задание
Напишите функцию poorGirl, которая принимает 2 аргумента - спички и действие. 
Верните результат в соответствии с приведенными выше правилами.
Примечание: Если действие требует больше, чем фактическое количество спичек, 
пожалуйста, игнорируйте дополнительное действие.

*/