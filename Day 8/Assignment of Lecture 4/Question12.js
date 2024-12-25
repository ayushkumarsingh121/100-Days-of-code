// Q: 12
// Title:
// L0 - Square and Cube of a Number with Implicit Return

// Problem Statement:
// Write an arrow function that takes a number as input and returns both its square and cube in an object, using implicit return. The function should be as concise as possible.

// Requirements:
// The arrow function should use implicit return (no curly braces or return keyword).
// The function should return an object in the format { square, cube }.
// Example Input:

// 5

// Example Output:

// { square: 25, cube: 125 }


let operation = (num) => {
  let square = num*num;
  let cube = num*num*num
  console.log(`{ square : ${square}, cube : ${cube}}`)
} 

operation(5)


