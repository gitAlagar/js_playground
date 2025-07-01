//factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n

// n! =n*(n-1)*(n-2)*...*2*1

function factorial(n) {
    let fact_Num = 1;
    for (i = 2; i <= n; i++) {
        fact_Num *= i;
    };

    return fact_Num;
};

console.log(factorial(10));

//Recursion method

function recursion(n){
    
    if(n===0||n===1){
        return 1;
    };

    return n*recursion(n-1);
};

console.log("recursion",recursion(10));