/*Objective: Create a function to calculate the total price of items.
Instructions:
Write a function called calculatePrice that takes two parameters: itemPrice (a number) and quantity (a number).
Use the * operator to multiply itemPrice by quantity.
Return the result.
Test it by logging the total price for 3 items that cost $15 each.
Expected Output: The total price is 45.*/

function calculatePrice(itemPrice, quantity) {
  return itemPrice * quantity;
}
console.log(`The total price is ${calculatePrice(15, 3)}.`);
