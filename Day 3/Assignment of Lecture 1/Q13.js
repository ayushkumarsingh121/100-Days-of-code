// Q: 13
// Title:
// L1 - Budget Tracker with Objects

// Problem Statement:
// Create a budget tracker using a JavaScript object.

// Steps:

// Define an object budget with the following key-value pairs:
// income: 1000
// expenses: 700
// Add a new property savings with a value equal to income - expenses.
// Update income to 1200 and recalculate savings.
// Print the updated budget object.
// Constraints:

// All updates must use dot notation.
// Calculations for savings must be dynamic, based on updated values.

let budget = {
  income: 1000,
  expenses: 700,
};

budget.savings = budget.income - budget.expenses

// console.log(budget)

budget.income =  1200
budget.savings = budget.income - budget.expenses


console.log(budget)