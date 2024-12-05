// Advent Of Code 2024 - Day #3: Part 1

console.time("execution time");
const fs = require("fs");

// Importing and formatting data
const input = fs
  .readFileSync("./sample.txt", "latin1");

const regex = /mul\([1-9][0-9]{0,2},[1-9][0-9]{0,2}\)/g;

const matches = [...input.matchAll(regex)].map(x => x[0]);
console.log(matches);

const pairs = matches.map(match => {
  return match.replace("mul(", "").replace(")", "").split(",");
})

console.log(pairs);

let total = 0;
for (let pair of pairs) {
  const a = Number(pair[0])
  const b = Number(pair[1])
  total += a * b;
}

console.log(total);
console.log(pairs);

console.timeEnd("execution time");