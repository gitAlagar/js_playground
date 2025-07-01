const words = ['listen', 'silent', 'hello', 'world', 'enlist'];
const targetWord = 'listen';
let text2=targetWord.toLowerCase().split('').sort().join('');


let result = words.filter((v,i)=>{
    let text1=v.toLowerCase().split('').sort().join('');
    if(text1===text2){
        return v
    }
})

console.log(result);