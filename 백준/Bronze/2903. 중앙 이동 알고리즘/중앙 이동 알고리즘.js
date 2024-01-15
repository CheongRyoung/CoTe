const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

let c = 2;
let p = 1;
for (let i = 1; i <= N; i++) {
    c = c + p;
    p = c - 1;
}
console.log(c * c);