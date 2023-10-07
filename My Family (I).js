// Solution / Решение

Person.prototype.hasRelationsTo = function (person, options = {
    par: true,
    child: true
}) {
    if (person === this) return true
    const { par, child } = options
    return (par && this.getParents().some(x => x.hasRelationsTo(person, { par: true }))) ||
        (child && this.getChildren().some(x => x.hasRelationsTo(person, { child: true })))
}

/*

The goal is to discover whether a person is related to another in direct line. 
For example, my grand-grand-...-grandfather is related to me in that way, but my brother is not. 
My brother and I only share common parents (at least one).

The kata provides you with Person objects, that will have the two methods Person.getParents() and Person.getChildren(), 
each of them returning an array of Person objects. These arrays may be empty but will never be null. 
You may assume that there will be no loops in relationships.

Task
Your task is to extend the Person prototype with the method hasRelationsTo(person). 
Your function shall return true when the persons have a relationship in direct line (child-child...-child, or parent-...-parent). 
Parents are not related to eachother in that way. Siblings are not related to eachother in that way either.

The preloaded Person prototype also has an addParent(person) method to prepare the tests 
(you would never need to call it). See example test cases.

*/

/*

Цель - выяснить, состоит ли человек в прямом родстве с другим человеком. 
Например, мой прадед...-дед связан со мной таким образом, а мой брат - нет. 
У нас с братом есть только общие родители (хотя бы один).

Ката предоставляет вам объекты Person, которые будут иметь два метода Person.getParents() и Person.getChildren(), 
каждый из которых возвращает массив объектов Person. Эти массивы могут быть пустыми, но никогда не будут равны null. 
Можно предположить, что в отношениях не будет циклов.

Задача
Ваша задача - расширить прототип Person методом hasRelationsTo(person). 
Ваша функция должна возвращать true, если персоны имеют прямые отношения (child-child...-child, или parent-...-parent). 
Родители не связаны друг с другом таким образом. Братья и сестры также не связаны друг с другом таким образом.

В предварительно загруженном прототипе Person также имеется метод addParent(person) для подготовки тестов 
(его вызов никогда не понадобится). См. примеры тестовых примеров.

*/