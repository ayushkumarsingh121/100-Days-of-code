// ### **13. Checking if a Property Exists in an Object**

// **Question:**

// Given the object `person = { name: "John", age: 30 }`, check if the property `name` exists in the object.

// **Expected Output:**

// `true`

let person = { 
  name: "John", 
  age: 30 
}

console.log(Object.keys(person).includes("name"))