// Q: 14
// Title:
// L1 - Validate and Calculate Discounted Price

// Problem Statement:
// Write a function called calculatePrice that prompts the user for two inputs: price and discount. If the user doesn't provide a discount (i.e., leaves it blank), the function should apply a default discount of 10%. If the user provides an invalid price or discount (e.g., a negative number or non-numeric input), it should display an error message and prompt them to try again.

// Finally, the function should calculate and return the final price after applying the discount.

// Requirements:

// Use default parameters for the discount.
// Validate both inputs to ensure they are positive numbers.

let calculatePrice = (defaultDiscount = 10) => {
  let price;
  let discount;

  while(true){
    price = prompt("Enter the price")
 
    if(!isNaN(price) && price > 0){
      price = Number(price)
      break;
    }
    else{
      alert("Invalid price, Try again letter")
    }
  }

  while(true){
    discountInput = prompt("Enter the discount")

    if(discountInput === ""){
      discount = defaultDiscount
      break;
    }

    if(!isNaN(discountInput) && discountInput >= 0){
      discount = Number(discountInput)
      break;
    }
    else{
      alert("Invalid price, Try again letter")
    }
  }

  let finalPrice = price - (price*discount/100)
  alert(`The final price after a ${discount}% discount is: ${finalPrice.toFixed(2)}`);
  return finalPrice;
}

calculatePrice()