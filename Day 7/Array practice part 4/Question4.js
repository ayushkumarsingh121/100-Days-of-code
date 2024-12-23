// ### **4. Searching Methods Advanced**

// ### **Question 4: `indexOf` with Multiple Occurrences**

// Write a function that returns all indexes of a target number in an array, not just the first occurrence.

// **Example:**
// const numbers = [2, 4, 7, 4, 8, 4];
// const target = 4;
// // Expected output: [1, 3, 5]

let numbers = [2, 4, 7, 4, 8, 4];
let target = 4;

let indexFinder = (numbers, target) => {
  let arr = []
  for(let i=0; i<numbers.length; i++){
    if(numbers[i] === target){
      arr.push(i)
    }
  }
  console.log(arr)
}

indexFinder(numbers, target)