// ### **Question 13: `splice`**

// Write a function that removes the second and third elements from an array and inserts the string `"new"` in their place.

// **Example:**
// const words = ["apple", "banana", "cherry", "date"];
// Expected output: ["apple", "new", "date"]


const words = ["apple", "banana", "cherry", "date"];

words.splice(1, 2, "new");
console.log(words);