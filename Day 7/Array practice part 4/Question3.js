// ### **3. `filter` Method Advanced**

// ### **Question 3: `filter` with Nested Object**

// Write a function that filters out all users from an array of objects whose `age` is greater than 30 and their `status` is `"inactive"`.

// **Example:**
// const users = [
//   { name: 'John', age: 32, status: 'active' },
//   { name: 'Alice', age: 28, status: 'inactive' },
//   { name: 'Bob', age: 35, status: 'inactive' }
// ];
// // Expected output: [{ name: 'Bob', age: 35, status: 'inactive' }]

const users = [
  { name: 'John', age: 32, status: 'active' },
  { name: 'Alice', age: 28, status: 'inactive' },
  { name: 'Bob', age: 35, status: 'inactive' }
];

let data = users.filter((ele)=> {
  if(ele.age > 30 && ele.status === "inactive"){
    return true
  }
  else{
    return false
  }
})

console.log(data)