const fs = require('fs');
const S = fs.readFileSync("/dev/stdin").toString().trim(); ///dev/stdin

const words = S.toLowerCase();
let map = words.split("")
    .reduce((p, c,i) => {
        let value = p.get(c);
        value = value ? value + 1 : 1;
        p.set(c, value);
        return p;
}, new Map());
const mapToArray = [...map];
mapToArray.sort((a, b) => b[1] - a[1]);
if(mapToArray.length === 1 || mapToArray[0][1] !== mapToArray[1][1]) {
    console.log(mapToArray[0][0].toUpperCase()); 
} else {
    console.log("?"); 
}