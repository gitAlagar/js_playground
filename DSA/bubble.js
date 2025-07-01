// Bubble sort - low to highest

// Go through the array, one value at a time.
// For each value, compare the value with the next value.
// If the value is higher than the next one, swap the values so that the highest value comes last.
// Go through the array as many times as there are values in the array.

let array = [7, 3, 9, 12, 11];

// normal
for(let i=0;i<array.length - 1;i++){
    for(let j=0;j<array.length-i-1;j++){
        if(array[j]>array[j+1]){
            temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
        }
    }
}


//If the algorithm goes through the array one time without swapping any values, 
// the array must be finished sorted, and we can stop the algorithm, like this:

for(let i=0;i<array.length - 1;i++){
    let swapped = false;
    for(let j=0;j<array.length-i-1;j++){
        if(array[j]>array[j+1]){
            temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
            // [array[j], array[j + 1]] = [array[j + 1], array[j]];
            swapped=true;
        }
    }

    if(!swapped){
        break;
    }
}

console.log("Array = ",array);


