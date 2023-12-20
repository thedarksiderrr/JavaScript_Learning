// Immediately Invoked Function Expression (IIFE)

// Normal Function
(function chai() {
    // named IIFE
    console.log("Tea is Ready");
})(); // dont forget to add ; while writing more than one function

// Arrow Function
( (num1) => {
    // simple IIFE or unnamed IIFE
    console.log(`You Need to drink ${num1} tea`);
})(2)

/*

-- In JS you need to end invoke function with the help of semicolon ';'

Defination:- An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
() this is first paranthesis where we wrote our function/code.
() this is second paranthesis is for execution call.

Reference Link: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

*/