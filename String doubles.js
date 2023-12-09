// Solution / Решение

function doubles(s) {
    const result = []; // Пустой массив для хранения результата.
    for (const char of s) { // Проходим по каждому символу в строке.
        // Проверяем, если в результате уже есть символы и текущий символ совпадает с последним символом в результате.
        if (result.length > 0 && result[result.length - 1] === char) {
            result.pop();
        } else {
            result.push(char);
        }
    }
    return result.join('');
}

// Using method substitution and recursion

const doubles = check = s => (
    x = s.replace(/(\w)\1/g, "") // Удаляем повторяющиеся символы из строки и сохраняем результат
    ) === s ? s : check(x); // Если результат удаления совпадает с исходной строкой, вернем строку, иначе рекурсивный вызов функции

// Short version

const doubles = s => [...s].reduce((acc, char) => acc[acc.length - 1] === char ? acc.slice(0, -1) : acc + char, '');

// Tests

console.log(doubles('vvvvvoiiiiin')); // voin
console.log(doubles('rrrmooomqqqqj')); // rmomj
console.log(doubles('xxbnnnnnyaaaaam')); // bnyam

/*

In this Kata, you will write a function doubles that will remove 
double string characters that are adjacent to each other.

For example:

doubles('abbcccdddda') = 'aca', because, from left to right:
a) There is only one 'a' on the left hand side, so it stays.
b) The 2 b's disappear because we are removing double characters that are adjacent. 
c) Of the 3 c's, we remove two. We are only removing doubles. 
d) The 4 d's all disappear, because we first remove the first double, and again we remove the second double.
e) There is only one 'a' at the end, so it stays.

Two more examples: doubles('abbbzz') = 'ab' and doubles('abba') = "". 
In the second example, when we remove the b's in 'abba', the double a that results is then removed.

The strings will contain lowercase letters only. More examples in the test cases.

*/

/*

В этом Ката вы напишете функцию doubles, которая будет удалять 
двойные символы строк, которые находятся рядом друг с другом.

Например:

doubles('abbcccdddda') = 'aca', потому что слева направо:
a) С левой стороны есть только одна буква 'a', поэтому она остается.
б) 2 буквы "b" исчезают, потому что мы удаляем двойные символы, которые находятся рядом. 
в) Из трех "с" мы удаляем два. Мы удаляем только двойные символы. 
г) Все 4 буквы "d" исчезают, потому что сначала мы удаляем первую двойку, а затем вторую.
д) В конце есть только одна буква "a", поэтому она остается.

Еще два примера: doubles('abbbzz') = 'ab' и doubles('abba') = "". 
Во втором примере, когда мы удаляем b в 'abba', получается двойная a.

Строки будут содержать только строчные буквы. Больше примеров в тестовых примерах.

*/