# Word Count Tool

A real-time word and character counter application with additional features like word limit enforcement and estimated reading time. This project uses vanilla JavaScript, HTML, and Bootstrap for styling.

---

## Features
- **Character Counter**: Displays the total number of characters in the input.
- **Word Counter**: Tracks the total number of words typed.
- **Word Limit Enforcement**: Restricts input to a maximum word limit (225 words by default).
- **Reading Time Estimation**: Calculates the approximate reading time based on an average reading speed of 225 words per minute.
- **Responsive Design**: Uses Bootstrap for layout and styling.

---

## Usage Instructions

### 1. Input Area
Type into the text area to see:
- The number of characters (`Character`).
- The number of words (`Words`).
- The remaining word limit (`Words Left`).
- The estimated reading time (`Reading Time`).

### 2. Word Limit Enforcement
If you exceed the word limit, the application prevents additional input (except for backspace).

### 3. Reading Time
Reading time updates dynamically as you type. It is displayed in minutes and seconds.

---

## Project Structure

### HTML Layout
- **Input**: `<textarea>` element styled with Bootstrap.
- **Display Elements**:
  - `Character`: Displays the total character count.
  - `Words`: Displays the total word count.
  - `Words Left`: Shows the remaining words before hitting the limit.
  - `Reading Time`: Displays the calculated reading time.

### JavaScript Logic
The script dynamically updates values as the user types using event listeners:

1. **`keyup` Event**:
   - Triggers `characterCount()` to count characters.
   - Triggers `wordCounter()` to count words, enforce word limits, and update reading time.

2. **Functions**:
   - `characterCount()`: Updates character count.
   - `wordCounter(e)`:
     - Counts words using a regex: `/\b[-?]?\w+\b/gi`.
     - Updates word count and remaining word limit.
     - Enforces word limit using the `keydown` event.
     - Calculates and displays reading time.

---

## Code Highlights

### JavaScript Functions

#### Character Count:
```javascript
function characterCount() {
  character.innerHTML = input.value.length;
}
```

#### Word Count and Limit:
```javascript
function wordCounter(e) {
  let words = input.value.match(/\b[-?]?\w+\b/gi);

  if (words) {
    word.innerHTML = words.length;
    wordLimit.innerHTML = WORD_LIMIT - words.length;
  } else {
    word.innerHTML = 0;
  }

  input.addEventListener("keydown", function (e) {
    if (words && words.length > WORD_LIMIT - 1 && e.code !== "Backspace") {
      e.preventDefault();
      console.log("Word Limit Reached!");
    }
  });
}
```

#### Reading Time Estimation:
```javascript
if (words) {
  let seconds = Math.floor((words.length * 60) / 225);
  if (seconds > 59) {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    readingTime.innerHTML = minutes + "m" + seconds + "s";
  } else {
    readingTime.innerHTML = seconds + "s";
  }
}
```

---

## How to Run
1. Clone the repository or download the files.
2. Open `index.html` in your browser.
3. Start typing in the input box and see the stats update in real-time!

---

## Dependencies
- **Bootstrap 5**: For layout and styling.
- **FontAwesome**: For any future icon needs (currently unused).

---

