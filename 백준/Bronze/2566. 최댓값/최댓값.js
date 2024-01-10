const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().replace(/\r/g, "").split('\n');

const result = input.reduce((p, c, i) => {
    var r = {i: i, j:0, v: 0};
    c.split(" ").forEach((v, j) => {
        if(Number(v) > r.v) {
            r.j = j;
            r.v = v;
        } 
    })
    return r.v > p.v ? r : p;
}, {i: 0, j:0, v: 0});
console.log(result.v);
console.log(`${result.i+1} ${result.j+1}`);