// ### **Question 6: `find`**

// Write a function that finds the first number greater than 100 in an array of numbers.

// **Example:**
// const nums = [50, 75, 120, 85, 200];
// Expected output: 120



const nums = [50, 75, 120, 85, 200];
let result = nums.find(number => number > 100)
console.log(result)