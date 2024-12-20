// ### Problem:

// Write a function that finds and returns the smallest value in an array of numbers without using `Math.min()`.

// **Example Input**: `[10, 20, 5, 25, 15]`

// **Expected Output**: 5


let numbers = [10, 20, 5, 25, 15];

let smallestNum = numbers[0]
for(let num of numbers){
  if(num < smallestNum){
    smallestNum = num
  }
}
console.log(smallestNum)
