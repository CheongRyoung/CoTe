const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().replace(/\r/g, "").split('\n');

const [N, M] = input[0].split(" ");

const result = [];

for(let i=1; i<input.length; i++) {
    const elements = input[i].split(" ");
    if(result.length === Number(N)) {
        const resultElelments = result[i - Number(N) - 1];
        result[i - Number(N) - 1] = resultElelments.map((element, index) => {
            return Number(element) + Number(elements[index]);
        })
    } else {
        result.push(elements);
    }
}
const out = result.reduce((p, c, i) => {
    if(p) {
        p += "\n";
    }
    p += c.join(" ");
    return p;
}, "");
console.log(out);