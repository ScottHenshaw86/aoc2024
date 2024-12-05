// Advent Of Code 2024 - Day #2: Part 2

console.time("execution time");
const fs = require("fs");

const input = fs
  .readFileSync("./sample.txt", "latin1")
  .trim()
  .split("\n")
  .map(line => line.split(" ").map(Number));

const testSafety = (list) => {
  const direction = Math.sign(list[0] - list[1]);

  for (let i = 1; i < list.length; i++) {
    const diff = list[i - 1] - list[i];
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3 || Math.sign(diff) !== direction) {
      return false;
    }
  }

  return true;
};

let numSafe = 0;

for (let line of input) {
  let isSafe = false;

  // Check original line
  if (testSafety(line)) {
    isSafe = true;
  } else {
    // Check variants with one element removed
    for (let i = 0; i < line.length; i++) {
      const newNumbers = [...line];
      newNumbers.splice(i, 1);
      if (testSafety(newNumbers)) {
        isSafe = true;
        break;
      }
    }
  }

  if (isSafe) numSafe += 1;
}

console.log("numSafe:", numSafe);
console.timeEnd("execution time");