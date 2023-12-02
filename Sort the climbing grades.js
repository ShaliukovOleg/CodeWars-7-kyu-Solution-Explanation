// Solution / Решение

function sortGrades(lst) {
    const grades = { // просто создаем хеш-мапу для быстрой сортировки
        'VB': 0, 'V0': 1, 'V0+': 2, 'V1': 3, 'V2': 4, 'V3': 5, 'V4': 6, 'V5': 7, 'V6': 8, 'V7': 9, 'V8': 10, 'V9': 11, 'V10': 12, 'V11': 13, 'V12': 14, 'V13': 15, 'V14': 16, 'V15': 17, 'V16': 18, 'V17': 19
    };
    return lst.sort((a, b) => (grades[a]) - (grades[b])); // сортируем согласно мапе
}

// Solution 2 / Решение 2

const sortGrades = lst => {
    const grades = x => ({ VB: -1, 'V0+': 0.5 }[x] || Number(x.slice(1)))
    return lst.sort((a, b) => grades(a) - grades(b))
}

// Solution 3 / Решение 3

const grades = ["VB", "V0", "V0+", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17"];
const sortGrades = lst => lst.sort((a, b) => grades.indexOf(a) - grades.indexOf(b));

// Tests

console.log(sortGrades([])); // []
console.log(sortGrades(["V7", "V12", "V1"])); // [ 'V1', 'V7', 'V12' ]
console.log(sortGrades(["V13", "V14", "VB", "V0"])); // [ 'VB', 'V0', 'V13', 'V14' ]
console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"])); // [ 'VB', 'V0', 'V0+', 'V2', 'V6', 'V16' ]

/*

My 5th kata, and 1st in a planned series of rock climbing themed katas.

In rock climbing (bouldering specifically), 
the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), 
and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade). 
You will be given a list (lst) of climbing grades and you have to write a function 
(sort_grades) to return a list of the grades sorted easiest to hardest.

If the input is an empty list, return an empty list; 
otherwise the input will always be a valid list of one or more grades.

Please do vote, rank, and provide any feedback on the kata.

*/

/*

Моя 5-я ката и первая в запланированной серии ката, посвященных скалолазанию.

В скалолазании (в частности, в боулдеринге), 
классы V/Vermin (США) начинаются с "VB" (самый легкий класс), 
затем идут "V0", "V0+", "V1", "V2", "V3", "V4", "V5" и т.д. вплоть до "V17" (самый сложный класс). 
Вам будет дан список (lst) оценок восхождений, и вы должны написать функцию 
(sort_grades), которая вернет список сортов, отсортированных от самого легкого до самого трудного.

Если на входе пустой список, верните пустой список; 
в противном случае на входе всегда будет правильный список из одной или нескольких оценок.

Пожалуйста, голосуйте, оценивайте и оставляйте отзывы о ката.

*/