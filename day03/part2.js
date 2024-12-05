// Advent Of Code 2024 - Day #3: Part 1
const fs = require("fs");

// Importing and formatting data
const input = fs
  .readFileSync("./input.txt", "latin1");

  // mul(xxx,xxx)
const regex = /mul\([1-9][0-9]{0,2},[1-9][0-9]{0,2}\)|do\(\)|don't\(\)/g;

const matches = [...input.matchAll(regex)].map(x => x[0]);

const pairs = matches.map(m => {
  return m.replace("mul(", "").replace(")", "").split(",");
})

let total = 0;
let enabled = true;
let countDisabled = 0;
let countEnabled = 0;
for (let pair of pairs) {
  if (pair[0] === "don't(") {
    countDisabled++;
    
    enabled = false;
  } else if (pair[0] === "do(") {
    countEnabled++;
    enabled = true;
  } else {
    const a = Number(pair[0])
    const b = Number(pair[1])

    if (enabled) {
      total += a * b;
    } 
  }
}
console.log("Disabled:", countDisabled)
console.log("Enabled:", countEnabled)
console.log(total);