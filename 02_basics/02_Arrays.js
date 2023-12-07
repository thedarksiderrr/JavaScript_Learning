const marvel = ["Thor", "Iron Man", "Black Widow"]
const dc = ["Batman", "Flash", "Superman"]

// marvel.push(dc); //it will push on existing array.

// console.log(marvel);
// console.log(marvel[3][1]); //Flash

// const allHeros = marvel.concat(dc) //This method returns a new array without modifying any existing arrays.
// console.log(allHeros);

const all_new_heros = [...marvel, ...dc] // this operator called 'SPREAD'. it will spread every arrays into individual elements.

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const flat_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into one array
console.log(flat_array);


console.log(Array.isArray("Pratham")); // false
console.log(Array.from("Pratham")); // it will convert values into array
console.log(Array.from({name: "Pratham"})); // (object) interesting 


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.



