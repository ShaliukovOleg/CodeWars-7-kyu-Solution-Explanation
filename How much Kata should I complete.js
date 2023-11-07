// ======== Solution / Решение ======== 

function howMuchTo(score, current) {
    let count = 0; // Счетчик попыток
    current = {
        'kyu_8': 0,
        'kyu_7': 20,
        'kyu_6': 76,
        'kyu_5': 229,
        'kyu_4': 643,
        'kyu_3': 1768,
        'kyu_2': 4829,
        'kyu_1': 13147,
        'dan_1': 35759,
        'dan_2': 97225
    }[current]; // Начальный счет в зависимости от текущего уровня

    while (current < score) { // Начало цикла, выполняется, пока текущий счет не достигнет целевого счета
        switch (true) { // Проверка счета согласно уровню.
            case current < 20: current += 2; count++; break;
            case current < 76: current += 3; count++; break;
            case current < 229: current += 8; count++; break;
            case current < 643: current += 21; count++; break;
            case current < 1768: current += 55; count++; break;
            case current < 4829: current += 149; count++; break;
            case current < 13147: current += 404; count++; break;
            case current >= 13147: current += 1097; count++; break;
        }
    }
    return count; // Возвращаем финальный счетчик
}

// ======== Solution 2 / Решение 2 ======== 

function howMuchTo(score, current) {
    let result = 0; // Инициализация счетчика попыток
    let currentScore = requiredScore[current]; // Получение текущего счета из массива requiredScore
    let maximumPoints;

    if (current >= score) return 0; // Проверка, если текущий счет больше или равен целевому счету, то возвращается 0 (уже достигли цели)

    while (currentScore < score) { // Начало цикла while, выполняется, пока текущий счет не станет больше или равен целевому счету
        maximumPoints = pointsFromKata(currentScore); // Получение максимального количества баллов для текущего счета
        currentScore = currentScore + maximumPoints; // Увеличение текущего счета на максимальное количество баллов
        result++; // Увеличение счетчика попыток на 1
    }

    return result; // Возврат результата (количества попыток)
}

function pointsFromKata(score) {
    let result = 1097; // Инициализация значения максимальных баллов (значение по умолчанию)

    switch (true) { // Начало блока switch, использующегося для определения максимальных баллов на основе текущего счета
        case (score >= 0 && score < 20): result = 2; break; // Если текущий счет от 0 до 19, устанавливаем максимальные баллы на 2
        case (score >= 20 && score < 76): result = 3; break; // Если текущий счет от 20 до 75, устанавливаем максимальные баллы на 3
        case (score >= 76 && score < 229): result = 8; break; // Если текущий счет от 76 до 228, устанавливаем максимальные баллы на 8
        case (score >= 229 && score < 643): result = 21; break; // Если текущий счет от 229 до 642, устанавливаем максимальные баллы на 21
        case (score >= 643 && score < 1768): result = 55; break; // Если текущий счет от 643 до 1767, устанавливаем максимальные баллы на 55
        case (score >= 1768 && score < 4829): result = 149; break; // Если текущий счет от 1768 до 4828, устанавливаем максимальные баллы на 149
        case (score >= 4829 && score < 13147): result = 404; break; // Если текущий счет от 4829 до 13146, устанавливаем максимальные баллы на 404
    }
    return result; // Возврат результата (максимальных баллов)
}

// Short version

function howMuchTo(score, current, result = 0, maximumPoints, currentScore = requiredScore[current]) {
    if (current >= score) return 0; // Проверка, если текущий счет больше или равен целевому счету, то возвращается 0 (уже достигли цели)

    while (currentScore < score) { // Начало цикла while, выполняется, пока текущий счет не станет больше или равен целевому счету
        maximumPoints = pointsFromKata(currentScore); // Получение максимального количества баллов для текущего счета
        currentScore += maximumPoints; // Увеличение текущего счета на максимальное количество баллов
        result++; // Увеличение счетчика попыток на 1
    }

    return result; // Возврат результата (количества попыток)
}

const pointsFromKata = s => s >= 13147 ? 1097 : s >= 4829 ? 404 : s >= 1768 ? 149 : s >= 643 ? 55 : s >= 229 ? 21 : s >= 76 ? 8 : s >= 20 ? 3 : 2;

/*

I have a competition with my uncle on Codewars. 
So I want to be at least on the same level as he is.

I am learning how to solve Katas and become better with each kyu.

In this Kata imagine that I can solve only Katas from my own level or lower (kyu level). 
Return the minimum of Katas number that I have to solve to get at least the same score. 
Also my score is equal to start of my kyu's score.

INPUT
function howMuchTo( score, current )
score - my uncle's score. (0 <= score <= 250000)
current - my current kyu. (String in format "(kyu|dan)_N", where 1 <= N <= 8)

OUTPUT
The number of Katas I have to solve to get at least given score.

Useful info
You can check this on Codewars Wiki but I'll preload 2 objects: 
solvingScore with data about getting score for each Kata level and 
requiredScore with data about required score for promotion.

On 1-2 dan level I continue completing 1 kyu Katas.

*/

/*

У меня есть соревнование с моим дядей на Codewars. 
Поэтому я хочу быть хотя бы на том же уровне, что и он.

Я учусь решать ката и становлюсь лучше с каждым кю.

В этой Ката представьте, что я могу решать только Ката своего уровня или ниже (уровня кю). 
Верните минимальное количество ката, которое я должен решить, чтобы получить хотя бы тот же результат. 
При этом мой результат будет равен начальному результату моего кю.

INPUT
function howMuchTo( score, current )
score - счет моего дяди. (0 <= score <= 250000)
current - мой текущий кю. (Строка в формате "(кю|дан)_N", где 1 <= N <= 8)

OUTPUT
Количество ката, которые я должен решить, чтобы получить хотя бы заданный результат.

Полезная информация
Вы можете проверить это на Codewars Wiki, но я предварительно загружу 2 объекта: 
solvingScore с данными о получении баллов для каждого уровня Ката и 
requiredScore с данными о необходимом количестве баллов для продвижения.

На уровне 1-2 дана я продолжаю выполнять ката уровня 1 кю.

*/