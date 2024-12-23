// ### **16. Creating Object with Method**

// **Question:**

// Create an object `calculator = { num1: 5, num2: 10, add: function() { return this.num1 + this.num2; } }`. Log the result of calling the `add` method.

// **Expected Output:**

// `15`


let calculator = { 
  num1: 5, 
  num2: 10, 
  add: function() {
    return this.num1 + this.num2; 
  } 
}

console.log(calculator.add())