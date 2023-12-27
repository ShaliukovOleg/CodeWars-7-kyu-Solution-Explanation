// Solution / Решение

function echoProgram() {
    return require("fs") // Подключаем модуль для работы с файловой системой
        .readFileSync( // Используем для синхронного чтения файла
            "/workspace/solution.txt", // Путь к файлу, с которым мы работаем
            "utf-8" // Текстовая кодировка файла 
    );
}

/*

Echo Program
Write an echoProgram function 
(or echo_program depend on language) 
that returns your solution source code as a string.

Note:
Function.prototype.toString has been disabled.

*/

/*

Эхо-программа
Напишите функцию echoProgram 
(или echo_program в зависимости от языка) 
которая возвращает исходный код вашего решения в виде строки.

Примечание:
Функция Function.prototype.toString была отключена.

*/