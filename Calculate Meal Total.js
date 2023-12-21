// Solution / Решение

/**
 * Рассчитывает общую сумму с учетом налога и чаевых.
 * @param {number} subtotal - Сумма заказа без учета налогов и чаевых.
 * @param {number} tax - Налог в процентах.
 * @param {number} tip - Чаевые в процентах.
 * @returns {number} - Общая сумма заказа с учетом налога и чаевых.
 */

function calculate_total(subtotal, tax, tip) {
    /**
     * Рассчитывает значение процента от общей суммы.
     * @param {number} total - Общая сумма.
     * @param {number} percentage - Процент.
     * @returns {number} - Значение процента от общей суммы.
     */
    const calcPercentageValue = (total, percentage) => (percentage / 100) * total;
    const taxValue = calcPercentageValue(subtotal, tax); // расчет суммы налога
    const tipValue = calcPercentageValue(subtotal, tip); // расчет суммы чаевых
    const totalAmount = subtotal + taxValue + tipValue; // Общая сумма заказа с учетом налога и чаевых
    return Number(totalAmount.toFixed(2)); // Возвращаем результат округленный до двух знаков после запятой
}

// Short version

const calculate_total = (subtotal, tax, tip) => +(subtotal * (1 + tax / 100 + tip / 100)).toFixed(2);

// Or

const calculate_total = (subtotal, tax, tip) => Math.round(subtotal * (100 + tax + tip)) / 100;

// Tests

console.log(calculate_total(0.00, 6, 18)); // 0
console.log(calculate_total(80.94, 0, 20)); // 97.13
console.log(calculate_total(54.96, 8, 0)); // 59.36

/*

Create a function that returns the total of a meal including tip and tax. 
You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. 
Please round your result to two decimal places.

*/

/*

Создайте функцию, которая возвращает общую сумму за ужин, включая чаевые и налог. 
Не следует давать чаевые за налог.

Вам будет дан промежуточный итог, налог в процентах и чаевые в процентах. 
Пожалуйста, округлите результат до двух знаков после запятой.

*/