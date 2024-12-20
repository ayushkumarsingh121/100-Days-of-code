// Q: 11
// Title:
// L0 - Traversing Objects with for...in

// Problem Statement:
// You are given an object representing a book with properties such as title, author, and year. Your task is to use the for...in loop to traverse through the object and print each key along with its associated value in the format: key: value.

// Example Input:

// let book = {
//   title: "The Hobbit",
//   author: "J.R.R. Tolkien",
//   year: 1937
// };

// Expected Output:

// title: The Hobbit
// author: J.R.R. Tolkien
// year: 1937



let book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937
};

for(let key in book){
  console.log(`${key} : ${book[key]}`)
}