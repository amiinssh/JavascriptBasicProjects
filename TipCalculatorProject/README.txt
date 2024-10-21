# Tip Calculator

This project is a simple **Tip Calculator** built using HTML, CSS, and JavaScript. It allows users to calculate the tip and total amount based on a given bill and tip percentage. 

## Features
- Input the **bill amount** in dollars.
- Input the **tip percentage**.
- Automatically calculates the **tip amount**.
- Displays the **total amount** including the tip.

## How It Works
1. **Bill Amount**: The user inputs the total bill amount in dollars.
2. **Tip Percentage**: The user inputs the desired tip percentage (e.g., 15%).
3. **Tip Calculation**: The app calculates the tip based on the formula:
   ```
   Tip Amount = Bill Amount * (Tip Percentage / 100)
   ```
4. **Total Amount Calculation**: The app calculates the total amount to be paid (including the tip) using:
   ```
   Total Amount = Bill Amount + Tip Amount
   ```
5. The result is displayed below the form, showing both the **Tip Amount** and the **Total Amount**.

## Project Structure
```
├── index.html        # Main HTML structure for the Tip Calculator.
├── style.css         # Styling for the calculator layout and design.
└── script.js         # JavaScript functionality for calculating the tip and total amount.
```

## Code Breakdown

### `calculateTip()` Function
This is the JavaScript function that performs the calculation and updates the UI.

```javascript
function calculateTip() {
  const billAmount = parseFloat(document.getElementById("bill-amount").value); // Retrieves the bill amount from the input
  const tipPercentage = parseFloat(
    document.getElementById("tip-percenatge").value
  ); // Retrieves the tip percentage from the input

  // Calculate the tip amount
  const tipAmount = billAmount * (tipPercentage / 100);
  
  // Calculate the total amount (bill + tip)
  const totalAmount = tipAmount + billAmount;

  // Display the calculated tip and total amount on the page
  document.getElementById("tip-amount").textContent = "$" + tipAmount.toFixed(2);
  document.getElementById("total-amount").textContent = "$" + totalAmount.toFixed(2);
}
```

### How to Use
1. Clone or download the project.
2. Open the `index.html` file in any modern web browser.
3. Enter the **bill amount** and **tip percentage**.
4. Click on the **Calculate** button to see the calculated tip and total amount.

### Example
- **Bill Amount**: $100
- **Tip Percentage**: 15%
- **Tip Amount**: $15.00
- **Total Amount**: $115.00

### Live Demo
You can deploy this project on any static hosting platform or simply open the `index.html` file locally to run the Tip Calculator.

---

Feel free to enhance the project by adding new features or customizing the design.