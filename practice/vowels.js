
let string = "Alagarsamy"
let arr = ['a', 'e', 'i', 'o', 'u']
let count = 0;
for (let i = 0; i < string.length; i++) {
    if (arr.indexOf(string[i].toLowerCase())!==-1) {
        count++;
    }
}
console.log(count)


// let string = "Alagarsamy"
// let arr = ['a', 'e', 'i', 'o', 'u']
// let count = 0;
// for (let i = 0; i < string.length; i++) {
//     if (arr.indexOf(string[i].toLowerCase())) {
//         count++;
//     }
// }
// console.log(count)


// let string ="Alagar samy";
// let vowels = "aeiou";
// let count =string.match(/[aeiou]/gi).length
// console.log(count);


// let str = "Hello World";

// let res = str.match(/[aeiou]/ig).join("");
// console.log(res);

// let res2 = str.match(/[^aeiou]/ig).join("");
// console.log(res2);

// var str = "Hello world!";
// var theGoods = str.split('').filter(c => !['e', 'o'].includes(c)).join('');
// console.log(theGoods)

// let s = 'hello';
// var result = s.split('').reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
// console.log(result);
