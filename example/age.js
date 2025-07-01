// calculate age from the current year:
// var arr = [2000,2021,2017,1990];

// function myFun(array,func){
//     var res = [];
//     for(var i=0;i<arr.length;i++){
//         res.push(func(array[i]));
//     }
//     return res;
// }

// function callBack(item){
//     return 2023-item;
// }

//  var result = myFun(arr,callBack);

// calculate the max value from two arrays:

//  let arr1 = [100,321,39,800,102,329];
//  let arr2 = [103,350,30,70,100,302];

//  function myFunction(arr3,arr4,funct){
//     var array3 =[];
//     for(var i=0;i<arr3.length;i++){
//         array3.push(funct(arr3[i],arr4[i]))
//     }
//     return arr3;
//  }

//  function restFun(item1,item2){
//     if(item1>=item2){
//         return item1;
//     }else{
//         return item2;
//     }
//  }

//  var ans = myFunction(arr1,arr2,restFun);
//  console.log(ans);


var arr = ['10-03-1997','02-29-1990','11-09-2000','05-05-1995'];

function myFun(array,func){
    var res = [];
    for(var i=0;i<array.length;i++){
        res.push(func(array[i]));
    }
    return res;
}

function callBack(item){
    //console.log(item)
    var today = new Date();
    var dob = new Date(item);
    console.log(dob);
    

    var age = today.getFullYear()-dob.getFullYear();
    return age;
}

 var result = myFun(arr,callBack);
 console.log(result);