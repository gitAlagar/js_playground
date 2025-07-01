
function myDisplay(value){
    console.log(value)
}

function myCalculator(a,b,mycalback){
    sum = a+b;
    mycalback(sum);
};

// myCalculator(10,20,myDisplay);
console.log(myCalculator(10,20,myDisplay))

// remove negative numbers--------------------------

const myNumbers = [2,-3,4,12,10,23,-2-1,45,-10];

const possitiveNum =removeNeg(myNumbers,(x)=>x>=0);

console.log("Possitive numbers = ",possitiveNum)

function removeNeg(numbers,callback){
    const array =[];
    for(const x of numbers){
        if(callback(x)){
            array.push(x);
        }
    }

    return array;
};
