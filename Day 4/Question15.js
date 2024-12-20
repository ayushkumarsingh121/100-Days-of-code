// Q: 15
// Title:
// L1 - Create a Number Pyramid with Break and Continue

// Problem Statement:
// Write a program that prints a pyramid of numbers, but with the following twist:

// Use a nested for loop to generate the pyramid.
// The number of rows in the pyramid should be based on user input (between 1 and 10).
// Skip printing numbers that are divisible by 3 using the continue statement.
// Stop the pyramid when you reach a row that contains a number divisible by 7 using the break statement.
// Example of input/output:

// Input Example:

// Enter number of rows (1-10): 5
// Output Example:

// 1
// 1 2
// 1 2
// 1 2 4
// 1 2 4 5
// In this example, the loop skips the numbers divisible by 3 and stops once a row contains a number divisible by 7.


let pyramid = (userInput) => {
  for (let i = 0; i < userInput; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      if (i % 3 == 0 || j % 3 == 0) {
        continue; 
      }
      if (i % 7 == 0 || j % 7 == 0) {
        break; 
      }
      // row += j + " "; // Append j to the current row
    }
    // if (row) {
    //   console.log(row.trim());
    // }
  }
};

// Call the function
pyramid(10);
