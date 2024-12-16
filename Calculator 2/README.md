# Calculator Project

## Overview
This is a simple calculator application built using **HTML**, **CSS**, and **JavaScript**. It supports basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator features a clean user interface with responsive design.

---

## Features
- **Basic Arithmetic Operations:** Addition, subtraction, multiplication, and division.
- **Clear All Functionality:** Reset all inputs.
- **Delete Functionality:** Remove the last entered digit.
- **Responsive Design:** Adapts to different screen sizes.
- **Keyboard-Free Interaction:** Fully functional with button clicks.

---

## Project Structure
### Files
1. **HTML (`index.html`)**
   - Defines the calculator layout and structure.
   - Utilizes `data-*` attributes for easy interaction with JavaScript.
2. **CSS (`style.css`)**
   - Provides styling for the calculator, including a gradient background, button hover effects, and flexible grid layout.
3. **JavaScript (`script.js`)**
   - Implements the calculator's logic, event handling, and dynamic updates to the display.

### Key Elements
- **HTML Structure:** Organized with `data-*` attributes for efficient querying in JavaScript.
- **CSS Grid:** Used for arranging buttons and display elements.
- **JavaScript Class:** Encapsulates the calculator's functionality for better modularity and readability.

---

## How to Use
1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Use the buttons to perform calculations:
   - **Numbers:** Click the number buttons to input digits.
   - **Operations:** Click `+`, `-`, `*`, or `/` to choose an operation.
   - **Equals (`=`):** Click to compute the result.
   - **All Clear (`AC`):** Clears all inputs and resets the calculator.
   - **Delete (`DEL`):** Deletes the last entered digit.

---



## Code Highlights
### Calculator Logic
The core calculator functionality is implemented in a JavaScript class:
```javascript
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  ...
}
```

### Event Listeners
Button interactions are captured using event listeners:
```javascript
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
```

### CSS Styling
The layout is styled with CSS Grid:
```css
.calculator-grid {
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
}
```

---

## Customization
- **Change Styles:** Edit `style.css` to adjust the layout, colors, or button designs.
- **Add Features:** Extend the `Calculator` class to add advanced operations like percentage or square root.

---

## Compatibility
- **Browsers:** Works on modern browsers like Chrome, Firefox, and Edge.
- **Devices:** Fully responsive for desktops, tablets, and mobile devices.

---

## Future Enhancements
- Add keyboard support for better accessibility.
- Include scientific functions (e.g., square root, percentage, power).
- Add animations for button interactions.

---

