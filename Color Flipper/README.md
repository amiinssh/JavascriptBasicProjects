# Color Flipper Project

## Description
The Color Flipper project is a simple web application that changes the background color of the page and displays the corresponding color value when a button is clicked. It consists of two modes:
1. **Simple Mode**: Cycles through a predefined set of colors.
2. **Hex Mode**: Generates random hex color codes.

This project demonstrates basic JavaScript, CSS, and HTML principles, including event handling, DOM manipulation, and CSS styling.

---

## Features
1. **Predefined Colors (Simple Mode)**:
   - A predefined array of colors (`["green", "red", "rgba(133,122,200)", "#f15025"]`) is used to change the background color.

2. **Random Hex Colors (Hex Mode)**:
   - Generates a random hex color code (e.g., `#34A2F1`) when the button is clicked.

3. **Dynamic Background Change**:
   - The background color of the page updates instantly upon clicking the button.

4. **User-Friendly UI**:
   - Minimalistic and responsive design with styled buttons and navigation.

---

## File Structure
```
project/
│
├── index.html        // Entry point for the simple color mode
├── hex.html          // Entry point for the hex color mode
├── style.css         // Stylesheet for the entire application
├── script.js         // JavaScript for simple mode
├── hex.js            // JavaScript for hex mode
└── README.md         // Documentation file
```

---

## Technologies Used
- **HTML**: Structure and layout of the web page.
- **CSS**: Styling, including custom variables and responsive design.
- **JavaScript**: Logic for color changes and DOM manipulation.

---

## Code Overview

### CSS Highlights
- **Custom Properties (CSS Variables)**:
  - Reusable variables for colors, fonts, spacing, etc.
  - Example:
    ```css
    :root {
      --clr-primary-5: hsl(205, 78%, 60%);
      --clr-white: #fff;
      --transition: all 0.3s linear;
    }
    ```
- **Responsive Design**:
  - Media queries ensure the application adapts to different screen sizes.
  - Example:
    ```css
    @media screen and (min-width: 800px) {
      h1 {
        font-size: 4rem;
      }
    }
    ```

### JavaScript Highlights
#### Simple Mode (`script.js`)
- Cycles through predefined colors using a random index.
- Example:
  ```javascript
  const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  ```

#### Hex Mode (`hex.js`)
- Generates a random hex color by iterating over hex characters.
- Example:
  ```javascript
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)];
  }
  ```

---


