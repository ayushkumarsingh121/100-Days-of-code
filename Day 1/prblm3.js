// 3. Merge Two Arrays
// Write a function mergeArrays(arr1, arr2) that takes two arrays and returns a single array containing all elements from both arrays. Complete the function below:

function mergeArrays(arr1, arr2) {
  // Your code here
  let mergeArr = [...arr1, ...arr2]
  return mergeArr
}

console.log(mergeArrays([1, 2], [3, 4])); // Expected output: [1, 2, 3, 4]
