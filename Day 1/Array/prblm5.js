// 5. Find the Missing Number in an Array
// Write a function findMissingNumber(arr) that takes an array of integers from 1 to n, where one number is missing. The array will contain n-1 elements. Your task is to find the missing number in the array.

let arr = [1, 2, 3, 6, 5, 4, 8, 7, 10];

let findMissingNumber = (arr) => {

  let n = arr.length + 1;
  let sumOfNum = (n * (n + 1)) / 2;

  let sumOfArr = 0;

  for (let i = 0; i <arr.length; i++) {
    sumOfArr += arr[i];
  }

  let missingNum = sumOfNum - sumOfArr;
  return missingNum;
};
console.log(findMissingNumber(arr));
