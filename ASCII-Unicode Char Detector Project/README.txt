ASCII/Unicode Character Detector

This is a simple web application that detects whether an entered character is an ASCII or Unicode character.
Features

    Accepts a single character input from the user.
    Displays whether the character is an ASCII character or a Unicode character.

How It Works

    The user inputs a character into the text box.
    Upon clicking the "Detect" button, the application checks the character.
    If the character's Unicode value is less than or equal to 127, it is classified as an ASCII character.
    Otherwise, it is classified as a Unicode character.

Code Explanation

    detectCharacter(): This function retrieves the user input, checks if the character is ASCII or Unicode, and displays the result.
    isASCII(character): This helper function checks if the character's Unicode value is within the ASCII range (0-127).

Usage

    Open index.html in a web browser.
    Enter a character in the input field.
    Click the "Detect" button to see the result.

Example

    Input: A
        Output: "The entered character is an ASCII character"
    Input: ñ
        Output: "The entered character is an Unicode character"

License

This project is licensed under the MIT License.

Feel free to customize the README to fit any additional details you want to include!