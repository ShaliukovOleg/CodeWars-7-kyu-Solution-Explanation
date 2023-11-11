// Initial code

class Class {
    static #foo = 42;

    static get foo() {
        return this.#foo;
    }
}
// Свойство #foo объявлено как "private", что означает, что оно видно только внутри класса Class, и его нельзя использовать в подклассах. Поэтому в тестах происходит ошибка.

// Solution / Решение

class Class { // Определение класса Class.
    static #foo = 42; // Создание приватного статического свойства #foo и установка его значения на 42.
    static get foo() { // Определение статического геттера foo для класса Class.
        let func = () => { // Создание стрелочной функции func
            // return Class.#foo; // просто раскомментируй данную строку. Возвращение значения приватного статического свойства #foo из класса Class.
        }
        return func(); // Возвращение результата func. Это приведет к возвращению значения #foo из класса Class.
    }
}

// Solution 2 / Решение 2

class Class {
    static #foo = 42;

    static get foo() {
        // return Class.#foo; // просто раскомментируй данную строку
    }
}

// Tests

const result1 = Class.foo;
console.log(result1 === 42 ? 'Pass: Class.foo equals 42' : 'Fail: Class.foo should equal 42');

/*

I wrote a class Class, with a private static property foo and a getter to retrieve it:

class Class {
  static #foo = 42;

  static get foo() {
    return this.#foo;
  }
}
Class.foo; // 42

However, when I create a class Subclass that inherits from Class, 
the code breaks:

class Subclass extends Class {}
Subclass.foo; // Error !
Can you fix the code ?

Modify Class so that Subclass.foo will work correctly. 
This should also work for any level of inheritance from Class, e.g. with:

class Deepclass extends Subclass {}
Deepclass.foo; // should return 42

*/

/*

Я написал класс Class, в котором есть приватное статическое свойство foo и геттер для его получения:

class Class {
  static #foo = 42;

  static get foo() {
    return this.#foo;
  }
}
Class.foo; // 42

Однако, когда я создаю класс Subclass, который наследуется от Class, 
код обрывается:

class Subclass extends Class {}
Subclass.foo; // Ошибка!
Можете ли вы исправить код?

Измените Class так, чтобы Subclass.foo работал корректно. 
Это также должно работать для любого уровня наследования от Class, например, с:

class Deepclass extends Subclass {}
Deepclass.foo; // должно возвращаться 42

*/