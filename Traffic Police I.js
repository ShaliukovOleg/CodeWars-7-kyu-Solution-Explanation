// Solution / Решение
var speedError = function (est, act, readings) {
    // Деструктуризация массива
    const [[radarDistance1, time1], [radarDistance2, time2]] = readings;
    // Проверка на отрицательные значения
    if (radarDistance1 < 0 || radarDistance2 < 0) throw 'error';
    // Вычисление разницы во времени между измерениями радара.
    const timeDif = Math.abs(time2 - time1);
    // Вычисление квадратов оцененного и фактического расстояния.
    const [distanceSquared1, distanceSquared2, estSquared, actSquared] = [radarDistance1 ** 2, radarDistance2 ** 2, est ** 2, act ** 2];
    return [
        Math.round(Math.abs(Math.sqrt(Math.abs(distanceSquared1 - estSquared)) - Math.sqrt(Math.abs(distanceSquared2 - estSquared))) * 36 / timeDif) / 10,
        Math.round(Math.abs(Math.sqrt(Math.abs(distanceSquared1 - actSquared)) - Math.sqrt(Math.abs(distanceSquared2 - actSquared))) * 36 / timeDif) / 10,
    ];
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        // Test some core cases
        Test.assertSimilar(speedError(6, 3, [[50, 0], [30, 1]]), [72.9, 72.2]);

        // Test that input order of readings doesn't matter
        Test.assertSimilar(speedError(6, 3, [[50, 0], [30, 1]]), speedError(6, 3, [[30, 1], [50, 0]]));


        // Test that negative input for distance in readings array throws error
        Test.expectError("One of the distances in readings array was negative", function () {
            speedError(6, 3, [[-50, 0], [30, 1]]);
        });
        // Test that a 0 input for distance in readings array throws error
        Test.expectError("One of the distances in readings array was negative", function () {
            speedError(6, 3, [[0, 0], [-30, 1]]);
        });
    });
});

/*

I recently got caught speeding by a mobile traffic unit. 
So, because I am not at all bitter, I want to prove that a mobile traffic unit will produce wildly inaccurate results. You're going to help me in this fight for justice!

The Scenario
A mobile traffic unit sets up speed traps by the side of the road to try to catch motorists speeding. 
A common way to measure the speed of motorists is to use a radar gun that essentially takes distance readings to the approaching car over time. For now, lets assume it only takes two readings:

At time 1 (t1) the car is at a distance of d1 from the traffic officer
At time 2 (t2) the car is at a distance of d2 from the traffic officer
Based on an estimate of the distance between the officer and a point on the road 
(specifically, the point at which the car will be travelling perpendicular to the estimated distance) 
the officer (or the radar gun) is able to give a reading of the speed of the car.

Traffic officers are lazy, so rather than getting out a tape measure they often just estimate this distance. 
Our first task is to work out whether the inaccuracy of this estimate has a large bearing on the speed reading.

The inputs
The following arguments will be passed to your function:

est = the distance the officer estimates in meters
act = the actual distance in meters if they had been bothered to measure it
readings = an array with two sub-arrays representing the two readings that the radar gun will make. 
In each sub-array, the index 0 is the distance in meters measured by the radar gun and the index 1 is the time in seconds at which that reading was taken.

Examples of the readings array:

// In this example, the radar gun took a reading at 0 seconds (where the car was 50m away)
// and a reading at 1 second (where the car was 30m away)
var readings = [[50,0],[30,1];

// In this example, the gun took a reading at 0.365 seconds (where the car was 25m away)
// and a reading at 0.125 seconds (where the car was 30m away)
// Note that your code should be able to handle the readings being passed to the function
// in any order.
var readings = [[25,0.365],[30,0.125]];
Input validation
The only input you need to validate is the distance element of the readings sub-arrays (at index 0 of each sub-array). 
If this is zero (I didn't run over the traffic officer) or negative (the gun has to point at the target), throw an error.

You are otherwise safe to assume that you will be passed the correct number of arguments, 
that the readings array will be a 2x2 array and that all inputs will be valid numbers.

Outputs
You are expected to output an array in the format [estSpeed,actSpeed] 
where estSpeed is the speed that the traffic officer will estimate I was travelling at and actSpeed is the speed I was actually travelling.

Both speeds should be in kilometers per hour and to an accuracy of one decimal place.

For example [72.9,72.2] is a valid output.

Spoiler Alert: Further Katas
You will see from your results that the inaccuracies that arise as a result 
of the officers estimating the distance to the road are not significant. 
But this is the first in a series of katas where we will explore 
the possible inaccuracies of a mobile traffic unit. Stay tuned for more!

*/

