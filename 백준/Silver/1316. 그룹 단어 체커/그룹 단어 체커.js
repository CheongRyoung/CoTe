const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;
for(let i=0; i<Number(input[0]); i++) {
    const word = input[i+1].toString();
    const temp = [];
    let isGroupCheck = true;
    
    for(let i=0; i<word.length; i++) {
        if(temp.includes(word[i]) && word[i - 1] !== word[i] && i !== 0) {
            isGroupCheck = false;
        } else {
            temp.push(word[i]);
        }
    }
    
    if(isGroupCheck) {
        count += 1;
    }
}
console.log(count);