// Solution / Решение

function leaderB(user, user_score, your_score) {
    const diffScore = user_score - your_score;
    const x = Math.floor(diffScore / 3)
    const y = diffScore - x * 3
    const kataCount = (x, y) => x + y > 1000 ? ' Dammit!' : '';
    return diffScore < 0
        ? `Winning!`
        : diffScore === 0
            ? `Only need one!`
            : `To beat ${user}'s score, I must complete ${x} Beta kata and ${y} 8kyu kata.${kataCount(x, y)}`
}

// Short version

const leaderB = (user, user_score, your_score) => {
    const diffScore = user_score - your_score;
    const [x, y] = [Math.floor(diffScore / 3), diffScore - Math.floor(diffScore / 3) * 3];
    const kataCount = (x, y) => (x + y > 1000 ? ' Dammit!' : '');
    return diffScore < 0 ? 'Winning!' : diffScore === 0 ? 'Only need one!' : `To beat ${user}'s score, I must complete ${x} Beta kata and ${y} 8kyu kata.${kataCount(x, y)}`;
};

// Tests

console.log(leaderB('g964', 36097, 20000)); // To beat g964's score, I must complete 5365 Beta kata and 2 8kyu kata. Dammit!
console.log(leaderB('GiacomoSorbi', 23914, 23867)); // To beat GiacomoSorbi's score, I must complete 15 Beta kata and 2 8kyu kata.
console.log(leaderB('ZozoFouchtra', 15991, 12000)); // To beat ZozoFouchtra's score, I must complete 1330 Beta kata and 1 8kyu kata. Dammit!
console.log(leaderB('webtechalex', 884, 900)); // Winning!
console.log(leaderB('petegarvin1', 3307, 100)); // To beat petegarvin1's score, I must complete 1069 Beta kata and 0 8kyu kata. Dammit!
console.log(leaderB('myjinxin2015', 15720, 15720)); // Only need one!

/*

We all want to climb the leaderboard. 
Even given some of the massive scores on there, 
it's nice to know how close you are...

In this kata you will be given a username and their score, 
your score (not your real score) and you need to calculate how many kata 
you need to complete to beat their score, by 1 point exactly.

As this is the easy version 
(harder one to folow at some point in the future), 
let's assume only Beta kata and 8kyu kata are available.
Worth 3 and 1 point respectively.

Return a string in this format: "To beat <user>'s score, 
I must complete <x> Beta kata and <y> 8kyu kata."

If the total number of kata you need to complete >1000, add "Dammit!" 
to the end of the string, like so: 
"To beat <user>'s score, I must complete <x> Beta kata and <y> 8kyu kata. Dammit!"

If your score is higher than the user's already, 
return "Winning!" and if they are equal, return "Only need one!"

Note: You are looking to complete as few kata as possible to get to your target.

*/

/*

Мы все хотим подняться в таблице лидеров. 
Даже с учетом некоторых массивных результатов, 
приятно знать, насколько ты близок...

В этом ката вам дадут имя пользователя и его результат, 
ваш результат (не настоящий), и вы должны подсчитать, сколько ката вам нужно выполнить. 
нужно выполнить, чтобы побить их счет ровно на 1 очко.

Поскольку это легкая версия 
(более сложную мы рассмотрим в будущем), 
предположим, что доступны только ката Бета и ката 8 кю.
Стоят 3 и 1 очко соответственно.

Верните строку в таком формате: "Чтобы побить счет <пользователя>, 
я должен выполнить <x> бета-ката и <y> 8кю-ката".

Если общее количество ката, которые вам нужно выполнить, превышает 1000, добавьте "Dammit!" в конец строки. 
в конец строки, например: 
"Чтобы побить счет <пользователя>, я должен завершить <x> Бета-ката и <y> 8кю-ката. Проклятье!"

Если ваш результат уже выше, чем у пользователя, 
верните "Победа!", а если они равны, верните "Нужна только одна!".

Примечание: Вы стремитесь выполнить как можно меньше ката, чтобы достичь своей цели.

*/