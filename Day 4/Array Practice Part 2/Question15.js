// ### Problem:15

// Write a program that reverses the elements of an array in-place (without using `reverse()` method).

// **Example Input**: `[1, 2, 3, 4, 5]`

// **Expected Output**: [5, 4, 3, 2, 1]

let arr = [1, 2, 3, 4, 5];

let newArr = []
for(let i=arr.length-1; i>=0; i--){
  newArr.push(arr[i])
}
console.log(newArr)