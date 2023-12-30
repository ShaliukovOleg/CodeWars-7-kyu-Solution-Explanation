// Solution / Решение

function gcContent(dna) {
    const gcCount = dna.replace(/[^GC]/gi, '').length; // убираем все лишние символы из строки и считаем прошедшие проверку
    const totalLength = dna.length; // длинна изначального массива
    return (gcCount / totalLength) * 100 || 0; // В случае того, если деление не пройдет вернем ноль
}

// Short version

const gcContent = dna => dna.replace(/[^GC]/gi, '').length / dna.length * 100 || 0;

// Tests

console.log(gcContent("AAACCCGGGTTT")); // 50
console.log(gcContent("aaacccgggttt")); // 50
console.log(gcContent("G")); // 100

/*

The four bases found in DNA are adenine (A), cytosine (C), 
guanine (G) and thymine (T).

In genetics, GC-content is the percentage of Guanine (G) and Cytosine (C) 
bases on a DNA molecule that are either guanine or cytosine.

Given a DNA sequence (a string) return the GC-content in percent, 
rounded up to 2 decimal digits for Python, 
not rounded in all other languages.

For more information about GC-content you can take a look to wikipedia 
GC-content.

For example: the GC-content of the following DNA sequence is 50%: 
"AAATTTCCCGGG".

Note: You can take a look to my others bio-info kata here

*/

/*

В ДНК четыре основания: аденин (A), цитозин (C), 
гуанин (G) и тимин (T).

В генетике содержание GC - это процентное соотношение гуанина (G) и цитозина (C) 
оснований в молекуле ДНК, которые являются либо гуанином, либо цитозином.

Если задана последовательность ДНК (строка), верните содержание GC в процентах, 
округленное до 2 десятичных цифр для Python, 
во всех остальных языках округление не производится.

Для получения дополнительной информации о GC-содержании вы можете заглянуть в Википедию 
GC-content.

Например: GC-содержание следующей последовательности ДНК составляет 50 %: 
"AAATTTCCCGGG".

Примечание: Вы можете взглянуть на мои другие биоинформационные ката здесь

*/