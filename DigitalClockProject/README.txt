Digital Clock

A simple digital clock that updates every second using JavaScript.

How It Works

This project displays the current time (hours, minutes, and seconds) and updates every second. The time is always shown in two digits (e.g., `09:05:08`), with leading zeros added for single-digit values.

Key Features:
- Fetches the current time using JavaScript's `Date` object.
- Displays the time in `HH:MM:SS` format.
- Automatically updates every second.

Code Explanation:
- `updateClock`: The function retrieves the current time using the `Date` object, formats the hours, minutes, and seconds, and updates the corresponding HTML elements (`hours`, `minutes`, `seconds`).
- `setInterval`: Calls `updateClock` every second (1000ms) to keep the clock running in real-time.

Usage

1. Add HTML elements with the IDs `hours`, `minutes`, and `seconds`.
2. Include the provided JavaScript code in your project.
3. The clock will start automatically, updating every second.

Example HTML

```html
<div id="clock">
  <span id="hours">00</span> :
  <span id="minutes">00</span> :
  <span id="seconds">00</span>
</div>
```

