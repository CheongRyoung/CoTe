const fs = require('fs');
const S = fs.readFileSync("/dev/stdin").toString().trim(); ///dev/stdin

const words = S.toLowerCase();
const object = {}
words.split("").forEach((v) => {object[v] = object[v] ? object[v]+1 : 1})
const maxCnt = Math.max(...Object.values(object));
const filterWords = Object.keys(object).filter((v) => object[v] === maxCnt);
console.log(filterWords.length > 1 ? "?" : filterWords[0].toUpperCase());