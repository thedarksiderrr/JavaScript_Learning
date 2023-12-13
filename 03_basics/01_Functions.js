function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("M");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2);

    // let result = number1 + number2
    // return result;

    return number1 + number2;
}


const result = addTwoNumbers(5, 4)
// console.log(`Result: ${result}`);


function loggedInUsername(username) {
    // if (username === undefined) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
        return `${username} just logged in`;
    
}

// console.log(loggedInUsername("PrathamPC")); 
// console.log(loggedInUsername()); // empty function will be 'undefined'

// ------------------------------------------------------------------------

const user = {
    username: "Pratham",
    age: 21
}

function handleObject (anyObject) { //generic
    console.log(`Username is ${anyObject.username} and his Age is ${anyObject.age}`);
}

// handleObject(user)

// handleObject({
//     username: "Hello",
//     age: 40
// })

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 1000, 500, 1000]));
