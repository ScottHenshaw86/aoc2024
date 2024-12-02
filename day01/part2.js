// Advent Of Code 2024 - Day #1: Part 2
console.time("execution time");
const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf8")
  .split(/[\n]/g)
  .map((line) => line.split("   "));

const leftList = [], rightList = [];

input.forEach(([left, right]) => {
  leftList.push(Number(left));
  rightList.push(Number(right));
})

let similarityScore = 0;

for (let num of leftList) {
  // find the number of matches in the Right list
  const numMatches = rightList.filter((x) => x === num).length;
  similarityScore += num * numMatches;
}

console.log("similarityScore:", similarityScore);
console.timeEnd("execution time");