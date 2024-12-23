// ### **10. Iterating Through an Object with for...in**

// **Question:**

// Given the object `person = { name: "John", age: 30, city: "New York" }`, use a `for...in` loop to log each key.

// **Expected Output:**
// name
// age
// city

let person = { 
  name: "John", 
  age: 30, 
  city: "New York" 
}

for(let key in person){
  console.log(key) 
}


// key = Object.keys(objectName)
// obj[key] = Object.values(objectName)