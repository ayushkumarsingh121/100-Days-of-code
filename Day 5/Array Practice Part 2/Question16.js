// ### Problem:

// Write a program that takes an array of strings and prints the length of each string.

// **Example Input**: `["apple", "banana", "cherry"]`

// **Expected Output**: 5
// 6
// 6

let arr = ["apple", "banana", "cherry"];

for(let fruit of arr){
  console.log(fruit.length)
}

for(let i=0; i<arr.length; i++){
  console.log(arr[i].length) 
}