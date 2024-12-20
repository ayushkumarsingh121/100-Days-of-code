// ### Problem: 11

// Write a program that calculates the sum of all elements in an array of numbers.

// **Example Input**: `[1, 2, 3, 4, 5]`

// **Expected Output**:
// 15

let numbers = [1,2,3,4,5];

let sum = 0
for(let num of numbers){
  sum = sum + num;
}
console.log(sum)