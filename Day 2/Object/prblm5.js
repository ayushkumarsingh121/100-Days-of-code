// 5. Delete Property from an Object
// Problem: Create an object studentInfo with properties name, age, and course. Delete the property age from the object and print the updated object.

let studentInfo = { name: "Bob", age: 25, course: "Mathematics" };
// Delete age property

delete studentInfo.age
console.log(studentInfo)