

// In a regular function, the this keyword refers to the object from which you call the function. 
// In an arrow function, the this keyword refers to the object from which you define the function.

const person = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],

    showSkills() {
        this.skills.forEach(function (skill) {
            console.log(`${this.name} is skilled in ${skill}`);
        });
    },
};

person.showSkills();
// Here, the this keyword refers to the global Window object because we called the showSkills() method outside of the person object.
// In the global object, the name property is undefined.

// output
// undefined is skilled in HTML
// undefined is skilled in CSS
// undefined is skilled in JavaScript

//-------------example 2--------------

// Here, the this keyword refers to the object from which the arrow function is defined, which is the person object.

// const person = {
//     name: 'Nathan',
//     skills: ['HTML', 'CSS', 'JavaScript'],
  
//     showSkills() {
//       this.skills.forEach(skill => {
//         console.log(`${this.name} is skilled in ${skill}`);
//       });
//     },
//   };
  
//   person.showSkills();

//output
// Nathan is skilled in HTML
// Nathan is skilled in CSS
// Nathan is skilled in JavaScript

//--------------example 3----------------

// When inside an object, the this keyword refers to the current object only 
// when you declare the method using the standard syntax (methodName() or methodName: function(){ })

// When you declare an object method using the arrow function, the this keyword refers to the global object,
//  and the skills property is undefined there. Never use the arrow function when declaring a method.
// const person = {
//     name: 'Nathan',
//     skills: ['HTML', 'CSS', 'JavaScript'],
  
//     showSkills: () => {
//       this.skills.forEach(skill => {
//         console.log(`${this.name} is skilled in ${skill}`);
//       });
//     },
//   };
  
//   person.showSkills();

//output
// TypeError: Cannot read properties of undefined (reading 'forEach')