// ### **Question 9: `some`**

// Write a function that checks if there is at least one number in an array that is divisible by 3.

// **Example:**
// const nums = [4, 8, 15, 20];
// Expected output: true

const nums = [4, 8, 15, 20];
let result = nums.some(numbers => numbers % 3 == 0)
console.log(result)
