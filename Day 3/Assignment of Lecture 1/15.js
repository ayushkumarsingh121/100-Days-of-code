// Q: 15
// Title:
// L2 - Create a Mini Student Database

// Problem Statement:
// Design a mini student database using an array of objects, where each object represents a student.

// Steps:

// Create an array students containing three student objects. Each object should have the properties:

// name (string): The student's name.
// age (number): The student's age.
// marks (object): An object containing math, science, and english scores.
// Example structure:

// { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } }
// Add a new student object to the array.

// Calculate and display the average marks for each student.

// Print the student with the highest average marks.

// Constraints:

// Use loops to iterate through the array for calculations.
// Avoid hardcoding indexes while accessing array elements.

let students = [
  {
    name: "Ayush",
    age: 19,
    marks: {
      math: 85,
      science: 93,
      english: 88,
    },
  },
  {
    name: "Piyush",
    age: 21,
    marks: {
      math: 95,
      science: 62,
      english: 98,
    },
  },
  {
    name: "Yuvraj",
    age: 19,
    marks: {
      math: 82,
      science: 71,
      english: 81,
    },
  },
];

    
students.push({
    name: "Shreyanshu",
    age: 20,
    marks: {
      math: 65,
      science: 72,
      english: 53,
    },
  })

console.log("Updated Students List:", students);

let highestAvg = 0 
let topStudent = "";

for(let i=0; i<students.length; i++){
  let total = 0
  let child = students[i].marks
  total += child.math + child.science + child.english
  let avg = total/3
  
  console.log(`${students[i].name}'s average marks: ${avg.toFixed(2)}`);
  
  if(avg > highestAvg){
    highestAvg = avg
    topStudent = students[i].name
  }
}
console.log(`Top student: ${topStudent} with an average of ${highestAvg.toFixed(2)}`);