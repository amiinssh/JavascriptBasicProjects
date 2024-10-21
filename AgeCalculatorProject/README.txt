# Age Calculator

This is a simple **Age Calculator** web application that allows users to input their date of birth (DOB) and calculate their current age in years. The application uses HTML, CSS, and JavaScript to create an interactive interface that computes the user's age based on the date they input.

## Features

- Users can select their date of birth using an input date picker.
- The app calculates the user's age in years.
- The result is displayed instantly on the screen after clicking the "Calculate Age" button.
- Simple and easy-to-use interface.

## How It Works

1. The user selects their date of birth from the date input field.
2. Upon clicking the "Calculate Age" button, the app calculates the difference between the current date and the entered date of birth.
3. The result is shown on the screen, displaying the user's age in years.

## Code Explanation

### HTML

```html
<div class="age-calculator">
    <h2>Age Calculator</h2>
    <div>
        <label>Select Your DOB:</label>
        <input type="date" id="dob">
    </div>
    <div>
        <button id="calculate-btn">Calculate Age</button>
        <div id="result">Result of Age</div>
    </div>
</div>
```

- The **DOB input field** is an HTML `<input type="date">` element.
- A button with the ID `calculate-btn` triggers the age calculation.
- The result is displayed inside a `<div>` with the ID `result`.

### JavaScript

```javascript
const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  const dob = new Date(dobInput.value);
  const ageInMs = Date.now() - dob.getTime();
  const ageDate = new Date(ageInMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  resultDiv.innerHTML = `Your age is ${age} years.`
});
```

- **`dobInput`** captures the user’s selected date of birth from the input field.
- The **`calculateBtn`** listens for a "click" event to trigger the age calculation.
- The **`dob`** is converted into a `Date` object, and the time difference in milliseconds is calculated between the current date and the date of birth.
- The user's age is calculated by subtracting 1970 (the Unix epoch year) from the current year in the UTC time zone.
- Finally, the result is displayed in the `resultDiv` element.

## Usage

1. Clone the repository or download the project files.
2. Open the `index.html` file in any modern web browser.
3. Select your date of birth using the date picker.
4. Click the "Calculate Age" button to see your age displayed below.

## Technologies Used

- **HTML** for creating the structure and layout of the web page.
- **CSS** for styling the interface to make it visually appealing.
- **JavaScript** for handling the logic behind the age calculation.

## Customization

You can customize the style and behavior of the application:
- Modify the **CSS** file to change the appearance, colors, fonts, or layout.
- Extend the JavaScript logic to calculate age in months or days, or include additional features like saving results.

## Example

![Screenshot](screenshot.png)

## License

This project is open-source and available for modification under the [MIT License](LICENSE).

---

Feel free to customize the app and add additional features to suit your needs!