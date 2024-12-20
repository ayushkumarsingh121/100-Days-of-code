// ### Problem:

// Write a program that checks if an array of numbers is a palindrome (reads the same forwards and backwards).

// **Example Input**: `[1, 2, 3, 2, 1]`

// **Expected Output**: true

let arr = [1, 2, 3, 2, 1];
let newArr = []; 

for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
console.log(newArr)


let isPalindrome = true;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== newArr[i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome); 
