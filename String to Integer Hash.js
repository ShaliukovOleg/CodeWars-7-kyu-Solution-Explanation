// Solution / Решение

function hashCode(str)  {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) | 0;
    }

    return hash;
}

// Short version

const hashCode = str => str.split('').reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) | 0, 0);

// Tests

console.log(hashCode("hello world")); // 1794106052
console.log(hashCode("hello dave")); // -1605272966
console.log(hashCode("Codewars is awesome!!!")); // 718208364

/*

Your mission is to implement Java's "public int hashCode()" method for any string, 
which takes in a string and converts it into an integer hash.

The function in general form for a string s of length n is:
hashCode(s) = s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]

Where ^ denotes exponentiation. 
As Java uses 32-bit integers to hold the hash value, 
all values should be kept as such.

e.g hashCode("hello world") should return 1794106052.

*/

/*

Ваша задача - реализовать метод Java "public int hashCode()" для любой строки, 
который принимает строку и преобразует ее в целочисленный хэш.

Функция в общем виде для строки s длины n имеет вид:
hashCode(s) = s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]

Где ^ обозначает экспоненту. 
Поскольку в Java для хранения хэш-значения используются 32-разрядные целые числа, 
все значения должны храниться в таком виде.

Например, hashCode("hello world") должен возвращать 1794106052.

*/