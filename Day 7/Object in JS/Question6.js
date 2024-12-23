// ### **6. Deleting a Property from an Object**

// **Question:**

// Given the object `person = { name: "Raj", age: 25, city: "Mumbai" }`, delete the `city` property and log the updated object.

// **Expected Output:**

// `{ name: "Raj", age: 25 }`


let person = {
  name: "Raj",
  age: 25, 
  city: "Mumbai" 
}

delete person.city

console.log(person)