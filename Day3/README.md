# JavaScript Grade Calculator

This is a simple JavaScript program that calculates a letter grade based on a given numeric score.  
The program uses conditional statements (`if`, `else if`, `else`) to determine the grade.

---

## 📂 Project Structure
├── index.html # HTML file that loads the JavaScript
├── app.js # JavaScript file containing the grade calculator function

---

## 📖 How It Works
1. Open `index.html` in a browser.
2. The JavaScript file (`app.js`) is loaded using a `<script>` tag.
3. The function `calculateGrade(score)` takes a numeric score as input and returns a grade based on the following rules:

   - **A** → `90 or above`
   - **B** → `80–89`
   - **C** → `70–79`
   - **D** → `60–69`
   - **F** → `Below 60`

---

## 🖥️ Example Output
```javascript
console.log("Score 95:", calculateGrade(95)); // A
console.log("Score 82:", calculateGrade(82)); // B
console.log("Score 73:", calculateGrade(73)); // C

// Console Output
Score 95: A
Score 82: B
Score 73: C
