# Drawing App

This is a simple **Drawing App** built using HTML, CSS, and JavaScript. The app allows users to draw on an HTML5 canvas, adjust the brush size, change the color of the brush, and clear the canvas. It's perfect for quick sketches, doodles, or practicing drawing directly in the browser.

---

## Features

- **Draw on Canvas**: Use the mouse to draw on an 800x800 canvas.
- **Brush Size**: Adjust the brush size using `+` and `-` buttons.
- **Color Picker**: Change the brush color using a color input.
- **Clear Canvas**: Clear the entire canvas with the `AC` button.
- **Smooth Drawing**: The app uses smooth transitions between mouse movements for continuous drawing.

---

## How It Works

### HTML Structure
- The HTML file includes a `<canvas>` element where users can draw, and a `toolbox` for adjusting settings like brush size and color.
- The `<canvas>` element has a fixed width and height of 800px, and the toolbox contains:
  - A decrease (`-`) and increase (`+`) button for changing the brush size.
  - A color input to pick the drawing color.
  - A clear button (`AC`) to clear the canvas.

### CSS Styles
- The styles ensure the canvas and toolbox are properly sized and aligned.
- Interactive elements (buttons, color input, size display) in the toolbox have smooth hover transitions and shadow effects.
- The body and canvas have some simple styling to ensure they are centered and visually appealing.

### JavaScript Logic
- **Mouse Events**: 
  - The `mousedown` event is used to start drawing.
  - The `mouseup` event ends the drawing session.
  - The `mousemove` event is used to draw on the canvas when the mouse is held down.
- **Drawing Functions**:
  - The `drawCircle()` function draws a circular brush stroke at the mouse position.
  - The `drawLine()` function connects the current mouse position to the previous one, creating smooth lines.
- **Brush Size Control**: Buttons to increase or decrease the brush size by 5 pixels, with a maximum size of 50 and a minimum size of 5.
- **Color Control**: The color of the brush is changed by using an HTML `<input type="color">` element.
- **Canvas Clearing**: The `clearEl` button clears the entire canvas when clicked.

---

## File Structure

```
/index.html         - The HTML structure of the app
/style.css          - Styles for the app's appearance
/script.js          - JavaScript logic for drawing functionality
```

---

## Usage

1. **Draw**: Click and drag the mouse on the canvas to start drawing. Release the mouse button to stop drawing.
2. **Change Brush Size**: Use the `+` and `-` buttons to adjust the brush size. The current size is displayed in the toolbox.
3. **Change Brush Color**: Use the color picker to select a new drawing color.
4. **Clear the Canvas**: Press the `AC` button to clear the canvas and start over.

---

## Example

### HTML

```html
<canvas id="canvas" width="800" height="800"></canvas>
<div class="toolbox">
    <button id="decrease">-</button>
    <span id="size">30</span>
    <button id="increase">+</button>
    <input type="color" id="color">
    <button id="clear">AC</button>
</div>
```

### CSS

```css
* {
    box-sizing: border-box;
}

body {
    background-color: #e5e5e5;
    font-family: sans-serif;
    margin: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

canvas {
    border: 3px solid #111;
}

.toolbox {
    display: flex;
    background-color: rebeccapurple;
    padding: 1rem;
    width: 807px;
}

.toolbox > * {
    padding: 0.25rem;
    font-size: 2rem;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    height: 50px;
    width: 50px;
    margin: 0.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.toolbox button:hover {
    background-color: #9b9999;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#size {
    transition: all 0.2s ease;
}

#size:hover {
    background-color: #9b9999;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

#clear {
    margin-left: auto;
}
```

### JavaScript

```javascript
const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 30;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increaseBtn.addEventListener("click", () => {
    size = Math.min(size + 5, 50);
    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
    size = Math.max(size - 5, 5);
    updateSizeOnScreen();
});

colorEl.addEventListener("change", (e) => {
    color = e.target.value;
});

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}
```

---

