// ### **Question 8: `every`**

// Write a function that checks if all elements in an array are positive numbers.

// **Example:**
// const numbers = [1, 3, 5, 7];
// Expected output: true

const numbers = [1, 3, 5, 7];
let result = numbers.every(numbers => numbers >= 0)
console.log(result)