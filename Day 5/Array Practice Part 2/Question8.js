// ### Problem: 8*

// Write a function that removes duplicate values from an array. Do not use the `Set` object. Implement it using a loop and a condition to check if the element is already in the new array.

// **Example Input**: `[1, 2, 3, 2, 4, 1]`

// **Expected Output**:
// [1, 2, 3, 4]

let arr = [1, 2, 3, 2, 4, 1];
// let newArr = [...new Set(arr)]
// console.log(newArr)

let newArr = []
for(let i=0; i<arr.length; i++){
  if (!newArr.includes(arr[i])){
    newArr.push(arr[i])
  }
}
console.log(newArr)