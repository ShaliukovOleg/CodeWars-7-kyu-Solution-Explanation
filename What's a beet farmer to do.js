// Solution / Решение

function maxBeets(beets, loss) {
    const fullPairs = Math.floor((beets / loss - 1) / 2); // Вычисляем количество полных пар, которые можно получить из beets
    const remainingBeets = beets - loss * fullPairs; // Определяем количество свеклы, которое останется после полных пар
    return lastPairBeets = (fullPairs + 1) * remainingBeets; // Вычисляем количество свеклы в последней паре
};

// Short version

const maxBeets = (beets, loss) => (Math.floor((beets / loss - 1) / 2) + 1) * (beets - loss * Math.floor((beets / loss - 1) / 2));

// Tests

console.log(maxBeets(10, 2)); // 18
console.log(maxBeets(20, 4)); // 36
console.log(maxBeets(255172, 13)); // 1252295850

/*

Story
Dwight, sitting in his comfortable rocking chair, 
over looking his latest beet crop is suddenly interrupted by Mos :

"You know, if we planted more beets, we would make more money." 
Mos interjects, ruining what was once a peaceful Sunday morning.

Dwight strolls out across the field and stops and tastes the soil, 
"There is not enough Nitrogen for all of this to be beets ..." he muses outloud.

Heading back to Lotus 1-2-3, he quickly crunches the numbers and determines that for every new crop of beets he plants, 
he loses a fixed amount from each crop due to the strain on the Nitrogen in the soil.

Can you help Dwight figure out the maximum beetage?

Task
You are given the size of a crop and the loss from each crop if an additional crop is planted. 
The challenge is to figure out the maximum beets that can be harvested, 
noting of course you can only plant full crops.

As well, being an astute beeter, 
Dwight will not exceed the number of crops which would produce the maximum, 
if he did the the entire harvest would fail due to nitrogen depletion.

(i.e., if 185.9 crops would give the maximum, he would only plant 185 as 186 causes total crop failure)

Ex :

A crop has 10 beets, and each additional crop loses 2 beets from each crop. 
A maximum of 18 is obtained with two additional crops, 
as two additional crops cause a loss of 4 from each giving a total of 3x6 or 18 beets.

Note Dwight has a LOT of land (thousands of acres) and there are many beets in a crop, 
and there might only be a small change per additional crop. 
However both the number of beets and the loss will be positive (non-zero) numbers.

*/

/*

История
Дуайт, сидя в своем удобном кресле-качалке, 
разглядывая свой последний урожай свеклы, как вдруг его прерывает Мос:

"Знаешь, если бы мы посадили больше свеклы, мы бы заработали больше денег". 
Мос вмешивается, разрушая мирное воскресное утро.

Дуайт выходит на поле, останавливается и пробует почву на вкус, 
"Не хватает азота, чтобы все это было свеклой..." - размышляет он вслух.

Вернувшись к Lotus 1-2-3, он быстро перебирает цифры и определяет, что при посадке каждого нового урожая свеклы, 
он теряет фиксированную сумму с каждого урожая из-за нагрузки на азот в почве.

Можете ли вы помочь Дуайту определить максимальную урожайность свеклы?

Задача
Вам даны размеры урожая и потери от каждой культуры, если посадить дополнительную культуру. 
Задача состоит в том, чтобы определить максимальное количество свеклы, которое может быть собрано, 
При этом, конечно, вы можете посадить только полный урожай.

Кроме того, будучи проницательным свекловодом, 
Дуайт не превысит количество посевов, которые дадут максимальный урожай, 
если он это сделает, то весь урожай не будет собран из-за недостатка азота.

(Например, если 185,9 посевов дадут максимальный урожай, он посадит только 185, так как 186 приведут к полному неурожаю).

Например:

Урожай составляет 10 свекол, и каждая дополнительная культура теряет по 2 свеклы с каждой культуры. 
При двух дополнительных посевах получается максимум 18, 
так как две дополнительные культуры приводят к потере 4 свеклы с каждой, что в сумме дает 3x6 или 18 свекол.

Обратите внимание, что у Дуайта много земли (тысячи акров), и в одном урожае может быть много свеклы, 
и, возможно, каждая дополнительная культура будет лишь незначительным изменением. 
Однако и количество свеклы, и потери будут положительными (ненулевыми) числами.

*/