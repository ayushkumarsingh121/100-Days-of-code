// ### **9. Combine Two Arrays**

// **Question:**

// Merge the arrays `["One", "Two"]` and `["Three", "Four"]` into a single array and print it.

// **Expected Output Example:**
// ["One", "Two", "Three", "Four"]

let arr1 = ["One", "Two"]
let arr2 = ["Three", "Four"]

let mergeArr = [...arr1, ...arr2]
console.log(mergeArr)

let otherMergeArr = arr1.concat(arr2)
console.log(otherMergeArr)
