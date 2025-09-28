let person = {
    firstName: 'algar',
    lastName: 'samy',
    age: 25
};

const { firstName, lastName } = person;

//---------->>>>>The order of the properties does not matte
// const{lastName,firstName}=person

//--------->>>>>Object Property Alias ->can rename variables
const { firstName: name, age: year } = person;

//--------->>>>>default values
const { city = "chennai" } = person;

//--------->>>>>> rest property;
// const{firstName,...rest}=person;

//--------->>>>>> nested object 

const user = {
    id: '351',
    profile: {
        fName: 'alagar',
        lName: 'samy'
    }
}

const { profile: { fName, lName } } = user;

//-------->>>>>>>>>>>>>>> swape variables
let a = 1;
let b = 2;
[a, b] = [b, a]

//----->>>>>>> Map destructuring
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Destructuring
let text = "";
for (const [key, value] of fruits) {
    text += key + " is " + value;
}
