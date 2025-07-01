const arr =   [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];

let duplicateArray =[]
let result = arr.filter((v,i)=>{
    if(arr.indexOf(v)!==i && duplicateArray.indexOf(v)===-1){
        duplicateArray.push(v)
        return v
    }
})
console.log(result)


// const arr =[1,1,1,2,2,2,3,3,3,4]
// let dup = []
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(i===j){
//             // dup.push(i);
//             continue;
//         }
//         if(arr[i]===arr[j]){
//            break;
//         }
//         if(j===arr.length){
//             dup.push(arr[i]);
//         }
//     }
// }
// console.log(dup);


// let arr =[[1,12,4],[2,7,10],[20,20,20],[10,18]];

// let result = arr.map((v,i)=>{
//  return   v.reduce((c,b)=>c+b)
// })
//  result.sort((a,b)=>a-b)
//  console.log(result[result.length-1])