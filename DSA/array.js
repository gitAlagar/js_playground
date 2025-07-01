//FIND THE LOWEST VALUE IN AN ARRAY

//FOR of
let array = [7, 4, 5, 10, 9, 2, 22, 13];
let minVal = array[0];

for (let i of array) {
    if (i < minVal) {
        minVal = i;
    }
}
console.log("minVal = ", minVal);

//Math.mini
//The spread operator ... expands the elements of an array into individual arguments.
//The Math.min() function accepts multiple numbers as arguments and returns the smallest value
//...array converts [3, 5, 1, 7] into Math.min(3, 5, 1, 7)
let result =Math.min(...array);
console.log("Result = ",result);

//apply
let result2 = Math.min.apply(Math,array);
console.log("Result2 =",result2);

//sort
let result3 = array.sort((a,b)=>{
    return a-b
})[0];
console.log("Result3 = ",result3)

//reduce
let result4 =array.reduce((a,b)=> Math.min(a,b));
console.log("Result4 = ",result4)


//...................

//FIND THE 3rd SMALEST NUMBER IN AN ARRAY

let a =array.slice()
let temp;
for(let i=0;i<a.length;i++){
    for(let j=0; j<a.length;j++){
        if(a[i]<a[j]){
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
console.log("a",a)

//.........
let copy =array.slice();
for(let i=0;i<=2;i++){
    let index = copy.indexOf(Math.min(...copy));
    copy.splice(index,1);
}

console.log("Small = ",Math.min(...copy))

//--------------------------------------
let max = array.reduce((a,b)=>a<b?a:b);
console.log("Max = ",max)