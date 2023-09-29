// Solution / Решение

function sentence(List) {
    // Преобразовать ключи в целые числа и создать новый массив объектов
    const integerList = List.map((item) => {
        const key = parseInt(Object.keys(item)[0]);
        const value = Object.values(item)[0];
        return { key, value };
    });
    integerList.sort((a, b) => a.key - b.key); // Отсортировать массив объектов по ключам в порядке возрастания
    return integerList.map((item) => item.value).join(' '); // Извлечь значения и объединить их в предложение
}

// Short version

function sentence(List) {
    return List.map(item => [parseInt(Object.keys(item)[0]), Object.values(item)[0]])
        .sort((a, b) => a[0] - b[0])
        .map(item => item[1])
        .join(' ');
}

// Reduce
function sentence(List) {
    return List
        .sort((a, b) => Object.keys(a) - Object.keys(b)) // Сортировка ключей объекта
        .reduce(((sum, value) => sum += ' ' + Object.values(value)), '') // добавляем каждый элемент в строку согласно значению
        .trim() // для удаления из строки все начальные и конечные пробелы. (Просто при сборе каждый элемент может иметь лишний '_')
}

// Description / Описание
/*

The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' 
integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. 
The dictionaries' keys & values will always be strings and will always not be empty.

*/

/*

На вход будет подан массив словарей.

Возвращаем значения в виде предложения со строковой разбивкой в порядке возрастания целочисленного эквивалента их ключей 
целочисленного эквивалента (порядок возрастания).

Ключи не повторяются, их диапазон -999 < key < 999. 
Ключи и значения словарей всегда будут строками и всегда не будут пустыми.

*/

/*
Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'
*/