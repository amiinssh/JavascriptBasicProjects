# New Year Countdown Timer

This project is a **New Year Countdown Timer** that dynamically calculates and displays the remaining days, hours, minutes, and seconds until the upcoming New Year. It features a visually appealing interface and updates every second to keep the countdown accurate in real time.

---

## Features

### **1. Real-Time Countdown**
- Calculates the time difference between the current date and the upcoming New Year's Day.
- Updates every second, displaying:
  - Days
  - Hours
  - Minutes
  - Seconds

### **2. Stylish and Responsive Design**
- A centered layout with a clean, visually engaging background.
- Countdown is displayed prominently in a styled box with semi-transparent dark overlay.

### **3. Special New Year Greeting**
- Automatically stops the countdown when the New Year arrives.
- Displays a festive **"Happy New Year"** message.

### **4. User-Friendly Code Structure**
- Uses a simple, easy-to-read JavaScript function to calculate the time and format the countdown.
- Encapsulated in an interval that updates every second.

---

## Technologies Used

### **1. HTML**
- Structures the page with a heading and a container for the countdown.

### **2. CSS**
- Provides a visually engaging design:
  - Full-page background image for a festive look.
  - Styled countdown container with a dark overlay and rounded corners.
  - Clean typography for the countdown and heading.

### **3. JavaScript**
- Core functionality:
  - Calculates the time difference between the current date and January 1, 2025.
  - Dynamically updates the countdown every second.
  - Formats the time for consistency and readability.
  - Handles the transition to the New Year message.

---

## How It Works

1. **Target Date**:
   - The script defines the target date as `1 Jan 2025`.

2. **Real-Time Updates**:
   - A `setInterval` function calculates the difference between the current time and the target date in seconds.

3. **Time Breakdown**:
   - Days: `totalSeconds / 3600 / 24`
   - Hours: `totalSeconds / 3600 % 24`
   - Minutes: `totalSeconds / 60 % 60`
   - Seconds: `totalSeconds % 60`

4. **Dynamic Updates**:
   - Updates the DOM element with the id `countdown` to reflect the calculated time values every second.

5. **New Year Transition**:
   - Once the countdown reaches zero, the interval stops, and the message "Happy New Year" is displayed.

---


## Customization

1. **Change the Target Date**:
   - Update the `countTo` variable in `script.js` with your desired date:
   ```javascript
   const countTo = "25 Dec 2025"; // Example for Christmas
   ```

2. **Background Customization**:
   - Replace `images/bg.png` in the CSS with your preferred image:
   ```css
   body {
       background: url('images/your-image.png') no-repeat;
       background-size: cover;
   }
   ```

3. **Styling Adjustments**:
   - Modify the font sizes, colors, or layout in the `style.css` file to fit your theme.

---

## Browser Compatibility
This project uses modern JavaScript and CSS features, ensuring compatibility with all major browsers (Chrome, Firefox, Edge, Safari).

---

