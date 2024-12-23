// ### **2. `map` Method Advanced**

// ### **Question 2: `map` with Object Transformation**

// Write a function that accepts an array of objects, where each object has a `name` and `age` property. Return a new array of strings that introduce the person by saying `"Name is X, age is Y"`, where X is the name and Y is the age.

// **Example:**
// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 }
// ];
// Expected output: ["John is 30", "Alice is 25", "Bob is 35"]

const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];

let data = people.map((ele, arr)=>{
  return `${ele.name} is ${ele.age}`
})

console.log(data)