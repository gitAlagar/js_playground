function applyOperation(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(applyOperation(5, 3, add));      // 8
console.log(applyOperation(5, 3, multiply)); // 15

//rentrun funtion

function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// A higher-order function (HOF) in JavaScript is a function that either:

// Takes another function as an argument (callback).
// Returns a new function.
// Built-in HOF in js -> map(), filter(),reduce(),forEach();
