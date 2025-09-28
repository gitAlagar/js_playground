function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const factorialNum = factorial(5);
console.log("factorialNum", factorialNum);

//--------------------------------------------------
const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciNum = fibonacci(6);
console.log("fibonacciNum", fibonacciNum);

//--------------------------------------------------
//Traversing Nested Objects / JSONF
function printValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            printValues(obj[key]); // recursive call
        } else {
            console.log(obj[key]);
        }
    }
}

const data = { a: 1, b: { c: 2, d: { e: 3 } } };
printValues(data);

// Recursion is a programming concept where a function calls itself to solve smaller instances of a problem until it reaches a base case.
// It is particularly useful for tasks like traversing data structures (e.g., trees),
// solving mathematical problems (e.g., factorial, Fibonacci), or breaking down complex problems into simpler ones.

// Key Components of Recursion

// Base Case: The condition that stops the recursion to prevent infinite loops.
// Recursive Case: The part where the function calls itself with modified arguments to approach the base case.