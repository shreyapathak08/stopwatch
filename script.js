const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

let startTime, elapsedTime = 0, timerInterval;

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let formattedHH = hh.toString().padStart(2, '0');
  let formattedMM = mm.toString().padStart(2, '0');
  let formattedSS = ss.toString().padStart(2, '0');

  return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 1000);
  startBtn.disabled = true;
}

function pause() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
}

function reset() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  elapsedTime = 0;
  laps.innerHTML = "";
  startBtn.disabled = false;
}

function lap() {
  if (elapsedTime === 0) return;
  let lapTime = timeToString(elapsedTime);
  let li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  laps.appendChild(li);
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);
