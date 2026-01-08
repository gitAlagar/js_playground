const object =[
    { id:1, amount:100},
    { id:2, amount:250},
    { id:3, amount:300},
    { id:4, amount:430}
];

// let totalAmount = object.filter(item=>item.amount>200)
//                         .reduce((sum,item)=>sum+item.amount,0);

let totalAmount = object.reduce((sum,{amount})=>amount>200?sum+amount:sum,0);
