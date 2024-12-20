// ### Problem: 1

// Write a program that creates an array of 5 numbers. Then, access and print the third element in the array. If the third element doesn't exist, print `"Element not found"`.

// **Expected Output**:

// If the array is `[1, 2, 3, 4, 5]`, the output should be:

// ```
// 3
// ```

// If the array is smaller than 3 elements, the output should be:
// Element not found

let arr = [1,2,3,4,5];

if(arr.length >= 3){
  console.log(arr[2])
}
else{
  console.log("Element not found")
}