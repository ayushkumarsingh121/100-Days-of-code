// ### **19. Object Property Short Syntax**

// **Question:**

// Create an object `employee = { name, age }` where `name = "Raj"` and `age = 35`. Log the object.

// **Expected Output:**

// `{ name: "Raj", age: 35 }`


let employee = { 
  name : this.name, 
  age : this.age 
}
employee.age = 35;
employee.name = "Raj"
console.log(employee)