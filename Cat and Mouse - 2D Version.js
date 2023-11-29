// Solution / Решение

function catMouse(map, moves) {
    const lines = map.trim().split('\n'); // Разбиваем карту на строки и удаляем лишние пробелы в начале и конце
    let cat, mouse; // Инициализируем переменные для хранения координат кота и мыши

    for (let y = 0; y < lines.length; y++) { // Итерируем по строкам карты
        const line = lines[y]; // Получаем текущую строку
        const positionCat = line.indexOf('C'); // Ищем индекс символов 'C' (кот) в текущей строке
        const positionMouse = line.indexOf('m'); // Ищем индекс символов 'm' (мышь) в текущей строке 
        if (positionCat !== -1) cat = { x: positionCat, y }; // Если найден индекс символа 'C', устанавливаем координаты кота
        if (positionMouse !== -1) mouse = { x: positionMouse, y }; // Если найден индекс символа 'm', устанавливаем координаты мыши
    }

    if (!cat || !mouse) return 'boring without two animals'; // Если не удалось найти обе координаты

    return Math.abs(cat.x - mouse.x) + Math.abs(cat.y - mouse.y) > moves ? 'Escaped!' : 'Caught!'; // Возвращаем результат в зависимости от того, поймана ли мышь
}

// Solution 2 / Решение 2

function catMouse(map, moves) {
    const cleanMap = map.replace(/\s/g, '');
    const width = map.indexOf('\n');

    const findCoordinates = (char) => {
        const index = cleanMap.indexOf(char);
        return index === -1 ? null : { x: index % width, y: Math.floor(index / width) };
    };

    const cat = findCoordinates('C');
    const mouse = findCoordinates('m');

    if (!cat || !mouse) return 'boring without two animals';

    const distance = Math.abs(cat.x - mouse.x) + Math.abs(cat.y - mouse.y);

    return distance > moves ? 'Caught!' : 'Escaped!';
}

// Tests

console.log()
console.log()
console.log()

/*

You will be given a string (map) featuring a cat "C" and a mouse "m". 
The rest of the string will be made up of dots (".") 
The cat can move the given number of moves up, down, left or right, but not diagonally.

You need to find out if the cat can catch the mouse from it's current position and return 
"Caught!" or "Escaped!" respectively.

Finally, if one of two animals are not present, 
return "boring without two animals".

Examples
moves = 5

map =
..C......
.........
....m....

returns "Caught!" because the cat can catch the mouse in 4 moves
moves = 5

map =
.C.......
.........
......m..

returns "Escaped!" because the cat cannot catch the mouse in  5 moves

*/

/*

Вам будет дана строка (карта) с изображением кошки "C" и мыши "m". 
Остальная часть строки будет состоять из точек ("."). 
Кошка может перемещаться на заданное количество ходов вверх, вниз, влево или вправо, но не по диагонали.

Вам нужно выяснить, сможет ли кошка поймать мышь из ее текущего положения и вернуть 
"Caught!" или "Escaped!" соответственно.

Наконец, если одно из двух животных отсутствует, 
верните "boring without two animals".

Примеры
moves = 5

map =
..C......
.........
....m....

возвращает "Caught!", потому что кошка может поймать мышь за 4 хода
moves = 5

map =
.C.......
.........
......m..

возвращает "Escaped!", потому что кошка не может поймать мышь за 5 ходов

*/