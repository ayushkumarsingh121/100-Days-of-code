// ### **11. Remove Duplicates from an Array**

// **Question:**

// Write a program to remove duplicates from the array `[1, 2, 2, 3, 4, 4]` and print the unique elements.

// **Expected Output Example:**
// [1, 2, 3, 4]

let arr = [1, 2, 2, 3, 5, 4, 4]
let updatedArr = [...new Set(arr)]
console.log(updatedArr)