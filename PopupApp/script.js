const myBtn = document.getElementById("myBtn");
const myPopup = document.getElementById("myPopup");
const closeBtn = document.getElementById("closeBtn");

myBtn.addEventListener("click", function() {
  myPopup.classList.add("active");
});

closeBtn.addEventListener("click", function() {
  myPopup.classList.remove("active");
});
