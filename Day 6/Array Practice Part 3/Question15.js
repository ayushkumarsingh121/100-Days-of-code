// ### **Question 15: Spread Operator**

// Write a function that combines three arrays `[1, 2]`, `[3, 4]`, and `[5, 6]` using the spread operator.

// **Example:**
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = [5, 6];
// Expected output: [1, 2, 3, 4, 5, 6]

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

console.log([...arr1, ...arr2, ...arr3])