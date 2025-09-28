// Arow function is concise way to define anonymous function in js;

// Behavior in Regular Functions:
// In regular functions, this refers to the object that invoked the function. This can vary depending on the context.

// Behavior in Arrow Functions:
// Arrow functions do not have their own this binding. Instead, they inherit the this value from the enclosing lexical scope. 
// This means that the this value inside an arrow function is always the same as the this value in 
// the context where the arrow function was defined

//----------- Example 1 ---------------

const person = {
    name: 'Alice',
    greet: () => {
      console.log('Hello, my name is ' + this.name);
    }
  };
  
  person.greet();

//   In this example, the arrow function greet will print undefined because it inherits the this value from the global scope, 
//   where this is typically undefined

//----------- Example 2 Use a regular function ---------------

const person1 = {
    name: 'Alice',
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };

  person1.greet();

