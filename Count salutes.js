// Solution / Решение

function countSalutes(hallway) {
    let greetingsCount = 0;
    let rightCount = 0;
    for (let i = 0; i < hallway.length; i++) { // Проходим по коридору
        const currentPerson = hallway[i];
        if (currentPerson === '>') rightCount++; // Подсчитываем количество людей, идущих направо
        if (currentPerson === '<') greetingsCount += rightCount * 2; // Если встретили человека, идущего в обратном направлении, увеличиваем количество приветствий
    }
    return greetingsCount;
}

// Tests

console.log(countSalutes('<---->---<---<-->')); // 4
console.log(countSalutes('------')); // 0
console.log(countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->')); // 42
console.log(countSalutes('>')); // 0

/*

Description
There is a narrow hallway in which people can go right and left only. 
When two people meet in the hallway, by tradition they must salute each other. 
People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, 
will count the number of salutes that will occur.

Note: 2 salutes occur when people meet, one to the other and vice versa.

Input
People moving right will be represented by >; 
people moving left will be represented by <. 
An example input would be >--<--->->. 
The - character represents empty space, which you need not worry about.

Examples
Input: >----->-----<--<
Output: 8

Explanation: Both guys moving right will meet both guys moving left.
Hence a total of 4 meetings will occur and 8 salutes will occur.

Input: <---<--->----<
Output: 2

Explanation: Only one meeting occurs.

*/

/*

Описание
Есть узкий коридор, в котором люди могут идти только направо и налево. 
Когда два человека встречаются в коридоре, по традиции они должны поприветствовать друг друга. 
Люди движутся с одинаковой скоростью вправо и влево.

Ваша задача - написать функцию, которая, учитывая строковое представление людей, движущихся по коридору, 
подсчитает количество салютов, которые произойдут.

Примечание: 2 приветствия происходят, когда люди встречаются, один с другим и наоборот.

Вход
Люди, движущиеся вправо, будут представлены символом >; 
люди, движущиеся влево, будут обозначены символом <. 
Примером ввода может быть >--<--->->. 
Символ - обозначает пустое пространство, о котором не стоит беспокоиться.

Примеры
Ввод: >----->-----<--<
Выходные данные: 8

Пояснения: Оба парня, движущиеся вправо, встретятся с обоими парнями, движущимися влево.
Таким образом, всего произойдет 4 встречи и 8 салютов.

Вход: <---<--->----<
Выходные данные: 2

Объяснение: Происходит только одна встреча.

*/