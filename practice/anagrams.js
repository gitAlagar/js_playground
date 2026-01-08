const words = ['listen', 'silent', 'hello', 'world', 'enlist'];
const targetWord = 'listen';

let sortedTarget = targetWord.toLowerCase().split('').sort().join('');

let result = words.filter((word) => {
    let sortedWord = word.toLowerCase().split('').sort().join('');
    return sortedWord === sortedTarget;   // ✔ boolean return
});

console.log(result);


// const result = words.filter(w =>
//   w.toLowerCase().split('').sort().join('') === sortedTarget
// );