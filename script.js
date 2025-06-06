let startTime = 0;
let intervalId;
let isRunning = false;
let lapCount = 0;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    startTime = Date.now() - (startTime || 0);
    intervalId = setInterval(updateDisplay, 100);
    isRunning = true;
  }
});

document.getElementById('pause').addEventListener('click', () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(intervalId);
  isRunning = false;
  startTime = 0;
  lapCount = 0;
  display.textContent = '00:00:00';
  laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    const lapTime = display.textContent;
    const li = document.createElement('li');
    li.textContent = `Lap ${++lapCount}: ${lapTime}`;
    laps.appendChild(li);
  }
});

function updateDisplay() {
  const elapsed = Date.now() - startTime;
  const hours = Math.floor(elapsed / 3600000);
  const minutes = Math.floor((elapsed % 3600000) / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}
