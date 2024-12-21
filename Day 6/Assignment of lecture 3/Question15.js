// Q: 15
// Title:
// L2 - Dynamic Object Methods for Sentence Generation

// Problem Statement:
// You are tasked with building an object called sentenceBuilder that dynamically generates a sentence based on its properties and methods. The object should have the following structure:

// Properties:
// subject: A string representing the subject of the sentence (e.g., "I", "The cat").
// verb: A string representing the action (e.g., "am", "is running").
// object: A string representing the object of the sentence (e.g., "coding", "on the roof").
// Methods:
// buildSentence(): This method should return a full sentence in the format: "subject verb object". If any of the properties (subject, verb, object) are missing, it should return a default sentence: "Incomplete sentence".
// updateProperty(property, value): This method should allow the user to update any of the properties (subject, verb, or object) dynamically using string concatenation. It should check if the property exists, and update it, otherwise return "Invalid property".
// Additional Constraints:
// Use ternary operators to check if properties are present when building the sentence.
// Use string concatenation to form the sentence.
// Example:
// Initial Object Structure:

// let sentenceBuilder = {
//   subject: "I",
//   verb: "am",
//   object: "coding",
//   buildSentence: function() { ... },
//   updateProperty: function(property, value) { ... }
// };

// Example 1:

// sentenceBuilder.buildSentence();
// Expected Output:

// "I am coding"
// Example 2:

// sentenceBuilder.updateProperty("verb", "am learning");
// sentenceBuilder.buildSentence();

// Expected Output:

// "I am learning coding"

// Example 3:

// sentenceBuilder.updateProperty("subject", "The cat");
// sentenceBuilder.buildSentence();

// Expected Output:

// "The cat is learning coding"

// Example 4:

// sentenceBuilder.updateProperty("mood", "happy");

// Expected Output:

// "Invalid property"

// Example 5:

// sentenceBuilder.updateProperty("verb", "");
// sentenceBuilder.buildSentence();

// Expected Output:

// "Incomplete sentence"