// Solution / Решение

function flipCards() {
    //This is an example
    //Your result should be an 2D array that contains two subarray
    //7 Cards will be put into two subarray
    //Each card can be "Cx" or "Cx.flip"
    return [["C2.flip", "C4.flip", "C6.flip"], ["C1", "C3", "C5", "C7"]] // Делим на две группы согласно заданию и возвращаем код
    // Тут вообще не важно в каком порядке они записаны. Главное, чтобы было условие: ДВЕ ГРУППЫ и В ОДНОЙ ГРУППЕ БЫЛО ТРИ КАРТЫ (FLIP), А ВО ВТОРОЙ 4РЕ
}

/*

Task
Here are 7 cards on the table. We named them C1 to C7.
The two sides of each card are X and O. Now, the 7 cards are on the table, we don't know the details of each card (imagine your eyes are covered).
All you know is that three of the cards X side face up, and four cards O side face up.
Your task is to divide them into two groups, so that each group of cards has the same number of X.
You can choose to flip or not flip any card. 

For example, if you want flip card1, you can put "C1.flip" into your result. 
Otherwise, just put "C1" into your result.
That is, your result should be an 2D array, each subarray should contains some cards' name. i.e. 
[["C1","C2.flip","C3.flip","C4"]["C5","C6","C7"]]

Still not understand the task? Look at the example testcases;-)

Note
This kata is a puzzle.

Thinking is more important than coding ^_^

*/

/*

Задача
На столе лежат 7 карточек. Мы назвали их от C1 до C7.
Две стороны каждой карты - X и O. Итак, 7 карт лежат на столе, мы не знаем подробностей о каждой карте (представьте, что ваши глаза прикрыты).
Все, что вы знаете, это то, что три карты X лежат стороной вверх, а четыре карты O лежат стороной вверх.
Ваша задача - разделить их на две группы так, чтобы в каждой группе было одинаковое количество карт X.
Вы можете выбирать, переворачивать или не переворачивать любую карту. 

Например, если вы хотите перевернуть карту1 , то в результат можно записать "C1.flip". 
В противном случае просто запишите в результат "C1".
То есть результат должен представлять собой двумерный массив, каждый подмассив которого должен содержать имя какой-либо карты. 
[["C1","C2.flip","C3.flip","C4"]["C5","C6","C7"]]

Все еще не понятна задача? Посмотрите примеры тестовых примеров;-)

Примечание
Эта ката представляет собой головоломку.

Думать важнее, чем кодировать ^_^

*/