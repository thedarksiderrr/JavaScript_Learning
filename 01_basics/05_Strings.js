const name = "pratham"
const repoCount = 50

// console.log(name + repoCount + " Values"); 

console.log(`Hello my name is ${name} and my repository count is ${repoCount}`);



const gameName = new String("prathamjc")
console.log(gameName[0]); //i will print element which is at 0 index.
console.log(gameName.__proto__); // to know prototype of String methods 

console.log(gameName.length); // to know elements length.
console.log(gameName.toUpperCase()); // print all characters in upper case

console.log(gameName.charAt(2)); // print character of specific index
console.log(gameName.indexOf('t')); //return the position of the first occurrence of a substring.

const newString = gameName.substring(0, 4) //substring will not negative values
console.log(newString);

const anotherString = gameName.slice(-8, 4) //you can use negative index value here.
console.log(anotherString);

const againAnotherString = "     Pratham     "
console.log(againAnotherString);
console.log(againAnotherString.trim()); // it will remove automatically unnecessary space

const url = "https://thedarksiderrr.com/pratham%20chapla"
console.log(url.replace("%20", "-"));  //replacing string (search value) to (replace value)
console.log(url.includes("thedarksiderrr")); //check string we written in include function is present in value or not

const splitStr = new String("pratham-j-c")
console.log(splitStr.split("-")); //split string with "-" and print rest of the characters

/*

STRING METHODS REFERENCE -

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/