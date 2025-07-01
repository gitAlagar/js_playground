
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 24 },
    { name: 'Alice1', age: 21 },
    { name: 'Alice', age: 22 },
    { name: 'Max', age: 22 },
    { name: 'Jane', age: 23 },
    { name: 'Alice1', age: 23 },
    { name: 'Alice', age: 24 },
    { name: 'Max', age: 24 },
    { name: 'Jane', age: 25 },
    { name: 'Alice1', age: 25 },
    { name: 'Alice', age: 22 },
    { name: 'Max', age: 22 },
    { name: 'Jane', age: 23 },
    { name: 'Alice1', age: 23 },
];

let obj = {}

let result = people.map((v, i) => {
    if (!obj[v['age']]) {
        obj[v['age']] = [];
     }
     obj[v['age']].push(v)
    // obj[people[i].age]=[v]
})
console.log(obj)
