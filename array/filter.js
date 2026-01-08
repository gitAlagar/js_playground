const array = [2,4,5,10,15,20];

let filteredArray = array.filter(v=>v>10).map(v=>v*2);

console.log(filteredArray); // Output: [30, 40]