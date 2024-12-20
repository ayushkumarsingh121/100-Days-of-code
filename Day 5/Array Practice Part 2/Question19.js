// ### Problem:19

// Write a program that removes a specific element from an array (e.g., `"banana"`) and returns the modified array.

// **Example Input**: `["apple", "banana", "cherry"]`, Element to Remove = `"banana"`

// **Expected Output**: ["apple", "cherry"]


let arr = ["apple", "banana", "cherry"];

arr.splice(1,1)
console.log(arr)