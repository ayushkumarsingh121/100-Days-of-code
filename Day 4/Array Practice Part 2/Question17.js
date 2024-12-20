// ### Problem:

// Write a function that takes an array of numbers and returns a new array with only the elements greater than a given threshold.

// **Example Input**: `[1, 3, 5, 7, 9]`, Threshold = 5

// **Expected Output**: [7, 9]

let arr = [1, 3, 5, 7, 9];
let Threshold = 5

let newArr = []
for(let num of arr){
  if(num > Threshold){
    newArr.push(num)
  }
}
console.log(newArr)