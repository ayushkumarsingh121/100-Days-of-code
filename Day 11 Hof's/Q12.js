// Q: 12
// L0 - Basic Callback Demonstration
// Problem Statement:
// You are building a simple simulation of user interaction on a website. Write a function called displayMessage that takes a name and displays a greeting message ("Hello, <name>!"). Create another function called getUserInput that accepts a callback. This function should simulate retrieving a username after 1 second and then call the callback with the retrieved name.

// Steps:

// Define the displayMessage function to output a greeting.
// Define the getUserInput function that simulates fetching a username ("Alice") and calls displayMessage as a callback after 1 second.

function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

function getUserInput(callback) {
  setTimeout(() => {
    const username = "Alice";
    callback(username);
  }, 1000);
}

getUserInput(displayMessage);
