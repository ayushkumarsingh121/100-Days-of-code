// Q: 13
// Title:
// L1 - Multi-Level Array and Object Destructuring

// Problem Statement:
// You are working with an array of objects where each object represents a person with their name and address details. Use multi-level destructuring to extract the person's name, city, and street information.

// Steps:
// Given an array of people objects like:
// const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

// Use multi-level destructuring to extract:
// name of each person.
// city and street name from the address.
// Return an array of strings in the format: "Alice lives in New York on Broadway".
// Example Input:

// const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]

// Example Output:

// ["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]

const people = [
  {
    name: "Alice",
    address: { 
      city: "New York", 
      street: { name: "Broadway", number: 123 } 
    },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];


let result = []

for(let value of people){
  let {name, address:{city, street : {name : streetName, number}}} = value
  result.push(`${name} lives in ${city} on ${streetName}`)
}
console.log(result)



