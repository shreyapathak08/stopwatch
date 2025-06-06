let hour = 0, minute = 0, second = 0;
let timer = false;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsContainer = document.getElementById('laps');

startButton.onclick = () => {
  if (!timer) {
    timer = true;
    stopWatch();
  }
};

stopButton.onclick = () => {
  timer = false;
};

resetButton.onclick = () => {
  timer = false;
  hour = minute = second = 0;
  updateDisplay();
  lapsContainer.innerHTML = '';
};

lapButton.onclick = () => {
  let h = hour < 10 ? "0" + hour : hour;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  const lapTime = `${h}:${m}:${s}`;
  const entry = document.createElement('div');
  entry.textContent = "Lap: " + lapTime;
  lapsContainer.prepend(entry);
};

function stopWatch() {
  if (timer) {
    second++;
    if (second === 60) {
      second = 0;
      minute++;
    }
    if (minute === 60) {
      minute = 0;
      hour++;
    }
    updateDisplay();
    setTimeout(stopWatch, 1000);
  }
}

function updateDisplay() {
  document.getElementById('hour').textContent = hour < 10 ? "0" + hour : hour;
  document.getElementById('minute').textContent = minute < 10 ? "0" + minute : minute;
  document.getElementById('second').textContent = second < 10 ? "0" + second : second;
}

// Theme toggle
document.getElementById('toggleTheme').onclick = () => {
  document.body.classList.toggle('dark');
};
