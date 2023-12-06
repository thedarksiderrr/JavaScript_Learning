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