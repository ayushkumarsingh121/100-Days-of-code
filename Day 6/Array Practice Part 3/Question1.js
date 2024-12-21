// ### **Question 1: `forEach`**

// Write a function that accepts an array of strings and logs the length of each string along with the string itself.

// **Example:**
// const fruits = ["apple", "banana", "cherry"];
// Expected output:
// apple: 5
// banana: 6
// cherry: 6

const fruits = ["apple", "banana", "cherry"];

for(let fruit of fruits){
  console.log(fruit.length)
}