const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim();
const input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g,'a').length);