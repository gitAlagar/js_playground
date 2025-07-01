// FIRST 20 FABINOCCI NUMBERS;
num1 = 0;
num2 = 1;
count = 0;

// FOR LOOP
for (let i = 0; i <= 19; i++) {
    nextNum = num1 + num2;
    // console.log(nextNum);
    num1 = num2;
    num2 = nextNum;
}


// RECURSTION
function fabinocciNum(a, b) {
    if (count <= 19) {
        nextNum = a + b
        // console.log(count, nextNum,)
        num1 = num2;
        num2 = nextNum;
        count ++;
        fabinocciNum(num1, num2);
    } else {
        return
    }
}
fabinocciNum(0, 1);

//FIND THE Nth FABINOCCI NUMBER;   Fn = F(n-1) + F(n-2)

function fabinoNum(n){
    if (n<=1){
        return n
    }else{
        return fabinoNum(n-1)+fabinoNum(n-2);
    }
}
console.log(fabinoNum(19))
console.log("count",count);