/*

Недавно меня поймал за превышение скорости мобильный дорожный комплекс. 
Поэтому, чтобы не быть голословным, я хочу доказать, 
что мобильные гаишники дают дико неточные результаты. 
Вы поможете мне в этой борьбе за справедливость!

Сценарий
Мобильная дорожная служба устанавливает на обочине дороги ловушки скорости, 
чтобы поймать автомобилистов, превышающих скорость. 
Обычно для измерения скорости автомобилистов используется радар, 
который снимает показания расстояния до приближающегося автомобиля в течение определенного времени. 
Пока предположим, что он снимает только два показания:

В момент времени 1 (t1) автомобиль находится на расстоянии d1 от сотрудника ГИБДД.
В момент времени 2 (t2) автомобиль находится на расстоянии d2 от сотрудника ГИБДД.
На основании оценки расстояния между сотрудником ГИБДД и точкой на дороге 
(в частности, точки, в которой автомобиль будет двигаться перпендикулярно расчетному расстоянию) 
сотрудник (или радарная установка) может определить скорость автомобиля.

Сотрудники дорожных служб ленивы, поэтому вместо того, чтобы достать рулетку, 
они часто просто оценивают это расстояние. 
Наша первая задача - выяснить, сильно ли влияет неточность этой оценки на показания скорости.

Входные данные
В функцию будут переданы следующие аргументы:

est = расстояние, которое оценивает офицер, в метрах
act = фактическое расстояние в метрах, если бы офицер потрудился его измерить
readings = массив, состоящий из двух подмассивов, представляющих два показания, которые будет выдавать радарная установка. 
В каждом подмассиве индекс 0 - это расстояние в метрах, измеренное радарной установкой, а индекс 1 - время в секундах, за которое было снято это показание.

Примеры массива readings:

// В данном примере радарная установка сняла показания в 0 секунд (когда автомобиль находился на расстоянии 50 м)
// и показания в 1 секунду (когда автомобиль находился на расстоянии 30 м)
var readings = [[50,0],[30,1]];

// В данном примере пистолет снял показания в 0,365 секунды (когда автомобиль находился на расстоянии 25 м)
// и показания в 0,125 секунды (когда автомобиль находился на расстоянии 30 м)
// Обратите внимание, что ваш код должен быть способен обрабатывать показания, передаваемые в функцию
// в любом порядке.
var readings = [[25,0.365],[30,0.125]];
Валидация ввода
Единственный входной параметр, который необходимо проверить, - это элемент distance в подмассивах readings (с индексом 0 в каждом подмассиве). 
Если он равен нулю (я не сбивал инспектора ГИБДД) или отрицателен (пистолет должен быть направлен на цель), то выдается ошибка.

В остальном можно считать, что вам будет передано правильное количество аргументов, 
что массив чтений будет представлять собой массив 2x2 и что все входные данные будут действительными числами.

Выходные данные
Ожидается, что на выходе вы получите массив в формате [estSpeed,actSpeed] 
где estSpeed - скорость, с которой, по расчетам сотрудника ГИБДД, я двигался, а actSpeed - скорость, с которой я двигался на самом деле.

Обе скорости должны быть указаны в километрах в час с точностью до одного знака после запятой.

Например, [72.9,72.2] - это правильный результат.

Предупреждение о спойлерах: дальнейшие ката
Из полученных результатов видно, что неточности, возникающие в результате 
того, что офицеры оценивают расстояние до дороги, невелики. 
Но это первый пример из серии ката, в котором мы будем исследовать 
возможные неточности в работе мобильного транспортного средства. Следите за новостями!

*/