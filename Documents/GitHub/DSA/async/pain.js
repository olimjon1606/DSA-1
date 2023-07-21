// true == []; // -> false
// true == ![]; // -> false

// false == []; // -> true
// false == ![]; // -> true
// // the best way to put + before them
// // +true in number => 1, +![] => ![] is false, false into numer 0

// !!"false" == !!"true"; // -> true
// !!"false" === !!"true"; // -> true

// // true is 'truthy' and represented by value 1 (number), 'true' in string form is NaN.
// true == "true"; // -> false
// false == "false"; // -> false

// // 'false' is not the empty string, so it's a truthy value
// !!"false"; // -> true
// !!"true"; // -> true

// // qara agar yonidda value bolmasa string numberga bool qiymat ham numberga o'tadi
// // xuddi true == "true"; // -> false
// //false == "false"; // -> false

// // !! holatda numbergamas bool ga o'tazishga to'g'ri keladi

// "b" + "a" + +"a" +"a"; // result baNaNa
// NaN === NaN; // -> false 
// // NaN is not equal to NaN

// +![]          // -> 0
// +!![]         // -> 1
// !![]          // -> true
// ![]           // -> false
// //[][[]]        // -> undefined
// +!![] / +![]  // -> Infinity
// //[] + {}       // -> "[object Object]"
// +{}           // -> NaN

// !!null; // -> false
// null == false; // -> false

// // sabab ull numberga o'tganda NaN boladi false esa 0 NaN == 0 is false

// 0 == false; // -> true
// "" == false; // -> true

// // 0 numda 0 fasle numda 0 0 == 0 true
// // empty string numda 0 false ham 0

// [1, 2, 3] +
//   [4, 5, 6][
//     // call toString()
//     (1, 2, 3)
//   ].toString() +
//   [4, 5, 6].toString();
// concatenation
// "1,2,3" + "4,5,6";
// // ->
// ("1,2,34,5,6");
// // sabab string + string boladi arraylar qoshilishidan oldin stringga o'tadi
// let a = null
// //console.log([1] * [1,2]); //NaN
// console.log(String(a));
// // console.log(42 == "42"); // true, as number 42 is coerced to string "42"
// // console.log(true == "1"); // true, as boolean true is coerced to string "true"
// // console.log(false == "0"); // true, as boolean false is coerced to string "false"


// // umumiy narsalardan, bo'sh narsa stringda '' ga teng numberda 0 ga

// //
// parseInt("Infinity", 10); // -> NaN
// // ...
// parseInt("Infinity", 18); // -> NaN...
// parseInt("Infinity", 19); // -> 18
// // ...
// parseInt("Infinity", 23); // -> 18...
// parseInt("Infinity", 24); // -> 151176378
// // ...
// parseInt("Infinity", 29); // -> 385849803
// parseInt("Infinity", 30); // -> 13693557269
// // ...
// parseInt("Infinity", 34); // -> 28872273981
// parseInt("Infinity", 35); // -> 1201203301724
// parseInt("Infinity", 36); // -> 1461559270678...
// parseInt("Infinity", 37); // -> NaN

// // parseInt ishlashi ichidagi 18, 19 numberlar baseni ifodalidi
// // parseInt() chaqirilganda u infinity ni 18 yoki 19 base asosga ko'ra parse lashga urinadi

// typeof NaN; // -> 'number'
// typeof []; // -> 'object'
// typeof null; // -> 'object'

// // however
// null instanceof Object; // false

// /////////////////////////////////////////////////
// // Number  + Number  -> addition
// // Boolean + Number  -> addition
// // Boolean + Boolean -> addition
// // Number  + String  -> concatenation
// // String  + Boolean -> concatenation
// // String  + String  -> concatenation                                                                                     
// /////////////////////////////////////////////////  

// // esdan chiqmasin !!!!!!!
// ({} + []); // -> [object Object]

// const c = "constructor";
// c[c][c]('console.log("WTF?")')(); // > WTF?

// (1).__proto__; // -> [Number: 0]
// (1).__proto__.__proto__; // -> {}
// (1).__proto__.__proto__.__proto__; // -> null

// // Object 
// `${{ Object }}`; // -> '[object Object]'

// // objects
// const foo = nonCoercible({ foo: "foo" });

// foo * 10; // -> TypeError: Trying to coerce non-coercible object
// foo + "evil"; // -> TypeError: Trying to coerce non-coercible object

// // strings
// const bar = nonCoercible("bar");

// bar + "1"; // -> TypeError: Trying to coerce non-coercible object
// bar.toString() + 1; // -> bar1
// bar === "bar"; // -> false
// bar.toString() === "bar"; // -> true
// bar == "bar"; // -> TypeError: Trying to coerce non-coercible object

// // numbers
// const baz = nonCoercible(1);

// baz == 1; // -> TypeError: Trying to coerce non-coercible object
// baz === 1; // -> false
// baz.valueOf() === 1; // -> true

// // nonXoercible object

// // automatic semicolon kiritishga ehtiyot bo'l
// (function() {
//     return
//     {
//       b: 10;
//     }
//   })(); // -> undefined

//   (function() {
//     return {
//       b: 10
//     };
//   })(); // -> { b: 10 }

//   Math.min(); // -> Infinity
// Math.max(); // -> -Infinity
// Infinity > -Infinity; // -> true

// // so that 
// Math.min() > Math.max(); // -> true
// Math.min() < Math.max(); // -> false

//console.log({1: 1} + {1: 2})

// for sorting
// when we sort with sort() it sorts string
// to fix this use 
//[10, 1, 3].sort((a, b) => a - b); // -> [ 1, 3, 10 ]

// be carefull

// (27).toString(); // -> '27'
// // or
// 27..toString(); // -> '27'

//27.toString() //  gives an error syntax error

let a = {d:1},c;
b = a;
console.log('a'-'b');
