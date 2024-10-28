Input Field Character Count

This simple project tracks and displays the character count of text entered into an input field in real-time.
Features

    Real-time Character Count: Updates the character count as the user types.
    Minimal JavaScript and CSS: Designed with minimal code for quick implementation.

Code Explanation

javascript

const count = document.querySelector(".count");  // Selects the element where the count will display
const input = document.getElementById("count");   // Selects the input field by ID

input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;          // Updates the count display with input length
});

    Event Listener: keyup listens for every key release in the input field.
    Count Update: input.value.length calculates and displays the current character count.

Usage

    Copy the HTML structure and JavaScript code into your project.
    Ensure to have an element with the class count and an input field with the ID count.

Example HTML Structure

html

<div class="container">
    <h1>Input Field Character Count</h1>
    <span class="count">0</span> <!-- Display area for character count -->
    <input type="text" id="count" placeholder="Type here...">
</div>

Dependencies

No external libraries required.