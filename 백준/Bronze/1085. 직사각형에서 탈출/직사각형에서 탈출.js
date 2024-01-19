const fs = require('fs');
const S = fs.readFileSync("/dev/stdin").toString().trim().split(" "); ///dev/stdin

const [x, y, w, h] = S;

const a = Number(w) - Number(x);
const b = Number(h) - Number(y);
const c = Number(x);
const d = Number(y);
console.log(Math.min(a, b, c, d));