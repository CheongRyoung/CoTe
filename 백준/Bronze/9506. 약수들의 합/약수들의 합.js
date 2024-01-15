const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length-1; i++) {
    const n = Number(input[i]);
    let result = findPNum(n);
    if(result.reduce((p, c) => {return p+c;}, 0) === n) {
        console.log(`${n} = ${result.join(" + ")}`);
    } else {
        console.log(`${n} is NOT perfect.`);
    }
}

function findPNum(num) {
    let result = [];
    let current = 1;
    while(current <= num /2) {
        if(num % current === 0) {
            result.push(current)
        }
        current++;
    }
    return result;
}

