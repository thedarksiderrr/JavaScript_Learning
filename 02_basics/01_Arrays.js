// array []
// [] - square brackets
// () - paranthisis
// {} - braces (curly braces)

const myArr = [1,2,3,4,5,6];
const myHeros = ["Thor","Iron Man", "Captain America", "Black Widow"]

const myArr2 = new Array(5,7,9,11,13)

console.log(myHeros[2], myHeros[3]);

// *********************************************************************
// Array  Methods

// myArr.push(7) // Add new elements to the end of an array.
// myArr.push(10) 
// myArr.pop() // Removes the last element from an array and returns it.

// myArr.unshift(9); // Inserts new elements at the start of an array.
// myArr.shift() // Removes the first element from an array and return it.

console.log(myArr.includes(9)); // whether an array includes a that element or not, returning true or false.
console.log(myHeros.indexOf("Captain America")); // 2nd index, find that particular elements value's index, if it is not present in array it will show everytime -1.

const newArr = myArr.join() // Adds all the elements of an array into a string

console.log(myArr); //typeof myArr will be object.
console.log(newArr); //typeof newArr will be string.








/* 

Reference Link:-

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

*/











