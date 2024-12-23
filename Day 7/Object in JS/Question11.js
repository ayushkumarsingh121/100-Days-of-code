// ### **11. Nested Objects**

// **Question:**

// Create an object `student = { name: "Alice", address: { city: "London", country: "UK" } }`. Access and log the `city` property of the nested `address` object.

// **Expected Output:**

// `London`


let student = { 
  name: "Alice", 
  address: { 
    city: "London", 
    country: "UK" 
  } 
}

console.log(student.address["city"])