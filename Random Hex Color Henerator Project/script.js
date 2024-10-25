const hex = document.querySelector(".count-hex");
const btn = document.querySelector(".reset-generate");

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);

  document.body.style.background = "#" + randomColor
  hex.innerHTML = "#" + randomColor
}

btn.addEventListener("click", generateColor);



