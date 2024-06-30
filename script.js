let watch = document.querySelector(".watch");
let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let reset = document.querySelector("#reset");
let int = null;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

start.addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(timer, 10);
});
pause.addEventListener("click", () => {
  clearInterval(int);
});
reset.addEventListener("click", () => {
  clearInterval(int);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  watch.innerHTML = "00:00:000";
});
function pad(num) {
    return num.toString().padStart(2, "0");
  }

function timer() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  watch.innerHTML = `${pad(minutes)}:${pad(seconds)}:${milliseconds
    .toString()
    .padStart(3, "0")}`;
}
