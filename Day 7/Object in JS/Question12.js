// ### **12. Modifying Nested Object Properties**

// **Question:**

// Given the object `user = { profile: { name: "Ayush", age: 19 } }`, change the `name` property inside `profile` to `"Ravi"`. Log the updated object.

// **Expected Output:**

// `{ profile: { name: "Ravi", age: 19 } }`

let user = { 
  profile: { 
    name: "Ayush", 
    age: 19 
  } 
}

user.profile["name"] = "Ravi"

console.log(user)