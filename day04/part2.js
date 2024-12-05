// Advent Of Code 2024 - Day #4: Part 2

const fs = require("fs");

const input = fs
  .readFileSync("./sample.txt", "latin1")
  .trim()
  .split("\n");

let numXmas = 0;
const colLength = input[0].length;
for (let row = 0; row < input.length; row++) {
  for (let col = 0; col < colLength; col++) {
    const current = input[row][col];
    if (current !== "A") {
      continue;
    }

    const upLeft = input[row-1]?.[col-1];
    const upRight = input[row-1]?.[col+1];
    const downLeft = input[row+1]?.[col-1];
    const downRight = input[row+1]?.[col+1];

    const line1 = upLeft + current + downRight;
    const line2 = upRight + current + downLeft;

    if ((line1 === "MAS" || line1 === "SAM") && (line2 === "MAS" || line2 === "SAM")) {
      numXmas++;
    }
  }
}

console.log("numXmas:", numXmas);
// console.timeEnd("execution time");