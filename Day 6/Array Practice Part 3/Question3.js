// ### **Question 3: `filter`**

// Write a function that filters out all strings from an array that are shorter than 5 characters.

// **Example:**
// const words = ["cat", "elephant", "dog", "giraffe", "bird"];
// Expected output: ["elephant", "giraffe"]

const words = ["cat", "elephant", "dog", "giraffe", "bird"];

let finalArr = words.filter((ele, i) => ele.length >= 5)

console.log(finalArr)