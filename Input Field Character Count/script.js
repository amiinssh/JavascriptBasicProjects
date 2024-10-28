const count = document.querySelector(".count");
const input = document.getElementById("count");

input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;
});
