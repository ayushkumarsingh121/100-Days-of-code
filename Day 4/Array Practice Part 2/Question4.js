// ### Problem: 4

// Write a program that loops through an array of strings and prints each string in uppercase. Use a `for` loop.

// **Example Input Array**: `["apple", "banana", "cherry"]`

// **Expected Output**:
// APPLE
// BANANA
// CHERRY

let fruits = ["apple", "banana", "cherry"];

// Using for...of loops
for(let fruit of fruits){
  console.log(fruit.toUpperCase())
}


// Using for loops
for(let i=0; i<fruits.length; i++){
  console.log(fruits[i].toUpperCase())
}