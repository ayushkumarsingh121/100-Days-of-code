// Q: 12
// Title:
// L0 - Greet User With Prompt Input

// Problem Statement:
// Write a function called greetUser that prompts the user to enter their name using the prompt() function. If the user enters a name, greet them with the message: "Hello, <name>!". If no name is provided (i.e., the user presses "Cancel" or enters an empty string), the function should use a default name "Guest" and greet them with: "Hello, Guest!".

// Requirements:

// Use a function expression.
// Ensure the function handles cases where the user cancels or leaves the input empty.

let greetUser = () => {
  let name = prompt("What is your name?")
  if(!name){
    name = "Guest"
  }
  console.log(`Hello ${name}`)
}

greetUser()