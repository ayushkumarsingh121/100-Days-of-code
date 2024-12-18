// Q: 14
// Title:
// L1 - Debugging Array Operations

// Problem Statement:
// You are given a program that manipulates an array of favorite fruits. However, it has a bug! Your task is to debug and fix it.

// Code:

// const fruits = ["Apple", "Banana", "Cherry"];  
// fruits.pop();  
// fruits[3] = "Orange";  
// console.log(fruits);  
// Steps:

// Analyze the provided code to identify the issue.
// Fix the bug and ensure the program correctly adds "Orange" to the array.
// Print the corrected array.
// Expected Output:
// ["Apple", "Banana", "Orange"]

// Constraints:

// Explain the issue in comments before the fix.
// Use appropriate array methods to solve the problem.


// According to this question number 14 cherry is already deleted by using pop() array methods and now we are adding orange is which is good but we putting wrong index no. insted of 3 we have to put 2 becasue index starts from 0 so 0 is for Apple 1 is for Banana and 2 is for Orange 

const fruits = ["Apple", "Banana", "Cherry"];  
fruits.pop();  
fruits[2] = "Orange";  
console.log(fruits);  
