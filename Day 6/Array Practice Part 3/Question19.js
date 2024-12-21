// ### **Question 19: Search in 2D Array**

// Write a function that searches for a specific number in a 2D array and returns its coordinates (row and column). If not found, return `-1`.

// **Example:**
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// Search for number 5
// Expected output: [1, 1]


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let target = 5

let coordinates = (matrix, target) => {
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
      if(matrix[i][j] ===target){
        return [i,j]
      }
    }
  }
}
console.log(coordinates(matrix,target))