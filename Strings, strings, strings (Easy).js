// Solution / Решение

Array.prototype.toString = function () { return "[" + this.join(",") + "]"; } // Преобразовать массив в строку с запятыми и скобками
Boolean.prototype.toString = function () { return '' + this; } // Простое преобразование булевого значения в строку
Number.prototype.toString = function () { return '' + this; } // Простое преобразование числа в строку
Object.prototype.toString = function () { return '' + this; } // Простое преобразование объекта в строку

// Short version

[Array, Boolean, Number].forEach(value => value.prototype.toString = function () { return JSON.stringify(this);});

/*

Note to Kata translators: Please carefully consider the suitability of your chosen language 
with regards to implementing the idea proposed by this Kata before authoring and submitting a translation. 
"Inappropriate" language translations 
(such as Python which has already been proven to be a poor candidate for this Kata) 
will be rejected by the author of this Kata even if it is well-written 
(i.e. contains suitable Kata Description edits, plenty of fixed and random tests, etc.).

Strings, strings, strings (Easy)
Background
Oh no, there were some problems with your computer and now you cannot convert any data type to strings!

Task
The toString() method has been disabled for booleans, numbers, arrays and objects. 
Your goal is to retrive toString() for the following data types.

I. Booleans
For booleans:
true should be converted to "true"
false should be converted to "false"

II. Numbers
For numbers, conversion should be as follows:
// e.g.
(3).toString() === "3"
(3.14).toString() === "3.14"
(-78).toString() === "-78"
Math.PI.toString() === "3.141592653589793"

III. Arrays
For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings. 
However, on top of fixing it, we would also like to improve it as well. 
We would like to keep the square brackets ([]) around the "stringified" array as it would be seen in Javascript code. For example:
// e.g.
[].toString() === "[]"
[1].toString() === "[1]"
[2,4,8,17].toString() === "[2, 4, 8, 17]"
[Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"

As you may have noticed in the examples above, when the array has more than one element, 
some of the strings have spaces as well as commas separating each item but some strings do not. 
For the purposes of this Kata whether there are whitespaces or not does not matter for stringified arrays 
- before conducting the tests your input is stripped of all whitespace.

Final Note - IMPORTANT
Your recovered toString() methods should only return the stringified version of the input 
- it should NOT alter the original value. Test cases have been created to confirm this.

*/

/*

Примечание для переводчиков Kata: Пожалуйста, внимательно изучите пригодность выбранного вами языка 
с точки зрения реализации идеи, предложенной в данном Ката, прежде чем приступать к созданию и отправке перевода. 
Перевод на "неподходящие" языки 
(например, Python, который, как уже было доказано, является плохим кандидатом для данного Ката) 
будет отклонен автором Ката, даже если он хорошо написан 
(т.е. содержит подходящие правки в описании Ката, большое количество фиксированных и случайных тестов и т.д.).

Струны, струны, струны (Easy)
Фон
О нет, с вашим компьютером произошли какие-то проблемы, и теперь вы не можете преобразовать ни один тип данных в строки!

Задача
Метод toString() был отключен для булевых величин, чисел, массивов и объектов. 
Ваша задача - восстановить функцию toString() для следующих типов данных.

I. Булевы
Для булевых чисел:
true должно быть преобразовано в "true"
false должно быть преобразовано в "false".

II. Числа
Для чисел преобразование должно осуществляться следующим образом:
// например.
(3).toString() === "3"
(3.14).toString() === "3.14"
(-78).toString() === "-78"
Math.PI.toString() === "3.141592653589793"

III. Массивы
В рамках данного Ката от вас потребуется только преобразование массивов, содержащих только числа, в строки. 
Однако, помимо исправления, мы хотели бы также и улучшить его. 
Мы хотели бы сохранить квадратные скобки ([]) вокруг "строчного" массива в том виде, в каком они будут видны в коде Javascript. Например:
// например.
[].toString() === "[]"
[1].toString() === "[1]"
[2,4,8,17].toString() === "[2, 4, 8, 17]"
[Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"

Как вы могли заметить в приведенных примерах, когда массив содержит более одного элемента, 
некоторые строки имеют пробелы, а также запятые, разделяющие каждый элемент, а некоторые - нет. 
Для целей данного Ката наличие или отсутствие пробелов не имеет значения для строковых массивов 
- Перед проведением тестов входные данные очищаются от пробелов.

Заключительное замечание - ВАЖНО
Ваши восстановленные методы toString() должны возвращать только строгированную версию входных данных 
- он НЕ должен изменять исходное значение. Для подтверждения этого были созданы тестовые примеры.

*/