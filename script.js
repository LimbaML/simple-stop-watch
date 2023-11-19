let timer;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  if (!running) {
    running = true;
    timer = setInterval(updateStopwatch, 1000);
    document.getElementById('startStop').textContent = 'Pause';
  } else {
    stopStopwatch();
  }
}

function stopStopwatch() {
  if (running) {
    running = false;
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Resume';
  }
}

function resetStopwatch() {
  stopStopwatch();
  seconds = -1;
  minutes = 0;
  hours = 0;
  updateStopwatch();
  document.getElementById('startStop').textContent = 'Start';
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById('display').textContent = timeString;
}

function pad(value) {
  return value.toString().padStart(2, '0');
}
