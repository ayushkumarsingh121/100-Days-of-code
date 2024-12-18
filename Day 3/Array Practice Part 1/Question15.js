// ### **15. Use `map()` and `forEach()`**

// **Question:**

// Given the array `[1, 2, 3, 4]`:

// 1. Use `map()` to create a new array with each element doubled. Print the new array.
// 2. Use `forEach()` to print each element of the array.

// **Expected Output Example:**

// Using map: [2, 4, 6, 8]
// Using forEach:
// 1
// 2
// 3
// 4


let arr = [1,2,3,4,5]
let doubledArr = arr.map((element)=>{
  return element*2
})
console.log(doubledArr)

arr.forEach((element)=>{
  console.log(element)
})