const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cents = [25, 10, 5, 1];

const result = []
for (let i = 1; i <= Number(input[0]); i++) {
    let change = Number(input[i]);
    result.push(cents.reduce((p, c ,i) => {
        const remain = change % c;
        p.push((change - remain) / c);
        change = remain;
        return p;
    }, []).join(" "));
}
console.log(result.join("\n"));