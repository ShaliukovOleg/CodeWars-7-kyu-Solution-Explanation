// В данном случае описание перенесено вниз.
// Функции LT, EQ и GT определены таким образом, что они принимают аргумент x
// и возвращают функции, которые, в свою очередь, принимают другие аргументы (_) и возвращают x в разных контекстах.
const LT = (x) => (_) => (_) => x; // Возвращает x в первом контексте (меньше)
const EQ = (_) => (x) => (_) => x; // Возвращает x во втором контексте (равно)
const GT = (_) => (_) => (x) => x; // Возвращает x в третьем контексте (больше)

// Функция compare(x, y) используется для сравнения x и y и возвращает одну из функций LT, EQ или GT,
// в зависимости от результата сравнения.
function compare(x, y) {
    if (x < y)
        return LT; // Если x меньше y, возвращает LT.
    else if (x > y)
        return GT; // Если x больше y, возвращает GT.
    else
        return EQ; // Если x равно y, возвращает EQ.
}

// Функция sorted([...xs]) принимает массив xs и использует compare для сравнения элементов массива,
// а затем сортирует массив, изменяя значения сравнения для соответствия методу sort.
function sorted([...xs]) {
    return xs.sort((a, b) => {
        const result = compare(a, b);
        if (result === LT) return -1; // Если a < b, возвращает -1 для сортировки.
        if (result === EQ) return 0;  // Если a === b, возвращает 0 для сортировки.
        if (result === GT) return 1;  // Если a > b, возвращает 1 для сортировки.
    });
}

// Функция maximum(xs) использует compare для сравнения элементов массива,
// а затем сортирует массив в обратном порядке, чтобы найти максимальное значение.
function maximum(xs) {
    return xs.sort((a, b) => {
        const result = compare(a, b);
        if (result === LT) return 1;  // Если a < b, возвращает 1 для обратной сортировки.
        if (result === EQ) return 0;  // Если a === b, возвращает 0 для обратной сортировки.
        if (result === GT) return -1; // Если a > b, возвращает -1 для обратной сортировки.
    })[0]; // Берет первый элемент отсортированного массива, который будет максимальным значением.
}

// Функции UNIT, RED, ORANGE, YELLOW, GREEN, BLUE и PURPLE определены,
// но в данном контексте они просто возвращают свой аргумент без изменений.
const UNIT = (x) => x; // Возвращает x без изменений.
const RED = (r) => (_) => (_) => (_) => (_) => (_) => r; // Возвращает red
const ORANGE = (_) => (o) => (_) => (_) => (_) => (_) => o; // Возвращает orange
const YELLOW = (_) => (_) => (y) => (_) => (_) => (_) => y; // Возвращает yellow
const GREEN = (_) => (_) => (_) => (g) => (_) => (_) => g; // Возвращает green
const BLUE = (_) => (_) => (_) => (_) => (b) => (_) => b; // Возвращает blue
const PURPLE = (_) => (_) => (_) => (_) => (_) => (p) => p; // Возвращает purple

const { assert, config } = require("chai"); config.truncateThreshold = 0;

describe("Example Tests", function () {
    it("Ordering", function () {
        assert.strictEqual(LT("lt")("eq")("gt"), "lt", `LT ("lt") ("eq") ("gt")`);
        assert.strictEqual(EQ("lt")("eq")("gt"), "eq", `EQ ("lt") ("eq") ("gt")`);
        assert.strictEqual(GT("lt")("eq")("gt"), "gt", `GT ("lt") ("eq") ("gt")`);

        assert.strictEqual(LT(-1)(0)(1), -1, `LT (-1) (0) (1)`);
        assert.strictEqual(EQ(-1)(0)(1), 0, `EQ (-1) (0) (1)`);
        assert.strictEqual(GT(-1)(0)(1), 1, `GT (-1) (0) (1)`);

        assert.deepEqual(sorted([10, 11, 12, 1, 2, 3]), [1, 2, 3, 10, 11, 12], `sorted([10,11,12,1,2,3])`);

        assert.strictEqual(maximum([10, 11, 12, 1, 2, 3]), 12, `maximum([10,11,12,1,2,3])`);
    });
    it("Unit", function () {
        assert.strictEqual(UNIT("()"), "()", `UNIT ("()")`);
        assert.strictEqual(UNIT(0), 0, `UNIT (0)`);
    });
    it("Colour", function () {
        assert.strictEqual(RED("red")("orange")("yellow")("green")("blue")("purple"), "red",
            `RED ("red") ("orange") ("yellow") ("green") ("blue") ("purple")`);
        assert.strictEqual(ORANGE("red")("orange")("yellow")("green")("blue")("purple"), "orange",
            `ORANGE ("red") ("orange") ("yellow") ("green") ("blue") ("purple")`);
        assert.strictEqual(YELLOW("red")("orange")("yellow")("green")("blue")("purple"), "yellow",
            `YELLOW ("red") ("orange") ("yellow") ("green") ("blue") ("purple")`);
        assert.strictEqual(GREEN("red")("orange")("yellow")("green")("blue")("purple"), "green",
            `GREEN ("red") ("orange") ("yellow") ("green") ("blue") ("purple")`);
        assert.strictEqual(BLUE("red")("orange")("yellow")("green")("blue")("purple"), "blue",
            `BLUE ("red") ("orange") ("yellow") ("green") ("blue") ("purple")`);
        assert.strictEqual(PURPLE("red")("orange")("yellow")("green")("blue")("purple"), "purple",
            `PURPLE ("red") ("orange") ("yellow") ("green") ("blue") ("purple")`);
        console.log("<PASSED::>Colours are beautiful!"); 
        // console.log(rainbow);
    });
});


