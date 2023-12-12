// Solution / Решение

function detectOperator(a) {
    const operatorCode = a.toString().slice(1, 4); // вырезаем нужную часть из строки
    const operatorsInfo = { // список кодов операторов и их наименований
        '039': "Golden Telecom",
        '050': "MTS",
        '063': "Life:)",
        '066': "MTS",
        '067': "Kyivstar",
        '068': "Beeline",
        '093': "Life:)",
        '095': "MTS",
        '096': "Kyivstar",
        '097': "Kyivstar",
        '098': "Kyivstar",
        '099': "MTS"
    }
    // проверяем наличие в объекте, в случае отсутствия возвращаем 'нет информации' 
    return operatorsInfo[operatorCode] || 'no info';
}

// Tests

console.log(detectOperator(80931551119));
console.log(detectOperator(8011155117711));

/*

Write a function which accepts number and return name of operator or string "no info", 
if operator can't be defined. 
number always looks like 8yyyxxxxxxx, 
where yyy corresponds to operator.

Here is short list of operators:

039 xxx xx xx - Golden Telecom
050 xxx xx xx - MTS
063 xxx xx xx - Life:)
066 xxx xx xx - MTS
067 xxx xx xx - Kyivstar
068 xxx xx xx - Beeline
093 xxx xx xx - Life:)
095 xxx xx xx - MTS
096 xxx xx xx - Kyivstar
097 xxx xx xx - Kyivstar
098 xxx xx xx - Kyivstar
099 xxx xx xx - MTS Test [Just return "MTS"]

*/

/*

Напишите функцию, которая принимает число и возвращает имя оператора или строку "no info", 
если оператор не может быть определен. 
Число всегда выглядит как 8yyyxxxxxxx, 
где yyy соответствует оператору.

Вот краткий список операторов:

039 xxx xx xx - Golden Telecom
050 xxx xx xx - МТС
063 xxx xx xx - Life:)
066 xxx xx xx - МТС
067 xxx xx xx - Киевстар
068 xxx xx xx - Билайн
093 xxx xx xx - Life:)
095 xxx xx xx - МТС
096 xxx xx xx - Киевстар
097 xxx xx xx - Киевстар
098 xxx xx xx - Киевстар
099 xxx xx xx - Тест МТС [Просто верните "МТС"]

*/