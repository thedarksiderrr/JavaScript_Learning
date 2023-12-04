let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23); //months starts from 0 in javascript because of array.
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); //time + date
// let myCreatedDate = new Date("2023-01-16"); // if you are using format mask yyyy-mm-dd then month starts from 01.
let myCreatedDate = new Date("01-16-2023"); // format mask mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());

/* *********** Time Stamp *************** */
let myTimeStamp = Date.now(); // do not declare with "new" keyword.
// console.log(myTimeStamp); // milisecond
// console.log(myCreatedDate.getTime()); // milisecond
// console.log(Math.floor(Date.now()/1000));

/* *********** Time Stamp *************** */

let newDate = new Date();
console.log(newDate.getMonth() + 1); //starts from 0
console.log(newDate.getDay()); // mon = 1, tue = 2, wed = 3 and so on
console.log(`The Date is ${newDate.getDate()} and time is ${newDate.getHours()}:${newDate.getMinutes()}`); 

// customized format

console.log( newDate.toLocaleString('default', {
    weekday: "long"
}));






/*

Reference Link:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

Temporal:

https://tc39.es/proposal-temporal/docs/index.html

*/