/*

Respond Proportionately
The question then was Fire the Nukes or Keep the Peace? 
If we can also Respond Proportionately, if we have a third option, another datatype is necessary:

switch ( option ) {
  deescalate: keep(peace);
  reciprocate: respond(proportionately);
  escalate: fire(nukes);
}
Or compare two numbers to each other. The three possible outcomes are:

Ordering = LT | EQ | GT
Again, we have Constructors, now three of them. 
Their order is arbitrary, but we need to agree on it, 
because the order of the function arguments we will later feed into the encodings functions corresponds with it. 
Following the recipe from last time

For every Constructor, 
define a curried function that takes as many arguments as there are Constructors 
( keeping arguments in order of their enumeration in the type definition ), 
and returns one of them:

LT = lt => eq => gt => lt
EQ = lt => eq => gt => eq
GT = lt => eq => gt => gt
TASK: If you write the functions LT, EQ and GT, 
the Example Tests will feed them arguments and inspect the answers.

Compare this to the JavaScript convention for sorting values:

x  <  y  <=>  -1 ( or any other negative number )
x === y  <=>   0
x  >  y  <=>   1 ( or any other positive number )
Doing a certain operation, making a certain choice, when x < y, means

if ( compare(x,y) < 0 ) keep(peace);
With Scott encoding, that would look like

compare(x,y) (keep(peace)) () ()
Not completely applying an Ordering is pretty useless 
( the function will just wait for more arguments ), 
but there may be possibilities for empty values ( SideEffect: do(nothing), 
Thing: null, Property: undefined ).
By saturating the Ordering value with arguments, 
the whole thing again becomes an expression, 
of the same type as the arguments we supplied.

The first real exercise is determining a sorted list from an input. 
You are given the function compare, which takes two numbers and returns an Ordering. 
As mentioned, JavaScript sort expects Numbers as the result of a comparison, not Orderings. 
( See MDN, paragraph "If compareFn is supplied ..". )

TASK: Change sorted so that it works ( do not change compare ).

With the same compare, the next exercise is determining the maximum of a list of numbers. 
By walking the entire list and calculating the maximum of the list so far for every element, 
calculate the maximum of the entire list. 
( See MDN, callbackFn. Your callbackFn should return the maximum of accumulator and currentValue. )

TASK: Change maximum so that it works.

Respond Proportionately
As promised, now the case where there is one possible value:

switch ( option ) {
  reciprocate: respond(proportionately);
}

Unit = UNIT
Remember,

For every Constructor, define a curried function that takes as many arguments as there are Constructors 
( keeping arguments in order of their enumeration in the type definition ), 
and returns one of them.

TASK: If you write the function UNIT, 
the Example Tests will feed it arguments and inspect the answers.

< pregnant pause >

Well, that was useful.

A datatype that can have only one value does not contain any information. 
Whatever comes out of the encoded value had to be put in first!

Still, almost every programming language in existence has a Unit datatype ( JavaScript even has two! ).
They may be named undefined, null, None, NIL, Unit, or () 
( the zero-tuple. but don't worry if you don't know what that is ).
Apparently there is a use for it :] and we may encounter one in a future example on encoding numbers in unary, 
as lists of .. nothings. But we are not there yet.

do(nothing) .. or even less?
The case where there are zero possible values. It looks like this:

switch ( option ) {
}

Void
This case is completely nuts. There is a datatype, but it has no values. 
Because only values are encoded, and not the datatype .. there is no encoding either. 
You do not have to write the function - there is no function; 
there can be no tests, there are no inputs, no outputs, 
there is less than zero information ( remember, Unit had no information ). 
So what is the use of a datatype that has no values?

On the value level, there is none. ( It is acceptable to stop reading now. ) 
But when reasoning about code, at the type level, there can be use cases for a Void type. 
It turns out there are useful things that can be done at the type level, without ever considering things as mundane as value implementations. 
There is a kata about type cardinality, if you are interested ( and can handle 2kyu Haskell ). 
Void also has use in proof languages: an impossibility at the value level can encode a falsehood at the type level.

Rainbow Colours
To not go out on a note of complete and utter uselessness, a final exercise with a happier subject: rainbows. Remember

Colour = RED | ORANGE | YELLOW | GREEN | BLUE | PURPLE
TASK: If you write functions RED, ORANGE, YELLOW, GREEN, BLUE and PURPLE, 
the Example Tests will throw things in and show what comes out.

*/