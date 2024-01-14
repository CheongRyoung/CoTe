const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, B] = input[0].split(" ");
const number = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let result = 0;
const reverseN = N.split('').reverse();
for (let i = N.length-1; 0 <= i; i--) {
    const pow = Math.pow(Number(B), i);
    const findNum = number.indexOf(reverseN[i]);
    result += findNum * pow;
}
console.log(result);
