// Solution / Решение
function sellingPrice(n, customerQuotation) {
    // Сортируем массив customerQuotation в порядке возрастания и берем последние n элементов.
    customerQuotation = customerQuotation.sort((a, b) => a - b).slice(-n);
    console.log(customerQuotation);
    // Создаем новый массив, где каждый элемент - это произведение цены на количество покупателей, которые готовы купить товар по этой цене или выше.
    let result = customerQuotation.map((elem, index) => elem * (customerQuotation.length - index));
    
    // Находим максимальное значение в массиве result.
    let max = Math.max(...result);
    
    // Возвращаем цену, которая дает максимальную выручку. 
    return customerQuotation[result.indexOf(max)];
}


console.log(sellingPrice(5,[2,8,10,7,8,10,7,8,10,7]));

const Test = require('@codewars/test-compat');

describe("Basic Tests", function () {
    it("It should works for basic tests.", function () {

        Test.assertEquals(sellingPrice(5, [2, 8, 10, 7]), 7)

        Test.assertEquals(sellingPrice(5, [2, 8, 10, 7, 100]), 100)

        Test.assertEquals(sellingPrice(5, [2, 8, 10, 7, 8, 10, 7, 8, 10, 7]), 8)

    })
})

/*

Task
A company has produced a new product with a quantity of n. 
There are many customers who want to buy the product. An integer array customerQuotation contains the expected price of all the customers.

To be fair, the company wants to sell the product at a fixed price, according to the rules:

1. All customers whose expected price to be above or equal to the price 
   can buy a product at this price.
2. If the quantity of the product is not enough, some customers will
   automatically lose their qualifications 
   (you can simply understand that if only 5 products are available,
   but 6 customers are eligible to buy, then, at most only 5 customers 
   will buy it, and no need to consider who is eligible to buy it)
3. The company can get the maximum sales amount;
4. On the premise of rule above, let more people can buy products.
   For example, If there are two ways: 
   Sell 3 products at $10, 
   Or 
   Sell 1 product at $30. 
   We will choose the price of $10.
Your job is to help the company determine the selling price.

Example
For n = 5, customerQuotation = [2,8,10,7], the output should be 7.

Three customers can buy the product at $7, 7 x 3 = 21.

For n = 5, customerQuotation = [2,8,10,7,100], the output should be 100.

One customer can buy the product at $100.

For n = 5, customerQuotation = [2,8,10,7,8,10,7,8,10,7], the output should be 8.

Five customers can buy the product at $8, 8 x 5 = 40. 
Note that there are only 5 products, so only 5 customers can buy the products(not 6 customers).

*/

/*

Задача
Компания выпустила новый продукт в количестве n. Есть много покупателей, желающих приобрести этот товар. Целочисленный массив customerQuotation содержит ожидаемые цены всех покупателей.

Чтобы быть справедливой, компания хочет продавать продукт по фиксированной цене в соответствии с правилами:

1. Все покупатели, чья ожидаемая цена выше или равна цене 
   могут купить продукт по этой цене.
2. Если количество продукта недостаточно, то некоторые покупатели
   автоматически потеряют квалификацию. 
   (можно просто понять, что если в наличии имеется только 5 товаров,
   но 6 покупателей имеют право на покупку, то, самое большее, только 5 покупателей 
   купят его, и нет необходимости рассматривать, кто имеет право на его покупку)
3. Компания может получить максимальный объем продаж;
4. Исходя из вышеприведенного правила, пусть большее количество людей сможет купить продукцию.
   Например, если есть два варианта: 
   Продать 3 продукта по 10 долл, 
   или 
   Продать 1 товар по цене $30. 
   Мы выберем цену $10.
Ваша задача - помочь компании определить цену продажи.

Пример
Для n = 5, customerQuotation = [2,8,10,7] выходное значение должно быть 7.

Три покупателя могут купить товар по цене 7 долларов, 7 x 3 = 21.

Для n = 5, customerQuotation = [2,8,10,7,100], выход должен быть 100.

Один клиент может купить товар по цене $100.

Для n = 5, customerQuotation = [2,8,10,7,8,10,7,8,10,7], на выходе должно получиться 8.

Пять клиентов могут купить товар по цене $8, 8 x 5 = 40. Обратите внимание, что существует только 5 товаров, поэтому только 5 клиентов могут купить товар (а не 6).

*/