// Advent Of Code 2024 - Day #4: Part 1
const fs = require("fs");

// Importing input data and splitting into an array of lines
const input = fs
  .readFileSync("./input.txt", "latin1")
  .trim()
  .split("\n");

/* 
console.log(input)
[
    COLUMNS
    0123456789
  0'MMMSXXMASM', 
  1'MSAMXMSMSA',
  2'AMXSXMAAMM', 
R 3'MSAMASMSMX',
O 4'XMASAMXAMM', 
W 5'XXAMMXXAMA',
S 6'SMSMSASXSS', 
  7'SAXAMASAAA',
  8'MAMMMXMMMM', 
  9'MXMXAXMASX'
]
*/

function checkForXmas(currentRow, currentCol, rowPlus, colPlus) {
  const first = input[currentRow][currentCol];
  const second = input[currentRow + rowPlus]?.[currentCol + colPlus];
  const third = input[currentRow + 2*rowPlus]?.[currentCol + 2*colPlus];
  const fourth = input[currentRow + 3*rowPlus]?.[currentCol + 3*colPlus];
  
  const str = first + second + third + fourth;
  if (str === "XMAS" || str === "SAMX") {
    return true;
  }
  return false;
}

let numXmas = 0;

const colLength = input[0].length;
for (let row = 0; row < input.length; row++) {
  for (let col = 0; col < colLength; col++) {
    const current = input[row][col];
    // left to right & right to left ←→
    if (checkForXmas(row, col, 0, 1)) {
      numXmas++;
    }

    // up to down & down to up ↑↓
    if (checkForXmas(row, col, 1, 0)) {
      numXmas++;
    }

    // diagonal to the left ↙↗
    if (checkForXmas(row, col, 1, -1)) {
      numXmas++;
    }

    // diagonal to the right ↘↖
    if (checkForXmas(row, col, 1, 1)) {
      numXmas++;
    }
  }
}

console.log("numXmas:", numXmas);