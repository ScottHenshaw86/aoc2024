// Advent Of Code 2024 - Day #1: Part 1
console.time("execution time");
const fs = require("fs");

// import my puzzle input, split into lines, and split each line into left and right
const input = fs
  .readFileSync("./input.txt", "latin1")
  .split(/[\n]/g)
  .map((line) => line.split("   "));

// console.log(input);
// [
//   [ '3', '4' ],
//   [ '4', '3' ],
//   [ '2', '5' ],
//   [ '1', '3' ],
//   [ '3', '9' ],
//   [ '3', '3' ]
// ]

  const leftList = [], rightList = [];

  // I use forEach instead of map because it doesn't need to return anything. Just side-effects
  input.forEach(([left, right]) => {
    leftList.push(Number(left));
    rightList.push(Number(right));
  })

  // console.log(leftList)  // [ 3, 4, 2, 1, 3, 3 ]
  // console.log(rightList) // [ 4, 3, 5, 3, 9, 3 ]
  
  leftList.sort((a, b) => b - a);
  rightList.sort((a, b) => b - a);
  // I put the smallest numbers at the end so I can pop() them off
  // pop() is more efficient than shift() because it doesn't have to re-index the whole array

let total = 0;

// pop off the smallest numbers and add the difference to the total until there are no numbers left
while (leftList.length > 0) {
  const minLeft = leftList.pop();
  const minRight = rightList.pop();
  const difference = Math.abs(minRight - minLeft);
  total += difference;
}

console.log("Total:", total);
console.timeEnd("execution time");