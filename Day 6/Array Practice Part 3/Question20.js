// ### **Question 20: Complex Operation**

// Write a function that:

// - Doubles the value of all numbers greater than 5 in an array.
// - Removes all numbers less than or equal to 5.
// - Returns the modified array.

// **Example:**
// const nums = [3, 6, 2, 8, 4, 7];
// Expected output: [12, 16, 14]

const nums = [3, 6, 2, 8, 4, 7]

let arr = []
for(let num of nums){
  if(num >= 5){
    arr.push(num*2)
  }
}
console.log(arr)
