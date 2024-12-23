// ### **17. Changing Object Property with Dynamic Key**

// **Question:**

// Create an object `person = { name: "Alice", age: 25 }`. Use a dynamic key to add a new property `job`. Log the updated object.

// **Expected Output:**

// `{ name: "Alice", age: 25, job: "Engineer" }`

let person = { 
  name: "Alice", 
  age: 25 
}

person.job = "Engineer";
console.log(person)