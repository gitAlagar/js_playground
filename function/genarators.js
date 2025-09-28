function* numberGenarator(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenarator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Each call to next() resumes the function until it hits the next yield.
// When no more yield is left, it returns { value: undefined, done: true }.

function* infiniteCounter(){
    let i=0;
    while(true){
        yield i++;
    }
}


console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3

// useCase 
function* fruits() {
  yield "apple";
  yield "banana";
  yield "mango";
}

for (let fruit of fruits()) {
  console.log(fruit);
}

// Before async/await, generators with promises (co library) were a popular way to handle async code.


// Generators are a special kind of function in JavaScript that allow you to pause and resume execution.
// They’re super useful for things like lazy evaluation, iterators, or handling async flows.

// What are Generators?

// A generator function is declared using function* (note the *).
// Inside, it uses the yield keyword to pause execution and return a value.
// You can then resume execution later by calling .next() on the generator.