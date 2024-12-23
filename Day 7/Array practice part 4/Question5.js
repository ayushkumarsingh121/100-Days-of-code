// ### **5. `lastIndexOf` Advanced**

// ### **Question 5: `lastIndexOf` with Custom Objects**

// Write a function that finds the last index of an object with a specific property value in an array of objects. If the object is not found, return `-1`.

// **Example:**
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Alice' },
//   { id: 3, name: 'Bob' },
//   { id: 2, name: 'Alice' }
// ];
// const target = 2;
// // Expected output: 3


const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Bob' },
  { id: 2, name: 'Alice' }
];
const target = 2;

let findLastIndexByProperty = (array, targetValue) => {
  let lastIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === targetValue) {
      lastIndex = i;
    }
  }
  return lastIndex;
};

console.log(findLastIndexByProperty(users, target)); // Expected output: 3
