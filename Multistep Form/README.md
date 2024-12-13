### README: Multi-Step Form Implementation

---

## Overview

This project implements a **multi-step form** using HTML, CSS, and JavaScript. The form allows users to fill out a series of inputs across multiple steps with a smooth navigation experience. Each step includes two fields, and users can navigate between steps using "Previous" and "Next" buttons. At the final step, the "Next" button changes to "Submit," completing the process.

---

## Features

- **Dynamic Step Navigation:** Users can move forward and backward between form steps using navigation buttons.
- **Step Progress Indicator:** Highlights the current step in a progress bar.
- **Animation:** Smooth transitions between steps for an enhanced user experience.
- **Validation Alert:** Simulates form submission with an alert on completion.
- **Responsive Design:** Optimized layout for various screen sizes using Bootstrap and custom CSS.

---

## Structure

### 1. **HTML File (`index.html`)**
Contains the structure of the form:
- Four steps, each represented by a circle in the progress bar.
- Four groups of input fields divided into form steps.
- "Previous" and "Next" buttons for navigation.

### 2. **CSS File (`style.css`)**
Defines the visual styling:
- Custom color scheme and layout using CSS variables.
- Smooth animations between steps using the `@keyframes` rule.
- Styling for the form, buttons, and progress indicator.

### 3. **JavaScript File (`script.js`)**
Handles the form logic:
- Tracks the current step and updates the visible form fields dynamically.
- Highlights the active step in the progress bar.
- Manages button behavior, including showing/hiding and updating text.

---

## Setup Instructions

1. **Clone or Download** the project files.
2. Open the project directory and ensure the following files are included:
   - `index.html`
   - `style.css`
   - `script.js`
3. Link the required dependencies:
   - Include the Bootstrap library via CDN (already added in `index.html`).
4. Open `index.html` in your browser to view the form.

---

## Usage

1. Open the form and begin filling out fields in the first step.
2. Click **Next** to proceed to the subsequent steps. Each step shows two additional fields.
3. Click **Previous** to go back to the earlier steps if needed.
4. At the final step, click **Submit** to simulate form submission and view an alert.

---

## Key Code Highlights

### JavaScript Logic
```javascript
button[1].addEventListener("click", () => {
  currentFormItem++;
  const prevFormItem = currentFormItem - 1;

  if (currentFormItem > 0 && currentFormItem < 4) {
    button[0].style.display = "inline-block";
    formItems[currentFormItem].style.display = "block";
    formItems[prevFormItem].style.display = "none";
    steps[currentFormItem].style.backgroundColor = "#1e9df7";

    if (currentFormItem == 3) {
      button[1].innerHTML = "Submit";
    }
  } else {
    if (currentFormItem > 3) {
      alert("Form Submitted Successfully");
    }
  }
});
```

- **Step Display:** Dynamically hides/shows the correct form fields based on the current step.
- **Step Highlighting:** Updates the progress bar to indicate the active step.
- **Button Logic:** Handles text updates and visibility for "Previous" and "Next" buttons.

---

## Styling Highlights

### Custom CSS Variables
```css
:root {
  --white: #fff;
  --black: #1c2b2d;
  --blue: #31326f;
  --light-blue: #005490;
  --color-primary: #9d0191;
  --color-sec: #db6400;
  --color-grey: #eee;
  --color-dark-grey: #222831;
}
```

### Step Animation
```css
@keyframes slide-in {
  0% {
    transform: translateX(50rem);
  }
  100% {
    transform: translateX(0);
  }
}
```

---

## Dependencies

- **Bootstrap 4.3.1** (CDN included in `index.html`)
- Google Fonts: `Open Sans` (CDN included in `style.css`)

---

