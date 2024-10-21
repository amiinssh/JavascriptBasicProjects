const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*Z_+|?";

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generateBtn.addEventListener("click", function () {
  const length = lengthEl.value;
  let characters = "";
  let password = "";

  if (lowercaseEl.checked) {
    characters += lowercaseLetters;
  }

  if (uppercaseEl.checked) {
    characters += uppercaseLetters;
  }

  if (numberEl.checked) {
    characters += numbers;
  }

  if (symbolEl.checked) {
    characters += symbols;
  }

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  passwordEl.value = password
});
