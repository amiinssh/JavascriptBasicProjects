Enigmatic Password Generator
Overview

The Enigmatic Password Generator is a lightweight web-based tool that allows users to generate secure passwords based on customizable options such as including lowercase letters, uppercase letters, numbers, and special symbols. It offers real-time password generation and a sleek, modern interface for an improved user experience.
Features

    Customizable Password Length: Allows users to define password lengths between 8 to 64 characters.
    Character Type Options: Users can choose to include:
        Lowercase letters
        Uppercase letters
        Numbers
        Symbols
    Real-Time Password Generation: Passwords are generated instantly based on the selected criteria.
    User-Friendly Interface: The application features a clean, responsive, and modern design.

Technologies Used

    HTML5: Provides the basic structure of the web page.
    CSS3: Creates the design and layout, ensuring a modern, responsive UI.
    JavaScript (ES6): Implements the logic for generating the password dynamically based on user input.

Demo

How to Use

    Clone or download the repository:

    bash

    git clone https://github.com/amiinssh/enigmatic-password-generator.git
    cd enigmatic-password-generator

    Open the index.html file in your browser.

    Select the desired password length using the number input field.

    Choose the character types by checking/unchecking:
        Lowercase letters
        Uppercase letters
        Numbers
        Symbols

    Click the "Generate Password" button to generate your password. The generated password will appear in the text box.

File Structure

bash

/enigmatic-password-generator
│
├── index.html           # Main HTML file for the application
├── style.css            # CSS for the design and layout
├── script.js            # JavaScript for password generation logic
└── README.md            # This readme file

Example Code Snippet

The core password generation logic can be found in script.js:

javascript

generateBtn.addEventListener("click", function () {
  const length = lengthEl.value;
  let characters = "";
  let password = "";

  if (lowercaseEl.checked) {
    characters += lowercaseLetters;
  }

  if (uppercaseEl.checked) {
    characters += uppercaseLetters;
  }

  if (numberEl.checked) {
    characters += numbers;
  }

  if (symbolEl.checked) {
    characters += symbols;
  }

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  passwordEl.value = password;
});

Future Improvements

    Add the ability to copy the generated password to the clipboard with a single click.
    Provide password strength indicators (weak, medium, strong) based on the selected options.
    Include an option to avoid ambiguous characters (like 0, O, 1, and l).

License

This project is licensed under the MIT License - see the LICENSE file for details.

Happy password generating! 🎉