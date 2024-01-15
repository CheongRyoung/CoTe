const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

let r = 1;
let c = 1;
while(N > c) {
    c += 6 * r;
    r++;
}
console.log(r);