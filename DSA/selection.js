// The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.

// Go through the array to find the lowest value.
// Move the lowest value to the front of the unsorted part of the array.
// Go through the array again as many times as there are values in the array.

 
let arr = [10,3,14,1,27,39,16];
let n =arr.length;

for(let i =0;i<n-1;i++){
    let minIndex=i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex=j;
        }
    }

    [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
    
}
console.log("Slection = ",arr);