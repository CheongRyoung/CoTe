const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().replace(/\r/g, "").split('\n');

let iByOut = 0;
let str = '';
while(true) {
    let isBreak = true;
    for (let i = 0; i < input.length; i++) {
        const c = input[i].toString().charAt(iByOut);
        str += c; 
        if(c) {
            isBreak = false;
        }
    }
    iByOut++;
    if(isBreak) {
        break;
    }
}
console.log(str);
