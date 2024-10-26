Modal Popup Project

A simple JavaScript-based modal popup that allows users to open and close a modal window with ease.
Features

    Open Modal: Click the designated button to open a modal popup.
    Close Modal: Close the modal by either:
        Clicking the close (×) icon within the modal.
        Clicking outside the modal content area.

Usage
HTML Structure

    The modal component consists of a button (.btn) to trigger the modal.
    A .modal container holds the modal content and a close button (.close) for user-friendly interaction.

JavaScript Functionality

The JavaScript file handles opening and closing the modal:

    Event Listeners:
        btn.addEventListener("click", openModal): Opens the modal when the button is clicked.
        close.addEventListener("click", closeModal): Closes the modal when the close icon is clicked.
        modal.addEventListener("click", closeModal): Closes the modal when clicking outside the content area.

    Functions:
        openModal(e): Prevents default button behavior and displays the modal by setting modal.style.display = "block".
        closeModal(e): Hides the modal by setting modal.style.display = "none".

Installation

Clone this repository and include the provided HTML, CSS, and JavaScript files in your project.
License

This project is open-source and available under the MIT License.

