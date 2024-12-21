// ### **Question 11: `reverse`**

// Write a function that reverses the order of an array of numbers without using the built-in `reverse` method.

// **Example:**
// const nums = [1, 2, 3, 4];
// Expected output: [4, 3, 2, 1]


const nums = [1, 2, 3, 4];

for(let i = nums.length-1; i>=0; i--){
  console.log(nums[i])
}

