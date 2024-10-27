Copy Coupon Code Button

This project is a simple web feature that allows users to click a button to copy a coupon code to their clipboard. The button's label changes temporarily to confirm the action.
Features

    Copy Coupon Code: Users can easily copy a pre-set coupon code to their clipboard by clicking the "Copy" button.
    Confirmation Message: After clicking, the button displays "Copied!!!" for 3 seconds to confirm the copy action, then reverts back to "Copy."

Code Explanation
HTML Structure

    The input field contains the coupon code and has the class couponCode.
    The button with the class btn triggers the copy function.

JavaScript Functionality

    Selectors:
        btn selects the "Copy" button element.
        coupon selects the input field containing the coupon code.

    Event Listener:
        The copyText function is triggered on button click.

    Copy Function (copyText):
        Selects the coupon code text.
        Copies the selected text to the clipboard.
        Changes the button text to "Copied!!!" for 3 seconds to indicate success.

Code Example

javascript

const btn = document.querySelector(".btn");
const coupon = document.querySelector(".couponCode");

const copyText = (e) => {
  e.preventDefault();
  coupon.select();
  coupon.setSelectionRange(0, 999999); // For mobile compatibility
  document.execCommand("copy");

  btn.textContent = "Copied!!!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
};

btn.addEventListener("click", copyText);

Usage

    Click the "Copy" button to copy the coupon code.
    The button will briefly display "Copied!!!" as confirmation.

Requirements

    A modern browser to support clipboard copying.

This project is simple, reusable, and enhances user experience by allowing one-click copying for promo or coupon codes.
