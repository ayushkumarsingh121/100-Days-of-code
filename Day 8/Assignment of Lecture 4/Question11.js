// Q: 11
// Title: L0 - Convert to Arrow Function with Default Parameters

// Problem Statement: You are provided with a function multiply(a, b) that multiplies two numbers. Your task is to rewrite this function using arrow function syntax with a slight enhancement: include default parameters for both a and b. If no values are passed, a and b should default to 1.

// Function Given:

// function multiply(a , b ) {

// return a * b; }

// You need to:

// Write the arrow function equivalent of the given function.
// Use default values for the parameters.
// Example Input:

// multiply(3, 4)

// Example Output:

// 12

// Example Input (with defaults):

// multiply()

// Example Output (with defaults):

// 1


let multiply = (a = 1, b = 1) => {
  return a*b;
}
console.log(multiply(3,4))

console.log(multiply())