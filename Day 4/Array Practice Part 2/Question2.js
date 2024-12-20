// ### Problem: 2

// Write a program that takes an array of any length and prints the last element of the array without directly referencing the index. Use the `length` property to find the last element.

// **Expected Output**:

// For the array `[10, 20, 30, 40]`, the output should be:
// 40
// For the array [100, 200], the output should be:
// 200

let arr = [10, 20, 30, 40];
console.log(arr[arr.length-1])