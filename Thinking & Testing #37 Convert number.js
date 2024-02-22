// Solution / Решение

function testIt(f) {
    const celsius = (5 / 9) * (f - 32); // Вычисляем температуру в градусах Цельсия
    const roundedCelsius = Math.round(celsius * 100) / 100; // Округляем до двух знаков после запятой
    return roundedCelsius < -273.15 ? "Invalid input!" : roundedCelsius; // Проверяем, находится ли температура ниже абсолютного нуля
}

// Short version

const testIt = f => (result => result < -273.15 ? "Invalid input!" : result)(Math.round(((5 / 9) * (f - 32)) * 100) / 100);

// Tests

console.log(testIt(212)); // 100
console.log(testIt(32)); // 0
console.log(testIt(77)); // 25

/*

No Story
No Description

Only by Thinking and Testing
Look at result of testcase, guess the code!

*/

/*

Нет истории
Без описания

Только путем размышлений и тестирования
Посмотрите на результат тесткейса, угадайте код!

*/