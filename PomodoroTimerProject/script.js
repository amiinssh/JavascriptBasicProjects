const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function startTime() {
  interval = setInterval(() => {
    timeLeft--;
    updateTime();

    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Times UP!");
      timeLeft = 1500;
      updateTime();
    }
  }, 1000);
}

function updateTime() {
  let minute = Math.floor(timeLeft / 60);
  let second = timeLeft % 60;
  let formatteredTime = `${minute.toString().padStart(2, "0")}:${second
    .toString()
    .padStart(2, "0")}`;

  timer.innerHTML = formatteredTime;
}

function stopTime() {
  clearInterval(interval);
}

function resetTime() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTime();
}

start.addEventListener("click", startTime);
stop.addEventListener("click", stopTime);
reset.addEventListener("click", resetTime);
