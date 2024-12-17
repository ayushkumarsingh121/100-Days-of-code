// 5. Check if a String is a Palindrome
// Problem: Write a program to check if a given string is a palindrome (it reads the same forward and backward).
// Example:
// Input: "madam"
// Output: true
// Example:
// Input: "hello"
// Output: false

let palindrome = (str) =>{
  let nStr = "";
  for(let i=str.length-1; i>=0; i--){
    nStr += str[i]
  }
  console.log(nStr)

  if(str === nStr){
    console.log(`True ${nStr}`)
  }
  else{
    console.log(`False`)
  }
}

palindrome("madam")
palindrome("hello")