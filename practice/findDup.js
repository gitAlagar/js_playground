let a = [3,6,8,2,1,5,10,4,2,4]; 
let len =a.length;
let ans = a.filter((v)=>{
    if(a.includes(v*2)){
        return v
    }
})
let original = ans.filter((v,i)=>ans.indexOf(v)===i)
console.log(original);
