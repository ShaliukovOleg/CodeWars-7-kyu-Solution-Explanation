// Solution / Решение

function carD([left, right], pos) {
    switch (true) {
        case [...left].some((c, i) => "\\/".includes(c) && "\\/".includes(right[i])): return "Super Smash!"; // Проверка на наличие открытых дверей в обоих рядах машин.
        case left.includes("["): return "Free Lambo on Left!"; // Проверка на наличие Lamborghini слева.
        case right.includes("]"): return "Free Lambo on Right!"; // Проверка на наличие Lamborghini справа.
        case left.substr(pos, 3).includes("\\"): return 'Crash, Bang, Ouch!'; // Проверка на наличие открытых дверей слева.
        case right.substr(pos, 3).includes("\\"): return 'Right Smash!'; // Проверка на наличие открытых дверей справа.
        case left.substr(pos, 2).includes("/"): return 'Knocked Off, Dust Yourself Down.'; // Проверка на наличие открытых дверей слева.
        case right.substr(pos, 2).includes("/"): return 'Dammit!'; // Проверка на наличие открытых дверей справа.
        default: return "Plain Sailing!"; // Если ничего не соответствует вышеперечисленным случаям, возвращаем "Plain Sailing!".
    }
}

// Tests

console.log(carD(['EvH/KNikBiyxfeyK/miCMj', 'I/HwjnHlFLlahMOKNadps'], 0)); // 'Dammit!'
console.log(carD(['\\DjQ\\[zv]SpG]Z/[Qm\\eLL', 'amwZArsaGRmibriXBgTRZp'], 8)); // 'Free Lambo on Left!'
console.log(carD(['I', '\\'], 0)); // 'Right Smash!'

/*

*** Easy version found here: https://www.codewars.com/kata/57d1203395497e99120000c9***

Let's recap the situation:

When riding alongside a line of parked cars, people often refer to those that ride too close as playing 'Car Door Roulette'. 
Since the last kata, we have moved to the expensive part of London, where the roads are tight and cars park along both sides!

In this kata, you will be given an array of two strings, 
that represents the lines of parked cars (each character is a car, 
    the first string in the array are those on the left, second is those on the right), 
    and a value 'x' which represents your position along that string, as the cyclist.

'\' represents an open door of a car facing the same way you are going. 
This is most painful to hit.

'/' represents an open door of a car facing you, this is less dangerous as you could, 
in theory, glance off it and be ok.

Your job is to check whether there are any open doors on your ride, 
whether they knock you off, and how badly.

You need to account for the fact that people opening car doors don't leave them open, 
so an open door value only lasts for a set period of time (or number of steps along the line).

If you detect an open door '\', check whether it is level wth you, or one or two steps ahead of you. 
If it is, unlucky! If it is on the left, return 'Crash, Bang, Ouch!'. 
On the right, return 'Right Smash!'.

As an open door '/' is less dangerous, you only need to check if it is level with you, 
or 1 step ahead. If it is, when it is on the left return 'Knocked Off, Dust Yourself Down.', 
when it is on the right return 'Dammit!'.

Sometimes, cars stop so their drivers can chat. This leaves you with nowhere to go. 
Regardless of where down the road this happens, you will hit it. Return 'Super Smash!'.

Finally, some good news - as we are in the posh bit of London, there are Lambourghinis everywhere! 
As the doors open upwards, not out, you can stop your bike and jump in! Free Lambo! 
The sign for a lambo door is '[' or ']'. 
Make sure the open side of the bracket is facing in (so '[' on the left, or ']' on the right. 
These can be seen from miles away, so before you check most other things - check for a free car! 
(The only thing you cannot avoid in this case is a Super Smash). 
If there is a lambo on the left - return 'Free Lambo on Left!', if on the right, 
return 'Free Lambo on Right!'.

If none of these things occur - you've made it! Return 'Plain Sailing!'.

*/

/*

*** Простая версия находится здесь: https://www.codewars.com/kata/57d1203395497e99120000c9***.

Напомним ситуацию:

Когда вы едете рядом с припаркованными машинами, люди часто называют тех, кто едет слишком близко, "рулеткой автомобильных дверей". 
Со времени предыдущего ката мы переехали в дорогой район Лондона, где дороги узкие и машины паркуются по обеим сторонам!

В этом ката вам будет дан массив из двух строк, 
представляющих собой ряды припаркованных автомобилей (каждый символ - это автомобиль, 
    первая строка в массиве - те, что слева, вторая - те, что справа), 
    и значение 'x', которое представляет ваше положение в этой строке, как велосипедиста.

'\' означает открытую дверь автомобиля, стоящего в той же стороне, куда вы едете. 
Это наиболее болезненный удар.

'/' обозначает открытую дверь автомобиля, стоящего перед вами, это менее опасно, так как вы можете 
теоретически, можно отскочить от нее и не пострадать.

Ваша задача - проверить, есть ли на вашем пути открытые двери, 
сбивают ли они вас с ног и насколько сильно.

При этом необходимо учитывать тот факт, что люди, открывающие двери автомобиля, не оставляют их открытыми, 
поэтому значение открытой двери сохраняется только в течение определенного периода времени (или количества шагов по линии).

Если вы обнаружили открытую дверь, проверьте, находится ли она на одном уровне с вами или на один-два шага впереди вас. 
Если это так, то вам не повезло! Если она находится слева, верните 'Crash, Bang, Ouch!'. 
Если справа, верните 'Right Smash!'.

Поскольку открытая дверь '/' менее опасна, нужно проверять только, находится ли она на одном уровне с вами, 
или на 1 шаг впереди. Если да, то, если она находится слева, верните команду "Сбит с ног, сдувай пыль", 
если справа - "Черт возьми!".

Иногда машины останавливаются, чтобы их водители могли поболтать. В результате вам некуда идти. 
Независимо от того, в каком месте дороги это произойдет, вы врежетесь в нее. Верните "Super Smash!".

И наконец, хорошие новости - поскольку мы находимся в шикарном районе Лондона, здесь повсюду стоят Lambourghinis! 
Поскольку двери открываются вверх, а не наружу, вы можете остановить свой мотоцикл и запрыгнуть внутрь! Бесплатный Ламбо! 
Знак для двери "Ламбо" - '[' или ']'. 
Убедитесь, что открытая сторона скобы направлена внутрь (так что '[' слева, или ']' справа. 
Их видно за много миль, поэтому прежде чем проверять другие вещи, проверьте наличие свободного автомобиля! 
(Единственное, чего нельзя избежать в этом случае, - это Super Smash). 
Если слева есть Ламбо - верните 'Free Lambo on Left!', если справа, 
возвращается 'Free Lambo on Right!'.

Если ничего из перечисленного не происходит - вы попали! Возвращаем 'Plain Sailing!'.

*/