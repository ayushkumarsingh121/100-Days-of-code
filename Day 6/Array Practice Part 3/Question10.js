// ### **Question 10: `sort`**

// Write a function that sorts an array of strings in descending alphabetical order.

// **Example:**
// const words = ["banana", "apple", "cherry", "date"];
// Expected output: ["date", "cherry", "banana", "apple"]


const words = ["banana", "apple", "cherry", "date"];
console.log(words.sort((a,b)=> b.localeCompare(a)))