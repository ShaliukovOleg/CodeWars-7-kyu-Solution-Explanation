// Solution / Решение

function dadFilter(str) {
    const filteredSentence = str.replace(/,+/g, ','); // Заменяем все последующие запятые
    return trimmedSentence = filteredSentence.replace(/^[,]+|[,\s]+$/g, ''); // Убираем запятые и пробелы в начале и конце
}

/*  

Regular expresions 
/,+/g - Проверяем запятые которые встречаются больше одного раза (+), по всей строке (g)
^[,]+ поиск одной или более запятых в начале строки
[,\s]+$ поиск одной или более запятых в конце строки

*/
/*

Your dad doesn't really get punctuation, 
and he's always putting extra commas in when he posts. 
You can tolerate the run-on sentences, 
as he does actually talk like that, 
but those extra commas have to go!

Write a function called dadFilter that takes a string as argument 
and returns a string with the extraneous commas removed. 
The returned string should not end with a comma or any trailing whitespace.

*/

/*

Твой отец не очень понимает пунктуацию, 
и он всегда ставит лишние запятые, когда пишет. 
Вы можете смириться с тем, что у него нет предложений, 
ведь он действительно так говорит, 
но лишние запятые должны исчезнуть!

Напишите функцию dadFilter, которая принимает в качестве аргумента строку 
и возвращает строку с удаленными лишними запятыми. 
Возвращаемая строка не должна заканчиваться запятой или каким-либо пробелом.

*/