// Find the closest number in an array and here 0 and 360 are same

let arr = [17, 2, 12, 10, 18, 25, 17, 66, 24, 19, 99, 357, 36];
arr.sort((a, b) => a - b);

let num = 360;
let res;
let down;
let up;

arr.map((v, i) => {
    if (num == 0 || num == 360) {
        if (Math.abs((arr[arr.length - 1] - 360)) < arr[0]) {
            res = arr[arr.length - 1];
        } else {
            res = arr[0];
        }
    } else if (v == num) {
        res = v;
    }
    else if (v > num && up == undefined) {
        up = v;
        down = arr[i - 1];
        if (up - num < num - down) {
            res = up;
        } else {
            res = down;
        }
    } else if (down == undefined) {
        down = arr[arr.lenght - 1]
        res = down;
    }
});

console.log("Closest number in array",res);


// another way

let array = [17, 2, 12, 10, 18, 25, 17, 66, 24, 19, 99, 350, 36];
let target =20;
let closestNum = findClosestNum(array,target);

findClosestNum=(arr,num)=>{
    arr.sort((a,b)=>a-b);
    console.log(arr)
    let closest=arr[0];

    for(let i=0;i<arr.length;i++){
        if(Math.abs(arr[i]-num)<Math.abs(closest-num)){
            closest=arr[i];
        }
    }
    
    if(num==0||num==360){
        if(closest-num<arr[0]){
          closest=closest;
        }else{
          closest=arr[0];
        }
    }
    return closest;
}

console.log("Closest",closestNum);