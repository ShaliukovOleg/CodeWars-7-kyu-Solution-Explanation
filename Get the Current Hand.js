// Solution / Решение

function getCurrentHand(arr) {
    if (arr.length < 8) {
        return arr.slice(0, arr.length - 4); // Возвращаем столько карт, сколько у нас есть
    } else {
        const lastFourCards = arr.slice(-4); // Получаем последние 4 карты
        const opponentHand = arr.slice(0, arr.length - 4); // Исключаем последние 4 карты из текущей руки противника
        const opponentHandSet = new Set(opponentHand); // Преобразуем текущую руку противника в множество для уникальных значений
        lastFourCards.forEach(card => opponentHandSet.delete(card)); // Удаляем последние 4 карты из множества
        return Array.from(opponentHandSet); // Преобразуем множество обратно в массив
    }
}

// Short version

function getCurrentHand(arr) {
    const lastFourCards = arr.slice(-4);
    return arr.length < 8
        ? arr.slice(0, arr.length - 4)
        : [...new Set(arr.slice(0, arr.length - 4).filter(card => !lastFourCards.includes(card)))];
}

// Or

function getCurrentHand(arr) {
    return [...new Set(arr.slice(0, arr.length - 4))].filter(x => !arr.slice(-4).includes(x))
}

// Reduce

const getCurrentHand = (a) => a.reduce((hand, card) => !a.slice(-4).includes(card) && !hand.includes(card) ? [...hand, card] : hand, []).slice(0, 4);

/*



Clash Royale is a tower rush video game which pits players in games featuring two players in which the objective is to destroy the most opposing towers.
Players build card decks in order to play.

It's crucial to know the opponent's card deck and the opponent's current hand in order to play good.
Let's help those who can't count the cards successfully.

Card Deck Example:
Full Deck Example

Current Hand Example:
Current Hand Example

Each deck in Clash Royale has 8 cards, 
and you can have 4 cards at any time during the game.

After you play any card from your hand 
=> this card goes to the end of the "queue" and goes back to your 
hand after you play another 4 cards.And so on.

Queue Scheme
Task:

Given an array of cards played in a certain order.
You need to return the opponent's current hand (4 cards max) in any order.
If you receive less than 8 cards as an argument 
=> return as many cards as we could possibly know from this play.

getCurrentHand(['Hog Rider', 'Earthquake', 'Archer Queen', 'Giant Skeleton', 'Fire Spirit', 'Cannon']) // => ['Hog Rider', 'Earthquake']

Example:
    currentHand([
        'Hog Rider',
        'Earthquake',
        'Archer Queen',
        'Giant Skeleton',
        'Fire Spirit',
        'Cannon',
        'Skeletons',
        'Hog Rider',
        'The Log',
        'Fire Spirit',
        'Earthquake',
        'Giant Skeleton',
        'Skeletons',
        'Archer Queen',
        'Fire Spirit',
        'Cannon',
        'Giant Skeleton',
        'Skeletons',
    ]); // => ['Archer Queen', 'Earthquake',  'The Log', 'Hog Rider']

Explanation:
The current hand definitely can't contain:
'Fire Spirit', 'Cannon', 'Giant Skeleton', 'Skeletons'
Because they're the last played cards withing the 4-card range.
Archer Queen => definitely in the current hand(no Archer Queen in the last 4 cards played)
Skeletons => not in the current hand(we can see Skeletons in the last 4 cards played)

...and so on...

Good luck!

*/

/*

Clash Royale - это видеоигра в жанре tower rush, в которой игроки играют вдвоем, ставя перед собой цель уничтожить наибольшее количество башен соперников.
Для игры игроки собирают колоды карт.

Для хорошей игры очень важно знать колоду карт соперника и его текущую руку.
Давайте поможем тем, кто не умеет успешно считать карты.

Пример карточной колоды:
Пример полной колоды

Пример текущей руки:
Пример текущей руки

Каждая колода в Clash Royale состоит из 8 карт, 
и в любой момент игры у вас может быть 4 карты.

После того как вы разыграете любую карту из руки 
=> эта карта отправляется в конец "очереди" и возвращается в руку после того, как вы разыграете еще 4 карты. 
после того, как вы сыграете еще 4 карты. И так далее.

Схема очереди
Задача:

Дан массив карт, сыгранных в определенном порядке.
Необходимо вернуть текущую руку противника (не более 4 карт) в любом порядке.
Если в качестве аргумента получено менее 8 карт. 
=> верните столько карт, сколько возможно узнать из этой партии.

getCurrentHand(['Hog Rider', 'Earthquake', 'Archer Queen', 'Giant Skeleton', 'Fire Spirit', 'Cannon']) // => ['Hog Rider', 'Earthquake'].

Пример:
    currentHand([
        'Hog Rider',
        'Earthquake',
        'Archer Queen',
        'Giant Skeleton',
        'Fire Spirit',
        'Cannon',
        'Skeletons',
        'Hog Rider',
        'The Log',
        'Fire Spirit',
        'Earthquake',
        'Giant Skeleton',
        'Skeletons',
        'Archer Queen',
        'Fire Spirit',
        'Cannon',
        'Giant Skeleton',
        'Skeletons',
    ]); // => ['Archer Queen', 'Earthquake',  'The Log', 'Hog Rider']

Пояснение:
Текущая рука определенно не может содержать:
'Fire Spirit', 'Cannon', 'Giant Skeleton', 'Skeletons'.
Потому что это последние сыгранные карты в пределах 4-карточного диапазона.
Королева Лучников => определенно в текущей руке (нет Королевы Лучников в последних 4-х сыгранных картах)
Скелеты => не в текущей руке (мы видим Скелетов в последних 4-х сыгранных картах)

... и так далее...

Удачи!

*/