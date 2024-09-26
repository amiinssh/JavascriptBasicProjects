const textInputField = document.getElementById("text-input");
const mainCheckButton = document.getElementById("check-btn");
const resultField = document.getElementById("result");
let enteredString = textInputField.value

mainCheckButton.addEventListener("click",()=>{
    let enteredString = textInputField.value
    if (enteredString === "") {
        alert("Please input a value")
    }
    else {
    let cutUpString = enteredString.split("")
       let ourRegex = /[0-9a-zA-Z]/
        const leftOver = cutUpString.filter((letter)=> letter.search(ourRegex) > -1)
        const leftOverReverse = leftOver.toReversed()
        console.log(leftOverReverse)
        if (leftOver.toString().toUpperCase() === leftOverReverse.toString().toUpperCase()) {
            resultField.textContent = (`${enteredString} is a Palindrome`)
            console.log(`${enteredString} is a Palindrome`)
        }
        else {
            resultField.textContent = (`${enteredString} is not a Palindrome`)
            console.log(`${enteredString} is not a Palindrome`)
        }
    }

}) 