// ### **8. Check if an Array Contains a Specific Element**

// **Question:**

// Write a program to check if the array `["Lion", "Tiger", "Elephant"]` contains the element "Tiger". Print `true` or `false`.

// **Expected Output Example:**
// true

let animals = ["Lion", "Tiger", "Elephant"];

// for(let i=0; i<animals.length; i++){
//   if(animals[i] === "Tiger"){
//     console.log(true)
//     break
//   }
// }

console.log(animals.includes("Tiger"))