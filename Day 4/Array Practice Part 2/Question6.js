// ### Problem: 6

// Create an array with 3 elements. Use the `shift()` method to remove the first element and the `unshift()` method to add a new element at the beginning of the array. Print the final array.

// **Example Input**: `["apple", "banana", "cherry"]`

// **Expected Steps**:

// - Shift the first element.
// - Unshift a new element `"mango"` at the beginning.

// **Expected Output**:
// ["mango", "banana", "cherry"]

let fruits = ["apple", "banana", "cherry"];
fruits.shift()
console.log(fruits)

fruits.unshift("mango")
console.log(fruits)