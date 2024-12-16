// 2. Count Occurrences of an Element
// Write a function countOccurrences(arr, target) that counts how many times target appears in the array arr. Complete the function below:

function countOccurrences(arr, target) {
  // Your code here
  let count = 0
  for(let i=0; i<arr.length; i++){
    if(arr[i] == target){
      count++
    }
  }
  return count
}

console.log(countOccurrences([1, 2, 3, 1, 1, 2], 1)); // Expected output: 3
