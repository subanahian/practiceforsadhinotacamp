/* Apply Discount
Objective: Combine operations to apply a discount to a price.
Instructions:
Write a function called applyDiscount that takes two parameters: price (a number) and discountPercent (a number between 0 and 1, e.g., 0.2 for 20%).
Calculate the discount amount using * (e.g., price * discountPercent).
Subtract the discount from the original price using -.
Return the discounted price.
Test it with a $100 item and a 25% discount.
Expected Output: The discounted price is 75.*/
function applyDiscount(price, discountPercent) {
  return price - price * discountPercent;
}
console.log(`The discounted price is ${applyDiscount(100, 0.25)}.`);
