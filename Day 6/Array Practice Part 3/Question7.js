// ### **Question 7: `findIndex`**

// Write a function that finds the index of the first element that is an even number greater than 10.

// **Example:**
// const numbers = [1, 3, 6, 11, 20];
// Expected output: 4

const numbers = [1, 3, 6, 11, 20];
let result = numbers.findIndex(numbers => numbers > 10 && numbers % 2 == 0)
console.log(result)
console.log(numbers[result])