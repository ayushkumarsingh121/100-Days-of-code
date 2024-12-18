// Q: 12
// Title:
// L0 - String Replacements Made Easy

// Problem Statement:
// Manipulate a string to create a personalized greeting message.

// Steps:

// Declare a string variable baseMessage with the value "Hello, [Name]!".
// Replace [Name] in the string with your own name.
// Print the updated string.
// Constraints:

// Use string concatenation or basic string methods for the replacement.

let replaceName = (Name) => {
  let baseMessage = "Hello, [Name]!";
  let personalizedMessage = baseMessage.replace("[Name]", Name); // Syntax: string.replace(searchValue, newValue)
  return personalizedMessage;
};

console.log(replaceName("Ayush"));
