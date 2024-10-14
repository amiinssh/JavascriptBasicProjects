const month = document.getElementById("month");
const day = document.getElementById("day");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
const monthEl = date.getMonth();

year.innerHTML = date.getFullYear();
dayNumber.innerHTML = date.getDate();

day.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});

month.innerHTML = date.toLocaleDateString("en", {
  month: "long",
});
