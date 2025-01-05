// Q: 1
// Problem Statements
// 1. Rearrange Fruits
// You have an array of fruits containing 10 elements. Your task is to use the splice method to rearrange the fruits in the following manner:

// Remove the last 4 fruits from the end of the array.
// Add the removed fruits to the beginning of the array in the same order they were removed.
// Write a JavaScript function named rearrangeFruits that takes an array of fruits as input and performs the specified rearrangement. The function should return the modified array of fruits.

// For example:

// const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

// console.log(rearrangeFruits(fruits));
// Output:

// ["Strawberry", "Watermelon", "Peach", "Kiwi", "Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];
// Ensure that your function uses the splice method to remove and add elements from/to the array.


const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

let rearrangeFruits = (fruits) => {
  let removeFruits = fruits.splice(-4)
  fruits.splice(0,0,...removeFruits)
  return fruits;
}

console.log(rearrangeFruits(fruits));
