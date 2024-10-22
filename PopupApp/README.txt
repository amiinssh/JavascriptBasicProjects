Popup App

This is a simple JavaScript application that demonstrates how to create a popup window that can be opened and closed by clicking buttons.
Features

    Opens a popup with a message when the "Click Me!" button is pressed.
    Closes the popup when the "Close" button is pressed.

Usage

    Open the HTML file in a web browser.
    Click the "Click Me!" button to display the popup.
    Click the "Close" button in the popup to hide it.

Code Explanation

    HTML Elements: The script interacts with the following elements:
        myBtn: The button that opens the popup.
        myPopup: The popup container that shows the message.
        closeBtn: The button that closes the popup.

    Event Listeners:
        An event listener on myBtn adds the active class to myPopup, making it visible.
        An event listener on closeBtn removes the active class from myPopup, hiding it.

Example

javascript

const myBtn = document.getElementById("myBtn");
const myPopup = document.getElementById("myPopup");
const closeBtn = document.getElementById("closeBtn");

myBtn.addEventListener("click", function() {
  myPopup.classList.add("active");
});

closeBtn.addEventListener("click", function() {
  myPopup.classList.remove("active");
});

License

This project is licensed under the MIT License.

Feel free to customize this README further to suit your needs!