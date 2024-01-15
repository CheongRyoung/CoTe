const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];
for (let i = 0; i < input.length-1; i++) {
    let splitInput = input[i].split(" ");
    const first = Number(splitInput[0]), last = Number(splitInput[1]);

    if (first % last === 0) {
        result.push("multiple")
    } else if (last % first === 0) {
        result.push("factor");
    } else {
        result.push("neither");
    }
}
console.log(result.join("\n"));