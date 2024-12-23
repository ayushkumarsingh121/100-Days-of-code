// ### **Question 1: `forEach` Advanced**

// Write a function that accepts an array of strings and logs each string's **first character** and **last character**. If the string has only one character, just log that character.

// **Example:**
// const fruits = ["apple", "banana", "kiwi", "cherry"];
// Expected output:
// a - e
// b - a
// k - i
// c - y

const fruits = ["apple", "banana", "kiwi", "cherry"];

let output = fruits.forEach((ele, index)=> {
  console.log(`${ele[0]} - ${ele[ele.length-1]}`)
}) 