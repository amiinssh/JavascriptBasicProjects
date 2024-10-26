Vowel Counter

This simple web app counts the number of vowels in a user-inputted word or phrase. By clicking a button, the app processes the input, calculates the total vowels, and displays the result.
Features

    Vowel Counting: Checks for vowels (a, e, i, o, u) in the user’s input.
    Case-insensitive: Converts all input to lowercase for accurate counting.
    Dynamic Output: Displays the result in uppercase, showing both the input word/phrase and the vowel count.

How It Works

    HTML Elements:
        .input-text: where the user types in the word or phrase.
        .btn: triggers the vowel counting function.
        .result: displays the output message after counting.

    JavaScript Logic:
        The app listens for a button click event, triggering the vowelCounter function.
        Inside the function, the code:
            Converts the input to lowercase.
            Iterates through each letter to check if it’s a vowel.
            Counts all matches.
            Displays the original input (in uppercase) and the vowel count in the .result element.

Code Breakdown

Here's a quick summary of the JavaScript code:

javascript

const word = document.querySelector(".input-text"); // Gets the input field
const btn = document.querySelector(".btn");         // Gets the button
const result = document.querySelector(".result");    // Gets the result display area

btn.addEventListener("click", vowelCounter);         // Listens for the button click

function vowelCounter() {
  let vowelCount = 0;
  let wordVal = word.value.toLowerCase();            // Convert input to lowercase

  for (let i = 0; i < wordVal.length; i++) {         // Loop through each character
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u])/)) {             // Check if it's a vowel
      vowelCount++;
    }
  }
  result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels.`; // Display the result
}

How to Use

    Enter Text: Type any word or phrase into the input field.
    Count Vowels: Click the button to trigger the vowel counter.
    View Results: The result will appear below, showing the original input (in uppercase) and the number of vowels.

Example

If the user types "Hello World" and clicks the button, the output will display:

HELLO WORLD has 3 vowels.

Requirements

    Basic HTML and JavaScript knowledge if you want to modify or extend the app.
    This code should work in any modern browser.

Feel free to use, modify, or expand this project!