// 4. Filter Numbers Greater Than a Value
// Write a function filterGreaterThan(arr, num) that returns an array containing only the numbers from arr that are greater than num. Complete the function below:

function filterGreaterThan(arr, num) {
  // Your code here
  let nArr = []
  for(let i=0; i<arr.length; i++){
    if(arr[i] > num){
      nArr.push(arr[i])
    }
  }
  return nArr
}

console.log(filterGreaterThan([10, 15, 20, 5], 12)); // Expected output: [15, 20]
