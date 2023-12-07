//singleton
// Object.create

// object literals

const mySYM = Symbol("key1");

const obj = {
    name: "Pratham",
    "full Name": "Pratham Chapla",
    [mySYM]: "myKey1", //correct syntax of symbol
    age: 21, 
    location: "Junagadh",
    email: "prathamchapla789@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(obj.email);
// console.log(obj["name"]);
// console.log(obj["full Name"]);
// console.log(obj[mySYM]);

obj.email = "chaplapratham@gmail.com" // override value
Object.freeze(obj); // Prevents the modification of existing property attributes and values
obj.email = "pratham@gmail.com" // --changes will not apply just because object is freeze.
console.log(obj);

// in javascript you can treat functions as a variable.
