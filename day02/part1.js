// Advent Of Code 2024 - Day #2: Part 1

console.time("execution time");
const fs = require("fs");

// Importing and formatting data
const input = fs
  .readFileSync("./sample.txt", "latin1")
  .trim()
  .split("\n")
  .map(line => line.split(" ").map(Number));

// console.log(input)
// [
//   [ 7, 6, 4, 2, 1 ],
//   [ 1, 2, 7, 8, 9 ],
//   [ 9, 7, 6, 2, 1 ],
//   [ 1, 3, 2, 4, 5 ],
//   [ 8, 6, 4, 4, 1 ],
//   [ 1, 3, 6, 7, 9 ]
// ]

// This function checks if the report is "safe"
const testSafety = (list) => {
  const direction = Math.sign(list[0] - list[1]); // -1 for ascending, 1 for descending, 0 for same value

  for (let i = 1; i < list.length; i++) {
    const diff = list[i - 1] - list[i]; // list[i-1] is my "previous" element, list[i] is my "current" element
    // I use Math.abs so I can handle ascending and descending together. Just gotta also check that directions are the same
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3 || Math.sign(diff) !== direction) {
      return false;
    }
  }

  // If it got to here, that means there are no invalid levels, so it's safe!
  return true;
};

let numSafe = 0;

// Loop through the input and test each report
for (let report of input) {
  if (testSafety(report)) {
    numSafe++;
  }
}

console.log("numSafe:", numSafe);
console.timeEnd("execution time");