// Primitive Datatype

/* 7 types

String,
Number,
BigInt,
Boolean,
Null,
Undefined,
Symbol

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

// Non Primitve Datatype (Reference)

/* 

Objects,
Arrays,
Functions

*/

const myArray = ["abc", "def", "xyz"] //object

const myObject = { //object

    name: "pratham",
    age: 21
}

const myFunction = function(){ //funtion - object
    console.log("Hello World!");
}

// *************************************

// Javascript is dynamically typed language.