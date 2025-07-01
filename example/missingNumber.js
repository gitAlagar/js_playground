//find missing number 
function missingNumber(arr) {
    const n = arr.length + 1;  
    const totalSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    return totalSum - actualSum;

}


let arr = [1, 2, 3, 5, 6, 7, 8,9]
console.log(missingNumber(arr))