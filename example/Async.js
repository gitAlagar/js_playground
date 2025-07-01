// function promiseFun(){
//     fetch("http://jsonplaceholder.typicode.com/posts")
//  .then((data) => {
//     return data.json()
//  })
//  .then((parseData) =>{
//     console.log(parseData); 
//  })
// }
// promiseFun();

//ASYNC AWAIT :

// async function promise(){
//     try{
//     const posts = await fetch("http://jsonplaceholder.typicode.com/posts")
//     if(posts.ok === false){
//         throw "url error";
//     }
//     const data = await posts.json()
//     console.log(data);
//     }
//     catch(err){
//         console.log(err)
//         console.log("page 404 error");
//     }
// }
// promise();

// const jsonList = [
//     "http://jsonplaceholder.typicode.com/posts",
//     "http://jsonplaceholder.typicode.com/albums",
//     "http://jsonplaceholder.typicode.com/users "
// ]

// Promise.all(jsonList.map(url=>{
//     return fetch(url).then(res => res.json())
// })).then((data)=>{
//     console.log(data[0]);
//     console.log(data[1]);
//     console.log(data[2])
// }).catch(()=>console.log("error"));

// let data = async function () {
//     try {
//         const [posts, albums, users] = await Promise.all(jsonList.map(url => {
//             return fetch(url).then(res => res.json())
//         }));
//         console.log(posts)
//         console.log(albums)
//         console.log(users)
//     } catch (err) {
//         console.log("something error", err);
//     }
// }
// data();