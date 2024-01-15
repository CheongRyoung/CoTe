const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const result = [1,1];
let chgIndex = 0;
for(let i=1; i<N; i++) {
    if(result[chgIndex] === 1) {
        chgIndex = !chgIndex ? 1 : 0
        result[chgIndex] += 1;
        continue;
    }
    result[chgIndex] -= 1;
    result[chgIndex ? 0 : 1] += 1;
}
console.log(result[0] + "/" + result[1]);