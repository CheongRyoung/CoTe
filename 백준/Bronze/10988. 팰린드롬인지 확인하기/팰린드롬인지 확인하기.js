const fs = require('fs');
const S = fs.readFileSync("/dev/stdin").toString().trim(); ///dev/stdin

const words = S.split("");
let result = true;
for(let i=0; i<words.length/2; i++) {
    result = words[i] === words[words.length-1-i];
    if(!result) {
        break;
    }
}
console.log(result ? 1 : 0);