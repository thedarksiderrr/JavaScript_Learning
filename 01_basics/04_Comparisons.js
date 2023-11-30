// ************ For same data type **********************

// console.log(2 > 1); // greater than
// console.log(2 >= 1); // greater than equal to
// console.log(2 < 1); // less than
// console.log(2 <= 1); // less than equal to
// console.log(2 == 1); // equals to
// console.log(2 != 1); // not equals to

// ******************************************************

console.log("2" > 1);
console.log("02" > 1); // it convert automatically "02" to 2 (number)

// ******************************************************
// avoid these types of comparisons

console.log(null > 0); //false
console.log(null == 0); //false 
console.log(null >= 0); //true

console.log(undefined > 0); //false
console.log(undefined == 0); //false 
console.log(undefined >= 0); //false
// undefined will always give false.

// ******************************************************

// === (strictly check values as well as its datatype)
console.log("2" === 2); 
// false - reason: because "2" is string and 2 is number, so === will check datatype as well.




