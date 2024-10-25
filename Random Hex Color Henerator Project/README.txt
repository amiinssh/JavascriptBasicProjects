Random Hex Color Generator

This project is a simple Random Hex Color Generator that changes the background color of the webpage and displays the hex color code each time the "Generate" button is clicked.
How It Works

    Random Hex Color Generation: Each click on the "Generate" button triggers a function that generates a random 6-character hexadecimal color code.
    Display and Background Update: The generated color is applied to the background of the webpage and displayed on the screen.

Code Overview

    generateColor(): Generates a random color using Math.random() and converts it to hexadecimal format. This color is then applied as the page background and displayed as text.
    Event Listener: An event listener on the "Generate" button (btn) triggers the generateColor() function on each click.

Usage

    Open the page in a browser.
    Click the "Generate" button to see a new random background color and its hex code on the screen.