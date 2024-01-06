const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const gradeScore = {
    "A+":	4.5,
    "A0":	4.0,
    "B+":	3.5,
    "B0":	3.0,
    "C+":	2.5,
    "C0":	2.0,
    "D+":	1.5,
    "D0":	1.0,
    "F":	0.0,
    "P":	0.0,
}

const result = input.reduce((p, c, i) => {
    const [subject, grade, score] = c.replace(/\n\r/g, "").split(" ");
    p.totalScore += Number(grade) * gradeScore[score];
    p.totalGrade += score === 'P' ? 0 : Number(grade);
    if(i === input.length - 1) {
        return p.totalScore / p.totalGrade;
    } else {
        return p;
    }
}, {totalScore: 0, totalGrade: 0})
console.log(result);