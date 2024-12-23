// ### **20. Combining Multiple Objects**

// **Question:**

// Given the two objects `obj1 = { a: 1, b: 2 }` and `obj2 = { c: 3, d: 4 }`, combine them into a single object using `Object.assign()` and log the result.

// **Expected Output:**

// `{ a: 1, b: 2, c: 3, d: 4 }`


let obj1 = { 
  a: 1, 
  b: 2 
}

let obj2 = { 
  c: 3, 
  d: 4 
}


console.log(Object.assign(obj1, obj2))