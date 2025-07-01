//fibonacci series F(n)=F(n-1)+f(n-2);

//[0,1,1,2,3,5,8,13,21];

// get the 10th fibonacci series

function fibonacci(n){
fib = [0,1];
for(let i = 2;i<n;i++){
    fib[i]=fib[i-1]+fib[i-2];
}
return fib[n-1];
};

console.log("fibonacci",fibonacci(10));

// Recursion method
//time complexity

function recursion(n){
if(n<=1){
    return n;
};

return recursion(n-1)+recursion(n-2);
};

console.log("recursion",recursion(10))

//Recursion Memoization
//reduce the time complexity

function memoization(n,memo={}){
    
    if(n<=1){
        return n;
    };

    if(memo[n]){
        return memo[n];
    };

    memo[n] = memoization(n-1,memo)+memoization(n-2,memo);

    return memo[n];
}

console.log("Memoization",memoization(10));
