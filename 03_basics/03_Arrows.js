// "this" keyword

const user = {
    username: "Pratham",
    age: 21,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to the site.`); // refer username in current function.
        // console.log(this); // it will print current context
    }
}

// user.welcomeMessage()

// user.username = "PC" // context simply means values
// user.welcomeMessage()

// console.log(this); // {}

// You cannot use context in function, i will only work on objects
// function chai() {
//     let username = "prathamPC"
//     console.log(this.username);
// }

// const chai = function() {
//     let username = "prathamPC"
//     console.log(username);
// }

// --------------------------------------------------------------------
// ******* Arrow Function *******
// const chai = () => {
//     let username = "prathamPC"
//     console.log(username);
// }

// chai()

// ******* Basic Arrow Function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(5, 6));


// ******* Implicit Return
// implicit understands that you no need to write return keyword.
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// Summary: if you write in {} you need to write return keyword.....
// and if you write in () you no need to write return keyword.....
// console.log(addTwo(4, 3));

const returnObject = () => ({username: "pc123", age: 21})

console.log(returnObject());


