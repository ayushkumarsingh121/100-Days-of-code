// ### **Question 16: Array Destructuring**

// Write a function that extracts the first two elements from an array and stores the remaining elements in another variable using array destructuring.

// **Example:**
// const arr = [10, 20, 30, 40];
// Expected output: first element: 10, second element: 20, rest: [30, 40]

const arr = [10, 20, 30, 40];

const [a, b, ...rest] = arr;
console.log(`First element: ${a}`); 
console.log(`Second element: ${b}`);
console.log(`Rest: ${rest}`); 
