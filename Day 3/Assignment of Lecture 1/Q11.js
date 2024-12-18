// Q: 11
// Problem Set: Revisiting JS: Arrays, Strings & Objects
// Title:
// L0 - Managing a To-Do List

// Problem Statement:
// Create a simple to-do list using an array.

// Steps:

// Declare an array called toDoList with three initial tasks: "Wake up", "Brush teeth", and "Have breakfast".
// Add a new task, "Go for a walk", to the end of the array.
// Remove the last task from the array.
// Print the updated array.
// Constraints:

// Use only array methods to manipulate the list.
// Ensure that all steps are followed sequentially.

let toDoList = ["Wake up", "Brush teeth", "Have breakfast"];
console.log(toDoList)

toDoList.push("Go for a walk")
console.log(toDoList)

toDoList.pop()
console.log(toDoList)