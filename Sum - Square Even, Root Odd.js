/*

Complete the function that takes a list of numbers (nums), as the only argument to the function. 
Take each number in the list and square it if it is even, or square root the number if it is odd. 
Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

*/

/*

Напишите функцию, которая принимает список чисел (nums) в качестве единственного аргумента функции.
Возьмите каждое число в списке и возведите его в квадрат, если оно четное, или извлеките из него корень, если оно нечетное.
Возьмите этот новый список и верните его сумму, округленную до двух знаков после запятой.

Список не может быть пустым и будет содержать только значения, которые больше или равны нулю.

*/

const sumSquareEvenRootOdd = ns => {
    // your code goes here
    let result = ns.map(num => { // Создаем переменную "RESULT" в которую возвращаем результат метода MAP(метод принимает функцию обратного вызова к каждому элементу массива "NS")
        return (num % 2 === 0) // Четность элемента проверяем обычным условием с использованием логического оператора %
        ? num ** 2 // Если число четное, возводим его в квадрат
        : Math.sqrt(num); // Если нет, то берем корень при помощи метода "Math.sqrt"
    });
    let sumNumbers = result.reduce((acc, curr) => acc + curr); // Здесь используем метод "REDUCE"(метод принимает функцию обратного вызова, через параметры применяем её к каждому элементу переменной RESULT). Можно конечно перебрать элементы через цикл и получить тоже самое, но метод REDUCE имеет ряд преимуществ (в том числе и то, что это максимально короткая и понятная запись)
    return parseFloat(sumNumbers.toFixed(2)); // Возвращаем значение переменной до двух знаков после запятой при помощи метода "parseFloat"
};

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))

