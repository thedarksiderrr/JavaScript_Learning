const score = 300
// console.log(score); // 300

const balance = new Number(500)
// console.log(balance); // [Number: 500]
// console.log(balance.toString()); // 500
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); //500.00

const precisionValue = 234.890 // 8 will roundup
// console.log(precisionValue.toPrecision(3)); // Number of significant digits. Must be in the range 1 - 21, inclusive.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// **************** Maths ******************

// console.log(Math);
// console.log(Math.abs(-4)); // negative value will convert into positive value
// console.log(Math.round(4.6)); // it will roundup values
// console.log(Math.ceil(4.2)); // it will ceil top values
// console.log(Math.floor(4.9)); // it will floor lower values
// console.log(Math.sqrt(25)); // square root values
// console.log(Math.min(4,6,2,6,8,7)); // find minimum value
// console.log(Math.max(4,6,2,6,8,7)); // find minimum value

console.log(Math.random()); // generate random values between 0 or 1
console.log((Math.random()*6) + 1); // generate random values between 1 to 6 (dice)
console.log(Math.floor(Math.random()*6) + 1); // roundup number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);