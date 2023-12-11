// const instaUser = new Object();
const instaUser = {}

instaUser.id = "123abc"
instaUser.name = "Pratham",
instaUser.isLoggedIn = false

// console.log(instaUser);

// multi level object

const regularUser = {
    email: "a@gmail.com",
    fullName: {
        firstName: "abc",
        lastName: "xyz"
    }
}

// console.log(regularUser.fullName.firstName);

// -------------------------------------------------

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 4: "d", 3: "c" }

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2) // to get guaranteed results we use {}
/* 
Reference Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
*/
const obj3 = { ...obj1, ...obj2 } // spread operation

// console.log(obj3);

// array of multiple objects
const users = [
    {
        id: 1,
        name: "Pratham"
    },
    {
        id: 2,
        name: "Priyank"
    },
    {
        id: 3,
        name: "Prit"
    }
]

// console.log(users[1].name);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty("name"));

// --------------------------------------------------------
// de-structure any values

const course = {
    courseName: "Javascript",
    coursePrice: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: ci} = course // course.courseInstructor
console.log(ci);


// ------------------------------------------------------------------
// react concept

const navbar = ({company}) => { // props.company

}

navbar(company = "pratham")