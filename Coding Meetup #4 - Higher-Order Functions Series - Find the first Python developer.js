// Solution / Решение

function getFirstPython(list) {
    // Переменная будет содержать первого найденного Python разработчика
    const pythonDeveloper = list.find(dev => dev.language === "Python");
    // Если переменная не пустая, то возвращаем имя и страну
    if (pythonDeveloper) {
        const { firstName, country } = pythonDeveloper;
        return `${firstName}, ${country}`;
        // В противном случае возвращаем 'will be no developers'
    } else { 
        return "There will be no Python developers";
    }
}

// Short version

function getFirstPython(list) {
    const pythonDeveloper = list.find(dev => dev.language === "Python");
    return pythonDeveloper ? `${pythonDeveloper.firstName}, ${pythonDeveloper.country}` : "There will be no Python developers";
}

// Tests

const list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

const list2 = [
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

console.log(getFirstPython(list1)); // Victoria, Puerto Rico
console.log(getFirstPython(list2)); // There will be no Python developers

/*

You will be given an array of objects (associative arrays in PHP) 
representing data about developers who have signed up to attend 
the next coding meetup that you are organising. 
The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python 
developer who has signed up; or
There will be no Python developers if no Python developer has signed up.

For example, given the following input array:
var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

your function should return Victoria, Puerto Rico.

Notes:
The input array will always be valid and formatted as in the example above.

*/

/*

Вам будет дан массив объектов (ассоциативные массивы в PHP) 
представляющих данные о разработчиках, которые записались на участие в 
следующей встречи кодеров, которую вы организуете. 
Список упорядочен в соответствии с тем, кто записался первым.

Ваша задача - вернуть одну из следующих строк:

< firstName здесь >, < country здесь > первого Python 
разработчика, который зарегистрировался; или
Если ни один Python-разработчик не зарегистрировался, то Python-разработчиков не будет.

Например, задан следующий массив входных данных:
var list1 = [
  { firstName: 'Mark', lastName: 'G.', страна: 'Шотландия', континент: 'Европа', возраст: 22, язык: 'JavaScript' }
  { firstName: 'Victoria', lastName: 'T.', страна: 'Puerto Rico', континент: 'Americas', возраст: 30, язык: 'Python' }
  { firstName: 'Emma', lastName: 'B.', страна: 'Норвегия', континент: 'Европа', возраст: 19, язык: 'Clojure' }
];

ваша функция должна вернуть город Виктория, Пуэрто-Рико.

Примечания:
Входной массив всегда будет валидным и отформатированным, как в примере выше.

*/