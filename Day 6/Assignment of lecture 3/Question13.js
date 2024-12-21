// Q: 13
// Title:
// L1 - Sum of Multiple Numbers (Using Rest Parameters)

// Problem Statement:
// Write a function called sumNumbers that prompts the user to enter a series of numbers (one at a time using prompt()). After each prompt, the function should check if the user has entered a valid number. If not, prompt them again until they provide valid numbers.

// The function should then use rest parameters to sum up all the valid numbers and return the total.

// Example Scenario:

// The user enters 5, 10, and 15.
// The function returns 30.
// Requirements:

// Use a loop to collect the numbers.
// Use the sumNumbers(...args) function to calculate the sum of the numbers using rest

// Function to calculate the sum using rest parameters

let sumNumbers = (...args) => {
  let data = args.reduce((total, ele) => {
    return total + ele;
  }, 0);
  return data;
};

let collectingNumbers = () => {
  let arr = [];

  while (true) {
    let input = prompt("Enter the number");

    if (input === "") {
      alert("Input collection complete.");
      break;
    }

    let number = Number(input);
    if (!isNaN(number)) {
      arr.push(number);
    } else {
      alert("Invalid Number. Please try again.");
    }
  }

  let total = sumNumbers(...arr)
  alert(`total sum of you input : ${total}`)
  return total
};

collectingNumbers()
