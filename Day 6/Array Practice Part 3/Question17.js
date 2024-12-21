// ### **Question 17: Iterating Over 2D Arrays**

// Write a function that iterates over a 2D array and logs each element individually.

// **Example:**
// const matrix = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// Expected output:
// 1
// 2
// 3
// 4
// 5
// 6

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let newArr = matrix.flat(Infinity)
// console.log(newArr)

for(let num of newArr){
  console.log(num)
}