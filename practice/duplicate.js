// BASIC METHOD
// function removeDuplicates(arr) {
//    let output =  arr.filter(myFun);
//     function myFun(value,index){
//         return arr.indexOf(value)===index;
//     }
//     return output;
// }
// console.log(removeDuplicates([1,3,2,5,5,3,3]));  


//2222
// function removeDuplicates(arr) {
//     let output = arr.filter(function(value,index){
//         return arr.indexOf(value) ===index;
//     });
//     return output;
// }

// console.log(removeDuplicates([1,3,2,5,5,3,3]));

// ARROW FUNCTION:
function findDuplicate(arr) {
    let output = arr.filter((value,index) => arr.indexOf(value) !==index);
    return output;
}

console.log(findDuplicate([1,3,2,5,5,3,3]));


//COUNT THE DUPLICATES: 

const arr = [1,2,3,3,2,4,5];

count ={}; 

for(let x of arr){
    console.log(count[x]);
    count[x] = (count[x] || 0) + 1;
}

console.log(count);

