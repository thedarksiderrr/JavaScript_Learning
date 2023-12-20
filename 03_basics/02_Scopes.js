{ } // syntax of scope

// var c = 300

let a = 500     //Global Scope
if (true) {
    // Function, Local, Block Scope
    let a = 10
    const b = 20
    // console.log("Inside a Scope: ", a);  // Block scope
}

// console.log(a);
// console.log(b);
// console.log(c);

// ****************************************************************
// closer - nested scope

function one() {
    const username = "prathamchapla"

    // inner function can access parent or outer fuctions values
    function two() {
        const website = "@youtube.com"
        console.log(username);  // acceptable
    }

    // but outer or parent function can not access inner functions values
    // console.log(website); // not acceptable

    two()
}

// one()

// ***********************************************************

if (true) {
    const username = "pc123"
    if (username === "pc123") {
        const website = "@gmail.com"
        console.log(username + website);
    }
    // console.log(website); // not acceptable

}
// console.log(username); // not acceptable

// **************** Interesting ****************
// difference between declaring function nd access directly or declaring function and holding it into a variable
console.log(addOne(5)); // will work properly
function addOne(num) {
    return num + 1
}


console.log(addTwo(6)); // throws an error: cannot access before initialization
const addTwo = function(num) {
    return num + 5
}
