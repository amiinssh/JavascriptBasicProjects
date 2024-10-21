# Vibrant Vowel Checker

The **Vibrant Vowel Checker** is a simple web application that allows users to enter text and count the total number of vowels present in the text. This project is built using HTML, CSS, and JavaScript.

## Features

- **Real-time Vowel Counting**: Input any text, and the app will count the number of vowels (a, e, i, o, u) in the entered text.
- **Simple Interface**: The user interface is minimal and easy to use, designed for quickly checking the number of vowels in a sentence or paragraph.

## How It Works

The app uses a JavaScript function that:
1. Converts the input text to lowercase to handle both uppercase and lowercase vowels uniformly.
2. Iterates through each character in the text.
3. Checks if the current character is a vowel (using a helper function `isVowel()`).
4. Displays the total count of vowels in the text.

### Code Explanation

- **`checkVowels()`**:
  - Retrieves the input text from the `<textarea>` element.
  - Converts the text to lowercase.
  - Loops through each character, checks if it's a vowel, and increments the vowel count.
  - Displays the vowel count on the page.

- **`isVowel()`**:
  - Checks if a character is one of the vowels (`a, e, i, o, u`) using the `.includes()` method on an array of vowels.

### Sample Code

```javascript
function checkVowels() {
  var text = document.getElementById("inputText").value;
  var vowelCount = 0;

  text = text.toLowerCase();

  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    if (isVowel(char)) {
      vowelCount++;
    }
  }

  var result = document.getElementById("result");
  result.textContent = "Total Vowels: " + vowelCount;
}

function isVowel(char) {
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}
```

## How to Use

1. Clone or download the project.
2. Open the `index.html` file in a web browser.
3. Enter your text in the provided text area.
4. Click the **Count Vowels** button.
5. The result will show the total number of vowels found in the input text.

## Project Structure

- **index.html**: The main HTML file that provides the structure of the web page.
- **style.css**: The CSS file for styling the user interface.
- **script.js**: The JavaScript file containing the logic for counting vowels.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the layout and appearance.
- **JavaScript**: For adding interactivity and logic to count the vowels.

## License

This project is open-source and available under the MIT License.

---

Feel free to contribute, modify, or use this project as needed!