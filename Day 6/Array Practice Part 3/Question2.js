// ### **Question 2: `map`**

// Write a function that accepts an array of numbers and returns a new array with each number squared.

// **Example:**
// const nums = [1, 2, 3, 4];
// Expected output: [1, 4, 9, 16]

const nums = [1, 2, 3, 4];

let squaredNum = nums.map((ele) => ele*ele)
console.log(squaredNum)