// ### 10. **Array Maximum Value**

// ### Problem:

// Write a function that takes an array of numbers and returns the maximum value. Do not use `Math.max()`. You can solve it by iterating through the array.

// **Example Input**: `[10, 5, 20, 15, 25]`

// **Expected Output**:
// 25

let numbers = [10, 5, 20, 15, 25];

// Using for...of loop
let maxNum = 0
for(let num of numbers){
  if(num >= maxNum){
    maxNum = num
  }
}
console.log(maxNum)



// Using for loop
for(let i=0; i<numbers.length; i++){
  if(numbers[i] >= maxNum){
    maxNum = numbers[i]
  }
}
console.log(maxNum)