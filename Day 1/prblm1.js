// 1. Find Sum of Even Numbers
// Write a function sumEvenNumbers(arr) that takes an array of numbers and returns the sum of all even numbers. Complete the function below:

function sumEvenNumbers(arr) {
  // Your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Expected output: 12
