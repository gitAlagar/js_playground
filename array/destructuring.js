// Destructuring assignment in JavaScript is a convenient way to extract values from arrays or
// objects into separate variables, using a shorter and more readable syntax.

// Array Destructuring;
const numbers = [10, 20, 30];

// Old way:
const a = numbers[0];
const b = numbers[1];

// Destructuring:
const [x, y, z] = numbers;

//------------------Skip items
const[first,,third] =[1,2,3];

//------------> use default values
const[a1,b1,c1=3]=[1,2]

//------------> pick up values from specific index locations of an array.
const{[0]:a2,[4]:b2}=[1,2,3,4,5];

//----------->rest property
const[a3,b3,...others]=[1,2,3,4,5,6,7]