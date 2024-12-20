// ### Problem: 5

// Create an array with at least 3 elements. Add two more elements at the end using the `push()` method, and then remove the last element using the `pop()` method. Print the final array.

// **Example Input**: `[1, 2, 3]`

// **Steps**:

// - Push `4` and `5` to the array.
// - Pop the last element.

// **Expected Output**:
// [1, 2, 3, 4]

let arr = [1,2,3];
arr.push(4,5)
console.log(arr)

arr.pop()
console.log(arr)