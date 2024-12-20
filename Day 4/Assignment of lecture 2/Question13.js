// Q: 13
// Title:
// L0 - Simple Pattern with For Loop

// Problem Statement:
// Write a program that uses a for loop to print the following pattern of stars:

// *
// **
// ***
// ****
// *****
// Each row should contain an increasing number of stars, starting from 1 star in the first row up to 5 stars in the last row. Use the newline character (\n) to print each line.

for(let i=1; i<=5; i++){
  let str = "";
  for(let j=1; j<=i; j++){
    str += "*"
  }
console.log(str)
}