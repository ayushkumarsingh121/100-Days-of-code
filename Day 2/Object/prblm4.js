// 4. Iterate Through Object Properties
// Problem: Create an object book with properties title, author, and year. Use a loop to print all the keys and their values.

let book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 };
// Iterate and print key-value pairs

for (let key in book) {
  console.log(key, book[key]);
}