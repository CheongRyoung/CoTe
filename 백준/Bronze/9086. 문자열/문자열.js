const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); ///dev/stdin

for(let i=0; i<inputs[0]; i++) {
    const input = inputs[i+1].split("");
    console.log(input[0]+input[input.length-1]);
}
