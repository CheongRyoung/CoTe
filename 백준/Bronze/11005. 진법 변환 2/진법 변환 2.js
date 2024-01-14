const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, B] = input[0].split(" ");
const number = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let num = Number(N);
let result = [];
while(true) {
    const remain = num % Number(B);
    num = (num-remain) / Number(B);
    result.unshift(number[remain]);
    if(num === 0) {
      break; 
    }
}
console.log(result.join(''));
