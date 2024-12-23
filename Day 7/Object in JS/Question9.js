// ### **9. Using Object.entries()**

// **Question:**

// Given the object `product = { id: 1, name: "Laptop", price: 1000 }`, use `Object.entries()` to log the entries (key-value pairs) of the object.

// **Expected Output:**

// `[["id", 1], ["name", "Laptop"], ["price", 1000]]`


let product = { 
  id: 1, 
  name: "Laptop", 
  price: 1000 
}

console.log(Object.entries(product))