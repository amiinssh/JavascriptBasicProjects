# Get User Location Web App

This is a simple web application that retrieves and displays the user's geographic coordinates (latitude and longitude) using the browser's Geolocation API. The project includes a user-friendly button and responsive layout, styled with Bootstrap.

---

## Features

### 1. **Get Location Button**
- A large, centered button that users can click to retrieve their current geographic location.
- Triggers the browser's Geolocation API to get the coordinates.

### 2. **Display User Coordinates**
- After the user grants permission to access their location:
  - Latitude and longitude are displayed dynamically on the page under the "Location" heading.
  
### 3. **Responsive Design**
- Built using **Bootstrap 5** for responsive layouts, ensuring compatibility with various screen sizes and devices.

---

## Technologies Used

### **Frontend**
- **HTML**: Provides the structure for the app.
- **CSS (via Bootstrap)**: Used for styling and layout, ensuring a clean and professional look.
- **JavaScript**: 
  - Handles user interaction and retrieves the location data.
  - Updates the DOM to display the user's geographic coordinates.

### **Geolocation API**
- Native browser API that retrieves the user's latitude and longitude.

---

## How It Works

1. **Button Interaction**:
   - The "Get Location" button listens for a `click` event.
   - Upon clicking, the `navigator.geolocation.getCurrentPosition()` method is called.

2. **Geolocation API**:
   - If the user grants permission, their geographic coordinates (latitude and longitude) are passed to the `showPosition` function.

3. **Dynamic Update**:
   - The `showPosition` function updates the `.location` element with the retrieved coordinates using `innerHTML`.

---

## Code Explanation

### **HTML Structure**
- A button (`btn`) triggers the location fetch.
- A heading (`location`) serves as the display area for the coordinates.

### **JavaScript**
#### Key Functions:
1. **Event Listener**:
   - Listens for a click on the button and triggers the Geolocation API.
   ```javascript
   btn.addEventListener('click', () => {
       navigator.geolocation.getCurrentPosition(showPosition)
   });
   ```

2. **Show Position**:
   - Extracts latitude and longitude from the `position` object and updates the `.location` element.
   ```javascript
   function showPosition(position) {
       userLocation.innerHTML = `
           Latitude: ${position.coords.latitude} <br>
           Longitude: ${position.coords.longitude}
       `;
   }
   ```

---

## Usage

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd get-user-location
   ```

2. **Open the Application**:
   Open the `index.html` file in any modern browser.

3. **Retrieve Location**:
   - Click the "Get Location" button.
   - Grant permission for the browser to access your location.
   - View your coordinates displayed dynamically on the screen.

---

## Browser Compatibility
This project relies on the **Geolocation API**, supported in most modern browsers. Ensure:
- The website is served over HTTPS (required for geolocation on many browsers).
- The browser has location permissions enabled.

---

## Customization

1. **Styling**:
   - Modify the button style or layout by editing the `Bootstrap` classes or adding custom CSS.

2. **Additional Features**:
   - Display location on a map using a mapping API (e.g., Google Maps or Leaflet).
   - Show additional information like altitude or accuracy if needed.

---

