// Solution / Решение

function checkCombination(hand, flop, combinationType) {
    const result = {}; // Объект для хранения информации о картах в руке и на столе
    let points = 0; // Переменная для подсчета очков
    // Объединяем карты из руки и на столе и проходимся по каждой карте
    [...hand, ...flop].map(({ val, suit }) => val in result
        ? result[val].add(suit) // Если уже есть запись для данного значения карты, добавляем масть в множество
        : (result[val] = new Set().add(suit))); // Иначе создаем новое множество с этой мастью
    for (i in result) { // Проходимся по всем записям в объекте result
        switch (true) { // Используем конструкцию switch для проверки типа комбинации
            case (combinationType === 'pair' && result[i].size > 1): // Если комбинация "пара" и у данного значения карты есть более одной масти, возвращаем true
                return true;
            case (combinationType === 'twoPair' && result[i].size > 1): // Если комбинация "две пары" и у данного значения карты есть более одной масти, и points равно 1, увеличиваем points и возвращаем true
                points++;
                break;
            case (combinationType === 'set' && result[i].size > 2): // Если комбинация "тройка" и у данного значения карты есть более двух мастей, возвращаем true
                return true;
        }
    }

    return combinationType === 'twoPair' && points === 2;
}

const isPair = (hand, flop) => checkCombination(hand, flop, 'pair');
const isTwoPair = (hand, flop) => checkCombination(hand, flop, 'twoPair');
const isSet = (hand, flop) => checkCombination(hand, flop, 'set');

// Or

function checkCombination(hand, flop, combinationType) {
    const result = {}; // Объект для хранения информации о картах в руке и на столе
    let points = 0; // Переменная для подсчета очков
    // Объединяем карты из руки и на столе и проходимся по каждой карте
    [...hand, ...flop].forEach(({ val, suit }) => result[val]
        ? result[val].add(suit) // Если уже есть запись для данного значения карты, добавляем масть в множество
        : (result[val] = new Set().add(suit)) // Иначе создаем новое множество с этой мастью
    );

    for (const i in result) {
        switch (true) {
            case combinationType === 'pair' && result[i].size > 1: // Если комбинация "пара" и у данного значения карты есть более одной масти, возвращаем true
            case combinationType === 'twoPair' && result[i].size > 1 && points++ === 1: // Если комбинация "две пары" и у данного значения карты есть более одной масти
            case combinationType === 'set' && result[i].size > 2: // Если комбинация "тройка" и у данного значения карты есть более двух мастей, возвращаем true 
                return true;
        }
    }

    return false;
}

// const isPair = (hand, flop) => checkCombination(hand, flop, 'pair');
// const isTwoPair = (hand, flop) => checkCombination(hand, flop, 'twoPair');
// const isSet = (hand, flop) => checkCombination(hand, flop, 'set');

// Tests

console.log()
console.log()
console.log()

/*

Classify a Texas hold'em hand
Your task is to inspect a hand in Texas hold'em poker after the first stage of dealing and decide whether it contains various valuable card combos. 
A hand at this stage of the game consists of five cards; two "hole cards" dealt to you individually, 
and three community cards in "the flop".

Cards are represented by objects like so:

{
  val: 'Ace',
  suit: 'Hearts'
}

For this kata you should implement three functions, each accepting the hole cards and the flop and returning a boolean value:
isPair(): Should return true if there is a pair in the hand; two cards having the same val.
isTwoPair(): Should return true if there are two distinct pairs; two cards sharing one val, and two cards sharing another.
isSet(): Should return true if there is a three-of-a-kind in the hand; three cards sharing the same val.

These three classifications may overlap; for example, 
a hand with four-of-a-kind in it has a pair and a set, but not two pairs.

Example:
In the hole you have:
[ 
  {val: 'Ace', suit: 'Spades'}, 
  {val: '9', suit: 'Hearts'} 
]

and in the flop you have:
[
  {val: '9', suit: 'Diamonds'}, 
  {val: 'Jack', suit: 'Hearts'}, 
  {val: '10', suit: 'Clubs'}
]

Because there are a pair of nines, but only one pair and no set:

isPair - must return true.
isTwoPair - must return false.
isSet - must return false.

*/

/*

Классифицируйте руку в техасском холдеме
Ваша задача - проверить руку в техасском холдеме после первого этапа сдачи и определить, содержит ли она различные ценные карточные комбинации. 
Рука на этом этапе игры состоит из пяти карт: двух "дырявых карт", сданных вам по отдельности, 
и трех общих карт на "флопе".

Карты представлены объектами следующим образом:

{
  val: 'Ace',
  масть: 'Hearts'
}

Для этого ката вы должны реализовать три функции, каждая из которых принимает дырявые карты и флоп и возвращает булево значение:
isPair(): Должна возвращать true, если в руке есть пара; две карты с одинаковым значением.
isTwoPair(): Должно возвращаться true, если есть две разные пары; две карты, имеющие одно значение val, и две карты, имеющие другое значение.
isSet(): Должно возвращаться true, если в руке есть тройка: три карты с одинаковым значением.

Эти три классификации могут пересекаться; например, 
в руке с четырьмя картами есть пара и сет, но не две пары.

Пример:
В лузе у вас есть:
[ 
  {val: 'Ace', suit: 'Spades'}, 
  {val: '9', suit: 'Hearts'} 
]

и на флопе у вас есть:
[
  {val: '9', suit: 'Diamonds'}, 
  {val: 'Jack', suit: 'Hearts'}, 
  {val: '10', suit: 'Clubs'}
]

Потому что есть пара девяток, но только одна пара и нет набора:

isPair - должно возвращать true.
isTwoPair - должно возвращать false.
isSet - должно возвращать false.

*/