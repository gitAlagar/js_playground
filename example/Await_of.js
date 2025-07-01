
const urls =[
    'https://pokeapi.co/api/v2/ability/1',
    'https://pokeapi.co/api/v2/ability/2',
    'https://pokeapi.co/api/v2/ability/3',
    'https://pokeapi.co/api/v2/ability/4'
];

// Promise.all(urls.map(url =>{
//     return fetch (url).then(ability => ability.json());
// })).then(data =>{
//     console.log('pokemon 1: ',data[0].name);
//     console.log('pokemon 2: ',data[1].name);
//     console.log('pokemon 3: ',data[2].name);
//     console.log('pokemon 4: ',data[3].name);
// }).catch(()=> console.log("error"))
// .finally(()=>console.log(" finished"));

const getPoke = async function(){
 try{
    const[poke1,poke2,poke3,poke4] = await Promise.all(urls.map(async function(url){
        const response =await fetch(url);
        return data =response.json();
    }))
    console.log("pokemon 1:",poke1.name);
    console.log("pokemon 2:",poke2.name);
    console.log("pokemon 3:",poke3.name);
    console.log("pokemon 4:",poke4.name);
 }catch(error){
    console.log("error:",error)
 }
}

getPoke();

// for await of 

// const forOfLoop = (urls)=>{
//     for(let url of urls){
//         console.log(url)
//     }
// }
// forOfLoop(urls);

const getPoke1 = async function(){
    const promisesArr = urls.map(url => fetch(url));

    for await(let promise of promisesArr){
        const data = await promise.json();
        console.log(data.name);
    }
   }
   
   getPoke1();

